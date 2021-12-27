import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { DeFiContainer, ChallengeNotificationContainer, RewardContainer, EducationContainer } from '@/Containers'
import { CustomImage, ActionBar, GradientBackground, BackIcon, Avatar, TabBar2Button, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = Responsive.height(300);

const OVERLAY_VISIBILITY_OFFSET = 32;

const DeFiDetailContainer = () => {
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

    const DATA = [
        {
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
            bio: "I am the sunshine",
            unRead: 4,
            time: "02:17",
            type: 'top_post'
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            unRead: 4,
            time: "02:17"
        },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter, styles.itemStyleWrapper]}>

                    <View style={[styles.viewIconContainer, Layout.rowCenter]}>
                        <CustomImage source={Images.icAddWalletDefiDetail} width={Responsive.height(36)} height={Responsive.height(36)} />
                    </View>

                    <View style={[Layout.fill, { marginRight: Responsive.width(13) }]}>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between' }]}>
                            <Text style={styles.textNameItem}>Ethereum</Text>
                            <Text style={styles.textPriceItem}>$4.634</Text>
                        </View>

                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(7) }]}>
                            <Text style={styles.textCountItem}>30.4422</Text>
                            <Text style={styles.textPercentItem}>-2.25%</Text>
                        </View>
                    </View>

                </View>

            </TouchableOpacity >
        );
    };

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

                <View style={[Layout.row, {
                    justifyContent: 'space-between', marginTop: Responsive.height(37),
                    paddingHorizontal: Responsive.width(22), marginBottom: Responsive.height(7)
                }]}>

                    <View style={styles.viewRow4Button}>
                        <CustomImage source={Images.icGroup1DefiDetail} width={Responsive.width(24)} height={Responsive.height(24.2)} />
                    </View>

                    <View style={styles.viewRow4Button}>
                        <CustomImage source={Images.icGroup2DefiDetail} width={Responsive.width(24)} height={Responsive.height(24.2)} />
                    </View>

                    <View style={styles.viewRow4Button}>
                        <CustomImage source={Images.icGroup3DefiDetail} width={Responsive.width(24)} height={Responsive.height(24.2)} />
                    </View>

                    <View style={styles.viewRow4BlueButton}>
                        <CustomImage source={Images.icGroup4DefiDetail} width={Responsive.width(24)} height={Responsive.height(24.2)} />
                    </View>

                </View>

                <View style={[Layout.rowHCenter, { marginHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textWalletLabel}>Wallets</Text>

                    <TouchableOpacity style={{ paddingVertical: Responsive.height(16), paddingHorizontal: Responsive.width(8) }}>
                        <CustomImage source={Images.icAddWalletDefiDetail} width={Responsive.width(25)}
                            height={Responsive.width(25)}
                        />
                    </TouchableOpacity>

                </View>

                <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(20) }]}>
                    <CustomImage source={Images.icCardPurpleBgDefi} width={width - Responsive.width(20 * 2)}
                        height={(width - Responsive.width(20 * 2)) * 214 / 331} mode='contain' />

                    <View style={{
                        position: 'absolute', left: Responsive.width(20), bottom: 0,
                        right: Responsive.width(20), top: 0,
                        justifyContent: 'space-between'
                    }}>
                        <View style={[Layout.rowHCenter, { marginTop: Responsive.height(14), justifyContent: 'space-between' }]}>
                            <View style={Layout.rowHCenter}>
                                <Text style={styles.textWalletWhite}>Wallet</Text>
                                <CustomImage source={Images.icEditWhite} width={Responsive.width(14)} height={Responsive.width(14)} />
                            </View>

                            <View style={Layout.rowHCenter}>
                                <TouchableOpacity style={[Layout.rowCenter, styles.viewDropdownWallet]}>

                                    <Text style={styles.textDropDown}>BSC</Text>

                                    <CustomImage source={Images.icArrowDownWallet} width={Responsive.width(14)} height={Responsive.width(15)} />

                                </TouchableOpacity>
                                <CustomImage source={Images.icBxNetworkChart} width={Responsive.width(24)}
                                    height={Responsive.width(24)} style={{ marginRight: Responsive.width(15) }} />
                            </View>

                        </View>

                        <View>
                            <View style={[Layout.rowHCenter, { marginTop: Responsive.height(14), justifyContent: 'space-between' }]}>
                                <View style={Layout.rowHCenter}>
                                    <Text style={styles.textWalletWhite}>Total Balance</Text>

                                </View>

                                <View style={Layout.rowHCenter}>
                                    <Text style={styles.textCopy}>0x5435SFD42...sd</Text>
                                    <CustomImage source={Images.icCopyWallet} width={Responsive.width(24)}
                                        height={Responsive.width(17)} style={{ marginRight: Responsive.width(17) }} />
                                </View>

                            </View>

                            <Text style={styles.textValueTotalBalance}>$8,000.00</Text>

                        </View>

                    </View>
                </View>


                <TabBar2Button style={{
                    height: Responsive.height(52), marginHorizontal: Responsive.width(20),
                    marginTop: Responsive.height(20), marginBottom: Responsive.height(16)
                }} indexSelected={0} />

                {/* Body view assets & history */}
                <View style={[Layout.fullWidth]}>
                    <FlatList nestedScrollEnabled={true}
                        style={[Layout.fullWidth]}
                        data={DATA}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
                        keyExtractor={(item) => item.id} />
                    <TouchableOpacity style={styles.viewMoreButton}>
                        <Text style={styles.textMore}>More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewDivider} />

                <Text style={styles.textRewardsLabel}>Rewards</Text>

                <View style={styles.viewRewardTalkingContainer}>
                    <View style={[Layout.fill, Layout.rowHCenter, { marginHorizontal: Responsive.width(13), marginVertical: Responsive.height(14) }]}>
                        <View style={Layout.fill}>
                            <Text style={styles.textNameRewardItem}>256 $WAIV</Text>
                            <Text style={styles.textRewardsEarned}>Rewards Earned</Text>
                        </View>

                        <TouchableOpacity style={[styles.viewDropdown, Layout.rowCenter]}>
                            <Text style={styles.textClaim}>Claim</Text>
                            <CustomImage source={Images.icClaimDefi} width={Responsive.height(10)} height={Responsive.height(15)} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.viewDivider} />

                <Text style={styles.textRewardsLabel}>Staking</Text>

                <View style={styles.viewRewardTalkingContainer}>
                    <View style={[Layout.fill, Layout.rowHCenter, { marginHorizontal: Responsive.width(13), marginVertical: Responsive.height(14) }]}>
                        <View style={Layout.fill}>
                            <Text style={styles.textNameRewardItem}>Staking $WAIV</Text>
                            <Text style={styles.textRewardsEarned}>Stake to earn rewards</Text>
                        </View>

                        <TouchableOpacity style={[styles.viewDropdown, Layout.rowCenter]}>
                            <Text style={styles.textClaim}>Stake</Text>
                            <CustomImage source={Images.icClaimDefi} width={Responsive.height(10)} height={Responsive.height(15)} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.viewDivider} />

                <Text style={styles.textRewardsLabel}>Exchange</Text>

                <TabBar2Button style={{
                    height: Responsive.height(52), marginHorizontal: Responsive.width(20),
                    marginTop: Responsive.height(2), marginBottom: Responsive.height(16)
                }} indexSelected={0} />

                <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textTradeTokens}>Trade tokens in an instant</Text>
                    <CustomImage source={Images.icSetting} tintColor={'#59616C'} width={Responsive.height(22)} height={Responsive.height(22)} />
                </View>

                <View style={styles.viewTradeCorner}>
                    <View style={styles.viewTradeCornerTop}>
                        <Text style={styles.textCornerTop}>0.0</Text>
                    </View>
                    <View style={styles.viewTradeCornerBottom}>
                        <Text style={styles.textCornerTop}>0.0</Text>
                    </View>

                    <View style={styles.viewCircleTradeCorner}>
                        <View style={styles.viewCircleTradeCornerInside}>
                            <CustomImage source={Images.icRepeat} width={Responsive.height(24)}
                            height={Responsive.height(24)} style={{alignSelf: 'center'}}/>
                        </View>
                    </View>
                </View>

            </View>

        </ScrollView>

    </SafeAreaView>)
}

