import React ,{useState} from 'react'
import TTodo from '../../types/TTodo';
import { TextField } from '@mui/material';

interface ITodo{
    todo:TTodo;
    deleteTodo:any;
    finishTodo:any;
    saveEdits:any;
  }

export default function Todo({todo,deleteTodo,finishTodo,saveEdits}:ITodo) {
  const {id,title,description,checked,createdAt,finishedAt,ArchivedAt} = todo;
  const [isEdit,setIsEdit] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: title,
    description: description
  });
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
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
        <button onClick={()=>{deleteTodo(id)}}>Delete</button>
        <button onClick={()=>{finishTodo(id)}}>Finished</button>
        {isEdit?<button onClick={()=>{saveEdits(id,formData,setIsEdit)}}>Save</button>
        :<button onClick={()=>{setIsEdit(!isEdit)}}>Edit</button>}
        
    </section>
  )
}
