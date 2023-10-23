import { useState } from 'react'

export function useInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  function handleChange (e) {
    setValue(e)
  }3
  return [value, handleChange]
}

