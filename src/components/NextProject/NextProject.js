import Link from 'next/link';
import styles from './NextProject.module.css';
import { ArrowRight } from 'react-feather';
import Image from 'next/image';
import { getProjectBySlug } from '@/lib/projects';

async function NextProject({ slug }) {
  const project = await getProjectBySlug(slug);
  if (!project) return null;

  const { title, description, image } = project.frontmatter;

  return (
    <aside className={styles.wrapper}>
      <Link href={`/work/${slug}`} className={styles.card}>
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt=''
              fill
              sizes='(max-width: 800px) 100vw, 300px'
              className={styles.image}
            />
            <div className={styles.fade} />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span>Next project</span>
            <ArrowRight size={14} className={styles.icon} />
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </div>
      </Link>
    </aside>
  );
}

export default NextProject;