export default DeFiDetailContainer

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

    viewRow4Button: {
        borderColor: '#C8D9EF',
        borderWidth: Responsive.width(2),
        borderRadius: Responsive.width(25),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Responsive.width(14),
        paddingVertical: Responsive.height(9),
    },
    viewRow4BlueButton: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.width(25),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Responsive.width(14),
        paddingVertical: Responsive.height(9),
    },
    textWalletLabel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#2B2F3F'
    },
    textWalletWhite: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#ffffff',
        paddingRight: Responsive.width(5),
        marginLeft: Responsive.width(26)
    },
    viewDropdownWallet: {
        minHeight: Responsive.height(37),
        minWidth: Responsive.width(74),
        borderRadius: Responsive.height(24),
        backgroundColor: '#c4bff0',
        marginRight: Responsive.width(11),
        paddingHorizontal: Responsive.width(13),
    },
    textDropDown: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        marginRight: Responsive.width(5),
    },
    textValueTotalBalance: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(18),
        color: '#ffffff',
        marginLeft: Responsive.width(24),
        marginBottom: Responsive.height(29),
    },
    textCopy: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        color: '#ffffff',
        marginRight: Responsive.width(5),
    },
    // Item list
    itemStyleWrapper: {
        backgroundColor: '#F3F6FA',
        borderRadius: Responsive.height(16),
        height: Responsive.height(73),
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(11),
    },
    viewIconContainer: {
        width: Responsive.height(59),
        height: Responsive.height(62),
        borderRadius: Responsive.height(16),
        backgroundColor: '#E6E8F2',
        marginLeft: Responsive.width(8),
        marginRight: Responsive.width(13),
    },
    textNameItem: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#3B3F51'
    },
    textPriceItem: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: '#3B3F51'
    },
    textCountItem: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#949BA6'
    },
    textPercentItem: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#EC3939'
    },
    viewMoreButton: {
        borderRadius: Responsive.height(31),
        backgroundColor: '#dbdff3',
        width: Responsive.width(141),
        height: Responsive.height(40),
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: Responsive.height(14),
    },
    textMore: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#5D5FEF',
        alignSelf: 'center',
    },
    viewDivider: {
        height: Responsive.height(1),
        backgroundColor: '#CED7DF',
        marginHorizontal: Responsive.width(20),
    },
    textRewardsLabel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: '#2B2F3F',
        marginHorizontal: Responsive.width(20),
        marginTop: Responsive.height(20),
        marginBottom: Responsive.height(10),
    },
    viewRewardTalkingContainer: {
        backgroundColor: '#F3F6FA',
        borderRadius: Responsive.height(16),
        height: Responsive.height(73),
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(20),
    },
    viewDropdown: {
        minWidth: Responsive.width(99),
        height: Responsive.height(40),
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(10),
        flexDirection: 'row',
    },
    textNameRewardItem: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(18),
        color: '#5D5FEF',
    },
    textRewardsEarned: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(11),
        color: '#949BA6',
    },
    textClaim: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#ffffff',
        marginRight: Responsive.width(8)
    },
    textTradeTokens: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#666B7D',
    },
    viewTradeCorner: {
        height: Responsive.height(362),
        backgroundColor: '#f4f6fa',
        borderRadius: Responsive.height(16),
        marginHorizontal: Responsive.width(20),
        marginTop: Responsive.height(24),
        marginBottom: Responsive.height(61),
    },
    viewTradeCornerTop: {
        borderRadius: Responsive.height(16),
        height: Responsive.height(182),
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center'
    },
    textCornerTop: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(31),
        color: '#949BA6',
        alignSelf: 'center',
    },
    viewTradeCornerBottom: {
        backgroundColor: '#ffffff',
        borderRadius: Responsive.height(16),
        height: Responsive.height(182),
        position: 'absolute',
        justifyContent: 'center',
        left: 0,
        right: 0,
        bottom: 0,
    },
    viewCircleTradeCorner: {
        width: Responsive.height(60),
        height: Responsive.height(60),
        backgroundColor: '#f4f6fa',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: Responsive.height(148),
        borderRadius: Responsive.height(30),
    },
    viewCircleTradeCornerInside: {
        width: Responsive.height(51),
        height: Responsive.height(51),
        backgroundColor: '#5D5FEF',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: Responsive.height(51 / 2),
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