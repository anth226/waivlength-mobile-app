import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer } from '@/Containers'

import { CustomImage, ActionBar, AvatarGroup, GradientBackground, BackIcon, Avatar, TypingAnimation } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const NewMessageContainer = () => {
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
            firstName: "Robert",
            lastName: "Fox",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
            isOfficial: true,
            isOnline: true
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            username: "@robertfox",
        },
        {
            id: 4,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
        },
        {
            id: 5,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
            isOfficial: true
        },
        {
            id: 6,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",

        },
    ];
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{}} onPress={() => navigate('Conversation')}>
                <View style={[Layout.fullWidth, Layout.column, Layout.alignItemsCenter, styles.itemWapper]}>
                    <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter]}>
                        <Avatar
                            dotStyle={styles.dotStyle}
                            isShowDot={item['isOnline']}
                            source={Images.onBoarding3}
                            imageWrapperStyle={[styles.avatar, item['isOnline'] ? {} : { borderWidth: 0 }]}
                            imageStyle={[styles.avatarImage, item['isOnline'] ? {} : { width: Responsive.height(50), height: Responsive.height(50), borderRadius: Responsive.height(25) }]}
                            url={item['url']}
                            firstName={item['firstName']}
                            lastName={item['lastName']} />
                        <View style={[Layout.fill, Layout.column, { marginLeft: Responsive.width(16) }]}>
                            <View style={[Layout.row, { alignItems: 'center' }]}>
                                <Text style={styles.textNameUser}>{`${item['firstName']} ${item['lastName']}`}</Text>
                                {
                                    item['isOfficial'] && (
                                        <CustomImage source={Images.icVerified} width={Responsive.height(15)} height={Responsive.height(15)} style={{ marginLeft: Responsive.width(5) }} />
                                    )
                                }
                            </View>
                            <Text style={styles.textUserDescription}>{item['username']}</Text>
                        </View>
                    </View>
                    <View style={[Layout.fullWidth, styles.lineItem]}></View>
                </View>

            </TouchableOpacity >
        );
    };


    return (<SafeAreaView style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>New Message</Text>}
        />
        <View style={styles.line} />
        <View style={styles.toWrapper}>
            <Text style={styles.textCancel}>To:</Text>
            <TextInput
                onChangeText={text => { }}
                editable={true}
                autoFocus
                placeholder={''}
                placeholderTextColor={'#7C8093'}
                selectTextOnFocus
                style={[Layout.fill, Common.textInput, styles.inputText]}
            />
        </View>
        <View style={styles.line} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >

            <FlatList nestedScrollEnabled={false}
                style={[Layout.fill]}
                data={DATA}
                ListFooterComponent={<View style={{ height: Responsive.height(70) }} />}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />


        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default NewMessageContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#15172A',
    },
    textTo: {
        fontSize: Responsive.font(14),
        fontFamily: 'NotoSans-Regular',
        color: '#272D37',
    },
    toWrapper: {
        height: Responsive.height(42.5),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Responsive.height(24),
        flexDirection: 'row'
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#BFCBD6'
    },
    itemStyleWrapper: {
        paddingVertical: Responsive.height(16),
        paddingHorizontal: Responsive.height(24),
    },
    inputText: {
        borderBottomWidth: 0,
        fontFamily: 'NotoSans-Regular',
        paddingLeft: Responsive.width(10)
    },
    itemWapper: {
        paddingHorizontal: Responsive.width(24),
        height: Responsive.height(68)
    },
    avatar: {
        width: Responsive.height(50),
        height: Responsive.height(50),
        borderRadius: Responsive.height(25),
        borderWidth: 2,
        borderColor: '#C665F0',
    },
    avatarImage: {
        width: Responsive.height(40),
        height: Responsive.height(40),
        borderRadius: Responsive.height(20),
        backgroundColor: '#BBBEDD',
    },
    dotStyle: {
        right: Responsive.height(0.1),
        bottom: Responsive.height(5),
    },
    textNameUser: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#242A31'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(13),
        lineHeight: Responsive.width(22),
        color: '#8C97A7'
    },

});
