import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Logo } from '@/components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Copy, Trash2, LogOut, Plus, ArrowUpRight, BarChart, Clock, Mail, Sparkles, DivideIcon as LucideIcon, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface InvoiceEmail {
  id: string;
  clientName: string;
  yourName: string;
  project: string;
  amount: string;
  dueDate: Date;
  paymentMethod: string;
  notes?: string;
  generatedEmail: string;
  dateCreated: Date;
}

interface StatCard {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<string>('');
  const [invoices, setInvoices] = useState<InvoiceEmail[]>([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('generate');
  const [isGenerating, setIsGenerating] = useState(false);
  const [latestGeneratedEmail, setLatestGeneratedEmail] = useState<string>('');

  // Form state
  const [clientName, setClientName] = useState('');
  const [yourName, setYourName] = useState('');
  const [project, setProject] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState<Date>();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [template, setTemplate] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    setUser(userName || userEmail || 'User');
    
    // Load saved invoices
    const savedInvoices = localStorage.getItem('invoices');
    if (savedInvoices) {
      setInvoices(JSON.parse(savedInvoices).map((inv: any) => ({
        ...inv,
        dueDate: new Date(inv.dueDate),
        dateCreated: new Date(inv.dateCreated)
      })));
    }
  }, [navigate]);

  const generateInvoiceEmailWithAPI = async (invoice: Omit<InvoiceEmail, 'id' | 'generatedEmail' | 'dateCreated'>) => {
    const prompt = `Generate a professional invoice email with the following details:
- Client Name: ${invoice.clientName}
- Your Name: ${invoice.yourName}
- Project: ${invoice.project}
- Amount: ${invoice.amount}
- Due Date: ${format(invoice.dueDate, 'MMMM dd, yyyy')}
- Payment Method: ${invoice.paymentMethod}
- Template Style: ${template || 'professional'}
${invoice.notes ? `- Additional Notes: ${invoice.notes}` : ''}

Please create a professional, clear, and polite invoice email that includes all the necessary information and payment instructions.`;

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: 'You are a professional email writer. Generate clear, polite, and professional invoice emails.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate email');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error generating email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dueDate) {
      toast.error('Please select a due date');
      return;
    }

    if (!clientName || !yourName || !project || !amount) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);

    try {
      const invoiceData = {
        clientName,
        yourName,
        project,
        amount,
        dueDate,
        paymentMethod,
        notes,
      };

      const generatedEmail = await generateInvoiceEmailWithAPI(invoiceData);

      const newInvoice: InvoiceEmail = {
        id: Date.now().toString(),
        ...invoiceData,
        generatedEmail,
        dateCreated: new Date()
      };

      const updatedInvoices = [newInvoice, ...invoices];
      setInvoices(updatedInvoices);
      localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
      
      // Set the latest generated email to display next to the form
      setLatestGeneratedEmail(generatedEmail);

      // Reset form
      setClientName('');
      setYourName('');
      setProject('');
      setAmount('');
      setDueDate(undefined);
      setPaymentMethod('');
      setNotes('');
      setTemplate('');
      setShowForm(false);

      toast.success('Invoice email generated successfully!');
    } catch (error) {
      toast.error('Failed to generate email. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard!');
  };

  const deleteInvoice = (id: string) => {
    const updatedInvoices = invoices.filter(inv => inv.id !== id);
    setInvoices(updatedInvoices);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    toast.success('Invoice deleted successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/');
  };

  const stats = [
    {
      title: 'Total Invoices',
      value: invoices.length.toString(),
      icon: <Mail className="size-4 sm:size-5 text-violet-600" />,
      change: '+12%'
    },
    {
      title: 'Pending',
      value: Math.floor(invoices.length * 0.3).toString(),
      icon: <Clock className="size-4 sm:size-5 text-violet-600" />,
      change: '-3%'
    },
    {
      title: 'Paid',
      value: Math.floor(invoices.length * 0.6).toString(),
      icon: <BarChart className="size-4 sm:size-5 text-violet-600" />,
      change: '+8%'
    },
    {
      title: 'Overdue',
      value: Math.floor(invoices.length * 0.1).toString(),
      icon: <AlertCircle className="size-4 sm:size-5 text-violet-600" />,
      change: '-5%'
    }
  ];

  return (
    <div className="min-h-screen bg-white/20 backdrop-blur-sm">
      <div className="container py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              onClick={handleLogout}
              variant="outline" 
              className="bg-white/10 border-white/20 hover:bg-white/20 w-full sm:w-auto"
            >
              <LogOut className="mr-2 size-4" />
              Logout
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-violet-600 text-white hover:from-violet-700 hover:to-violet-700 w-full sm:w-auto">
              <Plus className="mr-2 size-4" />
              New Invoice
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 sm:p-6 bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex justify-between items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{stat.title}</p>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-violet-100/50 flex-shrink-0 ml-2">
                  {stat.icon}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                <span className="text-green-500">{stat.change}</span> from last month
              </p>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <TabsList className="bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full sm:w-auto">
            <TabsTrigger value="generate" className="data-[state=active]:bg-violet-50 flex-1 sm:flex-none">
              Generate Email
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-violet-50 flex-1 sm:flex-none">
              History
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-violet-50 flex-1 sm:flex-none">
              Templates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <Card className="p-4 sm:p-6 bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg sm:text-xl">Generate Invoice Email</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Fill in the details to generate a professional invoice email</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-sm">Client Name *</Label>
                        <Input 
                          placeholder="Enter client name" 
                          className="bg-white border-gray-200 text-sm"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">Your Name *</Label>
                        <Input 
                          placeholder="Enter your name" 
                          className="bg-white border-gray-200 text-sm"
                          value={yourName}
                          onChange={(e) => setYourName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Project *</Label>
                      <Input 
                        placeholder="Enter project name" 
                        className="bg-white border-gray-200 text-sm"
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Amount *</Label>
                      <Input 
                        placeholder="Enter amount (e.g., $1,500)" 
                        className="bg-white border-gray-200 text-sm"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Due Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-white border-gray-200 text-sm",
                              !dueDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dueDate}
                            onSelect={setDueDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Payment Method</Label>
                      <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                        <SelectTrigger className="bg-white border-gray-200 text-sm">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                          <SelectItem value="UPI">UPI</SelectItem>
                          <SelectItem value="PayPal">PayPal</SelectItem>
                          <SelectItem value="Stripe">Stripe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Template</Label>
                      <Select value={template} onValueChange={setTemplate}>
                        <SelectTrigger className="bg-white border-gray-200 text-sm">
                          <SelectValue placeholder="Select a template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="formal">Formal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Additional Notes</Label>
                      <Textarea 
                        placeholder="Enter any additional notes" 
                        className="bg-white border-gray-200 text-sm"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-violet-600 to-violet-600 text-white hover:from-violet-700 hover:to-violet-700"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>Loading...</>
                      ) : (
                        <>
                          <Sparkles className="mr-2 size-4" />
                          Generate Email
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Generated Email Display */}
              <Card className="p-4 sm:p-6 bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <CardHeader className="p-0 mb-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg sm:text-xl">Generated Email</CardTitle>
                    {latestGeneratedEmail && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard(latestGeneratedEmail)}
                      >
                        <Copy className="size-4 mr-2" />
                        Copy
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-sm sm:text-base">Your generated invoice email will appear here</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {latestGeneratedEmail ? (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg max-h-80 sm:max-h-96 overflow-y-auto">
                      <pre className="text-xs sm:text-sm whitespace-pre-wrap text-gray-700">{latestGeneratedEmail}</pre>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                      <Mail className="size-10 sm:size-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm sm:text-base">Generate an invoice email to see it here</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {invoices.length === 0 ? (
              <Card className="p-6 bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <p className="text-center text-muted-foreground text-sm sm:text-base">No invoices generated yet. Create your first invoice!</p>
              </Card>
            ) : (
              invoices.map((invoice) => (
                <Card key={invoice.id} className="p-4 sm:p-6 bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{invoice.project}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Client: {invoice.clientName}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white border-gray-200 size-8 sm:size-10"
                        onClick={() => copyToClipboard(invoice.generatedEmail)}
                      >
                        <Copy className="size-3 sm:size-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white border-gray-200 text-red-600 hover:text-red-700 size-8 sm:size-10"
                        onClick={() => deleteInvoice(invoice.id)}
                      >
                        <Trash2 className="size-3 sm:size-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <span>Amount: {invoice.amount}</span>
                    <span>Due: {format(invoice.dueDate, 'MMM dd, yyyy')}</span>
                    <span>Created: {format(invoice.dateCreated, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Generated Email:</h4>
                    <pre className="text-xs sm:text-sm whitespace-pre-wrap text-gray-700 max-h-40 overflow-y-auto">{invoice.generatedEmail}</pre>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="templates" className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Professional', description: 'Formal and business-like tone' },
              { name: 'Friendly', description: 'Casual and approachable tone' },
              { name: 'Formal', description: 'Very formal and corporate tone' },
            ].map((template, index) => (
              <Card key={index} className="p-4 sm:p-6 bg-white border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <h3 className="font-semibold text-sm sm:text-base">{template.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">{template.description}</p>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full bg-white border-gray-200 text-sm"
                  onClick={() => {
                    setTemplate(template.name.toLowerCase());
                    setActiveTab('generate');
                    toast.success(`${template.name} template selected!`);
                  }}
                >
                  Use Template
                </Button>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;