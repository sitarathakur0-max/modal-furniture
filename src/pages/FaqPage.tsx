import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { ChevronDown, ChevronUp, Phone, MessageSquare, MapPin } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How can I ask about a product shown on this website?',
      answer:
        'You can inquire about any catalogue concept in multiple ways: tap the "Inquire" button on any product card to send an inquiry form with its reference code, add multiple pieces to your Inquiry Bag to submit a combined consultation list, or call our showroom directly at +92 301 4443700.'
    },
    {
      question: 'How do I confirm current prices?',
      answer:
        'Furniture prices are not fixed static numbers because each piece is made to order with your selected choice of solid wood core or veneer (oak, walnut, teak, ash), upholstery fabric grade, and custom room dimensions. To receive a verified price quote, please share the piece reference code and your preferred requirements directly with our team.'
    },
    {
      question: 'Can I ask about product dimensions or request custom sizing?',
      answer:
        'Yes. Because living rooms and bedrooms vary significantly across homes and apartments in Lahore, we encourage clients to discuss specific spatial measurements. When contacting us, let us know your room dimensions or wall clearances so our team can advise on appropriate proportions.'
    },
    {
      question: 'How do I check current availability or physical showroom floor models?',
      answer:
        'The items displayed on this website represent proposed contemporary catalogue concepts. Physical floor displays and workshop batch queues change on an ongoing basis. Please call our showroom at +92 301 4443700 or send a note before visiting to confirm whether physical samples or floor models are currently available for viewing.'
    },
    {
      question: 'How can I contact the shop directly?',
      answer:
        'You can call our publicly listed telephone number +92 301 4443700, visit our showroom at 28 Saadat Farooq Road, near Shama Cinema, Ichhra, Lahore, Punjab, Pakistan, or reach out through our official Facebook page at https://www.facebook.com/modelfurniture.'
    },
    {
      question: 'How can I ask about delivery and payment arrangements?',
      answer:
        'Delivery arrangements, transportation logistics within Lahore or surrounding regions, and payment terms (such as deposits or milestone settlements) must be confirmed directly with our showroom representatives. Please inquire directly with our team to obtain verified terms for your specific order.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
          Showroom Inquiries & Assistance
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
          Clear answers regarding catalogue design concepts, verified price quotations, custom dimensions, and visiting our showroom in Ichhra, Lahore.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-[#EAE3D2] rounded-xl overflow-hidden shadow-xs transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-serif text-base sm:text-lg font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32]"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.question}</span>
                <span className="p-1 rounded-full bg-[#FAF8F2] text-[#193C32] shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#C59A68]" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-[#4A4C46] leading-relaxed border-t border-[#FAF8F2] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Quick Strip */}
      <div className="p-8 bg-[#FAF8F2] border border-[#EAE3D2] rounded-2xl space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <h3 className="font-serif text-lg font-bold text-[#193C32]">
            Have an unlisted question?
          </h3>
          <p className="text-xs text-[#4A4C46]">
            Our staff in Ichhra is ready to discuss custom timber specifications, room floor plans, and quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <a
            href={BUSINESS_INFO.phoneLink}
            className="flex items-center gap-3 p-4 bg-white border border-[#EAE3D2] rounded-xl text-xs text-[#193C32] font-semibold hover:border-[#193C32] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
              <Phone className="w-4 h-4 text-[#C59A68]" />
            </div>
            <div>
              <span className="block text-[11px] text-[#4A4C46] font-normal">Call Showroom</span>
              <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-3 p-4 bg-white border border-[#EAE3D2] rounded-xl text-xs text-[#193C32] font-semibold hover:border-[#193C32] transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-full bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
              <MessageSquare className="w-4 h-4 text-[#C59A68]" />
            </div>
            <div>
              <span className="block text-[11px] text-[#4A4C46] font-normal">Send an Inquiry</span>
              <span>Online Contact Form</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
