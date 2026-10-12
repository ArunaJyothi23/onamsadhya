'use client';

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  eventType: string;
  venuePostcode: string;
  servicePreference: string;
  additionalRequirements: string;
  privacyConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  eventType: '',
  venuePostcode: '',
  servicePreference: '',
  additionalRequirements: '',
  privacyConsent: false,
};

export default function OnamEnquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact number is required.';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required.';
    if (!formData.guestCount.trim()) newErrors.guestCount = 'Estimated guest count is required.';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type.';
    if (!formData.venuePostcode.trim()) newErrors.venuePostcode = 'Event postcode or venue location is required.';
    if (!formData.servicePreference) newErrors.servicePreference = 'Please select a service preference.';
    if (!formData.privacyConsent) newErrors.privacyConsent = 'You must agree to the privacy policy to submit this form.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setStatus('loading');

    /**
     * BACKEND INTEGRATION REQUIRED
     * ==============================
     * This form is ready for connection to a backend submission endpoint.
     * Replace the placeholder below with your actual form submission logic:
     *
     * Option 1: Connect to Madras Flavours existing contact/enquiry system
     *   - POST to the WordPress contact form endpoint or REST API
     *   - e.g. fetch('https://madrasflavours.co.uk/wp-json/contact-form-7/v1/contact-forms/{id}/feedback', ...)
     *
     * Option 2: Use a third-party form service (Formspree, EmailJS, etc.)
     *   - Replace the URL and payload format as required
     *
     * Option 3: Connect to a custom API endpoint
     *   - POST to your own backend API
     *
     * IMPORTANT: Do not expose API keys or credentials in client-side code.
     * Use environment variables (NEXT_PUBLIC_ prefix for client-side) or
     * a server-side API route (/api/onam-enquiry) to handle sensitive data.
     *
     * Example server-side route: src/app/api/onam-enquiry/route.ts
     */

    try {
      // Placeholder: simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call:
      // const response = await fetch('/api/onam-enquiry', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData(initialFormData);
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-lg text-sm text-[#0E1317] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all duration-200 ${
      errors[field] ? 'border-red-500 bg-red-50' : 'border-gray-300'
    }`;

  const labelClass = 'block text-sm font-semibold text-[#0E1317] mb-1.5';

  return (
    <section
      id="enquiry-form"
      className="py-16 md:py-24 bg-[#F2EDE3]"
      aria-labelledby="form-heading"
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Header & Info */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F] mb-3">
              Get in Touch
            </p>
            <h2
              id="form-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#DF3F00] mb-4 leading-tight"
            >
              Make Your Onam Celebration Special
            </h2>
            <p className="text-[#2E2E2E] text-base leading-relaxed mb-8">
              Tell us a little about your celebration and our team can discuss the available menu and catering options with you.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Hounslow',
                  value: '020 8607 4204',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Reading',
                  value: '0118 950 5626',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Catering Enquiries',
                  value: 'Use the form to get in touch',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center text-[#2D6A4F] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#666666]">{item.label}</p>
                    <p className="text-sm font-bold text-[#0E1317]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#2D6A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0E1317] mb-2">Enquiry Received</h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">
                  Thank you for your Onam Sadhya enquiry. Our team will review your details and be in touch to discuss the available options for your celebration.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-bold text-[#2D6A4F] hover:text-[#1B4332] transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Onam Sadhya enquiry form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="field-fullName" className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClass('fullName')}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                    />
                    {errors.fullName && <p id="error-fullName" className="mt-1 text-xs text-red-600" role="alert">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="field-email" className={labelClass}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      placeholder="your@email.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'error-email' : undefined}
                    />
                    {errors.email && <p id="error-email" className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="field-phone" className={labelClass}>
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                      placeholder="Your phone number"
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                    />
                    {errors.phone && <p id="error-phone" className="mt-1 text-xs text-red-600" role="alert">{errors.phone}</p>}
                  </div>

                  {/* Event Date */}
                  <div>
                    <label htmlFor="field-eventDate" className={labelClass}>
                      Event Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={inputClass('eventDate')}
                      aria-required="true"
                      aria-describedby={errors.eventDate ? 'error-eventDate' : undefined}
                    />
                    {errors.eventDate && <p id="error-eventDate" className="mt-1 text-xs text-red-600" role="alert">{errors.eventDate}</p>}
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label htmlFor="field-guestCount" className={labelClass}>
                      Estimated Number of Guests <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-guestCount"
                      name="guestCount"
                      type="text"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className={inputClass('guestCount')}
                      placeholder="e.g. 20"
                      aria-required="true"
                      aria-describedby={errors.guestCount ? 'error-guestCount' : undefined}
                    />
                    {errors.guestCount && <p id="error-guestCount" className="mt-1 text-xs text-red-600" role="alert">{errors.guestCount}</p>}
                  </div>

                  {/* Event Type */}
                  <div>
                    <label htmlFor="field-eventType" className={labelClass}>
                      Event Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="field-eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className={inputClass('eventType')}
                      aria-required="true"
                      aria-describedby={errors.eventType ? 'error-eventType' : undefined}
                    >
                      <option value="">Select event type</option>
                      <option value="family-gathering">Family Gathering</option>
                      <option value="community-event">Community Event</option>
                      <option value="corporate-event">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.eventType && <p id="error-eventType" className="mt-1 text-xs text-red-600" role="alert">{errors.eventType}</p>}
                  </div>

                  {/* Venue / Postcode */}
                  <div>
                    <label htmlFor="field-venuePostcode" className={labelClass}>
                      Event Postcode or Venue Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-venuePostcode"
                      name="venuePostcode"
                      type="text"
                      value={formData.venuePostcode}
                      onChange={handleChange}
                      className={inputClass('venuePostcode')}
                      placeholder="e.g. TW3 1NA or venue name"
                      aria-required="true"
                      aria-describedby={errors.venuePostcode ? 'error-venuePostcode' : undefined}
                    />
                    {errors.venuePostcode && <p id="error-venuePostcode" className="mt-1 text-xs text-red-600" role="alert">{errors.venuePostcode}</p>}
                  </div>

                  {/* Service Preference */}
                  <div className="sm:col-span-2">
                    <label htmlFor="field-servicePreference" className={labelClass}>
                      Service Preference <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="field-servicePreference"
                      name="servicePreference"
                      value={formData.servicePreference}
                      onChange={handleChange}
                      className={inputClass('servicePreference')}
                      aria-required="true"
                      aria-describedby={errors.servicePreference ? 'error-servicePreference' : undefined}
                    >
                      <option value="">Select service preference</option>
                      <option value="restaurant-dining">Restaurant Dining</option>
                      <option value="catering-enquiry">Catering Enquiry</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                    {errors.servicePreference && <p id="error-servicePreference" className="mt-1 text-xs text-red-600" role="alert">{errors.servicePreference}</p>}
                  </div>

                  {/* Additional Requirements */}
                  <div className="sm:col-span-2">
                    <label htmlFor="field-additionalRequirements" className={labelClass}>
                      Additional Requirements
                    </label>
                    <textarea
                      id="field-additionalRequirements"
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      className={`${inputClass('additionalRequirements')} resize-none`}
                      rows={4}
                      placeholder="Tell us anything else about your celebration, dietary requirements or special requests..."
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="sm:col-span-2">
                    <div className="flex items-start gap-3">
                      <input
                        id="field-privacyConsent"
                        name="privacyConsent"
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 text-[#2D6A4F] border-gray-300 rounded focus:ring-[#2D6A4F] flex-shrink-0"
                        aria-required="true"
                        aria-describedby={errors.privacyConsent ? 'error-privacyConsent' : undefined}
                      />
                      <label htmlFor="field-privacyConsent" className="text-xs text-[#666666] leading-relaxed">
                        I agree that Madras Flavours may use the information I have provided to respond to my enquiry. My data will be handled in accordance with the{' '}
                        <a
                          href="https://madrasflavours.co.uk/privacy-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2D6A4F] font-semibold hover:underline"
                        >
                          Madras Flavours Privacy Policy
                        </a>.
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                    </div>
                    {errors.privacyConsent && <p id="error-privacyConsent" className="mt-1 text-xs text-red-600" role="alert">{errors.privacyConsent}</p>}
                  </div>
                </div>

                {/* Error state */}
                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                    <p className="text-sm text-red-700">
                      We were unable to submit your enquiry at this time. Please try again or contact us directly by phone.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-6 w-full bg-[#2D6A4F] hover:bg-[#1B4332] disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Enquiry...
                    </>
                  ) : (
                    'Send Onam Enquiry'
                  )}
                </button>

                <p className="text-center text-xs text-[#666666] mt-3">
                  Submitting this form does not constitute a confirmed booking. Our team will be in touch to discuss your requirements.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
