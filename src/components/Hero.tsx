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
            <main className="pt-16 sm:pt-20">
                <section className="overflow-hidden">
                    <div className="py-12 sm:py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
                            <div className="text-center mb-8 sm:mb-16 relative px-4 sm:px-8 lg:px-32">
                                <div className="inline-flex items-center rounded-full border-2 border-white/20 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm mb-6 sm:mb-8">
                                    <span className="text-xs sm:text-sm font-medium">✨ HubSpot CRM Integration</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 sm:mb-6 leading-tight">
                                    <span className="block sm:inline">All Your HubSpot CRM Tasks in</span>
                                    <span className="bg-gradient-to-r from-violet-600 to-black bg-clip-text text-transparent block sm:inline"> One Interface</span>
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                                Stop switching tabs. Start working faster. Our internal app lets enterprise teams log in with HubSpot, manage CRM records, and handle tickets — all in one smooth, secure dashboard.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                                    <Button
                                        onClick={handleGetStarted}
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-200 w-full sm:w-auto"
                                    >
                                        Get Started
                                    </Button>
                                    <Button
                                        onClick={scrollToFeatures}
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl transition-all duration-200 w-full sm:w-auto"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Preview - Fully responsive */}
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-20">
                            <div className="relative overflow-hidden border border-white/20 rounded-xl sm:rounded-2xl shadow-xl shadow-black/15 ring-1 ring-white/20 bg-white">
                                <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-200">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">CRM Dashboard Preview</h3>
                                            <div className="flex gap-2">
                                                <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span>
                                                <span className="px-2 sm:px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">HubSpot Sync</span>
                                            </div>
                                        </div>
                                        
                                        {/* Pipeline Overview - Responsive grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Total Deals</p>
                                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-600">24</p>
                                                <p className="text-xs text-green-600">+12%</p>
                                            </div>
                                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Active Contacts</p>
                                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-600">156</p>
                                                <p className="text-xs text-green-600">+8%</p>
                                            </div>
                                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Pipeline Value</p>
                                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-600">$450K</p>
                                                <p className="text-xs text-green-600">+15%</p>
                                            </div>
                                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Tasks Due</p>
                                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-600">12</p>
                                                <p className="text-xs text-orange-600">3 overdue</p>
                                            </div>
                                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Closed Won</p>
                                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-600">18</p>
                                                <p className="text-xs text-green-600">+22%</p>
                                            </div>
                                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-600">68%</p>
                                                <p className="text-xs text-green-600">+5%</p>
                                            </div>
                                        </div>

                                        {/* Recent Contacts - Responsive layout */}
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-medium text-gray-700 text-sm sm:text-base">Recent Contacts</h4>
                                                <button className="text-xs text-violet-600 hover:text-violet-700">View All</button>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                                                {/* Contact 1 */}
                                                <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-violet-600 font-medium text-xs sm:text-sm">JD</span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="font-medium text-gray-800 text-sm sm:text-base truncate">John Doe</p>
                                                            <p className="text-xs text-gray-500 truncate">Acme Corp • CEO</p>
                                                            <p className="text-xs text-violet-600 font-medium">$25,000 Deal</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right flex-shrink-0 ml-2">
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs whitespace-nowrap">Active Lead</span>
                                                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                                                    </div>
                                                </div>

                                                {/* Contact 2 */}
                                                <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-blue-600 font-medium text-xs sm:text-sm">AS</span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="font-medium text-gray-800 text-sm sm:text-base truncate">Alice Smith</p>
                                                            <p className="text-xs text-gray-500 truncate">TechStart Inc • CTO</p>
                                                            <p className="text-xs text-violet-600 font-medium">$15,000 Deal</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right flex-shrink-0 ml-2">
                                                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs whitespace-nowrap">In Progress</span>
                                                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                                                    </div>
                                                </div>

                                                {/* Contact 3 */}
                                                <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-green-600 font-medium text-xs sm:text-sm">RJ</span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="font-medium text-gray-800 text-sm sm:text-base truncate">Robert Johnson</p>
                                                            <p className="text-xs text-gray-500 truncate">Global Solutions • VP Sales</p>
                                                            <p className="text-xs text-violet-600 font-medium">$50,000 Deal</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right flex-shrink-0 ml-2">
                                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs whitespace-nowrap">New Deal</span>
                                                        <p className="text-xs text-gray-500 mt-1">Just now</p>
                                                    </div>
                                                </div>

                                                {/* Contact 4 */}
                                                <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-purple-600 font-medium text-xs sm:text-sm">MK</span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="font-medium text-gray-800 text-sm sm:text-base truncate">Maria Kim</p>
                                                            <p className="text-xs text-gray-500 truncate">Innovation Labs • Director</p>
                                                            <p className="text-xs text-violet-600 font-medium">$35,000 Deal</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right flex-shrink-0 ml-2">
                                                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs whitespace-nowrap">Follow Up</span>
                                                        <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                                                    </div>
                                                </div>

                                                {/* Contact 5 */}
                                                <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-indigo-600 font-medium text-xs sm:text-sm">DW</span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="font-medium text-gray-800 text-sm sm:text-base truncate">David Wilson</p>
                                                            <p className="text-xs text-gray-500 truncate">Enterprise Corp • Manager</p>
                                                            <p className="text-xs text-violet-600 font-medium">$18,000 Deal</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right flex-shrink-0 ml-2">
                                                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs whitespace-nowrap">Overdue</span>
                                                        <p className="text-xs text-gray-500 mt-1">5 days ago</p>
                                                    </div>
                                                </div>

                                                {/* Contact 6 */}
                                                <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-teal-600 font-medium text-xs sm:text-sm">LB</span>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="font-medium text-gray-800 text-sm sm:text-base truncate">Lisa Brown</p>
                                                            <p className="text-xs text-gray-500 truncate">Future Tech • Founder</p>
                                                            <p className="text-xs text-violet-600 font-medium">$75,000 Deal</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right flex-shrink-0 ml-2">
                                                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs whitespace-nowrap">Proposal Sent</span>
                                                        <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quick Actions - Responsive grid */}
                                        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                                            <h4 className="font-medium text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Quick Actions</h4>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                                                <button className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-violet-100 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                                                        <span className="text-violet-600 text-xs sm:text-sm">+</span>
                                                    </div>
                                                    <span className="block text-xs text-gray-600 font-medium">New Contact</span>
                                                </button>
                                                <button className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                                                        <span className="text-blue-600 text-xs sm:text-sm">$</span>
                                                    </div>
                                                    <span className="block text-xs text-gray-600 font-medium">Add Deal</span>
                                                </button>
                                                <button className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                                                        <span className="text-green-600 text-xs sm:text-sm">✓</span>
                                                    </div>
                                                    <span className="block text-xs text-gray-600 font-medium">Schedule Task</span>
                                                </button>
                                                <button className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                                                        <span className="text-orange-600 text-xs sm:text-sm">📊</span>
                                                    </div>
                                                    <span className="block text-xs text-gray-600 font-medium">View Reports</span>
                                                </button>
                                                <button className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                                                        <span className="text-purple-600 text-xs sm:text-sm">📧</span>
                                                    </div>
                                                    <span className="block text-xs text-gray-600 font-medium">Send Email</span>
                                                </button>
                                                <button className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-50 transition-colors">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-100 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                                                        <span className="text-indigo-600 text-xs sm:text-sm">📞</span>
                                                    </div>
                                                    <span className="block text-xs text-gray-600 font-medium">Make Call</span>
                                                </button>
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