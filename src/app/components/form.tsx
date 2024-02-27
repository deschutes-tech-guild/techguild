// Handle form submission through /api/sendemail
import { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';

const ContactForm: NextPage = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      contact_type: { value: string };
      message: { value: string };
      name: { value: string };
    };
    // eslint-disable-next-line no-console
    console.trace(event);
    const data = {
      name: target.name.value,
      email: target.email.value,
      contact_type: target.contact_type.value,
      message: target.message.value,
    };

    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // eslint-disable-next-line no-console
    console.info(result);
    if (response.ok) {
      setEmailSent(true);
    }
  };
  return (
    <div className='lg:max-w-[500px] mx-auto my-2 p-2'>
      {emailSent ? (
        <p>Thank you for your message. We will get back to you soon.</p>
      ) : (
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          action='/success'
          className='flex flex-col justify-items-start rounded-lg p-4 border-gray-500 border-2 bg-slate-200'
          onSubmit={handleSubmit}
        >
          <select
            name='contact_type'
            id='contact_type'
            className='w-full border-2 border-gray-300 rounded-md'
          >
            <option value='contactus'>Contact Us</option>
            <option value='speaker'>Give a Talk</option>
            <option value='sponsor'>Sponsor</option>
          </select>
          <div className='my-2 p-2 rounded-md border-gray-500 border-2 space-y-4 bg-slate-50'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              required
              className='w-full rounded-md'
            />
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              required
              className='w-full rounded-md'
            />
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
              required
              className='w-full rounded-md'
            />
          </div>
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

export default ContactForm;
