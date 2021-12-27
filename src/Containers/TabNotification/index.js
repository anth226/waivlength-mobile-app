import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { AllNotificationContainer, MentionNotificationContainer } from '@/Containers'
import { CustomImage, ActionBar, GradientBackground, BackIcon, Avatar, TypingAnimation, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const TabNotificationContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })



    return (<SafeAreaView style={[Layout.fill]} >
        {/* <GradientBackground style={{ position: 'absolute' }} colors={['#E4EBF3', '#edf1f5']} /> */}
        <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
        <ActionBar
            left={<TouchableOpacity style={styles.buttonCancel} onPress={goBack} >
                <View>
                    <View style={styles.wrapperAvatarTopBar}>
                        <Avatar
                            isShowDot={false}
                            imageStyle={[styles.avatarImage,]}
                            url={'https://picsum.photos/200/200'}
                        />
                    </View>
                    <View style={styles.circleUnread}>
                        <Text style={styles.textUnread}>12</Text>
                    </View>
                </View>
            </TouchableOpacity>}
            right={<View style={{ borderWidth: 1, borderRadius: Responsive.width(100), borderColor: '#BFC2D8', padding: Responsive.width(5) }}>
                <CustomImage source={Images.icNotificationSetting} width={Responsive.height(24)} height={Responsive.height(24)} style={{ alignItems: 'flex-end' }} onPress={() => { }} />
            </View>}

        />
        
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >

            <Tab.Navigator
                style={[Layout.fullWidth, { marginTop: Responsive.height(5) }]}
                screenOptions={{
                    tabBarActiveTintColor: '#3B3F51',
                    tabBarInactiveTintColor: '#3B3F51',
                    tabBarStyle: styles.tabBar,
                    tabBarIndicatorStyle: styles.tabIndicator,
                    tabBarLabelStyle: styles.textTabLabel,
                }}
            >
                <Tab.Screen name="All" component={AllNotificationContainer} options={{ tabBarLabel: 'All'}} />
                <Tab.Screen name="Mentions" component={MentionNotificationContainer} options={{ tabBarLabel: 'Mentions' }} />
            </Tab.Navigator>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default TabNotificationContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#15172A',
    },
    buttonCancel: {
        height: Responsive.height(36),
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBar: {
        height: Responsive.height(55),
        borderTopColor: 'transparent',
        backgroundColor: 'transparent',
        elevation: 0,
    },
    textTabLabel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        textTransform: 'none'
    },
    tabIndicator: {
        backgroundColor: '#5D5FEF',
        height: Responsive.height(3),
        width: Responsive.width(60),
        
        marginLeft: Responsive.width(75)
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#BFCBD6'
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
    wrapperAvatarTopBar: {
        marginTop: Responsive.height(5),
        marginRight: Responsive.width(10)
    },
    circleUnread: {
        backgroundColor: '#FA4D56', width: Responsive.width(20), height: Responsive.width(20), position: 'absolute',
        right: 0, bottom: -5, zIndex: 2,
        borderRadius: Responsive.width(10), alignItems: 'center',
        justifyContent: 'center',
    },
    textUnread: {
        color: '#ffffff',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
    },

});