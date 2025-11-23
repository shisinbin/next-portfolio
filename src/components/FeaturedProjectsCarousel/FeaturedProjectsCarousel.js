import Carousel from '../Carousel';
import FeaturedProjectCard from '../FeaturedProjectCard';
import styles from './FeaturedProjectsCarousel.module.css';

function FeaturedProjectsCarousel({ projects }) {
  if (!projects.length) return null;

  const cards = projects.map((project) => (
    <FeaturedProjectCard key={project.slug} project={project} />
  ));

  return (
    <Carousel
      items={cards}
      variant='featured'
      className={styles.carousel}
    />
  );
}

export default FeaturedProjectsCarousel;
