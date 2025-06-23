
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/components/ui/use-toast"


const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Handle form submission here
      console.log('Form submitted:', formData);
      
      // Show success toast
      toast({
        title: t('contact.success'),
        description: t('contact.successMessage'),
        duration: 3000,
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.errorMessage'),
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ["+90 212 555 1234"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@swift-trade.com", "support@swift-trade.com"],
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ["İkitelli, Istanbul Turkey"],
      action: "https://maps.app.goo.gl/bkPdMSSTAUsyhsBD9"
    },
    {
      icon: Clock,
      title: t('contact.businessHours'),
      details: ["24/7"],
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="service-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.fullName')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="• • • •"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="• • • •"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="• • • •"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="• • • •"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg group">
                {t('contact.sendButton')}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="service-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t('contact.contactInfo')}</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {item.action && detailIndex === 0 ? (
                              <a 
                                href={item.action} 
                                className="hover:text-primary transition-colors inline-flex items-center gap-1"
                              >
                                {detail}
                                {item.title === t('contact.address') && <ExternalLink className="w-3 h-3" />}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="service-card text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-foreground">{t('contact.callUs')}</h4>
                <p className="text-sm text-muted-foreground">{t('contact.callUsDesc')}</p>
              </div>
              <div className="service-card text-center">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-foreground">{t('contact.emailUs')}</h4>
                <p className="text-sm text-muted-foreground">{t('contact.emailUsDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
