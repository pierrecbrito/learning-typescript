import React from 'react'

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>Second component: {props.name}</div>
  )
}

export default SecondComponent