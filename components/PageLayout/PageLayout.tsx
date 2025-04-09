"use client"

import Navbar from '../Navbar/Navbar';
import { Container, Image } from '@mantine/core';
import styles from './PageLayout.module.css';
import { useIsMobile } from '../../utils/isMobile';
export default function PageLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <Container fluid className={styles.container}>
      <Container fluid className={styles.topBanner}>
        <Image fit="contain" src="/darkTypography4.png" alt="LONHP" h={110} />
      </Container>
      <Navbar />
      <Container fluid className={styles.content}>
        {!isMobile &&
          <Container className={styles.sideBannerLeft}>       
            <Image fit="contain" src="/darkCombo4.png" alt="LONHP" h={210} />
            <table>
            <tbody>
            <tr>
                <th>En linea!</th>
              </tr>
              <tr>
                <td>We have 700 users online</td>
              </tr>
            </tbody>
            </table>
            <img src="https://media.tenor.com/klTGLoPtC6EAAAAM/minaluvr.gif" alt="gif1" />
          </Container>
        }
        {children}
        {!isMobile &&
          <Container className={styles.sideBannerRight}>
            <Image src="arteCorazon.png" alt="LONHP2" height={1300} />
          </Container>
        }
      </Container>
    </Container>
  )
}