import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';
import Register from 'sections/register';

export default function IndexPage() {
  const meta = [
    {
      name: `og:image`,
      content: `/social_preview.png`,
    },
    {
      name: `twitter:image`,
      content: `/social_preview.png`,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Rappo - Live Chat Tool" description="Instantly Connect with Your Customers" meta={meta}/>
          <Banner />
          <Register/>
          {/* <KeyFeature />
          <CoreFeature />
          <Feature />
          <PartnerSection />
          <WorkFlow />
          <TestimonialCard />
          <SecurePayment />
          <Package />
          <Faq /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
