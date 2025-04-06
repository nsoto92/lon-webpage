import { Button, Divider } from '@mantine/core';
import { FaExternalLinkAlt } from "react-icons/fa";

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
  <div className={styles.container}>
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}}>Home</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}} >Merch <FaExternalLinkAlt /></Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}}>L-O-N</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}}>El Rebaño</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}}>Videos de Música</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}}>Clips</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" classNames={{root: styles.button, label: styles.label}}>Inframundo</Button>
  </div>
  )
}

