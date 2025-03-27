import Navbar from '../Navbar/Navbar';
import styles from './Page.module.css';

export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  )
}