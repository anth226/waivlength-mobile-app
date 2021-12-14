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
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
            bio: "I am the sunshine",
            isFollowing: true
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            isFollowing: false
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            bio: "Change ain't easy",
            isFollowing: false
        },
        {
            id: 4,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            isFollowing: false
        },
        {
            id: 5,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            isFollowing: false
        },
        {
            id: 6,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            isFollowing: false
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{}}>
                <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, styles.itemWapper]}>
                    <Avatar source={Images.onBoarding3} style={styles.avatar} url={item['url']} firstName={item['firstName']} lastName={item['lastName']} />
                    <View style={[Layout.fill, Layout.column]}>
                        <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter]}>
                            <View style={[Layout.fill, Layout.column, { marginLeft: Responsive.width(10) }]}>
                                <Text style={styles.textNameUser}>{`${item['firstName']} ${item['lastName']}`}</Text>
                                <Text style={styles.textUserDescription}>{item['bio']}</Text>
                            </View>
                            {
                                item['isFollowing'] ? (
                                    <TouchableOpacity>
                                        <View style={styles.buttonFollowing}>
                                            <Text style={styles.textFollowing}>{'Following'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <View style={styles.buttonFollow}>
                                            <Text style={styles.textFollow}>{'Follow'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={[Layout.fullWidth, styles.lineItem]}></View>
                    </View>

                </View>
            </TouchableOpacity >
        );
    };


    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
            style={[Layout.fill]}>

            <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
                <CustomImage width={Responsive.height(45)} height={Responsive.height(45)} source={Images.icRecommended} />
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
    },
    textNameUser: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#242A31'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#3B454E'
    },
    buttonFollowing: {
        backgroundColor: 'transparent',
        paddingHorizontal: Responsive.height(15),
        height: Responsive.height(28),
        borderRadius: Responsive.height(14),
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#5D5FEF'
    },
    buttonFollow: {
        paddingHorizontal: Responsive.height(25),
        height: Responsive.height(28),
        borderRadius: Responsive.height(14),
        borderWidth: 0,
        justifyContent: 'center',
        backgroundColor: '#5D5FEF',
    },
    textFollowing: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(18),
        color: '#5D5FEF'
    },
    textFollow: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(18),
        color: '#ffffff'
    },
    lineItem: {
        backgroundColor: '#E1E2EF',
        height: Responsive.height(1)
    }
});
