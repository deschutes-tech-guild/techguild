import Image from 'next/image';

export default function sponsors() {
  return (
    <div className=''>
      <div className=''>
        <h2>Bend DevOps is proudly sponsored by Snyk!</h2>
        <p>
          Snyk finds and automatically fixes vulnerabilities in your code, open
          source dependencies, containers, and IaC — powered by Snyk’s
          industry-leading security intelligence and DeepCode AI. And the best
          part? It's got a free-forever user plan for personal projects!
        </p>
      </div>
      <div className=''>
        <a href='https://snyk.io/' target='_blank' rel='noopener noreferrer'>
          <Image src='images/snyk.png' alt='synk logo' className='' />
        </a>
      </div>
      <div>
        <p>
          We welcome additional sponsors! If you're interested in supporting our
          meetup and connecting with our audience, drop us a note
          <a href='#form-div'>here</a>.
        </p>
      </div>
    </div>
  );
}
