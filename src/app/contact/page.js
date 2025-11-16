import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import styles from './contactpage.module.css';

export const metadata = {
  title: 'Contact Me',
};

function ContactPage() {
  return (
    <PageLayout>
      <section>
        <SectionHeading>Contact Page</SectionHeading>

        <p className={styles.intro}>
          Whether you&apos;d like to discuss a project, collaboration,
          or just say hello, feel free to drop me a message.
        </p>

        <ContactForm />

        <SocialLinks />
      </section>
    </PageLayout>
  );
}

export default ContactPage;
