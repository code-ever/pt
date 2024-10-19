import React from 'react'
import Hero from '../component/Hero'
import WhatWeAare from '../component/WhatWeAare'
import About from '../component/About'
import BestTrainer from '../component/BestTrainer'
import Gools from '../component/Gools'
import Adption from '../component/Adption'
import Advice from '../component/Advice'
const Home = () => {
  return (
    <div className=' relative -z-0'>
      <Hero />
      <About />
      <Gools />
      <Adption />
      <BestTrainer />
      <WhatWeAare />
      <Advice />
    </div>
  )
}

export default Home
