export default function SpringbreakIns({ children }) {
  return (
    <div
      className='absolute max-w-lg px-10 py-8 text-sm bg-zinc-800 rounded-lg shadow-xl md:text-base top-40 left-1/2 transform -translate-x-1/2'
      style={{ maxWidth: 'calc(100% - 28px)' }}>
      <p className='hidden mb-8 md:block'>{children}</p>
      <div className='tracking-wider'>
        Get your plus ones<span className='text-green-200'> sorted ASAP as gonna </span>
        <br />
        limit numbers.<span className='text-green-200'>No dickheads !!</span>
        <br />
        Race Starting 25th MARCH PM<span className='text-green-200'>to 26th MARCH</span>
        <br />
        Lineup <span className='text-green-200'> CLICK ME</span>
        <br />
        Finish line <span className='text-red-200'> / Party Place -</span>
        <br />
        Lovely-Sea-Views <span className='text-red-200'> PENG Loco</span> &{' '}
        <span className='text-red-200'>/Logo</span>
      </div>
    </div>
  )
}
