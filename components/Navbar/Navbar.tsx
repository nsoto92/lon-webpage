"use client"

import { Button, Divider } from '@mantine/core';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useIsMobile } from '../../utils/isMobile';
import styles from './Navbar.module.css';

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    !isMobile ?
      <div className={styles.container}>
        <Button variant="transparent" classNames={{ root: styles.button, label: styles.label }}>Home</Button>
        <Divider orientation="vertical" className={styles.divider} />
        <Button
          variant="transparent"
          classNames={{ root: styles.button, label: styles.label }}
          onClick={() => window.open('https://shop.universalmusica.com/collections/brray', '_blank')}
        >
          Merch <FaExternalLinkAlt />
        </Button>
        <Divider orientation="vertical" className={styles.divider} />
        <Button variant="transparent" classNames={{ root: styles.button, label: styles.label }}>L-O-N</Button>
        <Divider orientation="vertical" className={styles.divider} />
        <Button variant="transparent" classNames={{ root: styles.button, label: styles.label }}>El Rebaño</Button>
        <Divider orientation="vertical" className={styles.divider} />
        <Button variant="transparent" classNames={{ root: styles.button, label: styles.label }}>Videos de Música</Button>
        <Divider orientation="vertical" className={styles.divider} />
        <Button variant="transparent" classNames={{ root: styles.button, label: styles.label }}>Clips</Button>
        <Divider orientation="vertical" className={styles.divider} />
        <Button variant="transparent" classNames={{ root: styles.button, label: styles.label }}>Inframundo</Button>
      </div>
      :
      <div />
  )
}

