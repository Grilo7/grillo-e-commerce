import { ActivityIndicator, StyleSheet, View } from 'react-native';

import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(null)

  const handleCategory = (category) => {
    //console.log(category);
    setCategorySelected(category)
  }

  console.log(categorySelected);

  const [loaded] = useFonts ({
    Arvo: require('./assets/Fonts/Arvo/Arvo-Bold.ttf'),
    Montserrat: require('./assets/Fonts/Montserrat/Montserrat-Bold.otf'),
  });

  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);

  return (
    <View style={styles.container}>
      { categorySelected ?
        <ProductsScreen category={categorySelected} handleCategory={handleCategory}/>
        :
        <CategoriesScreen handleCategory = {handleCategory}/>
                
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  }
})
