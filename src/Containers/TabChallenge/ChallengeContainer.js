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
const ChallengeNotificationContainer = ({ goBack }) => {
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


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper, {
                    marginLeft: index == 0 ? Responsive.width(19) : 0
                }]}>
                    <View style={styles.viewBoundItem}>
                        <View style={styles.viewBoundCircle}>
                            <View style={styles.viewCircle} />

                            <CustomImage source={Images.icChallengeItemPurple} width={Responsive.height(81)} height={Responsive.height(87)} style={{
                                position: 'absolute',
                                left: Responsive.height(10), bottom: Responsive.height(5)
                            }} />
                        </View>

                        <Text style={styles.textChallengeName} >Challenges Name</Text>
                        <Text style={styles.textChallengeType} >Challenges Type</Text>

                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between' }]}>
                            <View style={{ marginRight: Responsive.width(10) }}>
                                <HorizontalProgressBar progress={0.3} width={Responsive.width(90)} height={Responsive.height(20)}
                                    borderRadius={Responsive.height(40)}
                                    borderColor={'transparent'}
                                    borderWidth={Responsive.width(2)}
                                    color={'#D1D9E2'} backgroundColor={'#E3E6F6'}
                                />
                                <Text style={styles.textProgressBar}>1/6</Text>
                            </View>

                            <View>
                                <CustomImage source={Images.icBgChallengeItem} width={Responsive.height(34)} height={Responsive.height(36)} />
                                <View style={{ position: 'absolute', top: 0, bottom: 0, left: Responsive.width(5), justifyContent: 'center' }}>
                                    <Text style={styles.textCountXp}>10</Text>
                                    <Text style={styles.textXp}>XP</Text>
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
            <Text style={styles.textTitleChallenges} >Daily Challenges</Text>
            <TouchableOpacity onPress={() => navigate('ListOfDailyChallenge')}>
                <Text style={styles.textSeeAll} >See All</Text>
            </TouchableOpacity>

        </View>
        <Text style={styles.textNoteDaily}>Daily Challenges Refresh in 24 hours</Text>
        <FlatList nestedScrollEnabled={true}
            style={[Layout.fullWidth, { height: Responsive.height(191) }]}
            data={DATA}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
            keyExtractor={(item) => item.id} />
        <View style={[Layout.row, { justifyContent: 'space-between', marginBottom: Responsive.height(22) }]}>
            <Text style={styles.textTitleChallenges} >Active Chalanges</Text>
            <TouchableOpacity onPress={() => navigate('ListOfActiveChallenge')}>
                <Text style={styles.textSeeAll} >See All</Text>
            </TouchableOpacity>
        </View>
        <FlatList nestedScrollEnabled={true}
            style={[Layout.fullWidth, { height: Responsive.height(191) }]}
            data={DATA}
            renderItem={renderItem}
            horizontal
            ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
            ListFooterComponent={<View style={{ height: Responsive.height(65) }} />}
            keyExtractor={(item) => item.id} />
        <View style={Layout.fill}></View>
    </View>)
}

export default ChallengeNotificationContainer

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
        width: Responsive.width(158), height: Responsive.height(191),
        backgroundColor: '#4D5B80', borderRadius: Responsive.width(16), alignItems: 'center'
    },
    viewBoundCircle: {
        width: Responsive.width(81), height: Responsive.height(87),
        alignItems: 'center', marginTop: Responsive.height(4),
    },
    viewCircle: {
        width: Responsive.height(67), height: Responsive.height(67),
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
    textProgressBar: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        alignSelf: 'center',
        position: 'absolute',
    },
    textCountXp: {
        fontSize: Responsive.font(12.31),
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff',
        alignSelf: 'center',
        lineHeight: Responsive.height(18),
    },
    textXp: {
        fontSize: Responsive.font(7),
        fontFamily: 'Poppins-Regular',
        color: '#ffffff',
        alignSelf: 'center',
        lineHeight: Responsive.height(10),
    },
});
