import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

import { Avatar, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });




const ConnectTwitter = ({ nextPage }) => {
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
                <CustomImage width={Responsive.width(45)} height={Responsive.height(45)} source={Images.icConnectTwitter} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>7</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>Find your existing Twitter{'\n'}network on Waivlength</Text>

            <Text style={styles.textDescription}>See what people you know are sharing</Text>

            <View style={[Layout.column, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(95) }]}>
                <CustomImage height={Responsive.height(41)} width={Responsive.width(68)} source={Images.logo} />
                <CustomImage style={{ marginTop: Responsive.height(35) }} height={Responsive.height(40)} width={Responsive.width(40)} source={Images.icArrowDown} />
                <CustomImage style={{ marginTop: Responsive.height(24) }} height={Responsive.height(64)} width={Responsive.width(64)} source={Images.icTwitter} />
            </View>
            <View style={Layout.fill} />
            <View style={[Layout.column, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(95) }]}>
                <TouchableOpacity
                    onPress={nextPage}>
                    <Text style={styles.textSkipStep}>Skip this step</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Layout.fullWidth, Common.button.rounded, styles.buttonConnect]}
                    onPress={nextPage}
                >
                    <Text style={styles.textButton}>Connect</Text>
                </TouchableOpacity>
                <View style={{ height: Responsive.height(39) }} />
            </View>

        </ScrollView>
    )
}

export default ConnectTwitter

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
    textDescription: {
        color: '#8184A3',
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(21),
        marginTop: Responsive.height(10)
    },
    textSkipStep: {
        color: '#242A31',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(24),
        marginBottom: Responsive.height(15)
    },
    buttonConnect: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(26),
    },
    textButton: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(28),
        color: '#ffffff',
    }
});
