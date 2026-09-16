'use client';

import React, { useEffect, useState } from 'react';
import TEDxCUETLoader from '@/components/TEDxCUETLoader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutEvent from '@/components/AboutEvent';
import SpeakersSection from '@/components/SpeakersSection';
import EventHighlights from '@/components/EventHighlights';
import Partners from '@/components/Partners';
import VenueSection from '@/components/VenueSection';
import Footer from '@/components/Footer';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const preloadTimer = setTimeout(() => {
      setContentReady(true);
    }, 500);

    return () => clearTimeout(preloadTimer);
  }, []);

  const handleLoadingComplete = () => {
    if (contentReady) {
      setIsLoading(false);
    }
    return undefined;
  };

  useEffect(() => {
    if (isLoading || !hasMounted) return;

    // Handle hash navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Handle initial hash navigation
    handleHashNavigation();

    // Handle hash changes
    const handleHashChange = () => {
      handleHashNavigation();
    };

    window.addEventListener('hashchange', handleHashChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const animatedElements = document.querySelectorAll('.reveal-animation');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isLoading, hasMounted]);

  if (!hasMounted || isLoading) {
    return <TEDxCUETLoader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutEvent />
      <SpeakersSection />
      <EventHighlights />
      <Partners />
      <VenueSection />
      <Footer />
    </div>
  );
};

export default Home;