'use client'
import { Logo } from '@/components/Logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-semibold">
                            HubSpot CRM
                        </Link>
                    </div>
                    <nav className="flex items-center gap-4">
                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full px-6 py-2">
                            <ul className="flex items-center gap-6">
                                <li>
                                    <Link to="/" className="text-sm font-medium hover:text-violet-400">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/features" className="text-sm font-medium hover:text-violet-400">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing" className="text-sm font-medium hover:text-violet-400">
                                        Integration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full">
                                <Link to="/login">Sign In</Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-full">
                                <Link to="/signup">Get Started</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
