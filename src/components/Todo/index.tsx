import React from 'react'
import TTodo from '../../types/TTodo';

interface ITodo{
    todo:TTodo;
}

export default function Todo({todo}:ITodo) {
  const {title,description,checked,createdAt,finishedAt,ArchivedAt} = todo;
    
  return (
    <section>
        <h2>{title}</h2>
        <p>{description}</p>
    </section>
  )
}
