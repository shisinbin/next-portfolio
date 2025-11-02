import Link from 'next/link';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

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
            <a
              href={links.live}
              target='_blank'
              rel='noopener noreferrer'
            >
              Live
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
