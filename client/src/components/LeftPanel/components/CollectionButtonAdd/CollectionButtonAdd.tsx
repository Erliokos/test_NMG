import React, { Dispatch, SetStateAction } from 'react'
import { useCreateMutation } from '../../../../generated/hooks'

type Props = {
  onOpen: Dispatch<SetStateAction<boolean>>
}

export default function CollectionButtonAdd({onOpen}: Props) {

  const handleClick = () => {
    onOpen(true)
  }

  return (
    <button onClick={handleClick}>Создать</button>
  )
}
