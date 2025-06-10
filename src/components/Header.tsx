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
            <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-3 sm:pt-4">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="flex h-10 sm:h-12 items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-2">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xs sm:text-sm">HC</span>
                                </div>
                                <span className="font-semibold text-sm sm:text-lg text-foreground">HubSpot CRM</span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setMenuState(!menuState)}
                                className="p-2"
                            >
                                {menuState ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>

                        {/* Desktop navigation */}
                        <nav className="hidden md:flex items-center gap-3 lg:gap-4">
                            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full px-4 lg:px-6 py-2">
                                <ul className="flex items-center gap-4 lg:gap-6">
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
                                    className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-200 text-xs lg:text-sm">
                                    Sign In
                                </Button>
                                <Button
                                    onClick={handleGetStarted}
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-full transition-all duration-200 text-xs lg:text-sm">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>

                    {/* Mobile navigation menu */}
                    {menuState && (
                        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                            <div className="flex flex-col space-y-3">
                                <Link 
                                    to="/" 
                                    className="text-sm font-medium hover:text-violet-400 transition-colors py-2"
                                    onClick={() => setMenuState(false)}
                                >
                                    Home
                                </Link>
                                <button 
                                    onClick={() => {
                                        scrollToSection('features')
                                        setMenuState(false)
                                    }}
                                    className="text-sm font-medium hover:text-violet-400 transition-colors py-2 text-left"
                                >
                                    Features
                                </button>
                                <button 
                                    onClick={() => {
                                        scrollToSection('integration')
                                        setMenuState(false)
                                    }}
                                    className="text-sm font-medium hover:text-violet-400 transition-colors py-2 text-left"
                                >
                                    Integration
                                </button>
                                <div className="flex flex-col gap-2 pt-3 border-t border-white/20">
                                    <Button
                                        onClick={() => {
                                            handleSignIn()
                                            setMenuState(false)
                                        }}
                                        variant="outline"
                                        size="sm"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-200 w-full">
                                        Sign In
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            handleGetStarted()
                                            setMenuState(false)
                                        }}
                                        size="sm"
                                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-full transition-all duration-200 w-full">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}