'use client'

import { Button, Image, Container } from '@mantine/core';
import { useRouter } from 'next/navigation';
export default function HomeContent() {
  const router = useRouter();
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Image
        src="/whiteCombo4.png"
        alt="WTG4"
        maw={200}
        h={200}
      />
      <Image
        src="/lvhpTypography.png"
        alt="LONHP"
        fit="contain"
        mt={30}
        maw={600}
        h={250}
      />
      <Image
        src="/whiteTypography4.png"
        alt="WTG4"
        maw={200}
        h={200}
      />
      <Image
        src="/whiteTypography2.png"
        alt="WTG4"
        maw={200}
        h={200}
      />
      <Image
        src="/whiteTypography1.png"
        alt="WTG4"
        maw={200}
        h={200}
      />
      <Button
        onClick={() => router.push('/home')}
        variant="filled"
        color="maroon"
        size="compact-md"
      >
        Entrar
      </Button>
    </Container>
  )
}