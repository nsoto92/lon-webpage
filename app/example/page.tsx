import PageLayout from '@/components/PageLayout/PageLayout';
import * as React from 'react';
export default function Example() {
  return (
    <PageLayout>
      <div style={{ border: '1px solid red', width: '100%' }}>
        <h1>Contenido Aquí</h1>
        <button>Hello</button>
      </div>
    </PageLayout>
  );
}