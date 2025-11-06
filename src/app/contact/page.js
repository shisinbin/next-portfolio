import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import styles from './contactpage.module.css';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Me',
};

function ContactPage() {
  return (
    <Section>
      <SectionHeading>Contact Page</SectionHeading>

      <p className={styles.intro}>
        Whether you&apos;d like to discuss a project, collaboration,
        or just say hello, feel free to drop me a message.
      </p>

      <ContactForm />
    </Section>
  );
}

export default ContactPage;
