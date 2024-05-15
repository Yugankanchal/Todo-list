import React, { SetStateAction } from 'react'
import TodoList from '../todo'
interface prototype {
  size: string,
  children: string,
  onclick: (id?: number | null) => void,
  id?: number | null

}
function Button({ size, children, onclick, id }: prototype) {
  const handleClick = () => {
    onclick(id ? id : null)
  }
  return (
    <button className={`button ${size} text-white h-[100%] `} onClick={() => handleClick()}>
      {children}
    </button>
  )
}

export default Button