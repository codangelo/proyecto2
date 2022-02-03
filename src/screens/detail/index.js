import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';
import styles from './style'
import {useSelector} from 'react-redux'



const Detail = ({navigation, route}) => {
  const product = useSelector(state => state.products.selected)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{product.name}</Text>
        <Text>{product.description}</Text>
        <Button title="Volver" onPress={() => navigation.navigate('Categories')}/>
      </View>
    </SafeAreaView>
  );
};



export default Detail;
