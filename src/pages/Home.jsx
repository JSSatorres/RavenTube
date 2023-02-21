import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import VideoList from '../components/VideoList'

const Home = () => (
  <>
    <Header />
    <div className='flex'>
      <Nav />
      <VideoList />
    </div>

  </>
)

export default Home
