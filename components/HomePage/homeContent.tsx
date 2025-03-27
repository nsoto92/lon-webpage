import { Button } from '@mantine/core';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <>
      <Image
        src="/lvhpTypography.png"
        alt="LONHP"
        width={800}
        height={100}
      />
      <Button variant="filled" color="ocean-blue" size="compact-xl">
        Entrar
      </Button>
    </>
  )
}