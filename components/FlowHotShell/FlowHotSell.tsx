import ContentSection from '../ContentSection/ContentSection';
import GifSection from '../GifSection/GifSection';

import globalStyles from '../PageLayout/GlobalPageSection.module.css';

export default function FlowHotSell() {
  return (
    <div className={globalStyles.container}>
      <ContentSection />
      <ContentSection hasAd />
      <GifSection />
      <ContentSection />
      <ContentSection />
      <ContentSection hasAd />
    </div>
  );
}