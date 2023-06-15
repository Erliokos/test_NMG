import React from 'react'
import * as Styled from './Style'
import { LeftPanel } from '../LeftPanel'
import { RightPanel } from '../RightPanel'

export function Content() {
  return (
    <Styled.MainContent>
      <LeftPanel/>
      <RightPanel/>
    </Styled.MainContent>
  )
}
