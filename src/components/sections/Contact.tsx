import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-secondary-600">
            Have questions or need more information? Feel free to reach out to us. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8 h-full reveal">
            <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary-800 mb-1">Address</h4>
                  <p className="text-secondary-600">123 Education Ave, Learning City, ED 54321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary-800 mb-1">Email</h4>
                  <p className="text-secondary-600">info@modernacademy.edu</p>
                  <p className="text-secondary-600">admissions@modernacademy.edu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary-800 mb-1">Phone</h4>
                  <p className="text-secondary-600">Main: (123) 456-7890</p>
                  <p className="text-secondary-600">Admissions: (123) 456-7891</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-secondary-800 mb-4">Operating Hours</h4>
              <table className="w-full text-secondary-600">
                <tbody>
                  <tr>
                    <td className="py-1">Monday - Friday:</td>
                    <td className="py-1">8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1">Saturday:</td>
                    <td className="py-1">9:00 AM - 1:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1">Sunday:</td>
                    <td className="py-1">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="glass-panel p-8 reveal">
            <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Send Us a Message</h3>
            
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-8"
              >
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h4 className="text-xl font-medium text-secondary-800 mb-2">Message Sent!</h4>
                <p className="text-secondary-600 text-center">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-secondary-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-secondary-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-secondary-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-input w-full"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Programs">Programs</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-secondary-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="glass-input w-full"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;