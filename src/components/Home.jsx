import Hero from './Hero'
import React from 'react'
import Features from './Features'
import EverythingYouNeed from './EverythingYouNeed'
import Testimonials from './Testimonials'
import StartUsingToday from './StartUsingToday'
import TeamMembers from './TeamMembers'
import NewsLetter from './NewsLetter'

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