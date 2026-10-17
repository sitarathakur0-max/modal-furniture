import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, PRODUCTS } from '../data/products';
import {
  MapPin,
  Phone,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [categoryOrProduct, setCategoryOrProduct] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    inquiryId: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, phone number, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          categoryOrProduct,
          message: message.trim()
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessResponse({
          inquiryId: data.inquiryId,
          message: data.message
        });
        // Clear inputs
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMessage(data.error || 'Failed to submit form. Please call the showroom directly.');
      }
    } catch {
      setErrorMessage(
        'Unable to connect to the backend server. Please contact Modal Furniture directly by calling ' +
          BUSINESS_INFO.phone
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Title */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
          Showroom Communications
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
          Contact Modal Furniture
        </h1>
        <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
          Discuss custom piece dimensions, wood finishes, or visit our showroom near Shama Cinema in Ichhra, Lahore. We look forward to assisting you.
        </p>
      </div>

      {/* Main Grid: Details on Left, Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Verified Business Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#193C32] text-[#F7F3EA] rounded-2xl p-8 space-y-6 shadow-sm">
            <span className="font-serif text-2xl font-bold text-[#F7F3EA] block">
              Modal Furniture
            </span>

            <div className="space-y-4 text-xs sm:text-sm text-[#DCE4DA]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C59A68] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-white block">Showroom Address</span>
                  <p className="leading-relaxed">{BUSINESS_INFO.address}</p>
                  <p className="text-xs text-[#C59A68] pt-1">Near Shama Cinema, Ichhra, Lahore</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#245245]">
                <Phone className="w-5 h-5 text-[#C59A68] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-white block">Public Phone Number</span>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="text-base text-white hover:text-[#C59A68] font-semibold tabular-nums block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#DCE4DA]">Direct line for sizing and price queries</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#245245]">
                <ExternalLink className="w-5 h-5 text-[#C59A68] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-white block">Official Social Presence</span>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C59A68] underline block break-all"
                  >
                    facebook.com/modelfurniture
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Note */}
          <div className="p-6 bg-white border border-[#EAE3D2] rounded-xl text-xs text-[#4A4C46] space-y-2">
            <h4 className="font-serif text-sm font-semibold text-[#193C32] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#9E7444]" />
              <span>Direct Showroom Consultation</span>
            </h4>
            <p className="leading-relaxed">
              To inspect physical timber samples, wood finishes, or discuss workshop production schedules, please reach out via phone before your visit to ensure a dedicated consultant is available.
            </p>
          </div>
        </div>

        {/* Right Column: Genuine Backend Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#EAE3D2] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="border-b border-[#FAF8F2] pb-4 mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#193C32]">
              Send an Online Showroom Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4C46] mt-1">
              Submissions are logged directly into our backend inquiry system for direct phone follow-up.
            </p>
          </div>

          {successResponse ? (
            <div className="p-6 bg-[#FAF8F2] border border-[#B8C8B5] rounded-xl space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 text-[#193C32] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#193C32]">
                    Submission Confirmed
                  </h3>
                  <p className="text-sm text-[#4A4C46] mt-1">
                    {successResponse.message}
                  </p>
                  <p className="text-xs font-mono text-[#193C32] mt-3 font-semibold bg-white p-2.5 rounded border border-[#EAE3D2] inline-block">
                    Inquiry Reference: {successResponse.inquiryId}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSuccessResponse(null)}
                  className="px-5 py-2.5 bg-[#193C32] text-[#F7F3EA] text-xs font-medium rounded-lg hover:bg-[#122922] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 text-xs sm:text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Imran Ali"
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0301 4443700"
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                  Product or Category of Interest
                </label>
                <select
                  value={categoryOrProduct}
                  onChange={(e) => setCategoryOrProduct(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                >
                  <option value="General Consultation">General Showroom Consultation</option>
                  <option value="Living Room Seating">Living Room Seating & Sofas</option>
                  <option value="Beds & Headboards">Beds & Bedroom Furniture</option>
                  <option value="Dining Tables & Chairs">Dining Tables & Chairs</option>
                  <option value="Storage & Wardrobes">Storage & Wardrobes</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={`${p.title} (${p.refCode})`}>
                      {p.title} ({p.refCode})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                  Message & Spatial Requirements <span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details such as room dimensions, preferred wood species (oak, walnut, ash), or timing requirements..."
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#193C32] text-[#F7F3EA] text-sm font-semibold rounded-lg hover:bg-[#122922] transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    'Submitting to Server...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Showroom</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#4A4C46] text-center pt-2">
                Submissions are processed via secure server-side endpoint. We do not transmit customer details to third-party marketing services.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
