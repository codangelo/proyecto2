import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import styles from './style'
import { PRODUCT } from '../../utils/data/products'
import ProductItem from '../../components/products-item/index'
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct, selectedProduct } from '../../store/actions/product.action'

const Products = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const categoryProducts = useSelector(state => state.products.filtered)
  const category = useSelector(state => state.categories.selected)
  const handleSelectedProduct = (item) => {
    navigation.navigate('Detail',
      {
        name: item.name
      }
    )
  }

  const renderProducts = ({ item }) => {
    return (
      <ProductItem item={item} onSelected={handleSelectedProduct} />
    )
  }

  useEffect(() => {
    dispatch(filterProduct(category.id))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categoryProducts}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
    ;
};




const renderProducts = ({ item }) => {
  return (
    <>
      <ProductItem item={item} onSelected={handleSelectedProduct} />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={products}
            renderItem={renderProducts}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
};


export default Products;
