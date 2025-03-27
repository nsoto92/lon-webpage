import HomeContent from '@/components/HomePage/homeContent';

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeContent />
    </div>
  );
}
