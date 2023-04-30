import * as React from 'react';
import { Text, View } from 'react-native';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const styles = {
  info_div: {
    display: 'flex',
    margin: '5px',
  },
  vier:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default function Main() {
  return (
    <View style={styles.vier}>
      <Text style={styles.h1}>News</Text>
      <View style={styles.info_div}>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150x150"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                News title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                News text
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </View>
      <View style={styles.info_div}>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150x150"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                News title

              </Typography>
              <Typography variant="body2" color="text.secondary">
                News text
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </View>
    </View>
  );
}


