import Link from 'next/link';
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import SmartLink from '../SmartLink';

function ProjectCard({ project }) {
  const {
    slug,
    title,
    description,
    tech = [],
    image,
    links,
  } = project;

  return (
    <article className={styles.card}>
      <Link href={`/work/${slug}`} className={styles.link}>
        {image && (
          <div className={styles.imageWrapper}>
            <Image src={image} alt={`Screenshot of ${title}`} fill />
          </div>
        )}
        <div className={styles.content}>
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
        </div>
      </Link>

      {links && (
        <div className={styles.links}>
          {links.live && (
            <SmartLink href={links.live}>Live</SmartLink>
          )}
          {links.github && (
            <SmartLink href={links.github}>GitHub</SmartLink>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
