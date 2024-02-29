import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className=''>
      <div className=''>
        <Image
          className='w-[auto] h-[auto]'
          src='/images/bdo-logo.webp'
          alt='Bend DevOps Logo'
          width={150}
          height={150}
        />
        <h1 className='font-normal my-2 text-3xl'>Bend DevOps</h1>
        <h2 className='font-normal my-2 text-2xl'>
          A DevOps community in Central Oregon
        </h2>
        <div className='my-2 font-[400] text-lg'>
          <p className='my-2'>
            Hi! We're Bend DevOps and we love technology. Our group is a mix of
            experts, enthusiasts and students who share a common love of DevOps,
            programming and everything server-side.
          </p>
          <p className='my-2'>
            Our goals as a group is to develop talent and foster the growing
            Tech community in Central Oregon. We encourage Senior engineers to
            connect with and mentor Junior engineers and students. We also have
            a discord community where you can bounce your ideas off other
            engineers and have access to experts outside of your company.
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
    </div>
  );
}
