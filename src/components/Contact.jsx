import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-brand-blue" />,
      title: 'Email',
      value: 'shunmugaraj.r2024aiml@sece.ac.in',
      href: 'mailto:shunmugaraj.r2024aiml@sece.ac.in'
    },
    {
      icon: <Phone className="h-5 w-5 text-brand-purple" />,
      title: 'Phone',
      value: '+91 9344359656',
      href: 'tel:+919344359656'
    },
    {
      icon: <MapPin className="h-5 w-5 text-pink-500" />,
      title: 'Location',
      value: 'Sri Eshwar College of Engineering, Tamil Nadu, India',
      href: 'https://www.google.com/maps/place/Sri+Eshwar+College+of+Engineering,+Coimbatore/@10.827908,77.0556459,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba84ee37569ae7f:0x3c5b1824b6e79192!8m2!3d10.827908!4d77.0605168!16s%2Fg%2F1tdyp6pq?hl=en&entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Contact details + Google Map */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Contact Details List */}
            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassmorphism-card p-4 rounded-xl flex items-center space-x-4 hover:scale-102 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Map Mockup */}
            <div className="glassmorphism-card rounded-2xl overflow-hidden flex-grow min-h-[250px] relative">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=Sri%20Eshwar%20College%20of%20Engineering,%20Coimbatore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[250px] border-0 opacity-70 dark:opacity-60 contrast-125 dark:invert dark:contrast-100 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-[#0f172a]/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-purple transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-[#0f172a]/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-purple transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-[#0f172a]/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-purple transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    }`}
                    placeholder="Enter your message"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500">{errors.message}</span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-102 shadow-lg ${
                    submitSuccess
                      ? 'bg-emerald-600 shadow-emerald-600/20'
                      : 'bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 shadow-brand-blue/20'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitSuccess ? (
                    <>
                      <Check className="h-5 w-5 animate-bounce" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
