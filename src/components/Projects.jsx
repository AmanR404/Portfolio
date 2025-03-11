import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='mt-24 pt-12 px-3 lg:px-40 bg-[#06171d]'>
        <span className='font-sans text-5xl font-bold text-cyan-300 flex justify-center'>Projects</span>
        <div className='flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-5 mt-16'>
            <div>
                <video height={300} width={300} src="spotify.mp4" autoPlay muted loop></video>
                <p className='font-bold text-white mt-1'>Spotify - Music Player</p>
                <span className='text-gray-400'> JS, HTML5, CSS3<br /></span>
                <a target='_blank' href="https://spotifypremium.freewebhostmost.com/"><span className='text-gray-400'>See Live</span></a>        
            </div>
            <div>
                <img width={300} className='h-[86%]' src="passop.png" alt="" />
                <p className='font-bold text-white mt-1'>Password Manager</p>
                <span className='text-gray-400'>React, Tailwind, MongoDB, HTML5<br /></span>
                <a target='_blank' href="https://passwordmanager-theta.vercel.app/"><span className='text-gray-400'>See Live</span></a>
            </div>
            <div>
                <video height={300} width={300} src=" https://mater.agency/wp-content/uploads/2024/02/telenor-2.mp4" autoPlay muted loop></video>
                <p className='font-bold text-white mt-1'>Gymfluencer - Track your Fitness</p>
                <span className='text-gray-400'>React, Tailwind, HTML5<br /></span>
                <a target='_blank' href="https://gymfluencer-jade.vercel.app/"><span className='text-gray-400'>See Live</span></a>      
            </div>
        </div>
    </section>
  )
}

export default Projects
