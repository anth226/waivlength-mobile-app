import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent, Modal } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { CustomImage, ActionBar, GradientBackground, BackIcon, Avatar, TabBar2Button, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart } from "react-native-chart-kit";
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants'
import { Layout } from '@/Theme';

const Tab = createMaterialTopTabNavigator();

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = Responsive.height(300);

const OVERLAY_VISIBILITY_OFFSET = 32;

const ExchangeLiquidityTabContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width, height } = useWindowDimensions();
    const [indexTab, setIndexTab] = useState(0);
    const [visibleWalletOption, setVisibleWalletOption] = useState(false);


    const init = async () => {

    }

    useEffect(() => {
        init()
    })

    return (
        <View style={Layout.fullWidth}>
            <TabBar2Button style={{
                height: Responsive.height(52), marginHorizontal: Responsive.width(20),
                marginTop: Responsive.height(2), marginBottom: Responsive.height(16)
            }}
                indexSelected={indexTab}
                onPressTab1={() => setIndexTab(0)}
                onPressTab2={() => setIndexTab(1)}
                tab1Title={'Exchange'}
                tab2Title={'Liquidity'}
            />

            {/* Exchange Tab */}
            {indexTab == 0 && <View style={Layout.fullWidth}>
                <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textTradeTokens}>Trade tokens in an instant</Text>
                    <CustomImage source={Images.icSetting} tintColor={'#59616C'} width={Responsive.height(22)}
                        height={Responsive.height(22)} onPress={() => {
                            EventBus.getInstance().fireEvent(EVENTS.OPEN_EXCHANGE_SETTING_DIALOG, {})
                        }} />
                </View>
                <View style={styles.viewTradeCorner}>
                    <View style={styles.viewTradeCornerTop}>
                        <Text style={styles.textCornerTop}>0.0</Text>
                    </View>
                    <View style={styles.viewTradeCornerBottom}>
                        <Text style={styles.textCornerTop}>0.0</Text>
                    </View>

                    <View style={styles.viewDolar}>
                        <View style={[Layout.rowCenter, {
                            width: Responsive.height(22),
                            height: Responsive.height(22), backgroundColor: '#FFFFFF',
                            borderRadius: Responsive.height(11)
                        }]}>
                            <CustomImage source={Images.icDollar} width={Responsive.height(10)}
                                height={Responsive.height(20)} />
                        </View>

                        {/* <Text style={styles.textCornerTop}>0.0</Text> */}
                    </View>

                    <View style={styles.viewCircleTradeCorner}>
                        <View style={styles.viewCircleTradeCornerInside}>
                            <CustomImage source={Images.icRepeat} width={Responsive.height(24)}
                                height={Responsive.height(24)} style={{ alignSelf: 'center' }} />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.viewEnterAmount} onPress={() => {
                        EventBus.getInstance().fireEvent(EVENTS.OPEN_CONFIRM_SWAP_STEP1_DIALOG, {})
                    }}>
                        <Text style={styles.textCornerTop}>Enter an amount</Text>
                    </TouchableOpacity>
                </View>
            </View>}

            {/* Liquidity Tab */}

            {indexTab == 1 && <View style={Layout.fullWidth}>
                <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textYourLiquidity}>Your Liquidity</Text>
                    <CustomImage source={Images.icSetting} tintColor={'#59616C'} width={Responsive.height(22)}
                        height={Responsive.height(22)} onPress={() => {
                            EventBus.getInstance().fireEvent(EVENTS.OPEN_EXCHANGE_SETTING_DIALOG, {})
                        }} />
                </View>
                <Text style={styles.textYourLiquidityBelow}>Remove liquidity to receive tokens back</Text>
                <View style={[Layout.rowHCenter, styles.viewCakeBnbInfo]}>
                    <View style={Layout.fill}>
                        <View style={Layout.row}>
                            <CustomImage source={Images.icCryptocurrencyBnb} width={Responsive.height(24)} height={Responsive.height(24)} />
                            <CustomImage source={Images.icCryptocurrencyUsdt} width={Responsive.height(24)}
                                height={Responsive.height(24)} style={{ marginLeft: Responsive.width(4), marginRight: Responsive.width(7) }} />
                            <Text style={styles.textCakeBnbLabel}>CAKE/BNB</Text>
                        </View>
                        <Text style={styles.textCakeBnbValue}>0.5574</Text>
                    </View>
                    <CustomImage source={Images.icArrowDown2} width={Responsive.height(20)} height={Responsive.height(20)} />
                </View>
                <Text style={styles.textDontSee}>Don’t see a pool you joined?</Text>
                <TouchableOpacity style={[Layout.rowCenter, styles.viewFindOtherToken]} onPress={() => {
                    EventBus.getInstance().fireEvent(EVENTS.OPEN_FIND_OTHER_LP_TOKEN_DIALOG, {})
                }}>
                    <Text style={styles.textFindOtherToken}>Find other LP tokens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Layout.rowCenter, styles.viewAddLiquidity]} onPress={() => { }}>
                    <Text style={styles.textAddLiquidity}>Add Liquidity</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

const DeFiDetailContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width, height } = useWindowDimensions();
    const [visibleNetworkDropdown, setVisibleNetworkDropdown] = useState(false);
    const [visibleWalletOption, setVisibleWalletOption] = useState(false);

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

                    <TouchableOpacity style={{
                        paddingVertical: Responsive.height(16),
                        paddingHorizontal: Responsive.width(8)
                    }} onPress={() => {
                        EventBus.getInstance().fireEvent(EVENTS.OPEN_ADD_WALLET_DIALOG, {})
                    }}>
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
                                <CustomImage source={Images.icEditWhite} width={Responsive.width(14)} height={Responsive.width(14)}
                                    onPress={() => {
                                        EventBus.getInstance().fireEvent(EVENTS.OPEN_RENAME_WALLET_DIALOG, {})
                                    }} />
                            </View>

                            <View style={Layout.rowHCenter}>
                                <TouchableOpacity style={[Layout.rowCenter, styles.viewDropdownWallet]} onPress={() => {
                                    setVisibleNetworkDropdown(true);
                                }}>

                                    <Text style={styles.textDropDown}>BSC</Text>

                                    <CustomImage source={Images.icArrowDownWallet} width={Responsive.width(14)} height={Responsive.width(15)} />

                                </TouchableOpacity>
                                <CustomImage source={Images.icBxNetworkChart} width={Responsive.width(24)}
                                    height={Responsive.width(24)} style={{ marginRight: Responsive.width(15) }}
                                    onPress={() => {
                                        setVisibleWalletOption(true);
                                    }} />
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

                        {
                            visibleNetworkDropdown ? <View style={styles.viewNetworkDropdown}>
                                <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewItemNetworkDropdown]} onPress={() => {
                                    setVisibleNetworkDropdown(false);
                                }}>
                                    <Text style={styles.textNetworkDropdown}>BSC</Text>
                                </TouchableOpacity>
                                <View style={[Layout.fill, Layout.rowCenter, styles.viewItemNetworkDropdown]}>
                                    <Text style={styles.textNetworkDropdown}>ETH</Text>
                                </View>
                                <View style={[Layout.fill, Layout.rowCenter, styles.viewItemNetworkDropdown]}>
                                    <Text style={styles.textNetworkDropdown}>SOL</Text>
                                </View>
                                <View style={[Layout.fill, Layout.rowCenter, styles.viewItemNetworkDropdown]}>
                                    <Text style={styles.textNetworkDropdown}>ADA</Text>
                                </View>
                                <View style={[Layout.fill, Layout.rowCenter, styles.viewItemNetworkDropdown]}>
                                    <Text style={styles.textNetworkDropdown}>MATIC</Text>
                                </View>
                            </View> : null
                        }

                        {
                            visibleWalletOption ? <View style={styles.viewWalletOption}>
                                <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewItemWalletOption]} onPress={() => {
                                    setVisibleWalletOption(false);
                                }}>
                                    <Text style={styles.textWalletOption}>Buy</Text>
                                    <CustomImage source={Images.icTagWallet} width={Responsive.height(20)} height={Responsive.height(20)} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewItemWalletOption]} onPress={() => {
                                    navigate('SendWalletAddress')
                                    setVisibleWalletOption(false);
                                }}>
                                    <Text style={styles.textWalletOption}>Send</Text>
                                    <CustomImage source={Images.icSendWallet} width={Responsive.height(20)} height={Responsive.height(20)} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewItemWalletOption]}
                                    onPress={() => {
                                        navigate('ReceiveWalletAddress')
                                        setVisibleWalletOption(false);
                                    }}>
                                    <Text style={styles.textWalletOption}>Receive</Text>
                                    <CustomImage source={Images.icReceiveWallet} width={Responsive.height(20)} height={Responsive.height(20)} />
                                </TouchableOpacity>
                            </View> : null
                        }



                    </View>
                </View>


                <TabBar2Button style={{
                    height: Responsive.height(52), marginHorizontal: Responsive.width(20),
                    marginTop: Responsive.height(20), marginBottom: Responsive.height(16)
                }}
                    indexSelected={0}
                    onPressTab1={() => {
                        EventBus.getInstance().fireEvent(EVENTS.OPEN_ASSET_TILE_WALLET_DIALOG, {})
                    }}
                    onPressTab2={() => {
                        EventBus.getInstance().fireEvent(EVENTS.OPEN_HISTORY_TILE_WALLET_DIALOG, {})
                    }}
                />

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

                        <TouchableOpacity style={[styles.viewDropdown, Layout.rowCenter]} onPress={() => {
                            navigate('StakingDeFi')
                        }}>
                            <Text style={styles.textClaim}>Stake</Text>
                            <CustomImage source={Images.icClaimDefi} width={Responsive.height(10)} height={Responsive.height(15)} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.viewDivider} />

                <Text style={styles.textRewardsLabel}>Exchange</Text>

                {/* <TabBar2Button style={{
                    height: Responsive.height(52), marginHorizontal: Responsive.width(20),
                    marginTop: Responsive.height(2), marginBottom: Responsive.height(16)
                }} indexSelected={0} />*/}

                {/* Exchange Tab */}

                <ExchangeLiquidityTabContainer />

                <View style={styles.viewDivider} />

                <Text style={styles.textRewardsLabel}>Graph</Text>

                <Text style={styles.textEthereumLabel}>Ethereum</Text>

                <View style={[styles.viewRowCoin, Layout.rowHCenter]}>
                    <View style={[Layout.rowCenter, styles.viewRowCoinIcon]}>
                        <CustomImage source={Images.icNiceEthereumLogo} width={Responsive.height(24)}
                            height={Responsive.height(38)} style={{ alignSelf: 'center' }} />
                    </View>

                    <TouchableOpacity style={[Layout.row, Layout.fill]} onPress={() => {
                        EventBus.getInstance().fireEvent(EVENTS.OPEN_SELECT_TOKEN_DIALOG, {})
                    }}>
                        <Text style={styles.textSelectCoinLabel}>Select Coin</Text>
                        <CustomImage source={Images.icArrowSelectCoin} width={Responsive.height(18)}
                            height={Responsive.height(18)} style={{ alignSelf: 'center', marginLeft: Responsive.width(11) }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[Layout.row, styles.view24hButton]}>
                        <Text style={styles.text24hLabel}>24H</Text>
                        <CustomImage source={Images.icArrowTimeCoin} width={Responsive.height(10)}
                            height={Responsive.height(10)} style={{ alignSelf: 'center', marginLeft: Responsive.width(5) }} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.fullWidth, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textAmountTotal}>US $4340.20</Text>
                    <Text style={styles.textGreen}>+$38 (+2.422%) 24H</Text>
                    <View style={[Layout.row, { alignItems: 'flex-end' }]}>
                        <Text style={styles.textTime}>2:00PM</Text>
                        <Text style={styles.textDate}>29 Nov, 2021</Text>
                    </View>

                </View>

                <View style={styles.viewLineChartContainer}>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ]
                                }
                            ]
                        }}
                        width={width}
                        height={Responsive.height(231)}
                        yAxisInterval={1} // optional, defaults to 1

                        xLabelsOffset={0}
                        withInnerLines={false}
                        withOuterLines={false}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        chartConfig={{
                            backgroundColor: "#edf1f5",
                            backgroundGradientFrom: "#edf1f5",
                            backgroundGradientTo: "#edf1f5",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(91, 99, 230, 1.0)`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                paddingHorizontal: 0,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffffff"
                            },
                            horizontalOffset: 0,
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                        }}
                    />
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
        alignItems: 'center',
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
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#5D5FEF',
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
    viewDolar: {
        backgroundColor: '#E5ECF5',
        borderRadius: Responsive.height(16),
        minWidth: Responsive.height(90),
        height: Responsive.height(30),
        paddingLeft: Responsive.width(5),
        paddingVertical: Responsive.height(4),
        position: 'absolute',
        bottom: Responsive.height(136),
        marginLeft: Responsive.width(15),
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
    viewEnterAmount: {
        width: Responsive.height(195),
        height: Responsive.height(62),
        backgroundColor: '#D7DFFF',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: Responsive.height(16),
        position: 'absolute',
        bottom: Responsive.height(-40),
        zIndex: 1000,
    },
    textYourLiquidity: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    textYourLiquidityBelow: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#666B7D',
        marginTop: Responsive.height(4),
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.width(20),
    },
    viewCakeBnbInfo: {
        backgroundColor: 'rgba(242, 245, 249, 1.0)',
        height: Responsive.height(73),
        borderRadius: Responsive.height(16),
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.width(20),
        paddingVertical: Responsive.height(13),
        paddingHorizontal: Responsive.width(18),
    },
    textCakeBnbLabel: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(18),
        color: '#5D5FEF',
        lineHeight: Responsive.height(27),
    },
    textCakeBnbValue: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(11),
        lineHeight: Responsive.height(18),
        color: '#949BA6',
    },
    textDontSee: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#666B7D',
        marginBottom: Responsive.width(20),
        textAlign: 'center'
    },
    viewFindOtherToken: {
        backgroundColor: 'white',
        borderColor: '#5D5FEF',
        borderWidth: Responsive.height(1),
        borderRadius: Responsive.height(31),
        width: Responsive.width(236),
        height: Responsive.height(40),
        alignSelf: 'center',
        marginBottom: Responsive.height(20),
    },
    textFindOtherToken: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        lineHeight: Responsive.height(21),
    },
    viewAddLiquidity: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(31),
        width: Responsive.width(236),
        height: Responsive.height(40),
        alignSelf: 'center',
        marginBottom: Responsive.height(20),
    },
    textAddLiquidity: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: 'white',
        lineHeight: Responsive.height(24),
    },
    textEthereumLabel: {
        marginHorizontal: Responsive.width(20),
        marginTop: Responsive.height(8),
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(24),
        color: '#3B3F51',
    },
    viewRowCoin: {
        minHeight: Responsive.height(62),
        marginHorizontal: Responsive.width(20),
        marginTop: Responsive.height(20),
    },
    viewRowCoinIcon: {
        width: Responsive.height(59),
        height: Responsive.height(62),
        borderRadius: Responsive.height(16),
        backgroundColor: '#D7DFFF'
    },
    textSelectCoinLabel: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#2B2F3F',
        marginLeft: Responsive.width(12),
    },
    view24hButton: {
        backgroundColor: '#D7DFFF',
        borderRadius: Responsive.height(24),
        height: Responsive.height(33),
        paddingHorizontal: Responsive.width(11),
    },
    text24hLabel: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(16),
        color: '#5D5FEF',
    },
    textAmountTotal: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(36),
        color: '#202732',
        marginTop: Responsive.height(17),
        marginBottom: Responsive.height(3),
    },
    textGreen: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: '#399C67',
        marginBottom: Responsive.height(7),
    },
    textTime: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        marginBottom: Responsive.height(7),
    },
    textDate: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(11),
        color: '#878dea',
        marginBottom: Responsive.height(9),
        marginLeft: Responsive.width(7),
    },
    viewLineChartContainer: {
        height: Responsive.height(231),
        marginBottom: Responsive.height(10)
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
    },
    viewNetworkDropdown: {
        position: 'absolute',
        top: Responsive.height(54),
        right: Responsive.width(49),
        backgroundColor: '#F3F9FF',
        borderRadius: Responsive.height(20),
        paddingVertical: Responsive.height(10),
    },
    viewItemNetworkDropdown: {
        backgroundColor: '#e5eafb',
        height: Responsive.height(24),
        marginHorizontal: Responsive.width(5),
        borderRadius: Responsive.height(8),
        paddingHorizontal: Responsive.width(5)
    },
    textNetworkDropdown: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
    },
    viewWalletOption: {
        position: 'absolute',
        top: Responsive.height(54),
        right: Responsive.width(11),
        backgroundColor: '#F3F9FF',
        borderRadius: Responsive.height(12),
        minWidth: Responsive.width(141),
    },
    viewItemWalletOption: {
        height: Responsive.height(43),
        paddingHorizontal: Responsive.width(16),
        justifyContent: 'space-between'
    },
    textWalletOption: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#525563',
    },

});