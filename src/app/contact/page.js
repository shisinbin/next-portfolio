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
        <div className={styles.content}>
          <p className={styles.intro}>
            Whether you&apos;d like to discuss a project, collaborate,
            or just say hello, feel free to drop me a message.
          </p>

          <ContactForm />
        </div>

        <SocialLinks />
      </section>
    </PageLayout>
  );
}

export default ContactPage;
