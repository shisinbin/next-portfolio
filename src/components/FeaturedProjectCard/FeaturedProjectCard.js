import Image from 'next/image';
import Card from '../Card';
import styles from './FeaturedProjectCard.module.css';

function FeaturedProjectCard({ project }) {
  const { title, description, image, slug, tech } = project;

  const imageSlot = (
    <div className={styles.imageWrapper}>
      <Image src={image} alt={title} className={styles.image} fill />
    </div>
  );

  return (
    <Card
      className={styles.featured}
      href={`/work/${slug}`}
      imageSlot={imageSlot}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <ul className={styles.techList}>
        {tech?.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

export default FeaturedProjectCard;
