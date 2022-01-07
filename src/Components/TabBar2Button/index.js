import React from 'react'
import Responsive from 'react-native-lightweight-responsive';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Hooks'

const { width, height } = Dimensions.get('window');
const TabBar2Button = ({ style, width, indexSelected = 0, tab1Title, tab2Title, onPressTab1, onPressTab2}) => {
    const { Layout, Images } = useTheme()

    return (
        <View style={[Layout.row, styles.viewContainer, { height, width, }, style]}>
            <TouchableOpacity activeOpacity={0.5} style={[styles.viewProgress, {backgroundColor: indexSelected == 0 ? '#5D5FEF' : 'transparent'}]} onPress={onPressTab1}>
               <Text style={[styles.textProgress, {color: indexSelected == 0 ? '#ffffff' : '#4F5A6C'}]}>{tab1Title ?? 'Assets'}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={[styles.viewProgress, {backgroundColor: indexSelected == 1 ? '#5D5FEF' : 'transparent'}]} onPress={onPressTab2}>
               <Text style={[styles.textProgress, {color: indexSelected == 1 ? '#ffffff' : '#4F5A6C'}]}>{tab2Title ?? 'History'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabBar2Button


const styles = StyleSheet.create({
    viewContainer: {
       backgroundColor: '#F3F6FA',
       borderRadius: Responsive.width(31),
       paddingVertical: Responsive.height(6),
       paddingHorizontal: Responsive.width(9),
    },
    viewProgress: {
        //width: (width - Responsive.width(18)) / 2,
        flex: 1,
        height: '100%',
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.width(31),
        justifyContent: 'center',
        alignContent: 'center',
    },
    textProgress: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#ffffff',
        alignSelf: 'center',
    }

})