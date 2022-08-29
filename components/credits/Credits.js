import styles from './Credits.module.css';
import Link from 'next/link';

const Credits = () => {
    return (
        <h2 className={styles.credits} >
            designed and developed by <Link href="https://www.stephendewyerwebwork.com" passHref={true} target="_blank" aria-label="link to portfolio website of stephen garrett dewyer">stephen garrett dewyer</Link>
        </h2>
    )
}

export default Credits;