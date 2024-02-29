'use client';

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

export default function HomePage() {
  const bgImage = useSelectBackground();

  return (
    <main>
      <div
        className='bg-fixed bg-cover flex justify-center'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='bg-[#fff] sm:w-5/6 md:w-3/4 max-w-3xl sm:mt-10 mb-10 sm:p-[1.5rem] rounded-lg'>
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
