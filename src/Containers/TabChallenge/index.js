import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { DeFiContainer, ChallengeNotificationContainer, RewardContainer, EducationContainer } from '@/Containers'
import { CustomImage, ActionBar, GradientBackground, BackIcon, Avatar, TypingAnimation, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = Responsive.height(300);

const OVERLAY_VISIBILITY_OFFSET = 32;

const TabChallengeContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width, height } = useWindowDimensions();

    //const { top, bottom } = useSafeAreaInsets();


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
        />
        <ScrollView style={Layout.fill} nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth]}>
                <View style={{ marginHorizontal: Responsive.width(20), marginTop: Responsive.height(15) }}>
                    <Text style={styles.textNameUser}>Salim Blania</Text>
                    <Text style={styles.textUserDescription}>@alexblania . Contributor</Text>
                </View>

                <View style={[Layout.row, { marginHorizontal: Responsive.width(20), marginTop: Responsive.height(15) }]}>
                    <View style={[Layout.rowHCenter, Layout.fill]}>
                        <CustomImage source={Images.icDartboardChallenge} width={Responsive.height(20)} height={Responsive.height(20)} />
                        <Text style={[styles.textXPCountLevel, { fontSize: Responsive.font(33), color: '#15172B', marginLeft: Responsive.width(5) }]}>30</Text>
                        <Text style={[styles.textXPLevel, { fontSize: Responsive.font(16) }]}>/100</Text>
                    </View>

                    <View style={[Layout.rowHCenter, Layout.fill]}>
                        <View style={{ width: Responsive.width(14), height: Responsive.width(14), marginRight: Responsive.width(6) }}>
                            <LinearGradient
                                colors={['#FAC32E', '#F39321']}
                                style={[{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, borderRadius: Responsive.width(7) }]} />
                            <CustomImage source={Images.icLevelChallenge} width={Responsive.width(8)} height={Responsive.width(8)} style={{
                                position: 'absolute',
                                top: Responsive.width(2), left: Responsive.width(2.5)
                            }} />
                        </View>
                        <Text style={styles.textXPCountLevel}>130</Text>
                        <Text style={styles.textXPLevel}> XP to level up</Text>
                    </View>
                </View>

                <View style={{ marginHorizontal: Responsive.width(20), marginTop: Responsive.height(5) }}>
                    <HorizontalProgressBar progress={0.3} width={Responsive.width(370)} height={Responsive.width(26)}
                        borderRadius={Responsive.width(26)}
                        borderColor={'transparent'}
                        color={'#EA7110'} backgroundColor={'#EEF4FF'}
                    />
                    <View style={[Layout.rowHCenter, {
                        position: 'absolute', height: Responsive.width(28),
                        paddingLeft: Responsive.width(28),
                    }]}>
                        <CustomImage source={Images.icProgressBarChallenge} width={Responsive.width(14)} height={Responsive.width(14)} />
                        <Text style={styles.textXPLabel}>XP: </Text>
                        <Text style={styles.textXPValue}>130</Text>
                    </View>
                </View>

                <View style={[Layout.row, { marginHorizontal: Responsive.width(20), marginTop: Responsive.height(15) }]}>
                    <View style={{
                        backgroundColor: '#ffffff', borderRadius: Responsive.width(16),
                        height: Responsive.height(70), flex: 1, justifyContent: 'center',
                        paddingHorizontal: Responsive.width(19),
                    }}>
                        <Text style={styles.textDashboard}>Prestige Level</Text>
                        <View style={[Layout.row]}>
                            <View style={{ width: Responsive.width(18), height: Responsive.width(18), marginRight: Responsive.width(6) }}>
                                <LinearGradient
                                    colors={['#2ED5FA', '#21B4F3']}
                                    style={[{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, borderRadius: Responsive.width(9) }]} />
                                <CustomImage source={Images.icPrestigeLevelChallenge} width={Responsive.width(8)} height={Responsive.width(8)} style={{
                                    position: 'absolute',
                                    top: Responsive.width(4.5), left: Responsive.width(4.5)
                                }} />
                            </View>
                            <Text style={styles.textCountDashboard}>3</Text>
                        </View>
                    </View>
                    <View style={{ width: Responsive.width(11) }} />
                    <View style={{
                        backgroundColor: '#ffffff', borderRadius: Responsive.width(16),
                        height: Responsive.height(70), flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: Responsive.width(19),
                    }}>
                        <Text style={styles.textDashboard}>Rewards Collected</Text>
                        <View style={[Layout.row]}>
                            <View style={{ width: Responsive.width(18), height: Responsive.width(18), marginRight: Responsive.width(6) }}>
                                <LinearGradient
                                    colors={['#FAC32E', '#F39321']}
                                    style={[{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, borderRadius: Responsive.width(9) }]} />
                                <CustomImage source={Images.icRewardsCollected} width={Responsive.width(8)} height={Responsive.width(8)} style={{
                                    position: 'absolute',
                                    top: Responsive.width(4.5), left: Responsive.width(4.5)
                                }} />
                            </View>
                            <Text style={styles.textCountDashboard}>3</Text>
                        </View>
                    </View>
                </View>


                <View style={{ height: Responsive.height(700) }}>
                    <Tab.Navigator
                        style={[Layout.fullWidth, { marginTop: Responsive.height(5) }]}
                        screenOptions={{
                            tabBarActiveTintColor: '#3B3F51',
                            tabBarInactiveTintColor: '#8F95A6',
                            tabBarStyle: styles.tabBar,
                            tabBarIndicatorStyle: styles.tabIndicator,
                            tabBarLabelStyle: styles.textTabLabel,
                            tabBarScrollEnabled: true,
                            tabBarItemStyle: {
                                width:'auto',
                              }
                        }}
                    >
                        <Tab.Screen name="Challenges" component={ChallengeNotificationContainer} options={{ tabBarLabel: 'Challenges' }} />
                        <Tab.Screen name="Rewards" component={RewardContainer} options={{ tabBarLabel: 'Rewards' }} />
                        <Tab.Screen name="Education" component={EducationContainer} options={{ tabBarLabel: 'Education' }} />
                        <Tab.Screen name="DeFi" component={DeFiContainer} options={{ tabBarLabel: 'DeFi' }} />
                    </Tab.Navigator>
                </View>

            </View>

        </ScrollView>

    </SafeAreaView>)
}

export default TabChallengeContainer

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
    textNameUser: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(20),
        lineHeight: Responsive.width(40),
        color: '#141735'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(13),
        lineHeight: Responsive.width(14),
        color: '#71737D'
    },
    textXPCountLevel: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(14),
        color: '#242B35'
    },
    textXPLevel: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(14),
        color: '#242B35'
    },
    textDashboard: {
        fontFamily: 'Poppins-Light',
        fontSize: Responsive.font(13),
        color: '#6E748B'
    },
    textCountDashboard: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#374051'
    },
    textXPLabel: {
        marginLeft: Responsive.width(13),
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(13),
        color: '#ffffff',
    },
    textXPValue: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(14),
        color: '#ffffff',
    }
});