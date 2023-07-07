import React,{useState} from 'react'
import TTodo from '../../types/TTodo';
import Todo from '../Todo';
import TodoForm from '../form';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default function Todos() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const onSubmit = (data:any)=>{
    let todoObj: TTodo = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      createdAt: moment(new Date()).format('DD/MM/YYYY, hh:mm A'),
      checked:false
    }
    console.log(todoObj)
    setTodos([...todos,todoObj]);
  }

  const saveEdits = (id:string,data:{title:string,description:string},setIsEdit:any)=>{
    let newTodos = todos.map((todo)=>{
      if(todo.id==id)return {...todo,title:data.title,description:data.description};
      return todo;
    });
    setTodos(newTodos);
    setIsEdit(false);
  }
  const deleteTodo =(id:string)=>{
    let newTodos = todos.filter(todo=>todo.id!==id);
    setTodos(newTodos);
  }
  
  const finishTodo = (id:string)=>{
    console.log(id)
    let newTodos = todos.map((todo)=>{
      if(todo.id==id) return {...todo,checked:!todo.checked,finishedAt:moment(new Date()).format('DD/MM/YYYY, hh:mm A')}
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>                           
    <TodoForm onSubmit={onSubmit}/>                                       
      {todos.map((todo,idx)=>{
        return <Todo key={idx} todo={todo} deleteTodo={deleteTodo} finishTodo={finishTodo} saveEdits={saveEdits}/>
      })}
    </>
  )
}
