// Handle form submission through /api/sendemail
import { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';

import ContactForm from '@/app/components/contactForm';
import SpeakerForm from '@/app/components/speakerForm';
import SponsorForm from '@/app/components/sponsorForm';

const Form: NextPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [formMode, setFormMode] = useState('contact');

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      contact_type: { value: string };
      message: { value: string };
      company_sponsor?: { value: string };
      company_name?: { value: string };
      bio?: { value: string };
      summary?: { value: string };
    };

    const data = {
      name: target.name.value,
      email: target.email.value,
      contact_type: target.contact_type.value,
      message: target.message.value,
      company_sponsor: target.company_sponsor?.value,
      company_name: target.company_name?.value,
      bio: target.bio?.value,
      summary: target.summary?.value,
    };

    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setEmailSent(true);
    }
  };

  const handleSelection = (event: SyntheticEvent) => {
    const target = event.target as HTMLSelectElement;

    if (target.value === 'contact') {
      setFormMode('contact');
    } else if (target.value === 'speaker') {
      setFormMode('speaker');
    } else if (target.value === 'sponsor') {
      setFormMode('sponsor');
    }
  };

  return (
    <div className='lg:max-w-[500px] mx-auto my-2 p-2' id='form'>
      {emailSent ? (
        <p>Thank you for your message. We will get back to you soon.</p>
      ) : (
        <form
          name='contact'
          method='POST'
          action='/success'
          className='flex flex-col justify-items-start rounded-lg p-4 border-gray-500 border-2 bg-slate-200'
          onSubmit={handleSubmit}
        >
          <select
            name='contact_type'
            id='contact_type'
            className='w-full border-[1px] border-gray-600 rounded-md h-11'
            onChange={handleSelection}
          >
            <option value='contact'>Contact Us</option>
            <option value='speaker'>Give a Talk</option>
            <option value='sponsor'>Sponsor</option>
          </select>

          {formMode === 'sponsor' ? (
            <SponsorForm />
          ) : formMode === 'speaker' ? (
            <SpeakerForm />
          ) : (
            <ContactForm />
          )}

          <button
            className='p-4 bg-blue-300 rounded-md border-gray-400'
            type='submit'
            id='submit'
            name='submit'
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
