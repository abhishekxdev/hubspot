import React from 'react'
import { Button } from '@/components/ui/button'
import { Header } from "@/components/Header"
import { Link } from 'react-router-dom'

export const Hero = () => {
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
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl"
                                    >
                                        Get Started
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-lg px-8 py-6 rounded-xl"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </div>

                            <div className="relative mx-auto mt-12 max-w-7xl overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm md:mt-20">
                                <div className="bg-white/20 relative m-2 overflow-hidden border border-white/20 rounded-2xl shadow-xl shadow-black/15 ring-1 ring-white/20 sm:m-4 md:m-6">
                                    <div className="p-4 sm:p-6 md:p-8">
                                        <div className="bg-white/30 rounded-lg p-4 sm:p-6 border border-white/20">
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-lg font-semibold">CRM Dashboard Preview</h3>
                                                <div className="flex gap-2">
                                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span>
                                                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">HubSpot Sync</span>
                                                </div>
                                            </div>
                                            <div className="space-y-4 text-sm text-gray-600">
                                                {/* Pipeline Overview */}
                                                <div className="grid grid-cols-4 gap-4 mb-6">
                                                    <div className="bg-white/40 p-4 rounded-lg">
                                                        <p className="text-xs text-gray-500">Total Deals</p>
                                                        <p className="text-2xl font-semibold text-violet-600">24</p>
                                                    </div>
                                                    <div className="bg-white/40 p-4 rounded-lg">
                                                        <p className="text-xs text-gray-500">Active Contacts</p>
                                                        <p className="text-2xl font-semibold text-violet-600">156</p>
                                                    </div>
                                                    <div className="bg-white/40 p-4 rounded-lg">
                                                        <p className="text-xs text-gray-500">Pipeline Value</p>
                                                        <p className="text-2xl font-semibold text-violet-600">$450K</p>
                                                    </div>
                                                    <div className="bg-white/40 p-4 rounded-lg">
                                                        <p className="text-xs text-gray-500">Tasks Due</p>
                                                        <p className="text-2xl font-semibold text-violet-600">12</p>
                                                    </div>
                                                </div>

                                                {/* Recent Contacts */}
                                                <div className="space-y-3">
                                                    <h4 className="font-medium text-gray-700">Recent Contacts</h4>
                                                    {/* First Contact */}
                                                    <div className="flex justify-between items-center p-3 bg-white/40 rounded-lg">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                                                                <span className="text-violet-600 font-medium">JD</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">John Doe</p>
                                                                <p className="text-xs text-gray-500">Acme Corp • $25,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active Lead</span>
                                                            <span className="text-xs text-gray-500">2 days ago</span>
                                                        </div>
                                                    </div>

                                                    {/* Second Contact */}
                                                    <div className="flex justify-between items-center p-3 bg-white/40 rounded-lg">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                                <span className="text-blue-600 font-medium">AS</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">Alice Smith</p>
                                                                <p className="text-xs text-gray-500">TechStart Inc • $15,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">In Progress</span>
                                                            <span className="text-xs text-gray-500">1 day ago</span>
                                                        </div>
                                                    </div>

                                                    {/* Third Contact */}
                                                    <div className="flex justify-between items-center p-3 bg-white/40 rounded-lg">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                                                <span className="text-green-600 font-medium">RJ</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">Robert Johnson</p>
                                                                <p className="text-xs text-gray-500">Global Solutions • $50,000 Deal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">New Deal</span>
                                                            <span className="text-xs text-gray-500">Just now</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Quick Actions */}
                                                <div className="mt-6 pt-6 border-t border-gray-200">
                                                    <h4 className="font-medium text-gray-700 mb-3">Quick Actions</h4>
                                                    <div className="grid grid-cols-4 gap-3">
                                                        <button className="p-2 bg-white/40 rounded-lg text-center hover:bg-white/60 transition-colors">
                                                            <span className="block text-xs text-gray-500">New Contact</span>
                                                        </button>
                                                        <button className="p-2 bg-white/40 rounded-lg text-center hover:bg-white/60 transition-colors">
                                                            <span className="block text-xs text-gray-500">Add Deal</span>
                                                        </button>
                                                        <button className="p-2 bg-white/40 rounded-lg text-center hover:bg-white/60 transition-colors">
                                                            <span className="block text-xs text-gray-500">Schedule Task</span>
                                                        </button>
                                                        <button className="p-2 bg-white/40 rounded-lg text-center hover:bg-white/60 transition-colors">
                                                            <span className="block text-xs text-gray-500">View Reports</span>
                                                        </button>
                                                    </div>
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
