import React ,{useState}from 'react'
import { TextField, Button, FormControl } from '@mui/material';
import './styles.scss';

interface ITodoForm{
    onSubmit:any;
}


export default function TodoForm(props:ITodoForm) {
  const {onSubmit} = props;
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit(formData); 
    setFormData({
      title: '',
      description: ''
    })
  };
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormControl>
      <Button  className='form-button' type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </form>
  )
}
