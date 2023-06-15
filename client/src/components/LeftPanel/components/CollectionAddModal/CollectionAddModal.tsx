import React from 'react'
import * as Styled from './Style'
import { useForm, Controller } from 'react-hook-form'
import { CollectionInput } from '../../../../generated/operations'
import { useCreateMutation } from '../../../../generated/hooks'

type Props = {
  onClose: () => void
}

export function CollectionAddModal({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CollectionInput>({
    defaultValues: { text: undefined, caption: undefined }
  })
  const [saveCollection] = useCreateMutation({
    onCompleted(data) {
      onClose()
    },
    refetchQueries: ['Get']
  })

  const onSubmit = (input: CollectionInput) => {
    try {
      saveCollection({
        variables: {
          input
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Styled.MainModal onSubmit={handleSubmit(onSubmit)}>
      {errors.text && <p>{errors.text.message}</p>}
      <input
        {...register('text', { required: 'text: Обязательно для заполнения' })}
        placeholder="text"
      />
      {errors.caption && <p>{errors.caption.message}</p>}
      <input
        {...register('caption', {
          required: 'caption: Обязательно для заполнения'
        })}
        placeholder="caption"
      />
      <div>
        <button type="submit">Создать</button>
        <button onClick={onClose}>Отмена</button>
      </div>
    </Styled.MainModal>
  )
}
