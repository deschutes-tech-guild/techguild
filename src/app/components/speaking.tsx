import Link from 'next/link';

export default function Speaking() {
  return (
    <div className='sm:py-2'>
      <h2 className='font-normal sm:py-2 text-2xl'>Speaking</h2>
      <div className='font-[400] text-lg'>
        <p>
          Want to give a talk on what you’re working on? Have a side-project you
          want to get feedback on? Come give a talk! We’re always looking for
          speakers at our meetups, regardless of experience or skill level. If
          you're interested chat with us{' '}
          <Link href='#form' className='underline'>
            here
          </Link>{' '}
          or on{' '}
          <Link
            className='underline'
            href='https://discord.gg/zW3mZU9g9b'
            target='_blank'
            rel='noopener noreferrer'
          >
            Discord
          </Link>{' '}
        </p>
      </div>
    </div>
  );
}
