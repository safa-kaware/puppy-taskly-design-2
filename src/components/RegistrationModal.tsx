import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import { AnimatedPawTrail, GentlePawSvg } from './BotanicalMotifs';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  ownerName: string;
  email: string;
  phone: string;
  puppyName: string;
  puppyAge: string;
  additionalInfo: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  ownerName: '',
  email: '',
  phone: '',
  puppyName: '',
  puppyAge: '',
  additionalInfo: '',
};

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.ownerName.trim() || form.ownerName.trim().length < 2) {
      nextErrors.ownerName = 'Please enter the owner’s full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a 10-digit phone number.';
    }

    if (!form.puppyName.trim()) {
      nextErrors.puppyName = 'Please share your puppy’s name.';
    }

    if (!form.puppyAge.trim()) {
      nextErrors.puppyAge = 'Please let us know your puppy’s current age.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmittedData({ ...form });
  };

  const handleResetAndClose = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedData(null);
    onClose();
  };

  const handleRegisterAnother = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#292D28]/65 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden rounded-t-[2rem] sm:rounded-[2.25rem] bg-[#F5F0E8] text-[#292D28] border-t sm:border border-[#DAD7CD] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.4)]"
          >
            {/* Mobile Sheet Drag Handle */}
            <div className="sm:hidden pt-3 pb-1 flex justify-center shrink-0">
              <span className="w-10 h-1.5 rounded-full bg-[#DAD7CD]" aria-hidden="true" />
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              aria-label="Close registration popup"
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20 min-w-[44px] min-h-[44px] rounded-full bg-[#DAD7CD]/60 hover:bg-[#DAD7CD] text-[#292D28] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#344E41]"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="overflow-y-auto flex-1 px-5 pb-6 pt-3 sm:p-10"
              style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
            >
              {submittedData ? (
                /* Registration Success Screen */
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="py-3 text-center space-y-5"
                >
                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#A3B18A]/35 text-[#344E41] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.75} />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <AnimatedPawTrail className="text-[#CB997E] justify-center" />
                    <h3
                      id="registration-modal-title"
                      className="font-serif text-2xl sm:text-4xl text-[#344E41]"
                    >
                      Welcome, <span className="italic">{submittedData.puppyName}!</span>
                    </h3>
                    <p className="text-sm sm:text-base text-[#292D28]/80 leading-relaxed">
                      Thank you, {submittedData.ownerName}. Your local prototype preview request has
                      been recorded below.
                    </p>
                  </div>

                  <div className="text-left rounded-[1.5rem] bg-[#FAF7F2] border border-[#DAD7CD] p-5 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-[#DAD7CD]/70 pb-2.5">
                      <span className="text-[#292D28]/60">Owner</span>
                      <span className="font-medium text-[#292D28]">{submittedData.ownerName}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#DAD7CD]/70 pb-2.5 gap-3">
                      <span className="text-[#292D28]/60 shrink-0">Email</span>
                      <span className="font-medium text-[#292D28] truncate">
                        {submittedData.email}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#DAD7CD]/70 pb-2.5">
                      <span className="text-[#292D28]/60">Phone</span>
                      <span className="font-medium text-[#292D28] tabular-nums">
                        {submittedData.phone}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#DAD7CD]/70 pb-2.5">
                      <span className="text-[#292D28]/60">Puppy</span>
                      <span className="font-medium text-[#344E41]">
                        {submittedData.puppyName} ({submittedData.puppyAge})
                      </span>
                    </div>
                    {submittedData.additionalInfo.trim() && (
                      <div className="pt-1">
                        <span className="block text-[#292D28]/60 mb-1">Notes</span>
                        <p className="text-[#292D28]/85 leading-relaxed">
                          {submittedData.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-[#292D28]/65 max-w-md mx-auto leading-relaxed">
                    Simulated prototype confirmation only: no real booking or email was sent.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="min-h-[48px] px-7 py-3 rounded-full bg-[#344E41] text-[#F5F0E8] text-sm font-medium hover:bg-[#292D28] transition-colors cursor-pointer"
                    >
                      Return to Academy
                    </button>
                    <button
                      type="button"
                      onClick={handleRegisterAnother}
                      className="min-h-[48px] px-6 py-3 rounded-full border border-[#344E41]/30 text-[#344E41] text-sm font-medium hover:bg-[#DAD7CD]/60 transition-colors cursor-pointer"
                    >
                      Register Another Puppy
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Registration Form */
                <div>
                  <div className="pr-10 mb-5 sm:mb-7">
                    <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium text-[#CB997E] mb-1.5">
                      <GentlePawSvg className="w-4 h-4" />
                      <span>6-Week Edmonton Cohort</span>
                    </div>
                    <h3
                      id="registration-modal-title"
                      className="font-serif text-2xl sm:text-3xl text-[#344E41] mb-1.5"
                    >
                      Reserve Your Puppy&apos;s Place
                    </h3>
                    <p className="text-sm text-[#292D28]/75 leading-relaxed">
                      Share a few details about you and your little companion. Submissions in this
                      prototype are simulated locally in your browser.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="owner-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5"
                        >
                          Owner Name *
                        </label>
                        <input
                          id="owner-name"
                          type="text"
                          autoComplete="name"
                          value={form.ownerName}
                          onChange={(e) => handleChange('ownerName', e.target.value)}
                          placeholder="e.g. Jordan Taylor"
                          aria-invalid={Boolean(errors.ownerName)}
                          className={`w-full min-h-[46px] rounded-xl border px-4 py-3 text-base sm:text-sm bg-[#FAF7F2] text-[#292D28] placeholder:text-[#292D28]/40 focus:outline-none transition-colors ${
                            errors.ownerName
                              ? 'border-[#B85D43] focus:border-[#B85D43]'
                              : 'border-[#DAD7CD] focus:border-[#344E41]'
                          }`}
                        />
                        {errors.ownerName && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9C422B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.ownerName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="owner-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          id="owner-email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                          className={`w-full min-h-[46px] rounded-xl border px-4 py-3 text-base sm:text-sm bg-[#FAF7F2] text-[#292D28] placeholder:text-[#292D28]/40 focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-[#B85D43] focus:border-[#B85D43]'
                              : 'border-[#DAD7CD] focus:border-[#344E41]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9C422B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="owner-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5"
                        >
                          Phone *
                        </label>
                        <input
                          id="owner-phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="(780) 555-0148"
                          aria-invalid={Boolean(errors.phone)}
                          className={`w-full min-h-[46px] rounded-xl border px-4 py-3 text-base sm:text-sm bg-[#FAF7F2] text-[#292D28] placeholder:text-[#292D28]/40 focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-[#B85D43] focus:border-[#B85D43]'
                              : 'border-[#DAD7CD] focus:border-[#344E41]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9C422B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="puppy-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5"
                        >
                          Puppy Name *
                        </label>
                        <input
                          id="puppy-name"
                          type="text"
                          value={form.puppyName}
                          onChange={(e) => handleChange('puppyName', e.target.value)}
                          placeholder="e.g. Willow"
                          aria-invalid={Boolean(errors.puppyName)}
                          className={`w-full min-h-[46px] rounded-xl border px-4 py-3 text-base sm:text-sm bg-[#FAF7F2] text-[#292D28] placeholder:text-[#292D28]/40 focus:outline-none transition-colors ${
                            errors.puppyName
                              ? 'border-[#B85D43] focus:border-[#B85D43]'
                              : 'border-[#DAD7CD] focus:border-[#344E41]'
                          }`}
                        />
                        {errors.puppyName && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9C422B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.puppyName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="puppy-age"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5"
                        >
                          Puppy Age *
                        </label>
                        <input
                          id="puppy-age"
                          type="text"
                          value={form.puppyAge}
                          onChange={(e) => handleChange('puppyAge', e.target.value)}
                          placeholder="e.g. 11 weeks"
                          aria-invalid={Boolean(errors.puppyAge)}
                          className={`w-full min-h-[46px] rounded-xl border px-4 py-3 text-base sm:text-sm bg-[#FAF7F2] text-[#292D28] placeholder:text-[#292D28]/40 focus:outline-none transition-colors ${
                            errors.puppyAge
                              ? 'border-[#B85D43] focus:border-[#B85D43]'
                              : 'border-[#DAD7CD] focus:border-[#344E41]'
                          }`}
                        />
                        {errors.puppyAge && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9C422B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.puppyAge}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="additional-info"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#344E41] mb-1.5"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="additional-info"
                        rows={3}
                        value={form.additionalInfo}
                        onChange={(e) => handleChange('additionalInfo', e.target.value)}
                        placeholder="Breed, shyness or energy notes, preferred weekday evening or weekend morning..."
                        className="w-full rounded-xl border border-[#DAD7CD] px-4 py-3 text-base sm:text-sm bg-[#FAF7F2] text-[#292D28] placeholder:text-[#292D28]/40 focus:outline-none focus:border-[#344E41] transition-colors"
                      />
                    </div>

                    <div className="pt-3 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3">
                      <p className="text-xs text-center sm:text-left text-[#292D28]/60">
                        Local prototype simulation only &middot; No live payment or booking sent.
                      </p>
                      <button
                        type="submit"
                        className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#344E41] text-[#F5F0E8] text-sm font-medium hover:bg-[#292D28] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344E41]"
                      >
                        Complete Sample Registration
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
