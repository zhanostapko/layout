import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Hero from "@/components/Hero";
import HowToUseApp from "@/components/HowToUseApp";
import LostItems from "@/components/LostItems";
import JoinUs from "@/components/JoinUs";
import { getLandingPageContent, getLandingPageSettings } from "@/lib/datocms";
import {
  HomepageContent,
  LandingPageSettings,
  StructuredHomepage,
} from "@/types/content";
import { fallbackContent } from "@/data/fallbackContent";
import { Metadata } from "next";

export const revalidate = 900;

export async function generateMetadata(): Promise<Metadata> {
  const lang = "lv";
  const settings = (await getLandingPageSettings(lang)) as LandingPageSettings;
  const seo = settings?._site?.globalSeo?.fallbackSeo;
  const favicon = settings?._site?.favicon?.url;

  return {
    title: {
      default: seo?.title || "Default Title",
      template: `%s ${settings?._site?.globalSeo?.titleSuffix || ""}`,
    },
    description: seo?.description || "Default description",
    icons: {
      icon: favicon || "/favicon.ico",
    },
  };
}

export default async function LandingPage() {
  let content = null;
  const lang = "lv";
  content = await getLandingPageContent(lang);

  if (!content) {
    content = fallbackContent;
  }

  const { homepage } = content as HomepageContent;

  const structuredHomepage: StructuredHomepage = {
    hero: {
      socialProof: homepage.heroSocialProof,
      notificationTitle: homepage.heroNotificationTitle,
      notificationMessage: homepage.heroNotificationMessage,
      iosLink: homepage.heroIosLink,
      headline: homepage.heroHeadline,
      callToAction: homepage.heroCallToAction,
      androidLink: homepage.heroAndroidLink,
      subheadline: homepage.heroSubheadline,
      heroBuyButtonText: homepage.heroBuyButtonText,
    },
    steps: {
      headline: homepage.stepsHeadline,
      items: homepage.stepsItems,
    },
    features: homepage.featureItems,

    action: {
      androidLink: homepage.actionAndroidLink,
      headline: homepage.actionHeadline,
      iosLink: homepage.actionIosLink,
      subheadline: homepage.actionSubheadline,
      socialProof: homepage.testimonialsSocialProof,
      actionBuyButton: homepage.actionBuyButton,
    },
    testimonials: {
      headline: homepage.testimonialsHeadline,
      subheadline: homepage.testimonialsSubheadline,
      items: homepage.testimonialsItems,
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <Hero content={structuredHomepage.hero} />

      <LostItems content={structuredHomepage.features} />

      <HowToUseApp content={structuredHomepage.steps} />

      <Reviews content={structuredHomepage.testimonials} />

      <JoinUs content={structuredHomepage.action} />

      <Footer />
    </div>
  );
}
