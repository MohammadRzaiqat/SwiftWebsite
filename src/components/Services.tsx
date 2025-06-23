
import React from 'react';
import { Truck, Globe, FileText, Factory, Wrench, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';


const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('services.importExport'),
      description: t('services.importExportDesc'),
      features: t('services.importExportFeatures')
    },
    {
      icon: FileText,
      title: t('services.documentation'),
      description: t('services.documentationDesc'),
      features: t('services.documentationFeatures')
    },
    {
      icon: Headphones,
      title: t('services.support247'),
      description: t('services.support247Desc'),
      features: t('services.support247Features')
    },
    {
      icon: Truck,
      title: t('services.automotiveParts'),
      description: t('services.automotivePartsDesc'),
      features: t('services.automotivePartsFeatures')
    },
    {
      icon: Wrench,
      title: t('services.maintenanceEquipment'),
      description: t('services.maintenanceEquipmentDesc'),
      features: t('services.maintenanceEquipmentFeatures')
    },
    {
      icon: Factory,
      title: t('services.industrialMachinery'),
      description: t('services.industrialMachineryDesc'),
      features: t('services.industrialMachineryFeatures')
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {(Array.isArray(service.features) 
                      ? service.features 
                      : typeof service.features === 'string' 
                        ? service.features.split(',') 
                        : [service.features]
                    ).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="service-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t('services.ctaTitle')}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('services.ctaDesc')}
            </p>
            <a href="#contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                {t('services.ctaButton')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
