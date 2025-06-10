import React from 'react'
import { Button } from '@/components/ui/button'
import { Header } from "@/components/Header"
import { Link, useNavigate } from 'react-router-dom'

export const Hero = () => {
    const navigate = useNavigate()

    const handleGetStarted = () => {
        navigate('/signup')
    }

    const scrollToFeatures = () => {
        const element = document.getElementById('features')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="overflow-hidden">
                    <div className="py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6">
                            <div className="text-center mb-16 relative px-32">
                                <div className="inline-flex items-center rounded-full border-2 border-white/20 px-4 py-2 bg-white/10 backdrop-blur-sm mb-8">
                                    <span className="text-sm font-medium">✨ HubSpot CRM Integration</span>
                                </div>
                                
                                {/* Left Box */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block">
                                    <div className="bg-white border-2 border-white/20 rounded-xl p-4 w-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-black">Unified Dashboard</span>
                                        </div>
                                        <p className="text-sm text-black">Manage contacts, deals, and tickets all in one place with real-time HubSpot sync</p>
                                    </div>
                                </div>

                                {/* Right Box */}
                                <div className="absolute right-0 top-[70%] -translate-y-1/2 translate-x-1/2 hidden lg:block">
                                    <div className="bg-white border-2 border-white/20 rounded-xl p-4 w-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-black">Smart Automation</span>
                                        </div>
                                        <p className="text-sm text-black">Automate workflows and keep your team focused on closing deals</p>
                                    </div>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-normal mb-6">
                                    <span>All Your HubSpot CRM Tasks in</span>
                                    <span className="bg-gradient-to-r from-violet-600 to-black bg-clip-text text-transparent"> One Interface</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Stop switching tabs. Start working faster. Our internal app lets enterprise teams log in with HubSpot, manage CRM records, and handle tickets — all in one smooth, secure dashboard.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        onClick={handleGetStarted}
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-200"
                                    >
                                        Get Started
                                    </Button>
                                    <Button
                                        onClick={scrollToFeatures}
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-lg px-8 py-6 rounded-xl transition-all duration-200"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </div>

                            <div className="relative mx-auto mt-12 max-w-full overflow-hidden rounded-3xl md:mt-20">
                                <div className="relative m-2 overflow-hidden border border-white/20 rounded-2xl shadow-xl shadow-black/15 ring-1 ring-white/20 sm:m-4 md:m-6 bg-white">
                                    <div className="p-4 sm:p-6 md:p-8">
                                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-lg font-semibold text-gray-800">CRM Dashboard Preview</h3>
                                                <div className="flex gap-2">
                                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span>
                                                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">HubSpot Sync</span>
                                                </div>
                                            </div>
                                            
                                            {/* Pipeline Overview */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <p className="text-xs text-gray-500 mb-1">Total Deals</p>
                                                    <p className="text-2xl font-semibold text-violet-600">24</p>
                                                    <p className="text-xs text-green-600">+12% this month</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <p className="text-xs text-gray-500 mb-1">Active Contacts</p>
                                                    <p className="text-2xl font-semibold text-violet-600">156</p>
                                                    <p className="text-xs text-green-600">+8% this month</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <p className="text-xs text-gray-500 mb-1">Pipeline Value</p>
                                                    <p className="text-2xl font-semibold text-violet-600">$450K</p>
                                                    <p className="text-xs text-green-600">+15% this month</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <p className="text-xs text-gray-500 mb-1">Tasks Due</p>
                                                    <p className="text-2xl font-semibold text-violet-600">12</p>
                                                    <p className="text-xs text-orange-600">3 overdue</p>
                                                </div>
                                            </div>

                                            {/* Recent Contacts */}
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center">
                                                    <h4 className="font-medium text-gray-700">Recent Contacts</h4>
                                                    <button className="text-xs text-violet-600 hover:text-violet-700">View All</button>
                                                </div>
                                                
                                                <div className="space-y-3">
                                                    {/* Contact 1 */}
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                                                                <span className="text-violet-600 font-medium">JD</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-800">John Doe</p>
                                                                <p className="text-xs text-gray-500">Acme Corp • CEO • $25,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active Lead</span>
                                                            <span className="text-xs text-gray-500">2 days ago</span>
                                                        </div>
                                                    </div>

                                                    {/* Contact 2 */}
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                                <span className="text-blue-600 font-medium">AS</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-800">Alice Smith</p>
                                                                <p className="text-xs text-gray-500">TechStart Inc • CTO • $15,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">In Progress</span>
                                                            <span className="text-xs text-gray-500">1 day ago</span>
                                                        </div>
                                                    </div>

                                                    {/* Contact 3 */}
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                                <span className="text-green-600 font-medium">RJ</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-800">Robert Johnson</p>
                                                                <p className="text-xs text-gray-500">Global Solutions • VP Sales • $50,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">New Deal</span>
                                                            <span className="text-xs text-gray-500">Just now</span>
                                                        </div>
                                                    </div>

                                                    {/* Contact 4 */}
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                                                <span className="text-purple-600 font-medium">MK</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-800">Maria Kim</p>
                                                                <p className="text-xs text-gray-500">Innovation Labs • Director • $35,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Follow Up</span>
                                                            <span className="text-xs text-gray-500">3 hours ago</span>
                                                        </div>
                                                    </div>

                                                    {/* Contact 5 */}
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                                                <span className="text-indigo-600 font-medium">DW</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-800">David Wilson</p>
                                                                <p className="text-xs text-gray-500">Enterprise Corp • Manager • $18,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">Overdue</span>
                                                            <span className="text-xs text-gray-500">5 days ago</span>
                                                        </div>
                                                    </div>

                                                    {/* Contact 6 */}
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                                                <span className="text-teal-600 font-medium">LB</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-800">Lisa Brown</p>
                                                                <p className="text-xs text-gray-500">Future Tech • Founder • $75,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Proposal Sent</span>
                                                            <span className="text-xs text-gray-500">6 hours ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="mt-8 pt-6 border-t border-gray-200">
                                                <h4 className="font-medium text-gray-700 mb-4">Quick Actions</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    <button className="p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                        <div className="w-8 h-8 bg-violet-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                            <span className="text-violet-600 text-sm">+</span>
                                                        </div>
                                                        <span className="block text-xs text-gray-600 font-medium">New Contact</span>
                                                    </button>
                                                    <button className="p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                            <span className="text-blue-600 text-sm">$</span>
                                                        </div>
                                                        <span className="block text-xs text-gray-600 font-medium">Add Deal</span>
                                                    </button>
                                                    <button className="p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                        <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                            <span className="text-green-600 text-sm">✓</span>
                                                        </div>
                                                        <span className="block text-xs text-gray-600 font-medium">Schedule Task</span>
                                                    </button>
                                                    <button className="p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                        <div className="w-8 h-8 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                            <span className="text-orange-600 text-sm">📊</span>
                                                        </div>
                                                        <span className="block text-xs text-gray-600 font-medium">View Reports</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}