import Link from 'next/link';
import styles from './FeaturedProjectCard.module.css';

function FeaturedProjectCard({ project }) {
  const { title, description, image, slug, tech } = project;
  return (
    <article className={styles.wrapper}>
      <Link href={`/work/${slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <ul className={styles.techList}>
            {tech?.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}

export default FeaturedProjectCard;
