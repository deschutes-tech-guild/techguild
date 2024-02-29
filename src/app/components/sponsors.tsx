import Image from 'next/image';
import Link from 'next/link';

export default function Sponsors() {
  return (
    <div className='sm:py-2 sm:my-2 max-w-2xl'>
      <div className=''>
        <h2 className='font-normal sm:py-2 text-2xl'>
          Bend DevOps is proudly sponsored by Snyk!
        </h2>
        <div className='font-[400] text-lg'>
          <p>
            Snyk finds and automatically fixes vulnerabilities in your code,
            open source dependencies, containers, and IaC — powered by Snyk’s
            industry-leading security intelligence and DeepCode AI. And the best
            part? It's got a free-forever user plan for personal projects!
          </p>
        </div>
        <div className='sm:py-2 my-5 mb-10 md:py-1 flex justify-center'>
          <Link
            href='https://snyk.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-[auto] h-[auto]'
              src='/images/snyk.png'
              alt='synk logo'
              height={500}
              width={375}
            />
          </Link>
        </div>
        <div className='text-lg '>
          <p>
            We welcome additional sponsors! If you're interested in supporting
            our meetup and connecting with our audience, drop us a note{' '}
            <Link className='underline' href='#form-div'>
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
