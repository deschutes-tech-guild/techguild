'use client';

import localFont from 'next/font/local';
import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import About from '@/app/components/about';
import Community from '@/app/components/community';
import Footer from '@/app/components/footer';
import Form from '@/app/components/form';
import Speaking from '@/app/components/speaking';
import Sponsors from '@/app/components/sponsors';
import useSelectBackground from '@/utils/useSelectBackground';

const firaSans = localFont({
  src: '../../public/fonts/FiraSans-Regular.ttf',
  variable: '--font-firaSans',
  display: 'swap',
});

export default function HomePage() {
  const bgImage = useSelectBackground();

  return (
    <main>
      <div
        className='bg-fixed bg-cover flex justify-center'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className={`bg-[#fff] 
                    md:w-3/4 
                    max-w-3xl 
                    mt-10 
                    mb-10 
                    p-[1.5rem] 
                    rounded-lg 
                    ${firaSans.variable}
                    m-4
                    p-4
                    space-y-4
                    flex 
                    flex-col
                    `}
        >
          <Head>
            <title>Bend DevOps</title>
          </Head>
          <About />
          <Speaking />
          <Sponsors />
          <Community />
          <Form />
          <Footer />
        </div>
      </div>
    </main>
  );
}
