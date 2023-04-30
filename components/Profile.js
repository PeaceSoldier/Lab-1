import * as React from 'react';
import { Text, View } from 'react-native';
import {TextField, Button} from "@mui/material";


const styles = {
    h1: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '7px',
    },
    input: {
        margin:'10px',
    },
    h3: {
        marginLeft: '12px',
        marginRight: '12px',
    },
    button: {
        margin: '10px',
    }
};

export default function Profile() {
  return (
    <View>
      <Text style={styles.h1}>Registration</Text>
        <TextField style={styles.input} id="outlined-basic" label="Surname" variant="outlined"/>

        <TextField style={styles.input} id="outlined-basic" label="Name" variant="outlined" />

        <TextField style={styles.input} id="outlined-basic" label="Email" variant="outlined" />

        <TextField style={styles.input} id="outlined-basic" label="Password" variant="outlined" type="password"/>

        <TextField style={styles.input} id="outlined-basic" label="Password again" variant="outlined" type="password"/>

        <Button style={styles.button} variant="contained" color="success" >
            Registrate
        </Button>
    </View>
  );
}

