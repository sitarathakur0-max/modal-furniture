import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#4A4C46] font-mono">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#193C32] transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-[#193C32] font-semibold">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
        </span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
          Showroom Transparency & Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
        </h1>
        <p className="text-xs font-mono text-[#4A4C46]">
          Last Updated: March 2026 · Modal Furniture, Ichhra, Lahore
        </p>
      </div>

      {/* Legal Content */}
      <div className="bg-white border border-[#EAE3D2] rounded-2xl p-6 sm:p-10 space-y-8 text-sm text-[#4A4C46] leading-relaxed shadow-xs">
        {type === 'privacy' ? (
          <>
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C59A68]" />
                <span>1. Overview and Purpose</span>
              </h2>
              <p>
                Modal Furniture operates a proposed contemporary furniture presentation website for residents in Lahore, Pakistan. This policy outlines how information submitted through our online inquiry forms, telephone consultations, and showroom interactions is collected and handled.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32]">
                2. Information We Collect
              </h2>
              <p>
                When you submit a product inquiry or contact form, we collect the details you provide voluntarily:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Your full name and contact telephone number.</li>
                <li>Your email address (if optionally supplied).</li>
                <li>Catalogue furniture pieces, room dimensions, or custom finish preferences you specify.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32]">
                3. How Information is Used
              </h2>
              <p>
                Customer inquiry data is used strictly to fulfill direct customer communication, provide tailored price quotations, and confirm order feasibility. We do not sell, rent, or distribute personal customer records to third-party advertisers or external marketing databases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32]">
                4. Data Security & Storage
              </h2>
              <p>
                Inquiries are processed via server-side endpoints configured with standard data safeguards. If you wish to update or remove an inquiry record from our files, you may contact us by telephone at {BUSINESS_INFO.phone}.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C59A68]" />
                <span>1. Catalogue Concept Representation</span>
              </h2>
              <p>
                All furniture images, styling settings, and product descriptions presented on this website are illustrative architectural concepts. They are designed to demonstrate proportions, joinery principles, and contemporary aesthetic possibilities for residential spaces in Lahore.
              </p>
              <p>
                The display of any concept does not constitute a physical stock inventory guarantee. Immediate workshop availability, timber choice, and physical floor displays must be confirmed directly with Modal Furniture.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32]">
                2. Pricing and Quotations
              </h2>
              <p>
                Static prices are deliberately omitted from this website because each commissioned piece is tailored to custom dimensions, selected wood species (solid oak, walnut, teak, or ash), and fabric selections. Final pricing is provided exclusively via showroom consultation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32]">
                3. Dimensions and Site Measurement
              </h2>
              <p>
                Room dimensions, door clearances, and elevator access are the responsibility of the client to verify before placing a custom order. Modal Furniture consultants can advise on standard ergonomic allowances upon request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#193C32]">
                4. Showroom Inquiries & Governance
              </h2>
              <p>
                Showroom location: 28 Saadat Farooq Road, near Shama Cinema, Ichhra, Lahore, Punjab, Pakistan. Telephone: {BUSINESS_INFO.phone}.
              </p>
            </section>
          </>
        )}
      </div>

      {/* Back button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#193C32] hover:text-[#C59A68]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
