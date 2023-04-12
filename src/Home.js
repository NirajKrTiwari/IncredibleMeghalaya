
import React from 'react'
import Hero from './components/Hero'
import Places from './components/Places'
import Category from './components/Category'
import About from './components/About'

export default function Home()
{
    return(
        <>
        <Hero/>
        <Category/>
        <Places/>
        <About/>
        </>
    )
}