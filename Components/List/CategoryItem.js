import { Dimensions, useWindowDimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { colors } from '../../Styles/Colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({category}) => {

    const {width, height} = useWindowDimensions();

    console.log(width, height)
    
    return (
        <View style={{...styles.container,
            maxWidth: 0.43 * width,
            maxHeight: 0.43 * width,
            margin: width < 330 ? 10:15,
        }}>
            <Text style={styles.text}>{category.category}</Text>
    </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
        backgroundColor: colors.darkBlue,
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        color: colors.yellow,
    }
})