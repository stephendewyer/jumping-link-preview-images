import { Fragment } from 'react';
import styles from './AboutSection.module.css';
import ExternalLinkButton from '../buttons/external_link_button/ButtonExternalLink'
import ExternalLinkIcon from '../../public/images/icons/external_link_icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <Fragment>
            <h1 className={styles.heading_01}>
                jumping link preview images with animated arrow buttons
            </h1>
            <div className={styles.about_section}>
                <div className={styles.features}>
                    <h2 className={styles.heading_02} >
                        features:
                    </h2>
                    <ul>
                        <li>
                            link destination preview images jump on link hover
                        </li>
                        <li>
                            arrow button animates and changes color on link hover
                        </li>
                        <li>
                            dynamic
                        </li>
                        <li>
                            responsive
                        </li>
                        <li>
                            accessible following WCAG 2.1 standards
                        </li>
                    </ul>  
                </div>
                <div className={styles.link_to_code}>
                    <h2 className={styles.heading_02} >
                        code:
                    </h2>
                    <Link href="https://github.com/stephendewyer/jumping-link-preview-images.git" passHref={true} aria-label="link to jumping link preview images on GitHub">
                        <a target="_blank" rel="noopener noreferrer">
                            <ExternalLinkButton>
                                <div>
                                    GitHub
                                </div> 
                                <div className={styles.external_link_icon} >
                                    <Image src={ExternalLinkIcon} layout="responsive" alt="external link icon"/>
                                </div>
                            </ExternalLinkButton>
                        </a>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutSection;