import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import use3DTilt from '../hooks/use3DTilt';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const detailsCardRef = use3DTilt(8, 1.012);
  const formCardRef = use3DTilt(8, 1.012);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/dheekshithnaidu@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Message: formData.message
          })
        });
        if (response.ok) {
          setSent(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert("Oops! Something went wrong, please try again.");
        }
      } catch (err) {
        console.error("Form submit error:", err);
        alert("Oops! Network error, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-espresso/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Connect
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Get in Touch
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Block: Business Details */}
          <div ref={detailsCardRef} className="lg:col-span-5 flex flex-col justify-between bg-espresso-dark/20 border border-white/5 rounded-3xl p-8 md:p-10 text-left hover:border-gold/30 hover:shadow-[0_0_30px_rgba(205,164,94,0.08),_0_20px_50px_rgba(0,0,0,0.5)] group">
            <div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                Dheek Laboratory
              </h3>
              <p className="text-sm text-cream-dark/65 font-light leading-relaxed mb-8">
                Drop by our roasting laboratory for private tastings, beans pick-up, or to speak directly with our roasters.
              </p>

              {/* Details List */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-espresso/50 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-dark/50 mb-1">Location</h4>
                    <p className="text-sm text-cream font-medium">85 Ocean Drive, Suite 400, Miami, FL</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-espresso/50 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-dark/50 mb-1">Phone</h4>
                    <p className="text-sm text-cream font-medium"><a href="tel:+18005553433">+1 (800) 555-DHEEK</a></p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-espresso/50 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-dark/50 mb-1">Email</h4>
                    <p className="text-sm text-cream font-medium"><a href="mailto:concierge@dheekcoffee.com">concierge@dheekcoffee.com</a></p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-espresso/50 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-dark/50 mb-1">Hours</h4>
                    <p className="text-sm text-cream font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-xs text-cream-dark/55 mt-0.5">Sat - Sun: 9:00 AM - 4:00 PM (Cupping events only)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social details */}
            <div className="pt-8 border-t border-white/5 mt-8 flex gap-4 items-center">
              <span className="text-xs uppercase tracking-widest text-cream-dark/45">Follow Us:</span>
              <div className="flex gap-3">
                <a href="https://facebook.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream-dark hover:border-gold hover:text-gold transition-colors duration-300" aria-label="Facebook">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream-dark hover:border-gold hover:text-gold transition-colors duration-300" aria-label="Twitter">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://instagram.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream-dark hover:border-gold hover:text-gold transition-colors duration-300" aria-label="Instagram">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Map and Contact Form */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Live Google Map Embed */}
            <div className="relative h-60 rounded-3xl overflow-hidden border border-white/5 shadow-inner bg-espresso-dark/30 hover:border-gold/20 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.221564946357!2d77.61493102072245!3d12.915031200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b354cba285%3A0x32c4ab2c0893f76e!2sGUEST%20INN%20LUXURY%20PG%20FOR%20GENTS%202!5e0!3m2!1sen!2sin!4v1782978470969!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Dheek-cafe Location Map"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div ref={formCardRef} className="bg-espresso-dark/20 border border-white/8 rounded-3xl p-8 text-left hover:border-gold/30 hover:shadow-[0_0_30px_rgba(205,164,94,0.08),_0_20px_50px_rgba(0,0,0,0.5)] group/form">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {!sent ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-cream-dark/50">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-espresso/50 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-cream text-sm focus:border-gold focus:shadow-[0_0_15px_rgba(205,164,94,0.15)] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-wider text-cream-dark/50">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-espresso/50 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-cream text-sm focus:border-gold focus:shadow-[0_0_15px_rgba(205,164,94,0.15)] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-cream-dark/50">Your Message</label>
                      <textarea
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-espresso/50 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-cream text-sm focus:border-gold focus:shadow-[0_0_15px_rgba(205,164,94,0.15)] focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold hover:bg-gold-hover text-chocolate font-bold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-500 cursor-pointer shadow-md self-start hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(205,164,94,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 border border-gold/25 bg-espresso/45 rounded-xl text-center text-gold font-semibold"
                  >
                    Your message was transmitted successfully. Our concierge team will reach out shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
