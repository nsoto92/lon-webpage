import Navbar from '../Navbar/Navbar';
import { Container, Image } from '@mantine/core';
import styles from './PageLayout.module.css';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Container fluid className={styles.topBanner}>
        <Image fit="contain" src="/darkTypography4.png" alt="LONHP" h={110} />
      </Container>
      <Navbar />
      <Container className={styles.content}>
        {children}
        <Container className={styles.sideBanner}>
         <Image src="arteCorazon.png" alt="LONHP2" height={1100}/>
        </Container>
      </Container>
    </Container>
  )
}