import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import _ from 'lodash';
import { ExampleContainer } from '@/Containers'

import { CustomImage, ActionBar, DrawerLeftChatRoom, GradientBackground, BackIcon, Avatar, TypingAnimation, DrawerRightChatRoom } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import Animated from 'react-native-reanimated';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const DrawerNavigator = ({ navigation }) => {

    const drawerContent = (props) => {
        return (<Animated.View style={[styles.stack, { borderRadius: 10, transform: [{ scale: 0.9 }] }]}>
            <DrawerLeftChatRoom {...props} />
        </Animated.View>)
    }

    return (
        <Drawer.Navigator
            initialRouteName='DrawerRight'
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                drawerPosition: 'left',
                overlayColor: 'transparent',
                drawerStyle: {
                    backgroundColor: 'transparent',
                    width: Responsive.width(342),
                },
            }}
            drawerContent={drawerContent} >
            <Drawer.Screen
                name={'DrawerRight'}
                component={DrawerRightNavigator} />
        </Drawer.Navigator>
    )
}




Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const DrawerRightNavigator = ({ navigation }) => {


    const progress = useDrawerProgress();

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.9],
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 10],
    });
    const animatedStyle = { borderRadius, transform: [{ scale }] };

    const drawerContent = (props) => {
        return (
            <Animated.View style={[styles.stack, { borderRadius: 10, transform: [{ scale: 0.9 }] }]}>
                <DrawerRightChatRoom {...props} />
            </Animated.View>)
    }

    return (
        <Drawer.Navigator
            initialRouteName='DrawerLeft'
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                drawerPosition: 'right',
                overlayColor: 'transparent',
                drawerStyle: {
                    backgroundColor: 'transparent',
                    width: Responsive.width(342),
                }
            }}
            drawerContent={drawerContent} >
            <Drawer.Screen
                name={'DrawerLeft'}>
                {(props) => <Screens {...props} animatedStyle={animatedStyle} leftNavigation={navigation} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}



const Screens = ({ navigation, leftNavigation, animatedStyle }) => {
    return (
        <Animated.View style={[styles.stack, animatedStyle]}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="GroupConversationContainer" initialParams={{ leftNavigation }} component={GroupConversationContainer} />
            </Stack.Navigator>
        </Animated.View>
    );
};



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const GroupConversationContainer = ({ route, navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();
    const [userTextInput, setUserTextInput] = useState("");


    const { leftNavigation } = route.params;
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
            content: "Hi! How you doing? Your last post was really cool ",
            time: "10:20 PM"
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            content: "Thank you a lot! I did it on last Weekend at my free time.",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 4,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 5,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 6,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 7,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 8,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 9,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it End",
            time: "10:20 PM"
        },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity >
                {
                    (index % 2 == 0) ? (
                        <View style={[Layout.row, styles.itemStyleWrapper, { width }]}>
                            <View style={{ marginRight: Responsive.width(8) }}>
                                <Avatar
                                    isShowDot={false}
                                    source={Images.onBoarding3}
                                    imageWrapperStyle={styles.avatar}
                                    imageStyle={styles.avatarImage}
                                    url={item['url']}
                                    textStyle={{ fontSize: Responsive.font(13), marginTop: Responsive.height(2) }}
                                    firstName={item['firstName']}
                                    lastName={item['lastName']} />
                            </View>

                            <View style={[Layout.fill, Layout.row]}>
                                <View style={styles.viewBubbleOrtherWrapper}>
                                    <Text style={styles.textBubbleOrtherWrapper}>{item['content']}</Text>
                                </View>
                                <View style={Layout.fill} />
                            </View>
                            <View style={{ width: Responsive.width(49) }} />
                            <Text style={styles.textItemTime}>{item['time']}</Text>

                        </View>
                    ) : (
                        <View style={[Layout.row, styles.itemStyleWrapper, { width }]}>
                            <Text style={styles.textItemTime}>{item['time']}</Text>
                            <View style={{ width: Responsive.width(49) }} />
                            <View style={[Layout.fill, Layout.row]}>
                                <View style={Layout.fill} />
                                <View style={styles.viewBubbleMeWrapper}>
                                    <Text style={styles.textBubbleMeWrapper}>{item['content']}</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: Responsive.width(8) }}>
                                <Avatar
                                    isShowDot={false}
                                    source={Images.onBoarding3}
                                    imageWrapperStyle={styles.myAvatar}
                                    imageStyle={styles.myAvatarImage}
                                    url={item['url']}
                                    textStyle={{ fontSize: Responsive.font(13), marginTop: Responsive.height(2) }}
                                    firstName={item['firstName']}
                                    lastName={item['lastName']} />
                            </View>
                        </View>
                    )
                }

            </TouchableOpacity>
        );
    };


    const progress = useDrawerProgress();

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.9],
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 10],
    });
    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return (<Animated.View style={[styles.stack, animatedStyle]}>
        <SafeAreaView style={[Layout.fill, styles.parentContainer]} >
            <GradientBackground style={{ position: 'absolute' }} />
            <ActionBar
                height={Responsive.height(66)}
                left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
                right={
                    <TouchableOpacity
                        style={styles.actionRight}
                        onPress={() => {
                            leftNavigation.openDrawer();
                        }}>
                        <CustomImage width={Responsive.height(20)} height={Responsive.height(14)} source={Images.icHamburger} />
                        <View style={styles.viewBadgetActionWrapper}>
                            <Text style={styles.textBadgetAction}>100</Text>
                        </View>
                    </TouchableOpacity>
                }
                center={
                    <TouchableOpacity
                        style={[Layout.fullWidth, Layout.column, styles.actionCenterWrapper]}
                        onPress={() => {
                            navigation.openDrawer();
                        }}
                    >
                        <View style={[Layout.rowCenter]}>
                            <CustomImage height={Responsive.height(9)} width={Responsive.height(10)} source={Images.icChatRoomSmall} />
                            <View width={Responsive.width(5)} />
                            <Text style={styles.textChatRoom}>Chat Room</Text>
                        </View>
                        <Text style={[styles.textTitle, { marginTop: -Responsive.height(5) }]}>Social Community</Text>
                        <Text style={[styles.textChatRoom, { marginTop: -Responsive.height(5) }]}>1,534 members, 432 Online</Text>
                    </TouchableOpacity>
                }
            />
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
                    inverted
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                    keyExtractor={(item) => item.id} />


                <View style={[Layout.column, styles.floatingActionInputWrapper]}>
                    <View style={Layout.row}>
                        <Text style={styles.textTyping}>Muhammad<Text style={[styles.textTyping, { color: '#9498AA' }]}> is Typing</Text></Text>
                        <TypingAnimation
                            style={{ marginTop: Responsive.width(5) }}
                            dotMargin={Responsive.width(5)}
                            dotAmplitude={Responsive.width(3)}
                            dotRadius={Responsive.height(1.5)}
                            dotSpeed={0.1}
                            dotColor={'#414555'} />
                    </View>
                    <TouchableOpacity
                        style={[Layout.fill, styles.inputWrapper]}
                        disabled={true}>
                        <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionInput} source={Images.icAttachment} onPress={() => { }} />
                        <TextInput
                            onChangeText={text => setUserTextInput(text)}
                            editable={true}
                            placeholder={'Send Message ...'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionIEmoji} source={Images.icEmoji} onPress={() => { }} />
                        {
                            _.isEmpty(userTextInput) ? (
                                <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionInput} source={Images.icMicrophone} onPress={() => { }} />
                            ) : (
                                <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionInput} source={Images.icSend} onPress={() => { }} />
                            )
                        }
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    </Animated.View>)
}

