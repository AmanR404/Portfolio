import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#06171d] h-[13vh] md:h-[31vh] overflow-y-hidden pt-18 px-4 md:px-10 relative bottom-0.5'>
        <div className='bg-cyan-100 h-0.5 opacity-20 mb-2'>.</div>
        <div className='flex justify-between'>
            <span className='text-cyan-100 text-xs opacity-55 font-bold'>Made by Aman / 2025 &copy;</span>
            <span className='hidden md:inline-block bg-[url(https://mater.agency/wp-content/themes/ea-web/public/img/sample/born-digital.gif)] bg-center w-[25%] h-[85px] font-bold text-bg-purple-950 font-serif'>.</span>
        </div>
    </footer>
  )
}

export default Footer
