
import { Helmet } from 'react-helmet';

import ContactForm from './components/contact-form';
import InnerBanner from './components/InnerBanner';

const ContactPage = () => {

  return (
    <div className="contact-us">
      <Helmet>
        <title>
          Contact us | Support | Feedback | Best Cloud Services | Radiansys
        </title>
        <meta property="og:title" content="contact-us" />
        <meta
          property="og:description"
          content="Contact Us Get in touch &amp; get started Please send us a message and we will get back to you Connect With Us: sales@radiansys.com"
        />
      </Helmet>
      <InnerBanner />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
