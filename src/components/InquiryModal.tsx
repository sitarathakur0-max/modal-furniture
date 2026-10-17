import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, PhoneCall, Send } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';

interface InquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ product, isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; message: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen || !product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          categoryOrProduct: `${product.title} (${product.refCode})`,
          items: [{ code: product.refCode, title: product.title }],
          message: message.trim() || `Inquiry regarding ${product.title} (${product.refCode}) specifications and availability.`
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessData({
          id: data.inquiryId,
          message: data.message
        });
      } else {
        setErrorMsg(data.error || 'Unable to submit your request. Please try calling directly.');
      }
    } catch {
      setErrorMsg('Unable to connect to the inquiry service. Please call us directly at ' + BUSINESS_INFO.phone);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSuccessData(null);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F2] border border-[#EAE3D2] rounded-xl shadow-2xl overflow-hidden text-[#292A27]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE3D2] bg-[#F7F3EA]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E7444]">
              {product.refCode}
            </span>
            <h3 id="inquiry-title" className="font-serif text-lg text-[#193C32] font-semibold">
              Request Details & Availability
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-[#292A27]/60 hover:text-[#193C32] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {successData ? (
            <div className="space-y-4 py-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#DCE4DA]/40 border border-[#B8C8B5]">
                <CheckCircle2 className="w-6 h-6 text-[#193C32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#193C32]">Inquiry Logged Successfully</h4>
                  <p className="text-sm text-[#292A27]/80 mt-1">{successData.message}</p>
                  <p className="text-xs font-mono text-[#193C32] mt-2 font-medium">
                    Reference Code: {successData.id}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/70 border border-[#EAE3D2] rounded-lg text-sm text-[#4A4C46]">
                <p>
                  A representative from Modal Furniture will contact you via phone to confirm piece dimensions, timber finishes, and estimated timelines.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#193C32] font-medium">
                  <PhoneCall className="w-4 h-4 text-[#C59A68]" />
                  <span>Immediate questions? Call us directly: {BUSINESS_INFO.phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 px-4 bg-[#193C32] text-[#F7F3EA] rounded-lg font-medium text-sm hover:bg-[#122922] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product preview */}
              <div className="flex items-center gap-3.5 p-3 bg-white/80 border border-[#EAE3D2] rounded-lg">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-cover rounded-md border border-[#EAE3D2] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-sm text-[#193C32] truncate">{product.title}</h4>
                  <p className="text-xs text-[#4A4C46] truncate">{product.categoryLabel}</p>
                  <span className="text-xs text-[#9E7444] font-mono">Ref: {product.refCode}</span>
                </div>
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
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
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193C32]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0300 1234567"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193C32]"
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
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193C32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A4C46] mb-1">
                  Message or Custom Inquiries
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your room dimensions, desired wood finish, or delivery destination in Lahore..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193C32]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#EAE3D2]">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-sm text-[#4A4C46] hover:text-[#193C32] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#193C32] text-[#F7F3EA] rounded-lg hover:bg-[#122922] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
