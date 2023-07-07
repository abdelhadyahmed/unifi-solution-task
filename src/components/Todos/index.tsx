import React,{useState} from 'react'
import TTodo from '../../types/TTodo';
import Todo from '../Todo';
import TodoForm from '../form';

export default function Todos() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const onSubmit = (data:any)=>{
    let todoObj: TTodo = {
      title: data.title,
      description: data.description,
      checked:false
    }
    console.log(todoObj)
    setTodos([...todos,todoObj])
  }
  return (
    <>                           
    <TodoForm onSubmit={onSubmit}/>                                       
      {todos.map((todo,idx)=>{
        return <Todo key={idx} todo={todo}/>
      })}
    </>
  )
}
