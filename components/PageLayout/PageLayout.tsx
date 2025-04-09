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
        <Image fit="fill" src="/lvhpBanner.png" alt="LONHP" h={140} />
      </Container>
      <Navbar />
      <Container fluid className={styles.content}>
        {!isMobile &&
          <Container className={styles.sideBannerLeft}>
            <table>
              <tbody>
                <tr>
                  <th>Las Redes</th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.instagram.com/brray"
                      target="_blank"
                    >
                      Instagram - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="www.twitch.com/lasovejasnegrasmusic"
                      target="_blank"
                    >
                      Tik Tok - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://x.com/brraypr"
                      target="_blank"
                    >
                      Twitter - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/BrrayPR"
                      target="_blank"
                    >
                      Facebook - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.instagram.com/lon_lvhp"
                      target="_blank"
                    >
                      Instagram - LON Música
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.instagram.com/lasovejasnegras.ent"
                      target="_blank"
                    >
                      Instagram - LON Entertainment
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://x.com/lasovejastv?s=11"
                      target="_blank"
                    >
                      Twitter - LON Entertainment
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.tiktok.com/@lasovejasnegras.ent"
                      target="_blank"
                    >
                      Tik Tok - LON Entertainment
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <Image fit="contain" src="/darkCombo4.png" alt="LONHP" h={210} />
            <table>
              <tbody>
                <tr>
                  <th>Las Plataformas</th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://m.soundcloud.com/brray"
                      target="_blank"
                    >
                      Soundcloud - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://open.spotify.com/artist/1GKIlPFdcewHtpDVCQ8zmJ?si=tig4PSjuSiSnG1V6uOTHQQ"
                      target="_blank"
                    >
                      Spotify - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://music.apple.com/us/artist/brray/1103506647"
                      target="_blank"
                    >
                      Apple Music - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://youtube.com/@brray"
                      target="_blank"
                    >
                      YouTube - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://tidal.com/browse/artist/7843722"
                      target="_blank"
                    >
                      Tidal - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.deezer.com/en/artist/10186978"
                      target="_blank"
                    >
                      Deezer - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://audiomack.com/brrayoficial"
                      target="_blank"
                    >
                      Audiomack - Brray
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.twitch.tv/lasovejasnegrasmusic"
                      target="_blank"
                    >
                      Twitch - LON Música
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://discord.gg/cSwBZbZbtM"
                      target="_blank"
                    >
                      Discord - LON Entertainment
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href=" https://kick.com/lasovejasprietastv"
                      target="_blank"
                    >
                      Kick - LON Entertainment
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://youtube.com/@lasovejasnegras-ent"
                      target="_blank"
                    >
                      YouTube - LON Entertainment
                    </a>
                  </td>
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