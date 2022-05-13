import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutUS } from '../components/about-us'
import { Banner } from '../components/banner'
import { ContactForm } from '../components/contact-form'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <AboutUS />
      <ContactForm />
    </>
  )
}

export default Home
