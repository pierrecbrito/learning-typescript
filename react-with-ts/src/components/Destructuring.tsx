import React from 'react'

interface Props {
    title: string;
    content: string;
    commentQty: number;
    tags: string[],
    category?: Category;
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

const Destructuring = ({title, content, commentQty, tags, category}: Props) => {
  return (
    <div>{title} - {content} - {commentQty} - {tags} - {category}</div>
  )
}

export default Destructuring