import { executeQuery } from "@datocms/cda-client";

export const datoFetch: typeof fetch = (input, init = {}) =>
  fetch(input, {
    ...init,
    next: { revalidate: 900 },
  });

export async function getLandingPageContent(locale: string) {
  const query = `
  query MyQuery($locale: SiteLocale!) {
  homepage(locale: $locale, fallbackLocales: en) {
    heroSocialProof
    heroNotificationTitle
    heroNotificationMessage
    heroIosLink
    heroHeadline
    heroCallToAction
    heroSubheadline
    heroAndroidLink
    heroBuyButtonText
    stepsHeadline
    stepsItems {
      headline
      subheadline
    }
    featureItems {
      headline
      subheadline
    }
    actionAndroidLink
    actionHeadline
    actionIosLink
    actionSubheadline
    actionBuyButton
    testimonialsHeadline
    testimonialsSubheadline
    testimonialsSocialProof
    testimonialsItems {
      message
      name
      avatar {
        url
      }
    }
  }
}
`;

  try {
    const data = await executeQuery(query, {
      token: process.env.NEXT_DATOCMS_API_TOKEN!,
      variables: {
        locale,
        fallback: [locale],
      },
      fetchFn: datoFetch,
    });

    return data;
  } catch (e) {
    console.error("[DatoCMS error]", e);
    return null;
  }
}

export async function getLandingPageSettings(locale: string) {
  const query = `
  query MyQuery($locale: SiteLocale!) {
  _site(locale: $locale, fallbackLocales: en) {
    globalSeo {
      titleSuffix
      fallbackSeo {
        description
        title
      }
    }
    favicon {
      url
    }
  }
}
`;

  try {
    const data = await executeQuery(query, {
      token: process.env.NEXT_DATOCMS_API_TOKEN!,
      variables: {
        locale,
        fallback: [locale],
      },

      fetchFn: datoFetch,
    });

    return data;
  } catch (e) {
    console.error("[DatoCMS error]", e);
    return null;
  }
}
