import Image from 'next/image';
import glogalStyles from '../PageLayout/GlobalPageSection.module.css';

export default function ContentSection() {
  return (
    <div className={glogalStyles.container}>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Link para descargar canciones
      </a>
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