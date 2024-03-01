import Image from 'next/image';
import Link from 'next/link';

import useWindowSize from '@/utils/useWindowSize';

export default function About() {
  const size = useWindowSize();

  return (
    <div className=''>
      {size.width != undefined ? (
        size.width <= 1024 ? (
          <div className=' '>
            <div className=' w-1/3'>
              <Image
                className='w-[auto] h-[auto]'
                src='/images/bdo-logo.webp'
                alt='Bend DevOps Logo'
                width={120}
                height={150}
              />
            </div>
            <div className=' w-11/12'>
              <h1 className='font-normal my-2 text-3xl'>Bend DevOps</h1>
              <h2 className='font-normal my-2 text-2xl'>
                A DevOps community in Central Oregon
              </h2>
            </div>
          </div>
        ) : (
          <div className=' flex justify-between'>
            <div className=' w-10/12'>
              <h1 className='font-normal my-2 text-3xl'>Bend DevOps</h1>
              <h2 className='font-normal my-2 text-2xl'>
                A DevOps community in Central Oregon
              </h2>
            </div>
            <div className='w-3/16'>
              <Image
                className='w-[auto] h-[auto]'
                src='/images/bdo-logo.webp'
                alt='Bend DevOps Logo'
                width={120}
                height={150}
              />
            </div>
          </div>
        )
      ) : (
        <div className=''>
          <div className=' w-1/3'>
            <Image
              className='w-[auto] h-[auto]'
              src='/images/bdo-logo.webp'
              alt='Bend DevOps Logo'
              width={120}
              height={150}
            />
          </div>
          <div className='w-10/16'>
            <h1 className='font-normal my-2 text-3xl'>Bend DevOps</h1>
            <h2 className='font-normal my-2 text-2xl'>
              A DevOps community in Central Oregon
            </h2>
          </div>
        </div>
      )}

      <div className='my-2 font-[400] text-lg max-w-lg'>
        <p className='my-2'>
          Hi! We're Bend DevOps and we love technology. Our group is a mix of
          experts, enthusiasts and students who share a common love of DevOps,
          programming and everything server-side.
        </p>
        <p className='my-2'>
          Our goals as a group is to develop talent and foster the growing Tech
          community in Central Oregon. We encourage Senior engineers to connect
          with and mentor Junior engineers and students. We also have a discord
          community where you can bounce your ideas off other engineers and have
          access to experts outside of your company.
        </p>
        <p className='my-2'>
          Some of our talks have included: JVM Garbage Collection, CI/CD Build
          Early Test Immediately, Kubernetes Cluster-API, and more!
        </p>
        <p className='my-2'>
          Also, there's no need to wait for the meetup to join the discussion!
          Come hang out with us on our{' '}
          <Link
            href='https://discord.gg/zW3mZU9g9b'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Discord
          </Link>
          !
        </p>
      </div>
    </div>
  );
}