import * as React from 'react';
import {ReacttoPrint} from 'react';
import './center.css'
import {Grid} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import photo from './New_Arlington.jpeg'
import QRCode from 'qrcode.react';

export default function ActionAreaCard(props) {
    console.log(props.data)
  return (
    <div className="centered-card-container">
    <Card justify="center" sx={{ width: '100%', height:'100%' }}>
      
        <CardMedia
          component="img"
          width="50"
          height="145"
          image={photo}
          justify-content = "center"
          align-items="center"
          alt='Field of Honor'
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          In Memory of<br/>

          {props.data.DedicatedTo}<br/>

          {props.data.DedicatedFrom}<br/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Field F

          Row W

          Flag #10
          </Typography>
          <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
            <QRCode value="https://example.com" size={50} />
          </div>
        </CardContent>
    </Card>
    {/* <ReacttoPrint
        trigger ={()=> {
            return <button>Print the label</button>
        }}
    /> */}
    </div>
    
  );
}