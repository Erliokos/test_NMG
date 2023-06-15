import React from 'react'
import * as Styled from './Style'
import { Navbar } from '../Navbar'
import { Content } from '../Content'
import { Footer } from '../Footer'

export function Layout() {
  return (
    <Styled.MainLayout>
      <Navbar/>
      <Content/>
      <Footer/>
    </Styled.MainLayout>
  )
}

