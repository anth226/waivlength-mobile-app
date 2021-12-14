import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer } from '@/Containers'

import { CustomImage, Avatar, ButtonNext, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const MessageContainer = ({ goBack }) => {
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
                    <Avatar source={Images.onBoarding3} style={styles.avatar} imageStyle={{ padding: 2 }} url={item['url']} firstName={item['firstName']} lastName={item['lastName']} />
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


    return (<View style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <View style={{ height: Responsive.height(1), backgroundColor: '#D5DDE5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
                style={[Layout.fill]}>

                <View style={[Layout.fullWidth]}>
                    <View style={[Layout.fill, styles.searchStyle]}>
                        <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center' }]}>
                            <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icSearch} />
                            <TextInput
                                onChangeText={text => { }}
                                editable={true}
                                placeholder={'Search for messeges'}
                                placeholderTextColor={'#7C8093'}
                                selectTextOnFocus
                                style={[Layout.fullWidth, Common.textInput, styles.inputText]}
                            />
                        </View>
                    </View>
                </View>

                <FlatList nestedScrollEnabled={false}
                    style={[Layout.fullWidth, { marginTop: Responsive.height(30) }]}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />



            </ScrollView>
        </KeyboardAvoidingView>
    </View>)
}

export default MessageContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    searchStyle: {
        height: Responsive.height(48),
        borderColor: '#96A1AE',
        borderRadius: Responsive.height(24),
        borderWidth: Responsive.height(1),
        marginVertical: Responsive.width(17),
        marginHorizontal: Responsive.width(29),
        justifyContent: 'center',
        paddingHorizontal: Responsive.width(20)
    },
    inputText: {
        height: Responsive.height(48),
        borderBottomWidth: 0,
        marginLeft: Responsive.width(10),
        justifyContent: 'center',
        fontFamily: 'NotoSans-Regular',
    },
    avatar: {
        width: Responsive.width(50),
        height: Responsive.height(50),
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#ff00ff'
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
    lineItem: {
        backgroundColor: '#E1E2EF',
        height: Responsive.height(1)
    }


});
