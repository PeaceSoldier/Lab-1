import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = {
    gallery: {
        height: '140px',
        width: '140px',
        margin:'10px'
    },
    div_style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

};
export default function Gallery() {
  return (
    <View style={styles.div_style}>
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
      <Image style={styles.gallery} source={'https://via.placeholder.com/150x150'} />
    </View>
  );
}
