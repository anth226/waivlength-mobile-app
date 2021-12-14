import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

import { CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });




const EnableNotification = () => {
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
                <CustomImage width={Responsive.width(45)} height={Responsive.height(45)} source={Images.icEnableNotification} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>8</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>Stay up to date</Text>

            <Text style={styles.textDescription}>Turn on notifications, and we’ll let you know when your followers post</Text>

            <View style={[Layout.column, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(141) }]}>
                <CustomImage height={Responsive.height(101)} width={Responsive.width(309)} source={Images.bgNoNewNotification} />
            </View>
            <View style={Layout.fill} />
            <View style={[Layout.column, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(95) }]}>
                <TouchableOpacity
                    onPress={() => navigateAndSimpleReset('Main')}>
                    <Text style={styles.textSkipStep}>Skip this step</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Layout.fullWidth, Common.button.rounded, styles.buttonEnableNotification]}
                    onPress={() => navigateAndSimpleReset('Main')}
                >
                    <Text style={styles.textButton}>Enable Notifications</Text>
                </TouchableOpacity>
                <View style={{ height: Responsive.height(39) }} />
            </View>

        </ScrollView>
    )
}

export default EnableNotification

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
    buttonEnableNotification: {
        height: Responsive.height(52),
        borderRadius: 26
    },
    textButton: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(28),
        color: '#ffffff',
    }
});
