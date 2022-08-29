import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import MyLink from '../public/util/myLink';
import AboutSection from '../components/aboutSection/AboutSection';
import Credits from '../components/credits/Credits';
import KauaiBeach01 from '../public/images/beaches/Kauai,_Hawaii_30_May_2017_01.JPG';
import KauaiBeach02 from '../public/images/beaches/Kauai,_Hawaii_30_May_2017_02.JPG';
import KauaiBeach03 from '../public/images/beaches/Kauai,_Hawaii_30_May_2017_03.JPG';
import ButtonNext from '../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../components/buttons/buttonPrevious/ButtonPrevious';

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>jumping link preview images with animated arrow buttons - index</title>
        <meta name="description" content="animated arrow buttons with link destination preview images that jump" />
        <meta property="og:image" content="/images/beaches/Kauai,_Hawaii_30_May_2017_01.JPG" />
        <meta property="og:url" content="https://jumping-link-preview-image.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <AboutSection />
        <figure>
          <Image src={KauaiBeach01} layout="responsive" alt="Kauai, Hawaii beach on 30 May 2017" />
          <figcaption>
            Keālia Beach on Kauai, Hawaii on 1 June 2017. Photograph by stephen garrett dewyer.
          </figcaption>
        </figure>
        <div className="bouncyLinks" >
          <MyLink href="/KauaiBeach03" passHref={true} >
            <ButtonPrevious passHref={true} aria-label="link to previous beach image page">
              <Image src={KauaiBeach03} layout="responsive" alt="Kauai, Hawaii beach on 30 May 2017" />
            </ButtonPrevious>
          </MyLink>
          <MyLink href="/KauaiBeach02" passHref={true} >
            <ButtonNext passHref={true} aria-label="link to next beach image page" >
              <Image src={KauaiBeach02} layout="responsive" alt="Kauai, Hawaii beach on 30 May 2017" />
            </ButtonNext>
          </MyLink>
        </div>
        <Credits />
      </main>
    </Fragment>
  )
}
