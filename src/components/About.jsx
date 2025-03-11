import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col mx-4 lg:mx-44 mt-24'>
      <span className='font-sans text-5xl font-bold text-center lg:text-start lg:ml-2'>About me</span>
      <div className='flex flex-col md:flex-row gap-2 md:gap-56 px-3'>
        <p className='w-[95%] text-center md:text-start md:w-[70%] text-2xl mt-8'>Web Developer with expertise of React.js, Next.js, Tailwind, HTML and CSS. currently learning Backend for Web Applications.
        <br /><br />
        I am passionate programmer and a learner, born and brought up in India.Currently, I am enrolled in Alma Better - Full Stack Development Program "Collaboration with IIT-Guwahati".
        <br /><br />
        Along with that, I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
        </p>
        <div className='flex flex-wrap justify-center md:justify-start md:flex-col gap-8 mt-18'>
            <a href="#contact"><button className='flex gap-2 px-6 py-4 rounded-full font-semibold border border-gray-500 hover:cursor-pointer hover:bg-[#e7e7e4] hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>Connect</span> <lord-icon
                                    src="https://cdn.lordicon.com/rsvfayfn.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                        
                                </lord-icon>
            </button></a>
            <a target='_blank' href="https://drive.google.com/file/d/1Q0lWlnzcKPq43bcLCnhAMRuHqRuzIeH_/view?usp=drive_link">  <button className='flex gap-2 px-6 py-4 rounded-full font-semibold border border-gray-500 hover:cursor-pointer hover:bg-[#e7e7e4] hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>Resume</span> <lord-icon
                                    src="https://cdn.lordicon.com/xtnsvhie.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                </lord-icon>
            </button></a>
            <a target='_blank' href="https://www.linkedin.com/in/aman3214/"> <button className='flex gap-2 px-6 py-4 rounded-full font-semibold border border-gray-500 hover:cursor-pointer hover:bg-[#e7e7e4] hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>LinkedIn</span> <lord-icon
                                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                </lord-icon>
            </button></a>
            <a target='_blank' href="https://github.com/login"> <button className='flex gap-2 px-6 py-4 rounded-full font-semibold border border-gray-500 hover:cursor-pointer hover:bg-[#e7e7e4] hover:border-gray-300 transition-colors duration-300 ease-in-out'><span>GitHub</span> <lord-icon
                                    src="https://cdn.lordicon.com/rpgflpkp.json"
                                    trigger="hover"
                                    style={{width: 25, height:25}}>
                                </lord-icon>
            </button></a>   
        </div>
      </div>
    </section>
  )
}

export default About
