import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import MyLink from '../../public/util/myLink';
import AboutSection from '../../components/aboutSection/AboutSection';
import Credits from '../../components/credits/Credits';
import KauaiBeach01 from '../../public/images/beaches/Kauai,_Hawaii_30_May_2017_01.JPG';
import KauaiBeach02 from '../../public/images/beaches/Kauai,_Hawaii_30_May_2017_02.JPG';
import KauaiBeach03 from '../../public/images/beaches/Kauai,_Hawaii_30_May_2017_03.JPG';
import ButtonNext from '../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../components/buttons/buttonPrevious/ButtonPrevious';

const Beach02 = () => {
    return (
        <Fragment>
            <Head>
                <title>jumping link preview images with animated arrow buttons - beach 2</title>
                <meta name="description" content="animated arrow buttons with link destination preview images that jump" />
                <meta property="og:image" content="/images/beaches/Kauai,_Hawaii_30_May_2017_02.JPG" />
                <meta property="og:url" content="https://jumping-link-preview-images.vercel.app/KauaiiBeach02" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container">
                <AboutSection />
                <figure>
                    <Image src={KauaiBeach02} layout="responsive" alt="Kauai, Hawaii beach on 30 May 2017" />
                    <figcaption>
                        Kekaha Beach on Kauai, Hawaii facing Niihau Island, on 31 May 2017. Photograph by stephen garrett dewyer.
                    </figcaption>
                </figure>
                <div className="bouncyLinks" >
                    <MyLink href="/" passHref={true} >
                        <ButtonPrevious passHref={true} aria-label="link to previous beach image page">
                        <Image src={KauaiBeach01} layout="responsive" alt="Kauai, Hawaii beach on 30 May 2017" />
                        </ButtonPrevious>
                    </MyLink>
                    <MyLink href="/KauaiBeach03" passHref={true} >
                        <ButtonNext passHref={true} aria-label="link to next beach image page" >
                        <Image src={KauaiBeach03} layout="responsive" alt="Kauai, Hawaii beach on 30 May 2017" />
                        </ButtonNext>
                    </MyLink>
                </div>
                <Credits />
            </main>
        </Fragment>
    );
}

export default Beach02;