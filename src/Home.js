
import React from 'react'
import Hero from './components/Hero'
import Places from './components/Places'
import Category from './components/Category'
import About from './components/About'
import TagLine from './components/TagLine'

export default function Home()
{
    return(
        <>
        <Hero/>
        <TagLine/>
        <Category/>
        <Places/>
        <About/>
        </>
    )
}