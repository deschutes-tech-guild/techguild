import Image from 'next/image';

export default function community() {
  return (
    <div className=''>
      <h2>Join our discord community and visit our meetup for events!</h2>
      <div className=''>
        <a
          href='https://discord.gg/zW3mZU9g9b'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='images/discord.png' alt='discord logo' className='' />
        </a>
        <a
          href='https://www.meetup.com/bend-devops/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='images/meetup-bdo.png' alt='meetup logo' className='' />
        </a>
      </div>
    </div>
  );
}
