import Link from 'next/link';
import styles from './NextProject.module.css';
import { ArrowRight } from 'react-feather';
import Image from 'next/image';
import { getProjectBySlug } from '@/lib/projects';
import Card from '../Card';

async function NextProject({ slug }) {
  const project = await getProjectBySlug(slug);
  if (!project) return null;

  const { title, description, image } = project.frontmatter;

  const imageSlot = image && (
    <div className={styles.imageWrapper}>
      <Image src={image} alt='' fill className={styles.image} />
      <div className={styles.fade} />
    </div>
  );

  return (
    <aside className={styles.wrapper}>
      <Card
        href={`/work/${slug}`}
        className={styles.next}
        imageSlot={imageSlot}
      >
        <div className={styles.topRow}>
          <span>Next project</span>
          <ArrowRight size={14} className={styles.icon} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </Card>
    </aside>
  );
}

export default NextProject;
