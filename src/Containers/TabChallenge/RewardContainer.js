import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, Avatar, AvatarGroup, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const RewardContainer = ({ goBack }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const onOpen = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, {})
    };

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })
    const DATA_REWARD = [
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
    ]

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
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            bio: "Change ain't easy",
            unRead: 4,
            time: "02:17"
        },
    ];


    const renderRewardItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column]}>
                    <View style={[Layout.fill, Layout.rowHCenter, {
                        backgroundColor: '#F3F6FA',
                        marginHorizontal: Responsive.width(20),
                        borderRadius: Responsive.width(16),
                        minHeight: Responsive.height(119)
                    }]}>
                        <View style={{
                            width: Responsive.height(97), height: Responsive.height(100),
                            backgroundColor: '#ffffff',
                            marginVertical: Responsive.height(10),
                            marginHorizontal: Responsive.height(10),
                            borderRadius: Responsive.height(16),
                        }}>
                            <CustomImage source={Images.icCrownChallenge} width={Responsive.height(97)} height={Responsive.height(100)} />
                        </View>

                        <View style={[Layout.fill, { marginTop: Responsive.height(10), marginRight: Responsive.height(10), marginLeft: Responsive.width(12) }]}>

                            <View style={[Layout.fill, Layout.row, { alignItems: 'flex-end' }]}>

                                <View style={[Layout.fill]}>
                                    <Text style={styles.textNameLevel} >Bronze Prestige</Text>

                                    <Text style={styles.textLevel} >Level 29</Text>
                                    <Text style={styles.textLevelRange} >130 XP - 55 $WAIV</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={{
                                        width: Responsive.width(56),
                                        height: Responsive.height(27),
                                        backgroundColor: '#a8acef',
                                        borderRadius: Responsive.height(10),
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={styles.textClaim}>Claim</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={[Layout.rowHCenter, Layout.fill]}>
                                <Text style={[styles.textXPBar, { flex: 1 }]} >XP Bar :</Text>
                                <View>
                                    <HorizontalProgressBar progress={0.3} width={Responsive.width(160)} height={Responsive.height(18)}
                                        borderRadius={Responsive.height(40)}
                                        borderColor={'#5D5FEF'}
                                        borderWidth={Responsive.width(2)}
                                        color={'#E4EBF3'} backgroundColor={'#5D5FEF'}
                                    />
                                    <Text style={[styles.textProgressBar]}>80 XP</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </View>

            </TouchableOpacity >
        );
    };

    const renderSeasonItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper, {
                    marginLeft: index == 0 ? Responsive.width(16) : 0
                }]}>
                    <View style={styles.viewBoundItem}>
                        <View style={styles.viewBoundCircle}>
                            <CustomImage source={Images.icChallengeItemPurple} width={Responsive.height(60)} height={Responsive.height(60)} style={{
                                position: 'absolute',
                                left: Responsive.height(15), bottom: Responsive.height(12)
                            }} />
                        </View>

                        <View style={{
                            position: 'absolute', left: 0, top: Responsive.height(34), right: 0, bottom: 0
                        }}>
                            <LinearGradient
                                colors={['#6A76E4', '#8590FB']}
                                style={[{
                                    position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
                                    borderTopRightRadius: Responsive.height(45),
                                    borderTopLeftRadius: Responsive.height(8),
                                    borderBottomLeftRadius: Responsive.height(8),
                                    borderBottomRightRadius: Responsive.height(8),
                                }]} />

                            <CustomImage source={Images.icIntersectSeasonPass} style={[{
                                position: 'absolute', left: 0, top: Responsive.height(-10), right: 0, bottom: 0
                            }]} />

                            <View style={[Layout.fill, { marginHorizontal: Responsive.width(12) }]}>

                                <View style={[Layout.fill, { marginTop: Responsive.height(63), alignItems: 'flex-start' }]}>
                                    <Text style={styles.textReasonName}>Bronze</Text>
                                    <Text style={styles.textReasonLevel}>Level 30{"\n"}Prestige 3</Text>
                                </View>


                                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between' }]}>

                                    <View style={Layout.rowHCenter}>
                                        <Text style={[styles.textCountXp, { fontSize: Responsive.font(18) }]}>300</Text>
                                        <Text style={[styles.textReasonLevel, { fontSize: Responsive.font(14), marginLeft: Responsive.width(2) }]}>xp</Text>
                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.textCountXp, { fontSize: Responsive.font(12) }]}>60</Text>
                                        <CustomImage source={Images.icWaivlengthWhite} width={Responsive.height(14)} height={Responsive.height(8)} />
                                    </View>
                                </View>

                            </View>
                        </View>


                    </View>

                </View>

            </TouchableOpacity >
        );
    };


    return (<View style={[Layout.fill, styles.parentContainer]} >
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#e9eef5' }} />
        <View style={{ height: Responsive.height(1), backgroundColor: '#D5DDE5' }} />
        <View style={[Layout.row, { justifyContent: 'space-between', marginTop: Responsive.height(19) }]}>
            <Text style={styles.textTitleChallenges}>Rewards</Text>
        </View>

        <FlatList
            style={[Layout.fullWidth]}
            data={DATA_REWARD}
            renderItem={renderRewardItem}
            scrollEnabled={false}
            ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
            keyExtractor={(item) => item.id} />
        <View style={[{ justifyContent: 'space-between', marginHorizontal: Responsive.width(20) }]}>
            <Text style={styles.textSeasonPass}>Season Pass</Text>
            <Text style={styles.textSeasonPassSmall}>Season I</Text>
        </View>
        <FlatList nestedScrollEnabled={true}
            style={[Layout.fullWidth, { height: Responsive.height(191) }]}
            data={DATA}
            renderItem={renderSeasonItem}
            horizontal
            ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
            ListFooterComponent={<View style={{ height: Responsive.height(65) }} />}
            keyExtractor={(item) => item.id} />
        <View style={[Layout.fill]}></View>
    </View>)
}

