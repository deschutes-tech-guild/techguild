export default function SpeakerForm() {
  return (
    <div className='my-2 p-2 rounded-md border-gray-500 border-2 space-y-4 bg-slate-50'>
      <label htmlFor='name' className='sr-only'>
        Name
      </label>
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

      <div>
        <label htmlFor='company_sponsor' className='sr-only'>
          Can your company sponsor?
        </label>
        <div> Can your company sponsor? </div>
        <select
          name='company_sponsor'
          id='company_sponsor'
          required
          className='rounded-md min-h-11'
        >
          <option></option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>
      </div>

      <label htmlFor='bio' className='sr-only'>
        Your bio
      </label>
      <textarea
        placeholder='Your Bio...'
        name='bio'
        required
        className='w-full rounded-md min-h-11'
      ></textarea>

      <label htmlFor='summary' className='sr-only'>
        Summary of your talk
      </label>
      <textarea
        placeholder='Description of your talk...'
        name='summary'
        required
        className='w-full rounded-md min-h-11'
      ></textarea>

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
