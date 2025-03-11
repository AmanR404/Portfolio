import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  
  return (
    <>
    <section id='section-1'>
        <div className='h-[17vh] flex justify-between'>
            <span className='ml-18 md:ml-6 font-[Orbitron] text-4xl font-extrabold flex self-center'>PORTFOLIO</span>
            <ul className='flex gap-14 mr-12 self-center'>
              <li className='absolute top-[18%] left-[22%] h-[200px] w-[220px] md:top-[-20%] md:left-[38%] lg:left-[34%] md:w-[22vw]'><video   className='rounded-3xl' loop autoPlay muted src="https://mater.agency/wp-content/uploads/2024/05/vogue-2.mp4"></video></li>
              <a href="#about"><li className=' hidden lg:inline-block font-semibold font-sans text-xl text-gray-700 mt-4 hover:underline hover:cursor-pointer'>About</li> </a> 
              <a href="#skills"><li className='hidden lg:inline-block font-semibold font-sans text-xl text-gray-700 mt-4 hover:underline hover:cursor-pointer'>Skills</li></a>  
              <a href="#projects"><li className='hidden lg:inline-block font-semibold font-sans text-xl text-gray-700 mt-4 hover:underline hover:cursor-pointer'>Projects</li></a>
              <a href="#contact"><li><button className='bg-[#00364B] hidden md:inline-block text-cyan-300 px-12 py-4 rounded-full font-semibold hover:bg-cyan-300 hover:text-[#00364B] hover:cursor-pointer transition-colors duration-150 ease-in'>Contact</button></li></a>  
            </ul>
        </div>
    
        <div className='flex justify-between gap-4 lg:gap-0 mt-72 md:mt-28 px-2'>
          <img width={380} className='hidden md:inline-block rounded-3xl h-64 lg:right-35 relative lg:bottom-12 hover:right-25 hover:mr-30 transition-all duration-900 ease-in-out ' src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="img" />
            <div className='w-[97%] lg:w-[32%] relative lg:right-12 flex flex-col mx-auto'>
              <div><p className='text-xl ml-5 md:ml-0'><span className='font-sans text-5xl font-bold'>Welcome</span> to the portfolio of</p></div>
              <span className='font-sans text-5xl font-bold ml-5 md:ml-0'>Aman Rai</span>
              <p className='mt-3 text-xl text-center md:w-[75%]'>Software Developer, Fluent in NextJS and React, Bringing life to your web applications.</p>
            </div>
          <img width={350} height={400}  className='hidden lg:inline-block rounded-3xl relative left-32 top-16 hover:left-22 transition-all duration-800 ease-in-out hover:ml-18' src="https://mater.agency/wp-content/uploads/2024/02/NetTV-460x360.jpg" alt="img" />
        </div>
        <div>
          <img width={285} className='hidden lg:inline-block rounded-3xl h-72 relative left-65 bottom-8 hover:bottom-15 transition-all duration-800 ease-in-out ' src="https://mater.agency/wp-content/uploads/2024/05/nordeus-1-460x360.jpg" alt="img" />
        </div>
    </section>

    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App