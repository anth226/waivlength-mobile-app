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




const Recommended = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{}}>
                <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, styles.itemWapper]}>
                    <CustomImage source={Images.onBoarding3} style={styles.avatar} />
                    <View style={[Layout.fill, Layout.column]}>
                        <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter]}>
                            <View style={[Layout.fill, Layout.column, { marginLeft: Responsive.width(10) }]}>
                                <Text style={styles.textNameUser}>{'BBBBBBBBBBBBBB'}</Text>
                                <Text style={styles.textUserDescription}>{'I am the sunshine'}</Text>
                            </View>
                            <View style={styles.buttonFollow}>
                                <Text style={styles.textFollow}>{'Follow'}</Text>
                            </View>
                        </View>
                        <View style={[Layout.fullWidth, styles.lineItem]}></View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    };


    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
            style={[Layout.fill]}>

            <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
                <CustomImage width={Responsive.width(45)} height={Responsive.height(45)} source={Images.icRecommended} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>6</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>Recommended for you</Text>

            <Text style={styles.textDescription}>Follow some profiles based on your interests</Text>



            <FlatList nestedScrollEnabled={false}
                style={[Layout.fullWidth, { marginTop: Responsive.height(30) }]}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />

        </ScrollView>
    )
}

export default Recommended

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
    itemWapper: {
        height: Responsive.height(76),
    },
    avatar: {
        width: Responsive.width(46),
        height: Responsive.height(46),
        borderRadius: 150 / 2,
        borderWidth: 3,
        borderColor: "red"
    },
    textNameUser: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#242A31'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#3B454E'
    },
    buttonFollow: {
        backgroundColor: 'transparent',
        paddingHorizontal: Responsive.height(25),
        height: Responsive.height(28),
        borderRadius: Responsive.height(14),
        borderWidth: 0,
        justifyContent: 'center',
        backgroundColor: '#5D5FEF',
    },
    textFollow: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(18),
        color: '#ffffff'
    },
    lineItem: {
        backgroundColor: '#E1E2EF',
        height: Responsive.height(2)
    }
});
