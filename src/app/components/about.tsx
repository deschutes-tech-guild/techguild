import Image from 'next/image';

export default function About() {
  return (
    <div className=''>
      <div className=''>
        <h1>Bend DevOps</h1>
        <h2>A DevOps community in Central Oregon</h2>
        <p>
          Hi! We're Bend DevOps and we love technology. Our group is a mix of
          experts, enthusiasts and students who share a common love of DevOps,
          programming and everything server-side.
        </p>
        <p>
          Our goals as a group is to develop talent and foster the growing Tech
          community in Central Oregon. We encourage Senior engineers to connect
          with and mentor Junior engineers and students. We also have a discord
          community where you can bounce your ideas off other engineers and have
          access to experts outside of your company.
        </p>
        <p>
          Some of our talks have included: JVM Garbage Collection, CI/CD Build
          Early Test Immediately, Kubernetes Cluster-API, and more!
        </p>
        <p>
          Also, there's no need to wait for the meetup to join the discussion!
          Come hang out with us on our
          <a
            href='https://discord.gg/zW3mZU9g9b'
            target='_blank'
            rel='noopener noreferrer'
          >
            Discord!
          </a>
        </p>
      </div>
      <Image src='images/bdo-logo.webp' alt='Bend DevOps Logo' className='' />
    </div>
  );
}
