import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import './styles.scss';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { DarkModeContext } from '../../Providers/DarkmoodProvider/darkmoodProvider';

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useContext<any>(DarkModeContext);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
    <Box  sx={{ width: '100%', typography: 'body1',marginBottom:"10px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<Link className="nav-link" to={'/todos'}>Todos</Link>} value="1" />
            <Tab label={<Link className="nav-link" to={'/weather'}>Weather</Link>} value="2" />
            <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
          </TabList>
        </Box>
      </TabContext>
    </Box>
    </>
  )
}
