import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pt-36 px-4 md:px-40 bg-[#06171d]'>
        <span className='font-sans text-5xl font-bold text-cyan-300 flex justify-center'>Contact me</span>
        <div className='flex flex-wrap justify-center gap-8 mt-18'>
          <a target='_blank' href="https://mail.google.com/">  <button className='flex gap-2 px-8 py-4 rounded-xl font-semibold border border-gray-500 hover:cursor-pointer bg-gray-200 hover:bg-white hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>Email</span> <lord-icon
                                    src="https://cdn.lordicon.com/nzixoeyk.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                </lord-icon>
            </button></a>
            <a target='_blank' href="https://x.com/Rocky33148057"><button className='flex gap-2 px-6 py-4 rounded-xl font-semibold border border-gray-500 hover:cursor-pointer bg-gray-200 hover:bg-white hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>Twitter</span> <lord-icon
                                    src="https://cdn.lordicon.com/fdxqrdfe.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                </lord-icon>
            </button></a> 
            <a target='_blank' href="https://www.linkedin.com/in/aman3214/"><button className='flex gap-2 px-6 py-4 rounded-xl font-semibold border border-gray-500 hover:cursor-pointer bg-gray-200 hover:bg-white hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>LinkedIn</span> <lord-icon
                                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                   </lord-icon>
            </button></a> 
        <a target='_blank' href="https://github.com/login"> <button className='flex gap-2 px-6 py-4 rounded-xl font-semibold border border-gray-500 hover:cursor-pointer bg-gray-200 hover:bg-white hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>GitHub</span> <lord-icon
                                    src="https://cdn.lordicon.com/rpgflpkp.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                </lord-icon>
            </button></a>   
        </div>
    </section>
  )
}

export default Contact
