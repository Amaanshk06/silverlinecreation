import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby1fgS9eqlFl-lIOQCeXHx-0AClAerH2zgPJqscEtd5rGbLH9R7oeHDoaKtrRzNUik0/exec"; 

  // --- Validation ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Please enter a valid Indian mobile number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message should be at least 10 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Phone formatting ---
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,5})(\d{0,5})$/);
    return match ? (!match[2] ? match[1] : `${match[1]}-${match[2]}`) : value;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'phone' ? formatPhoneNumber(value) : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // --- Submit handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setResponseStatus(null);

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === 'success') {
        setResponseStatus('success');
        setResponseMessage(result.message);
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setResponseStatus('error');
        setResponseMessage(result.message || 'Something went wrong');
      }
    } catch (err) {
      setResponseStatus('error');
      setResponseMessage('Failed to submit. Check your connection.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Response UI ---
  if (responseStatus) {
    const isSuccess = responseStatus === 'success';
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`bg-white rounded-2xl shadow-xl p-8 text-center ${!isSuccess ? 'border border-red-300' : ''}`}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}>
          {isSuccess ? <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" /> : <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />}
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{isSuccess ? 'Thank You!' : 'Oops!'}</h3>
        <p className={`text-gray-600 mb-4 ${!isSuccess ? 'text-red-600' : ''}`}>{responseMessage}</p>
        {isSuccess && <div className="bg-green-50 border border-green-200 rounded-lg p-4"><p className="text-green-800 text-sm"><strong>Next Steps:</strong> Our team will review your requirements and contact you.</p></div>}
        <Button onClick={() => setResponseStatus(null)} variant="default" size="md" className="mt-6">Fill Another Request</Button>
      </motion.div>
    );
  }

  // --- Form UI ---
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Schedule Your Consultation</h2>
        <p className="text-gray-600">Fill out the form below and our experts will get in touch with you.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} error={errors.name} required />
          <Input label="Phone Number" type="tel" name="phone" placeholder="Enter your mobile number" value={formData.phone} onChange={handleInputChange} error={errors.phone} required description="We'll use this to schedule your consultation" />
        </div>
        <Input label="Email Address" type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} error={errors.email} required description="We'll send you consultation details and project updates" />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Details <span className="text-accent">*</span></label>
          <textarea name="message" rows={5} placeholder="Tell us about your project requirements, timeline, budget range..." value={formData.message} onChange={handleInputChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none transition-colors ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'}`} />
          {errors.message && <div className="flex items-center mt-2 text-accent text-sm"><AlertCircle className="w-4 h-4 mr-1" />{errors.message}</div>}
          <p className="text-sm text-gray-500 mt-1">Minimum 10 characters required</p>
        </div>
        <Button type="submit" variant="default" size="lg" loading={isSubmitting} iconName="Send" iconPosition="right" fullWidth className="bg-gradient-to-r from-accent to-accent-600">{isSubmitting ? 'Submitting...' : 'Schedule Consultation'}</Button>
      </form>
      <div className="mt-6 pt-6 border-t border-gray-200"><p className="text-sm text-gray-500 text-center"><strong>Privacy Assurance:</strong> Your information is secure.</p></div>
    </motion.div>
  );
};

export default ContactForm;
