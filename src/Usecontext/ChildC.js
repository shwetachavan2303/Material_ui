import React,{useContext} from 'react'
import { data1,data2 } from '../App'


const ChildC = () => {
    const name = useContext(data1)
    const age = useContext(data2)
  return (
    <div>
      <h1>My Name Is {name} And My Age Is {age}</h1>
    </div>
  )
}

export default ChildC
