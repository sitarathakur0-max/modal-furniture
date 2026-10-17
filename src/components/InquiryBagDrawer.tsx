import React, { useState } from 'react';
import { X, Trash2, CheckCircle2, AlertCircle, ShoppingBag, Send } from 'lucide-react';
import { InquiryItem } from '../types';
import { BUSINESS_INFO } from '../data/products';

interface InquiryBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
  onNavigateToProduct: (id: string) => void;
}

export const InquiryBagDrawer: React.FC<InquiryBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearBag,
  onNavigateToProduct
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    if (items.length === 0) {
      setErrorMsg('Your inquiry bag is empty.');
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
          items: items.map(item => ({ code: item.refCode, title: item.title })),
          message: notes.trim() || `Inquiry bundle for ${items.length} catalogue item(s).`
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmittedId(data.inquiryId);
        onClearBag();
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch {
      setErrorMsg('Network error. Please call Modal Furniture directly at ' + BUSINESS_INFO.phone);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#FAF8F2] h-full shadow-2xl flex flex-col text-[#292A27] border-l border-[#EAE3D2]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE3D2] bg-[#F7F3EA]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#193C32]" />
            <h3 className="font-serif text-lg font-semibold text-[#193C32]">
              Inquiry Bag ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#292A27]/60 hover:text-[#193C32] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32]"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submittedId ? (
            <div className="p-6 bg-white border border-[#B8C8B5] rounded-xl space-y-4 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#193C32] mx-auto" />
              <h4 className="font-serif text-xl font-bold text-[#193C32]">Inquiry Request Sent</h4>
              <p className="text-sm text-[#4A4C46]">
                Thank you! Your list has been submitted to the Modal Furniture showroom team.
              </p>
              <div className="p-3 bg-[#DCE4DA]/40 rounded-lg text-xs font-mono text-[#193C32]">
                Inquiry Reference: <strong>{submittedId}</strong>
              </div>
              <p className="text-xs text-[#4A4C46]">
                Our consultants in Ichhra, Lahore will contact you at your phone number with verified specifications.
              </p>
              <button
                onClick={() => {
                  setSubmittedId(null);
                  onClose();
                }}
                className="w-full py-2.5 bg-[#193C32] text-[#F7F3EA] rounded-lg text-sm font-medium hover:bg-[#122922]"
              >
                Back to Catalogue
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#EAE3D2] mx-auto flex items-center justify-center text-[#9E7444]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-base font-serif text-[#193C32]">Your inquiry bag is empty</p>
              <p className="text-xs text-[#4A4C46] max-w-xs mx-auto">
                Select pieces while exploring our catalogue to request a combined availability and finish consultation.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#4A4C46] border-b border-[#EAE3D2] pb-2">
                  <span>Selected Pieces</span>
                  <button
                    onClick={onClearBag}
                    className="text-red-700 hover:underline hover:text-red-900"
                  >
                    Clear All
                  </button>
                </div>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-white border border-[#EAE3D2] rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover rounded-md border border-[#EAE3D2] cursor-pointer"
                      onClick={() => {
                        onNavigateToProduct(item.id);
                        onClose();
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <button
                        onClick={() => {
                          onNavigateToProduct(item.id);
                          onClose();
                        }}
                        className="text-left font-medium text-sm text-[#193C32] hover:underline truncate block w-full"
                      >
                        {item.title}
                      </button>
                      <p className="text-xs text-[#4A4C46]">{item.category}</p>
                      <span className="text-xs font-mono text-[#9E7444]">{item.refCode}</span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-stone-400 hover:text-red-700 transition-colors"
                      title="Remove from bag"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="pt-4 border-t border-[#EAE3D2] space-y-3">
                <h4 className="font-serif text-sm font-semibold text-[#193C32]">
                  Send Batch Inquiry to Showroom
                </h4>
                <p className="text-xs text-[#4A4C46]">
                  Receive custom dimensions, wood finishes, and verified prices directly.
                </p>

                {errorMsg && (
                  <div className="flex items-center gap-2 p-2.5 text-xs text-red-800 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-[#4A4C46] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Asad Farooq"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#EAE3D2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A4C46] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0301 4443700"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#EAE3D2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A4C46] mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#EAE3D2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A4C46] mb-1">
                    Notes / Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Inquiring for master bedroom renovation in Lahore..."
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#EAE3D2] rounded-md focus:outline-none focus:ring-1 focus:ring-[#193C32]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#193C32] text-[#F7F3EA] rounded-lg text-sm font-medium hover:bg-[#122922] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Submitting List...'
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Quote & Availability</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
