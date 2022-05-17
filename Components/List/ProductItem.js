import { StyleSheet, Text, View } from 'react-native'

import { PRODUCTS } from '../../Data/products'
import React from 'react'

const ProductItem = ({product}) => {

    return (
        <View>
            <Image source={{URL: product.image}} style={styles.image}/>
            <Text>{product.description}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
})