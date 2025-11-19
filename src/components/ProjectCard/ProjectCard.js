import Link from 'next/link';
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import SmartLink from '../SmartLink';
import Card from '../Card';

function ProjectCard({ project }) {
  const {
    slug,
    title,
    description,
    tech = [],
    image,
    links,
  } = project;

  const footer = links && (
    <div className={styles.links}>
      {links.live && <SmartLink href={links.live}>Live</SmartLink>}
      {links.github && (
        <SmartLink href={links.github}>GitHub</SmartLink>
      )}
    </div>
  );

  const imageSlot = image && (
    <div className={styles.imageWrapper}>
      <Image src={image} alt={`Screenshot of ${title}`} fill />
    </div>
  );

  return (
    <Card
      className={styles.project}
      footer={footer}
      imageSlot={imageSlot}
      href={`/work/${slug}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {description && <p>{description}</p>}
      {tech.length > 0 && (
        <ul className={styles.techList}>
          {tech.map((t) => (
            <li key={t} className={styles.techItem}>
              {t}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default ProjectCard;
