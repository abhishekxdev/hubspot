'use client'
import { Logo } from '@/components/Logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Link, useNavigate } from 'react-router-dom'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const navigate = useNavigate()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleGetStarted = () => {
        navigate('/signup')
    }

    const handleSignIn = () => {
        navigate('/login')
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-5xl px-6 pt-4">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="flex h-12 items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">HC</span>
                                </div>
                                <span className="font-semibold text-lg text-foreground">HubSpot CRM</span>
                            </Link>
                        </div>
                        <nav className="flex items-center gap-4">
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full px-6 py-2">
                                <ul className="flex items-center gap-6">
                                    <li>
                                        <Link to="/" className="text-sm font-medium hover:text-violet-400 transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => scrollToSection('features')}
                                            className="text-sm font-medium hover:text-violet-400 transition-colors"
                                        >
                                            Features
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => scrollToSection('integration')}
                                            className="text-sm font-medium hover:text-violet-400 transition-colors"
                                        >
                                            Integration
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={handleSignIn}
                                    variant="outline"
                                    size="sm"
                                    className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-200">
                                    Sign In
                                </Button>
                                <Button
                                    onClick={handleGetStarted}
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-full transition-all duration-200">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}