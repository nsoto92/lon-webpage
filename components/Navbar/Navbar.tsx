import { Button, Divider } from '@mantine/core';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
  <div className={styles.container}>
    <Button variant="transparent">Home</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">CDs Reggaetón</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">CDs "Old School"</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">LON</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">Rap Local</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">Discografías</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">Trap</Button>
    <Divider orientation="vertical" />
    <Button variant="transparent">Underground</Button>
  </div>
  )
}

