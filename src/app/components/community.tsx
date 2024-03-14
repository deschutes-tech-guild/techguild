import Image from 'next/image';
import Link from 'next/link';

export default function Community() {
  return (
    <div>
      <h2 className='font-normal text-2xl'>
        Join our discord community and visit our meetup for events!
      </h2>

      <div className='flex justify-center my-6'>
        <div className='w-full max-w-80 lg:max-w-2xl lg:flex lg:justify-between'>
          <Link
            href='https://discord.gg/zW3mZU9g9b'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='py-2 my-5 w-11/12 h-[auto]'
              src='/images/discord.png'
              alt='discord logo'
              width={500}
              height={500}
            />
          </Link>
          <Link
            href='https://www.meetup.com/bend-devops/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='py-2 my-5 w-11/12 h-[auto]'
              src='/images/meetup-bdo.png'
              alt='meetup logo'
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
