import Image from 'next/image';
import Link from 'next/link';

import useWindowSize from '@/utils/useWindowSize';

export default function Community() {
  const size = useWindowSize();

  return (
    <div className=''>
      <h2 className='font-normal text-2xl'>
        Join our discord community and visit our meetup for events!
      </h2>

      {size.width != undefined ? (
        size.width <= 1024 ? (
          <div className='flex justify-center my-6'>
            <div className='w-1/2'>
              <Link
                href='https://discord.gg/zW3mZU9g9b'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='py-2 my-5 w-[auto] h-[auto]'
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
                  className='py-2 my-5 w-[auto] h-[auto]'
                  src='/images/meetup-bdo.png'
                  alt='meetup logo'
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className='flex justify-center my-16'>
            <div className='w-11/12 flex justify-between'>
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
        )
      ) : (
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
      )}
    </div>
  );
}
