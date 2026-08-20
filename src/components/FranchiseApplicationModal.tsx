import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, MapPin, User, IndianRupee } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

interface FranchiseApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillModel?: string;
  prefillTerritory?: string;
  prefillRoiEstimate?: string;
}

export const FranchiseApplicationModal: React.FC<FranchiseApplicationModalProps> = ({
  isOpen,
  onClose,
  prefillModel = 'Irani Koyla Shawarma Standard Store (₹8L Franchise Fee • 5% Royalty)',
  prefillTerritory = '',
  prefillRoiEstimate = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    targetCity: prefillTerritory || '',
    targetCountry: 'India',
    preferredModel: prefillModel,
    liquidCapital: '₹15 Lakhs – ₹30 Lakhs',
    netWorth: '₹50 Lakhs – ₹1 Crore',
    experience: 'Yes - Food & Beverage / Retail Owner',
    timeline: 'Immediate (1 - 3 Months)',
    comments: prefillRoiEstimate ? `Simulated Pro-Forma: ${prefillRoiEstimate}` : '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      const generatedId = 'IKS-FRAN-' + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(generatedId);
      setIsSubmitted(true);
      triggerConfetti();
    }
  };

  const handleBack = () => {
    setStep(Math.max(1, step - 1));
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#150d0a] border-2 border-[var(--border-ember)] text-white shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="bg-[#080402] text-white px-5 sm:px-8 py-4 flex items-center justify-between border-b border-[var(--border-ember)]">
          <div className="flex items-center space-x-3">
            <span className="font-poster text-2xl sm:text-3xl tracking-tight text-white">
              IRANI KOYLA
            </span>
            <span className="font-condensed font-extrabold text-xs sm:text-sm tracking-widest text-[#ffb703] uppercase">
              // 5% ROYALTY FRANCHISE PORTAL
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-14 text-center">
            <div className="w-16 h-16 bg-fire-gradient text-[#080402] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-poster text-3xl sm:text-5xl text-white uppercase tracking-tight">
              APPLICATION RECEIVED & LOGGED!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#ebdcd4] max-w-md mx-auto font-medium">
              Thank you, <strong className="text-white">{formData.fullName || 'Candidate'}</strong>. Your application for <strong className="text-white">{formData.targetCity || 'your selected territory'}</strong> with <strong className="text-[#ffb703]">₹8,00,000 Franchise Fee</strong> & <strong className="text-[#ffb703]">5% Royalty</strong> has been prioritized.
            </p>
            
            <div className="mt-6 p-4 bg-[#080402] max-w-md mx-auto font-condensed font-bold text-xs sm:text-sm text-[#ebdcd4] border border-[var(--border-ember)] text-left space-y-1.5">
              <div><strong className="text-[#ffb703]">CONFIRMATION TOKEN:</strong> {applicationId}</div>
              <div><strong className="text-[#ffb703]">TERRITORY STATUS:</strong> PROVISIONAL HOLD (48 HRS)</div>
              <div><strong className="text-[#ffb703]">FRANCHISE FEE:</strong> ₹8,00,000 (LIFETIME AGREEMENT)</div>
              <div><strong className="text-[#ffb703]">ROYALTY:</strong> 5% MONTHLY (CONTINUOUS BRAND BACKING)</div>
              <div><strong className="text-[#ffb703]">NEXT STEP:</strong> 15-Min Confidential Discovery Call Invite via Email</div>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-8 bg-fire-gradient text-[#080402] px-8 py-3 font-condensed font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-[#ffb703]/25"
            >
              RETURN TO FRANCHISE OVERVIEW
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs sm:text-sm font-condensed font-extrabold uppercase tracking-wider text-white mb-2">
                <span className={step >= 1 ? 'text-[#ffb703]' : 'text-zinc-500'}>1. CONTACT & IDENTITY</span>
                <span className={step >= 2 ? 'text-[#ffb703]' : 'text-zinc-500'}>2. TERRITORY & TIMELINE</span>
                <span className={step >= 3 ? 'text-[#ffb703]' : 'text-zinc-500'}>3. FINANCIAL QUALIFICATIONS</span>
              </div>
              <div className="w-full bg-[#080402] h-2 overflow-hidden border border-[var(--border-ember)]">
                <div 
                  className="bg-fire-gradient h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleNext}>
              {/* STEP 1: Personal & Contact */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm font-condensed font-extrabold text-[#ffb703] uppercase tracking-wider">
                    <User className="w-4 h-4 text-[#ffb703]" />
                    <span>PRIMARY CANDIDATE PROFILE</span>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                      FULL LEGAL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        WORK / DIRECT EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@partnergroup.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        DIRECT PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Territory & Timeline */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-condensed font-extrabold text-[#ffb703] uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#ffb703]" />
                    <span>DESIRED MARKET & TIMELINE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        TARGET CITY / LOCATION *
                      </label>
                      <input
                        type="text"
                        required
                        name="targetCity"
                        value={formData.targetCity}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai, Bengaluru, Delhi NCR, Hyderabad"
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        COUNTRY / REGION *
                      </label>
                      <select
                        name="targetCountry"
                        value={formData.targetCountry}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      >
                        <option value="India" className="bg-[#080402] text-white">India</option>
                        <option value="United Arab Emirates" className="bg-[#080402] text-white">United Arab Emirates</option>
                        <option value="United States" className="bg-[#080402] text-white">United States</option>
                        <option value="United Kingdom" className="bg-[#080402] text-white">United Kingdom</option>
                        <option value="Canada" className="bg-[#080402] text-white">Canada</option>
                        <option value="Other International" className="bg-[#080402] text-white">Other International</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        FRANCHISE FORMAT
                      </label>
                      <input
                        type="text"
                        readOnly
                        value="Irani Koyla Shawarma Standard Store (₹8,00,000 Fee • 5% Royalty)"
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-[#ffb703] border border-[var(--border-ember)] font-extrabold outline-none cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        TARGET LAUNCH TIMEFRAME *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      >
                        <option value="Immediate (1 - 3 Months)" className="bg-[#080402] text-white">Immediate (1 - 3 Months)</option>
                        <option value="Within 3 - 6 Months" className="bg-[#080402] text-white">Within 3 - 6 Months</option>
                        <option value="Within 6 - 12 Months" className="bg-[#080402] text-white">Within 6 - 12 Months</option>
                        <option value="Exploratory / 12+ Months" className="bg-[#080402] text-white">Exploratory / 12+ Months</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Financial & Background */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-condensed font-extrabold text-[#ffb703] uppercase tracking-wider">
                    <IndianRupee className="w-4 h-4 text-[#ffb703]" />
                    <span>FINANCIAL CAPABILITY & EXPERIENCE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        AVAILABLE UNENCUMBERED LIQUID CAPITAL *
                      </label>
                      <select
                        name="liquidCapital"
                        value={formData.liquidCapital}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      >
                        <option value="₹10 Lakhs – ₹20 Lakhs" className="bg-[#080402] text-white">₹10 Lakhs – ₹20 Lakhs</option>
                        <option value="₹20 Lakhs – ₹40 Lakhs" className="bg-[#080402] text-white">₹20 Lakhs – ₹40 Lakhs</option>
                        <option value="₹40 Lakhs – ₹80 Lakhs" className="bg-[#080402] text-white">₹40 Lakhs – ₹80 Lakhs</option>
                        <option value="₹80 Lakhs+" className="bg-[#080402] text-white">₹80 Lakhs+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                        ESTIMATED TOTAL NET WORTH *
                      </label>
                      <select
                        name="netWorth"
                        value={formData.netWorth}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                      >
                        <option value="₹30 Lakhs – ₹60 Lakhs" className="bg-[#080402] text-white">₹30 Lakhs – ₹60 Lakhs</option>
                        <option value="₹60 Lakhs – ₹1.5 Crores" className="bg-[#080402] text-white">₹60 Lakhs – ₹1.5 Crores</option>
                        <option value="₹1.5 Crores – ₹3 Crores" className="bg-[#080402] text-white">₹1.5 Crores – ₹3 Crores</option>
                        <option value="₹3 Crores+" className="bg-[#080402] text-white">₹3 Crores+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                      BUSINESS / FOOD & BEVERAGE MANAGEMENT EXPERIENCE *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                    >
                      <option value="Yes - Current or Past Restaurant / QSR Franchisee" className="bg-[#080402] text-white">Yes - Current or Past Restaurant / QSR Franchisee</option>
                      <option value="Yes - Retail / Hospitality / Multi-Unit Business Owner" className="bg-[#080402] text-white">Yes - Retail / Hospitality / Multi-Unit Business Owner</option>
                      <option value="Executive / Corporate Leadership with Operating Partner" className="bg-[#080402] text-white">Executive / Corporate Leadership with Operating Partner</option>
                      <option value="First-Time Entrepreneur (Committed to Full-Time)" className="bg-[#080402] text-white">First-Time Entrepreneur (Committed to Full-Time)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                      ADDITIONAL NOTES OR QUESTIONS FOR FRANCHISE TEAM
                    </label>
                    <textarea
                      name="comments"
                      rows={2}
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Share details about your background, target real estate corridors, or investor group..."
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-[var(--border-ember)] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 text-xs font-condensed font-bold uppercase tracking-wider text-[#ebdcd4] hover:text-[#ffb703] flex items-center space-x-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>PREVIOUS</span>
                  </button>
                ) : (
                  <span className="text-[10px] font-condensed font-bold text-[#ffb703] uppercase">
                    🔒 CONFIDENTIAL CANDIDATE SUBMISSION
                  </span>
                )}

                <button
                  type="submit"
                  className="bg-fire-gradient text-[#080402] px-6 py-2.5 font-condensed font-extrabold text-xs uppercase tracking-widest transition-all flex items-center space-x-2 shadow-lg hover:shadow-[#ffb703]/25"
                >
                  <span>{step === 3 ? 'SUBMIT FRANCHISE APPLICATION' : 'CONTINUE'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
