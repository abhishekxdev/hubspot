'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline, Users, Workflow, Database, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContentSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div>
                            <span className="text-primary">HubSpot Integration</span>
                            <h2 className="text-foreground mt-4 text-4xl font-semibold">Powerful CRM Features at Your Fingertips</h2>
                            <p className="text-muted-foreground mb-12 mt-4 text-lg">Streamline your CRM workflow with our unified dashboard. Manage contacts, track deals, automate tasks, and gain valuable insights - all in one seamless interface.</p>
                        </div>

                        <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
                            <div className="grid sm:grid-cols-5 sm:divide-x">
                                <CodeIllustration className="sm:col-span-2" />
                                <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                                    <h3 className="text-foreground text-xl font-semibold">Contact Management</h3>
                                    <p className="text-muted-foreground mt-4 text-lg">Efficiently manage your contacts with real-time HubSpot sync. Track interactions, manage relationships, and keep your customer data organized and up-to-date.</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-5 sm:divide-x">
                                <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                                    <h3 className="text-foreground text-xl font-semibold">Deal Pipeline</h3>
                                    <p className="text-muted-foreground mt-4 text-lg">Visualize and manage your sales pipeline. Track deal progress, forecast revenue, and ensure no opportunity falls through the cracks.</p>
                                </div>
                                <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                                    <ScheduleIllustation className="pt-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-sm">
                    <Activity className="size-3" />
                    <span className="text-sm font-medium">Pipeline</span>
                </Button>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="contacts"
                        aria-label="Toggle contacts">
                        <Users className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="workflow"
                        aria-label="Toggle workflow">
                        <Workflow className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="database"
                        aria-label="Toggle database">
                        <Database className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="activity"
                        aria-label="Toggle activity">
                        <Activity className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8"
                    variant="ghost">
                    <Ellipsis className="size-3" />
                </Button>
            </div>
            <span>
                <span className="bg-secondary text-secondary-foreground py-1">$25,000 Deal</span> in Negotiation
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
                {['Contacts', 'Deals', 'Tasks', 'Analytics', 'Reports'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 2 && "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Active']")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}