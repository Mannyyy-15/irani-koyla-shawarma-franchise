import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { FranchiseHero } from './components/FranchiseHero';
import { KeyMetricsBanner } from './components/KeyMetricsBanner';
import { InvestmentThesisSection } from './components/InvestmentThesisSection';
import { ShawarmaIndiaMovementSection } from './components/ShawarmaIndiaMovementSection';
import { FranchiseModelsSection } from './components/FranchiseModelsSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { TerritorySection } from './components/TerritorySection';
import { RoadmapSection } from './components/RoadmapSection';
import { FranchiseGallerySection } from './components/FranchiseGallerySection';
import { FranchiseFaqSection } from './components/FranchiseFaqSection';
import { ContactSection } from './components/ContactSection';
import { FranchiseFooter } from './components/FranchiseFooter';
import { FranchiseApplicationModal } from './components/FranchiseApplicationModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [selectedModelPrefill, setSelectedModelPrefill] = useState<string>('Irani Koyla Shawarma Standard Store (₹8L Franchise Fee)');
  const [selectedTerritoryPrefill, setSelectedTerritoryPrefill] = useState<string>('');
  const [selectedRoiPrefill, setSelectedRoiPrefill] = useState<string>('');

  // Native-feel 120 FPS Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleOpenApply = (modelName?: string, territory?: string, roiEstimate?: string) => {
    if (modelName) setSelectedModelPrefill(modelName);
    if (territory) setSelectedTerritoryPrefill(territory);
    if (roiEstimate) setSelectedRoiPrefill(roiEstimate);
    setIsApplyModalOpen(true);
  };

  const handleSelectModel = (modelName: string) => {
    setSelectedModelPrefill(modelName);
    setIsApplyModalOpen(true);
  };

  const handleSelectTerritory = (city: string) => {
    setSelectedTerritoryPrefill(city);
    setIsApplyModalOpen(true);
  };

  const handleOpenApplyWithEstimate = (_model: string, roiEstimate: string) => {
    setSelectedModelPrefill('Irani Koyla Shawarma Standard Store (₹8L Franchise Fee • 5% Royalty)');
    setSelectedRoiPrefill(roiEstimate);
    setIsApplyModalOpen(true);
  };

  // Direct PDF Download of the Official 5-Page Franchise Investment Deck
  const handleDownloadDeck = () => {
    const link = document.createElement('a');
    link.href = '/Irani-Koyla-Shawarma-Franchise-Deck.pdf';
    link.download = 'Irani-Koyla-Shawarma-Franchise-Deck.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#080402] paper-texture text-[#ffffff] selection:bg-[#ff5500] selection:text-white overflow-x-hidden font-sans relative">
      {/* Optimized Lightweight Filmy Grain Overlay */}
      <div className="filmy-grain-overlay" />

      {/* Top Franchise Navigation Header */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenFdd={handleDownloadDeck}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 1: Hero & Real-time Marquee Ticker */}
        <FranchiseHero
          onOpenApply={() => handleOpenApply()}
          onOpenFdd={handleDownloadDeck}
        />

        {/* Section 2: Key Metrics Animated Counter Banner */}
        <KeyMetricsBanner />

        {/* Section 3: Investment Thesis & The Business Moat */}
        <InvestmentThesisSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 4: The Shawarma Movement in India (National Expansion Feature Banner) */}
        <ShawarmaIndiaMovementSection />

        {/* Section 5: Single Turnkey Store Blueprint */}
        <FranchiseModelsSection
          onSelectModel={handleSelectModel}
        />

        {/* Section 6: Interactive Unit Economics & 5% Royalty Simulator */}
        <RoiCalculatorSection
          onOpenApplyWithEstimate={handleOpenApplyWithEstimate}
        />

        {/* Section 7: Available Expansion Territories */}
        <TerritorySection
          onSelectTerritory={handleSelectTerritory}
        />

        {/* Section 8: 50-Day Onboarding Roadmap */}
        <RoadmapSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 9: Store & Food Gallery */}
        <FranchiseGallerySection />

        {/* Section 10: Franchise Due Diligence FAQs */}
        <FranchiseFaqSection
          onOpenFdd={handleDownloadDeck}
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 11: Dedicated WhatsApp Integrated Contact Page Section */}
        <ContactSection />
      </main>

      {/* Footer & Compliance Notice */}
      <FranchiseFooter
        onOpenApply={() => handleOpenApply()}
        onOpenFdd={handleDownloadDeck}
      />

      {/* Interactive Franchise Application Modal */}
      <FranchiseApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        prefillModel={selectedModelPrefill}
        prefillTerritory={selectedTerritoryPrefill}
        prefillRoiEstimate={selectedRoiPrefill}
      />
    </div>
  );
}
