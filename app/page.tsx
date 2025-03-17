import Image from "next/image";
import styles from "./page.module.css";
import { Button } from '@mantine/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/lvhpTypography.png"
        alt="LONHP"
        width={800}
        height={100}
      />
      <Button variant="filled" color="ocean-blue" size="compact-xl">
        Entra aquí
      </Button>
    </div>
  );
}
