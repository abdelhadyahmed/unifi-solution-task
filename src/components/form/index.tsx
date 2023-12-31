import React ,{useContext, useState}from 'react'
import { TextField, Button, FormControl } from '@mui/material';
import './styles.scss';
import { DarkModeContext } from '../../Providers/DarkmoodProvider/darkmoodProvider';

interface ITodoForm{
    onSubmit:any;
}


export default function TodoForm(props:ITodoForm) {
  const {onSubmit} = props;
  const { darkMode } = useContext<any>(DarkModeContext);
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
    <form className='form' onSubmit={handleSubmit} style={{ color:darkMode?'white':'black' }}>
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
