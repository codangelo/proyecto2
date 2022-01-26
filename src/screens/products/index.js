import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';
import styles from './style'




const Products = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Products</Text>
        <Button title="Ver detalle" onPress={() => navigation.navigate('Detail')}/>
        <Button title="Volver" onPress={() => navigation.navigate('Categories')}/>
      </View>
    </SafeAreaView>
  );
};



export default Products;
