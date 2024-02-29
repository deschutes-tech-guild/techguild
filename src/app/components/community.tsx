import Image from 'next/image';
import Link from 'next/link';

export default function Community() {
  return (
    <div className=''>
      <h2 className='font-normal text-2xl'>
        Join our discord community and visit our meetup for events!
      </h2>
      <div className='flex justify-center my-3'>
        <div className='w-200'>
          <Link
            href='https://discord.gg/zW3mZU9g9b'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='py-2 my-5 w-[auto] h-[auto]'
              src='/images/discord.png'
              alt='discord logo'
              width={350}
              height={250}
            />
          </Link>
          <Link
            href='https://www.meetup.com/bend-devops/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='py-2 my-5 w-[auto] h-[auto]'
              src='/images/meetup-bdo.png'
              alt='meetup logo'
              width={350}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
