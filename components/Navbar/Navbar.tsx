import { Button, Divider } from '@mantine/core';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
  <div className={styles.container}>
    <Button variant="transparent" className={styles.button}>Home</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button} >CDs Reggaetón</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button}>CDs "Old School"</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button}>LON</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button}>Rap Local</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button}>Discografías</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button}>Trap</Button>
    <Divider orientation="vertical" className={styles.divider} />
    <Button variant="transparent" className={styles.button}>Underground</Button>
  </div>
  )
}

