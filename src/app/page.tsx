import Image from 'next/image';
import styles from './page.module.css';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa6';
import '../styles/index.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Coming Soon</h2>
      </div>
      <div className='links'>
        <a
          href='https://github.com/TheDevPhantom'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://dribbble.com/janadriaanbotha'
          target='_blank'
          rel='noreferrer'
        >
          <FaDribbble />
        </a>
        <a
          href='https://www.linkedin.com/in/adriaan-botha/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
      </div>
    </main>
  );
}
``;
