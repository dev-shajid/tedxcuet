'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MapPin, Clock, Users, Gift } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

const RegisterPage = () => {
    const [isTicketSaleOpen, setIsTicketSaleOpen] = useState(false);
    const googleFormUrl = "https://forms.gle/wXogXgFhvmXVY4BNA";

    // SEO Configuration for Registration Page
    const seoConfig = {
        title: "Register for TEDxCUET 2025 | Early-Bird Tickets Available | CUET Students Discount",
        description: "Register now for TEDxCUET 2025! Early-bird tickets from BDT 599 for CUET students. Join us on June 28, 2025 for inspiring talks, networking, and exclusive TEDxCUET merchandise. Limited seats available!",
        keywords: ["TEDxCUET registration", "TEDxCUET 2025 tickets", "CUET student discount", "TEDx conference Bangladesh", "register TEDxCUET", "early-bird tickets", "TEDxCUET 2025 registration"],
        url: "https://www.tedxcuet.com/register",
        image: "https://www.tedxcuet.com/tedx.jpeg",
        imageWidth: 1200,
        imageHeight: 630,
    };

    // Set the target time for ticket release (8 PM on June 19, 2025)
    const getTargetTime = () => {
        const targetTime = new Date('2025-06-19T20:00:00');
        return targetTime;
    };

    useEffect(() => {
        const checkTicketSaleTime = () => {
            const now = new Date();
            const targetTime = getTargetTime();

            if (now >= targetTime) {
                setIsTicketSaleOpen(true);
            }
        };

        // Check once when component loads
        checkTicketSaleTime();
    }, []);

    // Registration benefits
    const benefits = [
        "Full day access to inspiring TEDx talks and networking opportunities",
        "Premium TEDxCUET T-shirt",
        "Morning Refreshments",
        "Delicious Lunch",
        "Notebook & Pen",
        "Exciting Goodies & More!"
    ];

    // Event details
    const eventDetails = [
        {
            icon: Calendar,
            title: "Date",
            value: "June 28, 2025"
        },
        {
            icon: Clock,
            title: "Time",
            value: "9:00 AM - 6:00 PM"
        },
        {
            icon: MapPin,
            title: "Venue",
            value: "Chittagong University of Engineering & Technology (CUET)"
        },
        {
            icon: Users,
            title: "Capacity",
            value: "Limited Seats"
        }
    ];

    // Pricing tiers
    const pricingTiers = [
        {
            name: "Early-Bird",
            period: "June 19–21",
            regularPrice: "BDT 699",
            cuetPrice: "BDT 599",
            badge: "🔥 Limited Time"
        },
        {
            name: "Regular",
            period: "June 22–26",
            regularPrice: "BDT 749",
            cuetPrice: "BDT 649",
            badge: "Standard"
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Head>
                {/* Basic SEO Meta Tags */}
                <title>{seoConfig.title}</title>
                <meta name="description" content={seoConfig.description} />
                <meta name="keywords" content={seoConfig.keywords.join(', ')} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={seoConfig.url} />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={seoConfig.title} />
                <meta property="og:description" content={seoConfig.description} />
                <meta property="og:url" content={seoConfig.url} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={seoConfig.image} />
                <meta property="og:image:width" content={seoConfig.imageWidth.toString()} />
                <meta property="og:image:height" content={seoConfig.imageHeight.toString()} />
                <meta property="og:site_name" content="TEDxCUET" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoConfig.title} />
                <meta name="twitter:description" content={seoConfig.description} />
                <meta name="twitter:image" content={seoConfig.image} />
                <meta name="twitter:creator" content="@tedxcuet" />

                {/* Additional SEO Meta Tags */}
                <meta name="author" content="TEDxCUET Organizing Team" />
                <meta name="publisher" content="TEDxCUET" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="BD" />
                <meta name="geo.placename" content="Chittagong" />
                <meta name="geo.position" content="22.3419;91.8132" />
                <meta name="ICBM" content="22.3419, 91.8132" />

                {/* Event Schema.org Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Event",
                            "name": "TEDxCUET 2025 Registration",
                            "description": seoConfig.description,
                            "startDate": "2025-06-28T09:00:00+06:00",
                            "endDate": "2025-06-28T18:00:00+06:00",
                            "eventStatus": "https://schema.org/EventScheduled",
                            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                            "location": {
                                "@type": "Place",
                                "name": "Chittagong University of Engineering & Technology (CUET)",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Chittagong",
                                    "addressRegion": "Chittagong",
                                    "addressCountry": "Bangladesh"
                                }
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": seoConfig.url,
                                "price": "599",
                                "priceCurrency": "BDT",
                                "availability": "https://schema.org/InStock",
                                "validFrom": "2025-06-19T20:00:00+06:00",
                                "description": "Early-bird tickets for CUET students"
                            },
                            "organizer": {
                                "@type": "Organization",
                                "name": "TEDxCUET",
                                "url": "https://www.tedxcuet.com"
                            }
                        })
                    }}
                />
            </Head>

            {/* Header */}
            <header className="bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-white font-bold flex items-center">
                            <span className="bg-red-600 rounded px-2 py-1 mr-1 inline-block">
                                TEDx
                            </span>
                            <span>
                                CUET
                            </span>
                        </Link>
                        <Link
                            href="/"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-red-600/10 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-red-600/5 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Register for <span className="text-red-600">TEDxCUET 2025</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-8">
                            Join us for a day of inspiring talks, networking, and ideas worth spreading
                        </p>
                        <div className="w-32 h-1 bg-red-600 mx-auto mb-8"></div>
                    </motion.div>
                </div>
            </section>

            {/* Event Details */}
            <section className="py-16 bg-zinc-900/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {eventDetails.map((detail, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 text-center"
                                variants={fadeIn}
                            >
                                <detail.icon className="h-8 w-8 text-red-600 mx-auto mb-3" />
                                <h3 className="text-white/70 text-sm mb-1">{detail.title}</h3>
                                <p className="text-white font-semibold">{detail.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ticket Pricing</h2>
                        <p className="text-white/70 text-lg">Choose your ticket tier and enjoy special discounts for CUET students</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${tier.name === 'Early-Bird' ? 'from-red-600/20 to-red-800/20' : 'from-zinc-800/50 to-zinc-900/50'} p-8 rounded-2xl border ${tier.name === 'Early-Bird' ? 'border-red-600/30' : 'border-zinc-700'} relative`}
                                variants={fadeIn}
                            >
                                {tier.badge && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${tier.name === 'Early-Bird' ? 'bg-red-600 text-white' : 'bg-zinc-700 text-white/80'}`}>
                                            {tier.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                    <p className="text-white/60 mb-6">{tier.period}</p>

                                    {/* Main Price Display */}
                                    <div className="mb-6">
                                        <p className="text-3xl font-bold text-white">{tier.regularPrice}</p>
                                    </div>

                                    {/* Student Discount */}
                                    <div className="bg-gradient-to-r from-red-600/30 to-red-500/30 p-6 rounded-xl border-2 border-red-500/40">
                                        <div className="flex items-center justify-center mb-3">
                                            <span className="text-red-300 text-lg">🎓</span>
                                            <span className="text-red-300 font-semibold ml-2">CUET Students</span>
                                        </div>
                                        <p className="text-3xl font-bold text-red-400 mb-2">{tier.cuetPrice}</p>
                                        <p className="text-red-300 text-sm">
                                            Save BDT {parseInt(tier.regularPrice.split(' ')[1]) - parseInt(tier.cuetPrice.split(' ')[1])}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {isTicketSaleOpen ? (
                            <motion.div
                                className="text-center"
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                            >
                                <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl mb-8">
                                    <h2 className="text-3xl font-bold mb-4">🎉 Registration is Now Open!</h2>
                                    <p className="text-xl mb-4">Secure your spot for this national event</p>
                                    <p className="text-lg mb-6 text-red-100">🎫 Seats are limited! Early-bird pricing available until June 21</p>
                                    <a
                                        href={googleFormUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg inline-flex items-center shadow-lg hover:bg-gray-100 transition-colors text-lg"
                                    >
                                        <CheckCircle className="h-6 w-6 mr-2" />
                                        Register Now
                                    </a>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="text-center"
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                            >
                                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-8 rounded-2xl mb-8 border border-zinc-700">
                                    <h2 className="text-3xl font-bold mb-4 text-red-500">⏰ Registration Opening Soon</h2>
                                    <p className="text-xl mb-6">Tickets will be available on June 19, 2025 at 8:00 PM</p>
                                    <div className="text-white/60">
                                        <p>Early-bird pricing starts from BDT 599 for CUET students!</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Benefits Section */}
                        <motion.div
                            className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <div className="text-center mb-8">
                                <Gift className="h-12 w-12 text-red-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">What&apos;s Included in Your Ticket</h3>
                                <p className="text-white/70">Your registration includes all of these amazing benefits</p>
                            </div>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-3 p-4 bg-zinc-800/30 rounded-lg"
                                        variants={fadeIn}
                                    >
                                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/90">{benefit}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="mt-8 text-center text-white/60"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <p className="mb-2">For any queries, please contact us at</p>
                            <a
                                href="mailto:tedxcuet2025@gmail.com"
                                className="text-red-600 hover:text-red-500 hover:underline transition-colors font-semibold"
                            >
                                tedxcuet2025@gmail.com
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-900/50 border-t border-zinc-800 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-white/60">
                        © 2025 TEDxCUET. This independent TEDx event is operated under license from TED.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default RegisterPage; 