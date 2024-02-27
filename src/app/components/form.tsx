// Handle form submission through

export default function ContactForm() {
  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      action='/success'
      className='flex flex-col justify-items-start rounded-lg p-4 border-gray-500 border-2'
    >
      <select
        name='contact_type'
        id='contact_type'
        className='w-full border-2 border-gray-300'
      >
        <option value='contactus'>Contact Us</option>
        <option value='speaker'>Give a Talk</option>
        <option value='sponsor'>Sponsor</option>
      </select>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        required
        className='input'
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
        className='input'
      />
      <label htmlFor='message' className='sr-only'>
        Message
      </label>
      <textarea
        name='message'
        id='message'
        placeholder='Message'
        required
        className='input'
      />
      <button type='submit' className='btn'>
        Send
      </button>
    </form>
  );
}
