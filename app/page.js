import AboutMe from '@/components/AboutMe'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen'>
        <AboutMe />
        <Skills />
        <Portfolio />
        <Resume />
        
    </div>
  )
}

export default Home