export default DrawerNavigator

const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
        overflow: 'hidden',
    },
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#15172A',
    },
    textChatRoom: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Regular',
        color: '#787C92',
    },
    actionRight: {
        height: Responsive.height(36),
        width: Responsive.height(36),
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewBadgetActionWrapper: {
        paddingHorizontal: Responsive.height(3),
        paddingTop: Responsive.height(1),
        borderRadius: Responsive.height(12),
        position: 'absolute',
        bottom: Responsive.height(2),
        right: 0,
        backgroundColor: '#5D5FEF',
    },
    textBadgetAction: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: Responsive.font(7),
        fontFamily: 'Poppins-Medium',
    },
    actionCenterWrapper: {
        paddingHorizontal: Responsive.width(13),
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#D5DDE5'
    },
    itemStyleWrapper: {
        paddingVertical: Responsive.height(16),
        paddingHorizontal: Responsive.height(24),
    },
    avatar: {
        width: Responsive.height(26),
        height: Responsive.height(26),
        borderRadius: Responsive.height(13),
        borderWidth: 2,
        borderColor: 'transparent',
    },
    myAvatar: {
        width: Responsive.height(26),
        height: Responsive.height(26),
        borderRadius: Responsive.height(13),
        borderWidth: 1,
        borderColor: '#E5E4F5',
    },
    avatarImage: {
        width: Responsive.height(26),
        height: Responsive.height(26),
        borderRadius: Responsive.height(13),
        backgroundColor: '#BBBEDD',
    },
    myAvatarImage: {
        width: Responsive.height(23),
        height: Responsive.height(23),
        borderRadius: Responsive.height(11.5),
        backgroundColor: '#BBBEDD',
    },
    textItemTime: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        textAlignVertical: 'bottom',
        color: '#9498AA'
    },
    floatingActionInputWrapper: {
        marginBottom: Responsive.width(11),
        marginHorizontal: Responsive.width(24),
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0
    },
    viewBubbleOrtherWrapper: {
        backgroundColor: '#ffffff',
        paddingHorizontal: Responsive.width(17),
        paddingVertical: Responsive.height(14),
        borderBottomLeftRadius: Responsive.height(14),
        borderTopRightRadius: Responsive.height(14),
        borderBottomRightRadius: Responsive.height(14),
        overflow: "hidden",
    },
    textBubbleOrtherWrapper: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#000000',
        lineHeight: Responsive.width(22),
    },
    viewBubbleMeWrapper: {
        backgroundColor: '#5D5FEF',
        paddingHorizontal: Responsive.width(17),
        paddingVertical: Responsive.height(14),
        borderBottomLeftRadius: Responsive.height(14),
        borderTopLeftRadius: Responsive.height(14),
        borderBottomRightRadius: Responsive.height(14),
        overflow: "hidden",
    },
    textBubbleMeWrapper: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#ffffff',
        lineHeight: Responsive.width(22),
    },
    inputWrapper: {
        height: Responsive.height(50),
        flexDirection: 'row',
        borderRadius: Responsive.width(12),
        backgroundColor: '#ffffff',
        paddingHorizontal: Responsive.width(5),
        alignItems: 'center'
    },
    inputText: {
        height: Responsive.height(48),
        borderBottomWidth: 0,
        fontFamily: 'NotoSans-Regular',
    },
    imageActionInput: {
        width: Responsive.height(24),
        height: Responsive.height(24)
    },
    imageActionIEmoji: {
        width: Responsive.height(17),
        height: Responsive.height(17)
    },
    textTyping: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        color: '#2F3244'
    }
});