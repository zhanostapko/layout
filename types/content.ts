export type HeroSection = {
  socialProof: string;
  notificationTitle: string;
  notificationMessage: string;
  iosLink: string;
  headline: string;
  callToAction: string;
  androidLink: string;
  subheadline: string;
  heroBuyButtonText: string;
};

export type StepItem = {
  headline: string;
  subheadline: string;
};

export type StepsSection = {
  headline: string;
  items: StepItem[];
};

export type FeatureItem = {
  headline: string;
  subheadline: string;
};

export type ActionSection = {
  androidLink: string;
  headline: string;
  iosLink: string;
  subheadline: string;
  socialProof: string;
  actionBuyButton: string;
};

export type TestimonialItem = {
  message: string;
  name: string;
  avatar: {
    url: string;
  };
};

export type TestimonialsSection = {
  headline: string;
  subheadline: string;
  items: TestimonialItem[];
};

export type StructuredHomepage = {
  hero: HeroSection;
  steps: StepsSection;
  features: FeatureItem[];
  action: ActionSection;
  testimonials: TestimonialsSection;
};

export type HomepageContent = {
  homepage: {
    heroBuyButtonText: string;
    heroSocialProof: string;
    heroNotificationTitle: string;
    heroNotificationMessage: string;
    heroIosLink: string;
    heroHeadline: string;
    heroCallToAction: string;
    heroSubheadline: string;
    heroAndroidLink: string;
    stepsHeadline: string;
    stepsItems: {
      headline: string;
      subheadline: string;
    }[];
    featureItems: {
      headline: string;
      subheadline: string;
    }[];
    actionAndroidLink: string;
    actionHeadline: string;
    actionIosLink: string;
    actionSubheadline: string;
    actionBuyButton: string;
    testimonialsHeadline: string;
    testimonialsSubheadline: string;
    testimonialsSocialProof: string;
    testimonialsItems: {
      message: string;
      name: string;
      avatar: {
        url: string;
      };
    }[];
  };
};

export type LandingPageSettings = {
  _site: {
    globalSeo: {
      titleSuffix: string;
      fallbackSeo: {
        title: string;
        description: string;
      };
    };
    favicon: {
      url: string;
    };
  };
};
