import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Photo() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3' gutterBottom>
          Welcome to Photo Library!
        </Typography>
        <Typography variant="h4">
         You have 420 images backed up. 
        </Typography>
        <h1 className="ml-2 mt-8" color="text.secondary">
          You might be running out of space!
        </h1>
      </CardContent>
      <CardActions className="ml-2 mt-0" >
        <Button size="small">Click here to upgrade to 500 GB plan</Button>
      </CardActions>
    </Card>
  );
}
