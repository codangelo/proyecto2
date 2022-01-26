import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';
import styles from './style'




const Detail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Detail</Text>
        <Button title="Volver" onPress={() => navigation.navigate('Categories')}/>
      </View>
    </SafeAreaView>
  );
};



export default Detail;
