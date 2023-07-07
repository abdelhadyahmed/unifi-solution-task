import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getWeather, getfutureWeather } from '../../api/weather';
import { DarkModeContext } from '../../Providers/DarkmoodProvider/darkmoodProvider';

export default function Weather() {
    const { darkMode } = useContext<any>(DarkModeContext);

    const [weather,setWeather] = useState<any>([]);
    const [futureWeather,setFutureWeather] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [lon,setLon] = useState<any>({})
    const [lat,setlat] = useState<any>({})
    
    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                 const latitude = position.coords.latitude;
                 const longitude = position.coords.longitude;
                 setLon(longitude);
                 setlat(latitude)
            },
            (error) => {
                console.error("Error:", error.message);
            }
            );
        } else {
            console.log("Geolocation is not supported by your browser.");
        }
    },[])
    
    useEffect(()=>{
        if(lon && lat){
            setLoading(true);
            getWeather(lon,lat).then((data)=>{
                setWeather(data.weather)
                setLoading(false);
            });
            getfutureWeather(lon,lat).then((data)=>{
                setFutureWeather(data)
                setLoading(false);
            });
        }
    },[lon,lat]);

  return (
    <>
        {!loading && weather?<Card sx={{ minWidth: 100 }}>
            <CardContent style={{ backgroundColor: darkMode?'black':'white', color: darkMode?'white':'black'}}>
                {weather[0]&&<img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt=""/>}
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                { weather[0]&&weather[0].main}
                </Typography>
                <Typography variant="h5" component="div">
                { weather[0]&&weather[0].description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Load Future Wheather for next 5 days</Button>
            </CardActions>
        </Card>:<p>No loaded weather</p>}
    </>
  )
}
