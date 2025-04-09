'use client'

import { Button } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function HomeContent() {
  const router = useRouter();
  return (
    <>
      <Image
        src="/lvhpTypography.png"
        alt="LONHP"
        width={800}
        height={100}
      />
      <Button onClick={() => router.push('/home')} variant="filled" color="ocean-blue" size="compact-xl">
        Entrar
      </Button>

      <Image
        src="/whiteTypography4.png"
        alt="WTG4"
        width={200}
        height={125}
      />
      <Image
        src="/whiteCombo4.png"
        alt="WTG4"
        width={200}
        height={125}
      />
      <Image
        src="/whiteTypography2.png"
        alt="WTG4"
        width={200}
        height={125}
      />
      <Image
        src="/whiteTypography1.png"
        alt="WTG4"
        width={200}
        height={125}
      />
    </>
  )
}