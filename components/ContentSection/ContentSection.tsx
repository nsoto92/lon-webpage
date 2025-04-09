import Image from 'next/image';
import glogalStyles from '../PageLayout/GlobalPageSection.module.css';

interface ContentSectionProps {
  hasAd?: boolean;
}
export default function ContentSection({ hasAd = false }: ContentSectionProps) {
  return (
    <div className={glogalStyles.container}>
      {hasAd && (
        <img src="https://web.archive.org/web/20090524022903im_/http://i39.tinypic.com/30vzr4l.gif" alt="gif1" />
      )}
      <a href="https://www.youtube.com" className={glogalStyles.link}>
        Link para descargar canciones
      </a>
      <Image
        src="/arteCorazon.png"
        alt="LONHP"
        width={300}
        height={300}
      />
      <div className={glogalStyles.divider} />
    </div>
  );
}