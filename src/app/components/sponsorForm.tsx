export default function SponsorForm() {
  return (
    <div className='my-2 p-2 rounded-md border-gray-500 border-2 space-y-4 bg-slate-50'>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        required
        className='w-full rounded-md h-11'
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
        className='w-full rounded-md h-11'
      />
      <label htmlFor='company_name' className='sr-only'>
        Company Name
      </label>
      <input
        type='text'
        name='company_name'
        id='company_name'
        placeholder='Company Name'
        required
        className='w-full rounded-md min-h-11'
      ></input>
      <label htmlFor='message' className='sr-only'>
        Message
      </label>
      <textarea
        name='message'
        id='message'
        placeholder='Message'
        required
        className='w-full rounded-md min-h-11'
      />
    </div>
  );
}
