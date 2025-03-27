import Navbar from '../Navbar/Navbar';
import { Image } from '@mantine/core';
import styles from './PageLayout.module.css';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.topBanner}>
        <Image src="/lvhpBanner.png" alt="LONHP" height={110} />
      </div>
      <Navbar />
      <div className={styles.content}>
        {children}
        <div className={styles.sideBanner}>
          <Image src="/lvhpBanner.png" alt="LONHP" height={110} />
        </div>
      </div>
    </div>
  )
}