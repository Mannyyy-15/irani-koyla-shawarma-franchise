export interface InvestmentModel {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  footprint: string;
  idealLocation: string;
  initialInvestment: string;
  minCashRequired: string;
  franchiseFee: string;
  royaltyFee: string;
  marketingFund: string;
  avgBuildoutTime: string;
  avgEbitdaMargin: string;
  estimatedAnnualRevenue: string;
  keyHighlights: string[];
}

export interface UnitEconomicsMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
  trend?: string;
}

export interface BentoHighlight {
  id: string;
  badge: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface RoadmapStepItem {
  number: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  milestones: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  liquidCapital: string;
  netWorth: string;
  targetRegion: string;
  experienceLevel: string;
  plannedUnits: string;
  timeframe: string;
  additionalNotes?: string;
}

export interface LeadSubmissionResponse {
  referenceId: string;
  submittedAt: string;
  applicantName: string;
  targetRegion: string;
}
