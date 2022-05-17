import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { colors } from '../Styles/Colors'

const Searcher = ({children, additionalStyles}) => {
    return (
        <View style={{...styles.searcherContainer, ...additionalStyles}}>
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.5,
        elevation: 10,
        borderRadius: 8,
    }
})