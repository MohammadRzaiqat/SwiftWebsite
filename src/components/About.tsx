
import React from 'react';
import { Award, Users, Target, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('about.industryLeadership'),
      description: t('about.industryLeadershipDesc')
    },
    {
      icon: Users,
      title: t('about.expertTeam'),
      description: t('about.expertTeamDesc')
    },
    {
      icon: Target,
      title: t('about.precisionFocus'),
      description: t('about.precisionFocusDesc')
    },
    {
      icon: Shield,
      title: t('about.trustedPartner'),
      description: t('about.trustedPartnerDesc')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {t('about.sectionTitle')}
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {t('about.description2')}
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">{t('about.globalPartners')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">99.8%</div>
                <div className="text-sm text-muted-foreground">{t('about.successRate')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">{t('about.support')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`service-card ${index % 2 === 0 ? 'mt-8' : ''}`}
                  >
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="service-card text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">{t('about.mission')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>
          <div className="service-card text-center">
            <h3 className="text-xl font-bold mb-4 text-accent">{t('about.vision')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
