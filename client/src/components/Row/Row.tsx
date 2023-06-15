import React, { MouseEventHandler } from 'react'
import { CollectionFragment } from '../../generated/operations'
import * as Styled from './Style'
import { log } from 'console'

type Props = {
  collection: CollectionFragment
  onDelete: (id: string) => void
}

export function Row({ collection, onDelete }: Props) {
  const { id, caption, text, updateAt, createAt } = collection

  const columnsCount = Object.keys(collection).filter(
    item => item !== '__typename'
  ).length

  return (
    <Styled.Container>
      <Styled.MainRow columnsCount={columnsCount}>
        <div>{id}</div>
        <div>{caption}</div>
        <div>{text}</div>
        <div>{updateAt}</div>
        <div>{createAt}</div>
      </Styled.MainRow>
      <Styled.Delete onClick={() => onDelete(id)}>R</Styled.Delete>
    </Styled.Container>
  )
}
