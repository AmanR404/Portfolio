import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='mx-4 md:mx-44 mt-24 flex flex-col'>
        <span className='font-sans text-5xl font-bold text-center lg:text-start'>Skills</span>
        <div className='flex flex-col mt-16'>
            <div className='flex flex-col md:flex-row gap-7 md:gap-18 justify-center items-center md:items-start'>
                <div className='flex flex-col w-[240px] lg:w-[230px] gap-2.5 border-2 border-gray-700 rounded-xl px-12 py-8 hover:scale-105 hover:cursor-pointer shadow hover:shadow-black transition-transform duration-300 ease-in-out'>
                    <span className='font-bold mb-4 text-xl'>Frontend</span>
                    <span className='flex gap-1'><img src="next.svg" alt="" /><span>Next JS</span></span>
                    <span className='flex gap-1'><img src="react.svg" alt="" /><span>React JS</span></span>
                    <span className='flex gap-1'><img src="js.svg" alt="" /><span>JavaScript</span></span>
                    <span className='flex gap-1'><img src="html.svg" alt="" /><span>HTML5</span></span>
                    <span className='flex gap-1'><img src="css.svg" alt="" /><span>CSS3</span></span>
                </div>
                <div className='flex flex-col w-[240px] lg:w-[220px] gap-7 border-2 border-gray-700 rounded-xl px-12 py-8 hover:scale-105 hover:cursor-pointer shadow hover:shadow-black transition-transform duration-300 ease-in-out'>
                    <span className='font-bold mb-4 text-xl'>Backend</span>
                    <span className='flex gap-1'><img src="node.svg" alt="" /><span>Node JS</span></span>
                    <span className='flex gap-1'><img src="express.svg" alt="" /><span>Express JS</span></span>
                    <span className='flex gap-1'><img src="db.svg" alt="" /><span>MongoDB</span></span>
                </div>
              
            </div>
            <div className='flex flex-col w-[245px] lg:w-[240px] mt-8 self-center gap-2.5 border-2 border-gray-700 rounded-xl px-8 py-10 hover:scale-105 hover:cursor-pointer shadow hover:shadow-black transition-transform duration-300 ease-in-out'>
                    <span className='font-bold mb-4 text-xl'>Frameworks & Tools</span>
                    <span className='flex gap-1'><img src="tailwind.svg" alt="" /><span>Tailwind CSS</span></span>
                    <span className='flex gap-1'><img src="bootstrap.svg" alt="" /><span>Bootstrap</span></span>
                    <span className='flex gap-1'><img src="git.svg" alt="" /><span>Git</span></span>
                    <span className='flex gap-1'><img src="figma.svg" alt="" /><span>Figma</span></span>
            </div>
        </div>
    </section>
  )
}

export default Skills
