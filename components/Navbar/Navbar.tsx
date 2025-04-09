"use client"

import { Button, Divider } from '@mantine/core';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useIsMobile } from '../../utils/isMobile';
import styles from './Navbar.module.css';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    !isMobile ?
      <div className={styles.container}>
        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => router.push('/home')}
        >
          Home
        </Button>

        <Divider orientation="vertical" className={styles.divider} />

        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => window.open('https://shop.universalmusica.com/collections/brray', '_blank')}
        >
          Merch <FaExternalLinkAlt />
        </Button>

        <Divider orientation="vertical" className={styles.divider} />

        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => router.push('/l-o-n')}
        >
          L-O-N
        </Button>

        <Divider orientation="vertical" className={styles.divider} />

        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => router.push('/el-reb')}
        >
          El Rebaño
        </Button>

        <Divider orientation="vertical" className={styles.divider} />

        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => router.push('/videos')}
        >
          Videos de Música
        </Button>

        <Divider orientation="vertical" className={styles.divider} />

        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => router.push('/clips')}
        >
          Clips
        </Button>

        <Divider orientation="vertical" className={styles.divider} />

        <Button
          variant="transparent"
          classNames={{
            root: styles.button,
            label: styles.label
          }}
          onClick={() => router.push('/inframundo')}
        >
          Inframundo
        </Button>

      </div>
      :
      <div />
  )
}

