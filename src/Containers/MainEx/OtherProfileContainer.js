import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { PostsContainer, BookmarksContainer } from '@/Containers'
import LinearGradient from 'react-native-linear-gradient';
import { ActionBar, GradientBackground, BackIcon, Avatar, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const OtherProfileContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width, height } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }


    useEffect(() => {
        init()
    })


    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>

        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>

            <ScrollView nestedScrollEnabled>
                <View style={[Layout.fullWidth, { height: Responsive.height(148 + 56) }]}>
                    <View style={[Layout.fullWidth, { height: Responsive.height(148), backgroundColor: 'black' }]}></View>
                    <View style={[Layout.row, { position: 'absolute', left: Responsive.width(20), bottom: 0, right: Responsive.width(17), justifyContent: 'space-between' }]}>
                        <Avatar
                            isShowDot={false}
                            source={Images.onBoarding3}
                            imageWrapperStyle={[styles.avatar, { borderWidth: 0 }]}
                            imageStyle={[styles.avatarImage]}
                            url={""}
                        />
                        <View style={[Layout.rowHCenter, { position: 'absolute', bottom: Responsive.height(20), right: 0 }]}>
                            <TouchableOpacity style={[Layout.rowCenter, styles.viewEmail]} onPress={() => { }}>
                                <CustomImage source={Images.icMessage36} width={Responsive.height(15)} />
                            </TouchableOpacity>

                            <TouchableOpacity style={[Layout.rowCenter, styles.viewFollow]} onPress={() => { }}>
                                <Text style={styles.textFollow}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={Layout.fullWidth, { paddingHorizontal: Responsive.width(20) }}>
                    <View style={[Layout.rowHCenter]}>
                        <Text style={styles.textUsername}>Kazi Mahbub</Text>
                        <CustomImage source={Images.icNotVerify} width={Responsive.height(20)} />
                    </View>
                    <Text style={styles.textUsernameSmall}>@KaziMahbub</Text>
                    <Text style={styles.textUserDescription}>Founder & CEO @Salim @Murad. Building a high bandwidth digital financial system, open to anyone, anywhere, Jailbreaking the simulation.</Text>
                    <View style={Layout.rowHCenter}>
                        <CustomImage source={Images.icAttachment14} width={Responsive.height(14)}
                            style={{ marginRight: Responsive.width(5) }} />
                        <Text style={styles.textSalimDotCom}>salim.com</Text>
                        <CustomImage source={Images.icCalender14} width={Responsive.height(14)}
                            style={{ marginLeft: Responsive.width(24), marginRight: Responsive.width(7) }} />
                        <Text style={styles.textCalendar}>Joined April 2021</Text>
                    </View>
                    <View style={Layout.rowHCenter}>
                        <Text style={styles.text6E748BRegular13}>Following </Text>
                        <Text style={styles.text6E748BMedium14}>380</Text>
                        <View style={styles.viewLines}></View>
                        <Text style={styles.text6E748BRegular13}>Followers </Text>
                        <Text style={styles.text6E748BMedium14}>850</Text>
                    </View>
                </View>

                <KeyboardAvoidingView
                    {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                    style={[Layout.fill]}
                >
                    <View style={[Layout.fullWidth, { height: height - Responsive.height(50) }]}>
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
                            <Tab.Screen name="Posts" component={PostsContainer} options={{ tabBarLabel: 'Posts' }} />
                            <Tab.Screen name="Bookmarks" component={BookmarksContainer} options={{ tabBarLabel: 'Bookmarks' }} />
                        </Tab.Navigator>
                    </View>

                </KeyboardAvoidingView>
            </ScrollView>


        </View>

        <ActionBar
            left={<TouchableOpacity style={[Layout.rowCenter, styles.viewButtonBlack]} onPress={goBack} >
                <CustomImage source={Images.icWhiteBackProfile} width={Responsive.height(5)} height={Responsive.height(9)} />
            </TouchableOpacity>}
            right={<TouchableOpacity style={[Layout.rowCenter, styles.viewButtonBlack]} onPress={goBack} >
                <CustomImage source={Images.icWhiteHorizontalDot} width={Responsive.height(15)} height={Responsive.height(3)} />
            </TouchableOpacity>}
        />

    </SafeAreaView>)
}

export default OtherProfileContainer

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
    itemStyleWrapper: {
        paddingVertical: Responsive.height(16),
        paddingHorizontal: Responsive.height(24),
    },

    textItemTime: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        textAlign: 'right',
        paddingHorizontal: Responsive.height(24),
        color: '#9498AA'
    },
    viewBubbleOrtherWrapper: {
        backgroundColor: '#ffffff',
        paddingHorizontal: Responsive.width(17),
        paddingVertical: Responsive.height(8),
        borderBottomLeftRadius: Responsive.height(14),
        borderTopRightRadius: Responsive.height(14),
        borderBottomRightRadius: Responsive.height(14),
        overflow: "hidden",
        flexDirection: 'column'
    },
    textBubbleName: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        lineHeight: Responsive.width(22),
    },

    avatar: {
        width: Responsive.height(83),
        height: Responsive.height(83),
        borderRadius: Responsive.height(83 / 2),
        borderWidth: 2,
        borderColor: '#C665F0',
    },
    avatarImage: {
        width: Responsive.height(75),
        height: Responsive.height(75),
        borderRadius: Responsive.height(75 / 2),
        backgroundColor: '#BBBEDD',
    },
    viewEmail: {
        width: Responsive.height(31),
        height: Responsive.height(31),
        borderColor: '#D3DDE8',
        borderRadius: Responsive.height(31 / 2),
        borderWidth: Responsive.height(1)
    },
    viewFollow: {
        width: Responsive.height(84),
        height: Responsive.height(31),
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(17),
        marginLeft: Responsive.width(12),
    },
    textFollow: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: 'white',
        lineHeight: Responsive.width(22),
    },
    textUsername: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(20),
        color: '#141735',
        lineHeight: Responsive.width(40),
        marginRight: Responsive.width(5)
    },
    textUsernameSmall: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#71737D',
        lineHeight: Responsive.width(14),
    },
    textUserDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        color: '#525563',
        lineHeight: Responsive.width(22),
        marginTop: Responsive.height(14.45),
        marginBottom: Responsive.height(15.55),
    },
    textSalimDotCom: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#5D5FEF',
        lineHeight: Responsive.height(22),
    },
    textCalendar: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#606870',
        lineHeight: Responsive.height(22),
    },
    text6E748BRegular13: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#6E748B',
        lineHeight: Responsive.height(19.5),
    },
    text6E748BMedium14: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#6E748B',
        lineHeight: Responsive.height(21),
    },
    viewLines: {
        backgroundColor: '#C8C8C8',
        width: Responsive.width(1),
        height: Responsive.height(14),
        marginLeft: Responsive.width(17),
        marginRight: Responsive.width(14),
    },
    viewButtonBlack: {
        backgroundColor: 'rgba(53, 60, 71, 0.52)',
        width: Responsive.height(36),
        height: Responsive.height(36),
        borderRadius: Responsive.height(36 / 2),
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

});
