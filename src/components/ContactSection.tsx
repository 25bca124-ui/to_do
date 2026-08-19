import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Github, Linkedin, Twitter, MessageSquare, Check, Copy, Clock, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    projectType: 'Engineering',
    message: '',
    budget: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Project Inquiry',
      projectType: 'Engineering',
      message: '',
      budget: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Connect & Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-3">
              05 / Connect
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-white tracking-tight">
              Let's talk.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mt-4 max-w-sm">
              Available for full-time software engineering roles, high-impact consulting, or open-source initiatives.
            </p>
          </div>

          {/* Social Icons row */}
          <div className="space-y-4 pt-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono">
              Social Profiles
            </div>
            <div className="flex items-center space-x-3">
              <a
                id="contact-social-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-zinc-400"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                id="contact-social-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-zinc-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                id="contact-social-twitter"
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-zinc-400"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <button
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-zinc-400 cursor-pointer"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Direct Email Display */}
          <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Direct Inbox</span>
            <div className="text-sm font-mono text-white select-all">{PERSONAL_INFO.email}</div>
          </div>

          {/* Time & Location */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-2">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Bangalore, IN: {currentTime || '12:00 PM'}</span>
            </span>
            <span className="text-emerald-400">Online</span>
          </div>
        </div>

        {/* Right Column: Sleek Underline Inquiries Form */}
        <div className="lg:col-span-7 lg:border-l lg:border-white/5 lg:pl-12">
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/30 border border-white/5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-8">
              Inquiries &amp; Messages
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif italic text-white">
                    Message Dispatched.
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                    Thank you, {formData.name}. Akash will review your note and reply to <span className="text-white">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 bg-white text-black text-[10px] uppercase font-bold tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-mono">
                      Name
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:border-white focus:outline-hidden placeholder:text-zinc-700 text-white transition-colors"
                    />
                    {errors.name && (
                      <p className="text-[10px] font-mono text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-mono">
                      Email
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:border-white focus:outline-hidden placeholder:text-zinc-700 text-white transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[10px] font-mono text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-mono">
                      Inquiry Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:border-white focus:outline-hidden text-zinc-300 transition-colors"
                    >
                      <option value="Project Inquiry" className="bg-zinc-900 text-white">Full-Time Software Engineer Role</option>
                      <option value="Consulting" className="bg-zinc-900 text-white">Technical Consulting / Advisory</option>
                      <option value="Open Source" className="bg-zinc-900 text-white">Open-Source Collaboration</option>
                      <option value="General" className="bg-zinc-900 text-white">General Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-mono">
                      Message
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      placeholder="Tell me about your project or team..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:border-white focus:outline-hidden placeholder:text-zinc-700 text-white transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-[10px] font-mono text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    id="contact-submit-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 bg-white text-black text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-zinc-200 transition-all rounded-full cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
