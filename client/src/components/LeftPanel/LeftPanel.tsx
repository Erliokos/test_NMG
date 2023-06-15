import React, { useState } from 'react'
import * as Styled from './Style'
import { Row } from '../Row'
import { useCollection } from './hooks/useCollection'
import CollectionButtonAdd from './components/CollectionButtonAdd/CollectionButtonAdd'
import { CollectionAddModal } from './components/CollectionAddModal/CollectionAddModal'
import { useDeleteMutation } from '../../generated/hooks'

export function LeftPanel() {
  const { collection, loading } = useCollection()
  const [isOpenAddModal, setOpenModal] = useState<boolean>(false)

  const [deleteCollection] = useDeleteMutation({
    refetchQueries: ['Get']
  })

  const keys = Object.keys(collection[0] ?? {}).filter(
    item => item !== '__typename'
  )

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleDeleteRow = (id: string) => {
    deleteCollection({variables: {id: +id}})
  }

  return (
    <Styled.MainLeftPanel>
      <Styled.Header columnsCount={keys.length}>
        {keys.map((item, index) => (
          <div key={index + Date.now()}>{item}</div>
        ))}
      </Styled.Header>
      {loading ? (
        <div>Загрузка</div>
      ) : (
        collection.map(item => (
          <Row key={item.id} collection={item} onDelete={handleDeleteRow} />
        ))
      )}
      <CollectionButtonAdd onOpen={setOpenModal} />
      {isOpenAddModal && <CollectionAddModal onClose={handleCloseModal} />}
    </Styled.MainLeftPanel>
  )
}
