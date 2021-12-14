import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, useWindowDimensions, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

import { CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const Username = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })



    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
            style={[Layout.fill]}>

            <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
                <CustomImage width={Responsive.height(45)} height={Responsive.height(45)} source={Images.icUsername} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>3</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>What should we call you?</Text>

            <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper]}>
                <Text style={styles.character}>@</Text>
                <TextInput
                    onChangeText={text => { }}
                    editable={true}
                    placeholder={'Enter username here'}
                    placeholderTextColor={'#7C8093'}
                    selectTextOnFocus
                    style={[Layout.fullWidth, Common.textInput, styles.inputText]}
                />
            </View>

            <Text style={styles.textDescription}>Your username is unique to you. You can change it later if you wish.</Text>
        
            <View style={Layout.fill} />

        </ScrollView>
    )
}

export default Username

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    textStep: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#8C93BC',
        paddingHorizontal: Responsive.width(8)
    },
    textCurrentStep: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(19),
        color: '#5D5FEF',
    },
    textHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(24),
        lineHeight: Responsive.width(36),
        marginTop: Responsive.height(15),
        color: '#242332'
    },
    inputTextWrapper: {
        marginTop: Responsive.height(59),
        marginBottom: Responsive.height(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    character: {
        marginLeft: Responsive.width(10),
        fontFamily: 'Poppins-Regular',
        color: '#242A31'
    },
    inputText: {
        borderBottomWidth: 0,
        paddingHorizontal: Responsive.width(5),
        fontSize: Responsive.font(14),
    },
    textDescription: {
        color: '#878893',
        fontFamily: 'NotoSans-Regular',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.width(16),
        marginTop: Responsive.height(18)
    }
});
