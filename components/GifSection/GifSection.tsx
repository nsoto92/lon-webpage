import styles from './GifSection.module.css';
export default function GifSection() {
  return (
    <div className={styles.container}>
      <img src="https://web.archive.org/web/20090524022903im_/http://i39.tinypic.com/30vzr4l.gif" alt="gif1" />
      <img src="https://web.archive.org/web/20090202174847im_/http://www.creadoresdenick.net/img/detounchinbanner.gif" alt="gif2" />
      <img src="https://web.archive.org/web/20090202174847im_/http://img509.imageshack.us/img509/4950/moviecornerhn0.gif" alt="gif3" />
      <div className={styles.divider} />
    </div>
  );
}