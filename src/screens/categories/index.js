import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList
} from 'react-native';
import CategoryItem from '../../components/categories-item/index'
import styles from './style'
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.action'

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)
  const categoryProducts = useSelector(state => state.products.filteredProduct)

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate('Products'),
    {
      name: item.title,
      color: item.color
    }
  }

  const renderCategories = ({ item }) => {
    return (
      <CategoryItem item={item} onSelected={handleSelectedCategory} />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categoryProducts}
          renderItem={renderCategories}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>

  );
};



export default Categories;