export default RewardContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },
    itemStyleWrapper: {
        borderRadius: Responsive.height(18),
        paddingRight: Responsive.height(13),
    },
    textSeeAll: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#6E748B',
        lineHeight: Responsive.width(21),
        marginHorizontal: Responsive.width(13),
    },
    textSeasonPass: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B3F51',
    },
    textSeasonPassSmall: {
        fontSize: Responsive.font(11),
        fontFamily: 'Poppins-SemiBold',
        color: '#abafbc',
    },
    textTitleChallenges: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B3F51',
        marginHorizontal: Responsive.width(20),
    },
    textNoteDaily: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#676C81',
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(32),
    },
    viewBoundItem: {
        width: Responsive.width(118),
        height: Responsive.height(214),
        borderRadius: Responsive.width(16),
    },
    viewBoundCircle: {
        width: Responsive.height(85), height: Responsive.height(85),
        alignItems: 'flex-start',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        left: Responsive.height(-10)
    },
    viewCircle: {
        width: Responsive.height(85), height: Responsive.height(85),
        backgroundColor: '#EBE3FF', borderRadius: Responsive.width(67 / 2),
        alignItems: 'center', marginTop: Responsive.height(4),
    },
    textChallengeName: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#F5F5F5',
        lineHeight: Responsive.width(18),
        alignSelf: 'flex-start',
        marginLeft: Responsive.width(9),
    },
    textChallengeType: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Medium',
        color: '#9DAACC',
        lineHeight: Responsive.width(14),
        alignSelf: 'flex-start',
        marginLeft: Responsive.width(9),
        marginBottom: Responsive.height(8),
    },
    textNameLevel: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
    },
    textLevel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
    },
    textLevelRange: {
        fontSize: Responsive.font(11),
        fontFamily: 'Poppins-Medium',
        color: '#c2c5d0',
    },
    textXPBar: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#616771',
    },
    textClaim: {
        fontSize: Responsive.font(11),
        fontFamily: 'Poppins-Medium',
        color: '#ffffff',
    },
    avatar: {
        width: Responsive.height(50),
        height: Responsive.height(50),
        borderRadius: Responsive.height(25),
        borderWidth: 2,
        borderColor: '#C665F0',
    },
    avatarImage: {
        width: Responsive.height(58),
        height: Responsive.height(58),
        borderRadius: Responsive.height(58 / 2),
        backgroundColor: '#BBBEDD',
        marginRight: Responsive.width(16),
    },
    textProgressBar: {
        fontSize: Responsive.font(8),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
        position: 'absolute',
        bottom: 0, top: 0,
        left: Responsive.width(10),
        lineHeight: Responsive.height(25)
    },
    textCountXp: {
        fontSize: Responsive.font(12.31),
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff',
        alignSelf: 'center'
    },
    textXp: {
        fontSize: Responsive.font(7),
        fontFamily: 'Poppins-Regular',
        color: '#ffffff',
        alignSelf: 'center'
    },
    textReasonName: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Bold',
        color: '#ffffff',
    },
    textReasonLevel: {
        fontSize: Responsive.font(10),
        fontFamily: 'Poppins-Regular',
        color: '#ffffff',
    }
});
