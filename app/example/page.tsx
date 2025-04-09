import PageLayout from '@/components/PageLayout/PageLayout';
import GifSection from '@/components/GifSection/GifSection';
import * as React from 'react';
export default function Example() {
  return (
    <PageLayout>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <GifSection />
      </div>
    </PageLayout>
  );
}