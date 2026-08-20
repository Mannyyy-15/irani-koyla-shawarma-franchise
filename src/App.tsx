import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { FranchiseHero } from './components/FranchiseHero';
import { KeyMetricsBanner } from './components/KeyMetricsBanner';
import { InvestmentThesisSection } from './components/InvestmentThesisSection';
import { ShawarmaIndiaMovementSection } from './components/ShawarmaIndiaMovementSection';
import { FranchiseModelsSection } from './components/FranchiseModelsSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { FranchiseMediaBento } from './components/FranchiseMediaBento';
import { TerritorySection } from './components/TerritorySection';
import { FoundersNoteSection } from './components/FoundersNoteSection';
import { RoadmapSection } from './components/RoadmapSection';
import { FranchiseGallerySection } from './components/FranchiseGallerySection';
import { FranchiseFaqSection } from './components/FranchiseFaqSection';
import { FranchiseInstagramSection } from './components/FranchiseInstagramSection';
import { FranchiseFooter } from './components/FranchiseFooter';
import { FranchiseApplicationModal } from './components/FranchiseApplicationModal';
import { InvestmentDeckModal } from './components/InvestmentDeckModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState<boolean>(false);
  const [selectedModelPrefill, setSelectedModelPrefill] = useState<string>('Irani Koyla Shawarma Standard Store (₹8L Franchise Fee)');
  const [selectedTerritoryPrefill, setSelectedTerritoryPrefill] = useState<string>('');
  const [selectedRoiPrefill, setSelectedRoiPrefill] = useState<string>('');

  // Native-feel 120 FPS Smooth Scroll (Matching Mumbai Bazar Velocity)
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

  return (
    <div className="min-h-screen bg-[#080402] paper-texture text-[#ffffff] selection:bg-[#ff5500] selection:text-white overflow-x-hidden font-sans relative">
      {/* Optimized Lightweight Filmy Grain Overlay */}
      <div className="filmy-grain-overlay" />

      {/* Top Franchise Navigation Header */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenFdd={() => setIsDeckModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 1: Hero & Real-time Marquee Ticker */}
        <FranchiseHero
          onOpenApply={() => handleOpenApply()}
          onOpenFdd={() => setIsDeckModalOpen(true)}
        />

        {/* Section 1.5: Key Metrics Animated Counter Banner */}
        <KeyMetricsBanner />

        {/* Section 2: Investment Thesis & The Business Moat */}
        <InvestmentThesisSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 2.5: The Shawarma Movement in India (National Expansion Feature Banner) */}
        <ShawarmaIndiaMovementSection />

        {/* Section 3: Single Turnkey Store Blueprint */}
        <FranchiseModelsSection
          onSelectModel={handleSelectModel}
        />

        {/* Section 4: Interactive Unit Economics & 5% Royalty Simulator */}
        <RoiCalculatorSection
          onOpenApplyWithEstimate={handleOpenApplyWithEstimate}
        />

        {/* Section 5: High-Throughput Operations Bento */}
        <FranchiseMediaBento />

        {/* Section 6: Available Expansion Territories */}
        <TerritorySection
          onSelectTerritory={handleSelectTerritory}
        />

        {/* Section 6.5: Founder's Note - The Passion Behind the Charcoal */}
        <FoundersNoteSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 7: 25-Day Onboarding Roadmap */}
        <RoadmapSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 7.5: Store & Food Gallery (Placed before FAQs) */}
        <FranchiseGallerySection />

        {/* Section 8: Franchise Due Diligence FAQs */}
        <FranchiseFaqSection
          onOpenFdd={() => setIsDeckModalOpen(true)}
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 9: Follow Our Journey on Instagram (Placed above Footer) */}
        <FranchiseInstagramSection />
      </main>

      {/* Footer & Compliance Notice */}
      <FranchiseFooter
        onOpenApply={() => handleOpenApply()}
        onOpenFdd={() => setIsDeckModalOpen(true)}
      />

      {/* Interactive Franchise Application Modal */}
      <FranchiseApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        prefillModel={selectedModelPrefill}
        prefillTerritory={selectedTerritoryPrefill}
        prefillRoiEstimate={selectedRoiPrefill}
      />

      {/* Interactive Investment Deck Summary Download Modal */}
      <InvestmentDeckModal
        isOpen={isDeckModalOpen}
        onClose={() => setIsDeckModalOpen(false)}
        onOpenApply={() => {
          setIsDeckModalOpen(false);
          setIsApplyModalOpen(true);
        }}
      />
    </div>
  );
}
