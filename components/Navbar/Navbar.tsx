import { Button, Divider } from '@mantine/core';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
  <div className={styles.container}>
    <Button variant="transparent">Button</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">Button</Button>
  </div>
  )
}

