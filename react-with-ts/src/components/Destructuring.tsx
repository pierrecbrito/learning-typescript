import React from 'react'

interface Props {
    title: string;
    content: string;
    commentQty: number;
    tags: string[]
}

const Destructuring = ({title, content, commentQty, tags}: Props) => {
  return (
    <div>{title} - {content} - {commentQty} - {tags}</div>
  )
}

export default Destructuring