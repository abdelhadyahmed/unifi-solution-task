import React,{useContext, useState} from 'react'
import TTodo from '../../types/TTodo';
import Todo from '../Todo';
import TodoForm from '../form';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import './styles.scss'
import { DarkModeContext } from '../../Providers/DarkmoodProvider/darkmoodProvider';
export default function Todos() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [archivedTodos, setArchivedTodos] = useState<TTodo[]>([]);
  const { darkMode } = useContext<any>(DarkModeContext);
  const onSubmit = (data:any)=>{
    let todoObj: TTodo = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      createdAt: moment(new Date()).format('DD/MM/YYYY, hh:mm A'),
      checked:false
    }
    setTodos([...todos,todoObj]);
  }

  const saveEdits = (id:string,data:{title:string,description:string},setIsEdit:any)=>{
    let newTodos = todos.map((todo)=>{
      if(todo.id === id)return {...todo,title:data.title,description:data.description};
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
    let newTodos = todos.map((todo)=>{
      if(todo.id===id) return {...todo,checked:!todo.checked,finishedAt:moment(new Date()).format('DD/MM/YYYY, hh:mm A')}
      return todo;
    });
    setTodos(newTodos);
  }

  const archiveTodo = (id:string)=>{
    todos.forEach((todo)=>{
      if(todo.id === id){
        setArchivedTodos([...archivedTodos,{...todo, ArchivedAt:moment(new Date()).format('DD/MM/YYYY, hh:mm A')}])
        return;
      }
    });
    deleteTodo(id);
  }

  return (
    <>
    {console.log(archivedTodos)}           
    <TodoForm onSubmit={onSubmit}/>
    <div className='todos-container' style={{ backgroundColor: darkMode?'black':'white', color: darkMode?'white':'black'}}>
      <div>
      <h1>Todo List</h1>
        {todos.map((todo,idx)=>{
          return <Todo key={idx} todo={todo} deleteTodo={deleteTodo} finishTodo={finishTodo} saveEdits={saveEdits} archiveTodo={archiveTodo} isArchived={false}/>
        })}
      </div>
      <div>
        <h1>Archived Todo List</h1>
        {archivedTodos.map((todo,idx)=>{
          return <Todo key={idx} todo={todo} deleteTodo={deleteTodo} finishTodo={finishTodo} saveEdits={saveEdits} archiveTodo={archiveTodo} isArchived={true}/>
        })}
      </div>
    
    </div>                                       
    </>
  )
}
