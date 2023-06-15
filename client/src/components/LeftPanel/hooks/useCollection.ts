import { useState } from "react";
import { useGetQuery } from "../../../generated/hooks";
import { CollectionFragment } from "../../../generated/operations";



export function useCollection() {

  const [collection, setCollection] = useState<CollectionFragment[]>([])

  const {loading} = useGetQuery({
    onCompleted(data) {
      setCollection(data?.get)
    },
  })

  return {
    collection,
    loading
  }
 
}
