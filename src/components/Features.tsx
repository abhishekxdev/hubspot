import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowUp, Globe, Plus, Sparkles, Mail, Clock, History, Copy, Shield, FileText, Calendar, BarChart, Users, Workflow, Zap, Database, Activity, Settings } from 'lucide-react';

const AIAssistantIllustration = () => {
    return (
        <Card
            aria-hidden
            className="relative space-y-4 p-6 bg-white border-2 border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="w-fit">
                <Sparkles className="size-3.5 fill-violet-300 stroke-violet-300" />
                <p className="mt-2 line-clamp-2 text-sm text-black">Get a complete overview of your HubSpot CRM data, including contacts, deals, and tickets in one unified dashboard.</p>
                <ul
                    role="list"
                    className="mt-3 space-y-2 text-sm">
                    {[
                        { value: '100%', emoji: '🔄', label: 'HubSpot Sync' },
                        { value: '50%', emoji: '⚡', label: 'Faster Workflow' },
                        { value: '24/7', emoji: '📊', label: 'Real-time Data' },
                    ].map((stat, index) => (
                        <li
                            key={index}
                            className="-ml-0.5 flex items-center gap-2">
                            <span>{stat.emoji}</span>
                            <span className="text-black font-medium">{stat.value}</span> <span className="text-black">{stat.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-50 -mx-3 -mb-3 space-y-3 rounded-lg p-3">
                <div className="text-sm text-black">Quick Actions</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none border-white/20">
                            <Plus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none border-white/20">
                            <Users />
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600">
                        <ArrowUp strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export const Features = () => {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-3xl px-6">
                    <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
                        <span className="text-muted-foreground">Everything you need to</span> manage your HubSpot CRM
                    </h2>
                    <div className="@container mt-12 space-y-12">
                        <Card
                            className="relative overflow-hidden p-0 sm:col-span-2 bg-white/10 backdrop-blur-sm border-2 border-white/20">
                            <img
                                src="/rename.jpeg"
                                alt=""
                                className="absolute inset-0 size-full object-cover opacity-20"
                            />
                            <div className="m-auto max-w-md p-4 sm:p-12">
                                <AIAssistantIllustration />
                            </div>
                        </Card>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    title: 'Real-time HubSpot Sync',
                                    description: 'Seamlessly sync all your HubSpot data including contacts, deals, and tickets in real-time.',
                                    icon: Database,
                                },
                                {
                                    title: 'Unified Dashboard',
                                    description: 'View and manage all your CRM activities from a single, intuitive interface.',
                                    icon: Activity,
                                },
                                {
                                    title: 'Smart Workflows',
                                    description: 'Automate repetitive tasks and create custom workflows to streamline your processes.',
                                    icon: Workflow,
                                },
                                {
                                    title: 'Team Collaboration',
                                    description: 'Enable seamless collaboration between team members with shared views and permissions.',
                                    icon: Users,
                                },
                                {
                                    title: 'Advanced Analytics',
                                    description: 'Get detailed insights into your sales pipeline, team performance, and customer interactions.',
                                    icon: BarChart,
                                },
                                {
                                    title: 'Custom Integrations',
                                    description: 'Extend functionality with custom integrations and API connections.',
                                    icon: Settings,
                                },
                            ].map((feature, index) => (
                                <Card
                                    key={index}
                                    className="relative space-y-4 p-6 bg-white border-2 border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <div className="size-10 rounded-lg bg-violet-100/50 flex items-center justify-center">
                                        <feature.icon className="size-5 text-violet-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">{feature.title}</h3>
                                        <p className="mt-2 text-sm text-black/80">{feature.description}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
