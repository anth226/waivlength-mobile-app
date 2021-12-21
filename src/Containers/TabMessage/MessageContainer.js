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
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'


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
            unRead: 4,
            time: "02:17"
        },
        {
            id: 2,
            firstName: "Social",
            lastName: "Community",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            unRead: 4,
            time: "02:17",
            isChatRoom: true
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            bio: "Change ain't easy",
            unRead: 4,
            time: "02:17"
        },
        {
            id: 4,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 5,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 6,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 7,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 8,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
    ];
    const renderItem = ({ item }) => {
        let isChatRoom = item['isChatRoom']
        return (
            <TouchableOpacity style={{}} onPress={() => isChatRoom ? navigate('GroupConversation') : navigate('Conversation')}>
                <View style={[Layout.fullWidth, Layout.column, Layout.alignItemsCenter, styles.itemWapper]}>
                    <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter]}>
                        <Avatar
                            dotStyle={styles.dotStyle}
                            isShowDot={!isChatRoom}
                            source={Images.onBoarding3}
                            imageWrapperStyle={styles.avatar}
                            imageStyle={isChatRoom? styles.avatarImageChatRoom : styles.avatarImage}
                            url={item['url']}
                            firstName={item['firstName']}
                            lastName={item['lastName']} />
                        <View style={[Layout.fill, Layout.column, { marginLeft: Responsive.width(10) }]}>
                            <Text style={styles.textNameUser}>{`${item['firstName']} ${item['lastName']}`}</Text>
                            <Text style={styles.textUserDescription}>{item['bio']}</Text>
                            {
                                isChatRoom && (
                                    <Text style={styles.textUserDescription}>{`@ - Chat Room`}</Text>
                                )
                            }
                        </View>
                        <View style={[Layout.fill, Layout.column]}>
                            <Text style={styles.textBadgeUnread}>{`${item['unRead']}`}</Text>
                            <Text style={styles.textTime}>{item['time']}</Text>
                        </View>
                    </View>
                    <View style={[Layout.fullWidth, styles.lineItem]}></View>
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
            <View style={[Layout.fullWidth, Layout.row]}>
                <View style={{ width: Responsive.width(29) }} />
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
                <View style={{ width: Responsive.width(29) }} />
            </View>


            <FlatList nestedScrollEnabled={false}
                style={[Layout.fill, { marginTop: Responsive.height(5) }]}
                data={DATA}
                ListHeaderComponent={<View style={{ height: Responsive.height(15) }}/>}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />




            <View style={[Layout.row, styles.floatingActionWrapper, { bottom: 0 }]}>
                <ButtonNext disabled={false} width={Responsive.height(56)} height={Responsive.height(56)}
                    iconStyle={{
                        width: Responsive.height(19),
                        height: Responsive.height(18)
                    }}
                    onPress={() => navigate('NewMessage')}
                    icon={Images.icMessage} />
            </View>

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
        marginTop: Responsive.width(17),
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
    itemWapper: {
        paddingHorizontal: Responsive.width(24),
        height: Responsive.height(90)
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
    avatarImageChatRoom: {
        width: Responsive.height(50),
        height: Responsive.height(50),
        borderRadius: Responsive.height(25),
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
    lineItem: {
        backgroundColor: '#D5DDE5',
        height: Responsive.height(1)
    },
    textBadgeUnread: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(11),
        lineHeight: Responsive.width(16),
        color: '#fff',
        backgroundColor: '#5D5FEF',
        width: Responsive.height(18),
        height: Responsive.height(18),
        borderRadius: Responsive.height(9),
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'flex-end'
    },
    textTime: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(11),
        lineHeight: Responsive.width(16),
        color: '#8F9CA9',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'flex-end',
        marginTop: Responsive.height(12)
    },
    floatingActionWrapper: {
        marginBottom: Responsive.width(27),
        marginRight: Responsive.width(24),
        position: 'absolute',
        right: 0
    }
});
