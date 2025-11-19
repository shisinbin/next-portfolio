import { GitHub, Linkedin, Mail, Globe } from 'react-feather';
import styles from './SocialLinks.module.css';

const LINKS = [
  {
    name: 'GitHub',
    icon: GitHub,
    href: 'https://github.com/shisinbin',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/shivraj-binepal-95336325b/',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:shisinbin@gmail.com',
  },
  {
    name: 'Website',
    icon: Globe,
    href: 'https://google.com',
  },
];

function SocialLinks({ heading = 'Find me elsewhere ' }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <ul className={styles.list}>
        {LINKS.map(({ name, icon: Icon, href }) => (
          <li key={name}>
            <a href={href} target='_blank' rel='noopener noreferrer'>
              <Icon aria-hidden='true' />
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SocialLinks;
