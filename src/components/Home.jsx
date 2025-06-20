import Hero from './Hero'
import Features from './Features'
import EverythingYouNeed from './EverythingYouNeed'
import Testimonials from './Testimonials'
import StartUsingToday from './StartUsingToday'
import TeamMembers from './TeamMembers'

const Home = () => {
  return (
    <div className='isolate'>
        <Hero />
        <Features />
        <EverythingYouNeed />
        <Testimonials />
        <StartUsingToday />
        <TeamMembers />
    </div>
  )
}

export default Home