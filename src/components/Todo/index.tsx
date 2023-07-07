import React ,{useContext, useState} from 'react'
import TTodo from '../../types/TTodo';
import { TextField } from '@mui/material';
import './styles.scss';
import { DarkModeContext } from '../../Providers/DarkmoodProvider/darkmoodProvider';
interface ITodo{
    todo:TTodo;
    deleteTodo:any;
    finishTodo:any;
    saveEdits:any;
    archiveTodo:any;
    isArchived:boolean;
  }

export default function Todo({todo,deleteTodo,finishTodo,saveEdits,archiveTodo,isArchived}:ITodo) {
  const {id,title,description,checked,createdAt,finishedAt,ArchivedAt} = todo;
  const { darkMode } = useContext<any>(DarkModeContext);
  const [isEdit,setIsEdit] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: title,
    description: description
  });
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='todo-container' style={{ backgroundColor: darkMode?'black':'white', color: darkMode?'white':'black'}}>
        {isEdit? <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
        />:<h2 style={{textDecoration: checked?'line-through':""}}>{title}</h2>}
        {isEdit?<TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
        />:<p style={{textDecoration: checked?'line-through':""}}>{description}</p>}
        <p>Created At: {createdAt}</p>
        {finishedAt&&<p>Finished At: {finishedAt}</p>}
        {ArchivedAt&&<p>Archived At: {ArchivedAt}</p>}
        {isArchived?<></>:<>
          <button onClick={()=>{deleteTodo(id)}}>Delete</button>
          <button onClick={()=>{finishTodo(id)}}>Finished</button>
          <button onClick={()=>{archiveTodo(id)}}>Archive</button>
          {isEdit?<button onClick={()=>{saveEdits(id,formData,setIsEdit)}}>Save</button>
          :<button onClick={()=>{setIsEdit(!isEdit)}}>Edit</button>}
        </>}
        
    </section>
  )
}
