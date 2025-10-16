import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import SuccessStoriesCarousel from '../components/SuccessStoriesCarousel';
import CoursesGrid from '../components/CoursesGrid';
import KeyFeatures from '../components/KeyFeatures';
import ExpertInsights from '../components/ExpertInsights';
import UpskillCTA from '../components/UpskillCTA';
import PartnersCarousel from '../components/PartnersCarousel';
import QuickEnquiryForm from '../components/QuickEnquiryForm';
import Footer from '../components/Footer';

const LandingPage = () => (
  <div className="min-h-screen">
    <Header />
    <HeroBanner />
    <AboutSection />
    <SuccessStoriesCarousel />
    <CoursesGrid />
    <KeyFeatures />
    <ExpertInsights />
    <UpskillCTA />
    <PartnersCarousel />
    <QuickEnquiryForm />
    <Footer />
  </div>
);

export default LandingPage;