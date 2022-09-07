import { useCallback, useState } from 'react'



function useBoolean(defaultValue) {
  // state to manage the useCustomHook
  const [value, setValue] = useState(!!defaultValue)

  // create the data to be returned by the useCustomHook
  const toggle = useCallback(() => setValue(prevValue => !prevValue), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(true), [])

  return {
    value, toggle, setTrue, setFalse
  }
}

export default useBoolean
