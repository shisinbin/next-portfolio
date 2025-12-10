import styles from './notfound.module.css';
import SmartLink from '@/components/SmartLink';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <SmartLink href='/'>Return Home</SmartLink>
    </div>
  );
}

export default NotFound;
