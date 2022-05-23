import { ActivityIndicator, StyleSheet, View } from 'react-native';

import CategoriesScreen from './Screens/CategoriesScreen';
import MainNavigator from './Navigation/Shop';
import ProductsScreen from './Screens/ProductsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  /*const [categorySelected, setCategorySelected] = useState(null)
  const [productSelected, setProductSelected] = useState(null);

  const handleCategory = (category) => {
    //console.log(category);
    setCategorySelected(category)
  }

  const handleProduct = (product) => {
    //console.log(category);
    setProductSelected(product)
  }

  console.log(categorySelected); */

  const [loaded] = useFonts ({
    Arvo: require('./assets/Fonts/Arvo/Arvo-Bold.ttf'),
    Montserrat: require('./assets/Fonts/Montserrat/Montserrat-Bold.otf'),
  });

  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);
  //console.log(productSelected);

  return (
    <SafeAreaView style={{flex: 1 }}>
      <MainNavigator/>
    </SafeAreaView>
  );
}
