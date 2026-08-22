"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
}

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=200&auto=format&fit=crop",
    backgroundImageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3840&auto=format&fit=crop",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Missions", href: "#" },
        { label: "Destinations", href: "#" },
        { label: "Technology", href: "#" },
        { label: "Book Flight", href: "#" }
    ],
    ctaButtonText = "Reserve Seat",
    ctaButtonHref = "#",
    badgeLabel = "New",
    badgeText = "First Commercial Flight to Mars 2026",
    title = "Journey Beyond Earth",
    titleLine2 = "Into the Cosmos",
    description = "Experience the cosmos like never before. Our advanced spacecraft and cutting-edge technology make interplanetary travel accessible, safe, and unforgettable.",
    primaryButtonText = "Book Your Journey",
    primaryButtonHref = "#",
    secondaryButtonText = "Watch Launch",
    secondaryButtonHref = "#",
    partnersTitle = "Partnering with leading space agencies worldwide",
    partners = [
        { logoUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&auto=format&fit=crop", href: "#" },
        { logoUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=200&auto=format&fit=crop", href: "#" },
        { logoUrl: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=200&auto=format&fit=crop", href: "#" },
        { logoUrl: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=200&auto=format&fit=crop", href: "#" },
        { logoUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=200&auto=format&fit=crop", href: "#" }
    ]
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative">
            <img
                src={backgroundImageUrl}
                alt=""
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-slate-900/5" />
            <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

            <header className="z-10 xl:top-4 relative">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center font-bold text-xl text-slate-900 tracking-tighter"
                        >
                            Dr. Jethwani
                        </a>

                        <nav className="hidden md:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/50 px-1 py-1 ring-1 ring-slate-200 shadow-sm backdrop-blur">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-medium hover:text-slate-900 font-sans transition-colors ${link.isActive ? 'text-slate-900' : 'text-slate-600'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={ctaButtonHref}
                                    className="ml-1 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-slate-800 font-sans transition-colors"
                                >
                                    {ctaButtonText}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 ring-1 ring-slate-200 shadow-sm backdrop-blur z-50"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5 text-slate-700" />
                            ) : (
                                <Menu className="h-5 w-5 text-slate-700" />
                            )}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md pt-4 pb-6 px-6 mt-2 flex flex-col gap-4 shadow-xl border-b border-slate-200">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-base font-medium text-slate-600 hover:text-slate-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={ctaButtonHref}
                            className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 hover:text-blue-600 mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {ctaButtonText} <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                )}
            </header>

            <div className="z-10 relative">
                <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/60 px-2.5 py-2 ring-1 ring-slate-200 shadow-sm backdrop-blur animate-fade-slide-in-1">
                            <span className="inline-flex items-center text-xs font-medium text-white bg-blue-600 rounded-full py-0.5 px-2 font-sans">
                                {badgeLabel}
                            </span>
                            <span className="text-sm font-medium text-slate-700 font-sans">
                                {badgeText}
                            </span>
                        </div>

                        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-slate-900 tracking-tight font-instrument-serif font-normal animate-fade-slide-in-2">
                            {title}
                            <br className="hidden sm:block" />
                            {titleLine2}
                        </h1>

                        <p className="sm:text-lg animate-fade-slide-in-3 text-base text-slate-600 max-w-2xl mt-6 mx-auto">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
                            <a
                                href={primaryButtonHref}
                                className="inline-flex items-center gap-2 hover:bg-slate-50 text-sm font-medium text-slate-900 bg-white ring-slate-200 shadow-sm ring-1 rounded-full py-3 px-5 font-sans transition-colors"
                            >
                                {primaryButtonText}
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 font-sans transition-colors"
                            >
                                {secondaryButtonText}
                                <Play className="w-4 h-4 fill-slate-700" />
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto mt-20 max-w-5xl">
                        <p className="animate-fade-slide-in-1 text-sm text-slate-500 text-center uppercase tracking-widest">
                            {partnersTitle}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-slate-500 mt-6 items-center justify-items-center gap-4">
                            {partners.map((partner, index) => (
                                <a
                                    key={index}
                                    href={partner.href}
                                    className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-cover rounded opacity-40 hover:opacity-80 grayscale transition-opacity"
                                    style={{ backgroundImage: `url(${partner.logoUrl})` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
