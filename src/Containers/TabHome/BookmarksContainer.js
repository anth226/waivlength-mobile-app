import React, { useEffect, useRef, useState } from 'react'
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
const BookmarksContainer = ({ goBack }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();
    const [data, setData] = useState([]);


    const onOpen = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, {})
    };

    const DATA = [
        {
            id: 1,
            firstName: "Robert",
            lastName: "Fox",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
            isOfficial: true,
            isOnline: true,
            gallery_url: 'https://picsum.photos/200/200',
            type: 'image'
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
            type: 'question',
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            username: "@robertfox",
            type: 'answer',
        },
        {
            id: 4,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            username: "@robertfox",
            type: 'story'
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

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
        setData(DATA)
    }

    useEffect(() => {
        init()
    }, [])

    
    const renderItem = ({ item }) => {
        if (item.gallery_url) {
            return (
                <TouchableOpacity style={{}} onPress={() => navigate('Conversation')}>
                    <View style={[Layout.fullWidth, Layout.column, styles.itemWapper]}>
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
                            <CustomImage source={Images.icThreeDotVertical} width={Responsive.width(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} onPress={() => {}} />
                        </View>

                        <View style={[Layout.fullWidth, Layout.column, {
                            backgroundColor: '#F5F6FB',
                            borderRadius: Responsive.width(20), marginTop: Responsive.height(10)
                        }]}>
                            <View style={[Layout.fullWidth, { height: Responsive.height(246) }]}>
                                <Avatar
                                    isShowDot={false}
                                    imageStyle={{ width: Responsive.width(360), borderRadius: Responsive.width(20), height: Responsive.height(226) }}
                                    url={item['gallery_url']}
                                />

                                <View style={Layout.fullWidth, { position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center' }}>
                                    <View style={Layout.fullWidth, {
                                        backgroundColor: '#ffffff', borderRadius: Responsive.width(20), width: Responsive.width(300), flexDirection: 'row',
                                        paddingVertical: Responsive.height(5),
                                        paddingHorizontal: Responsive.width(10)
                                    }}>
                                        <View style={[Layout.rowHCenter, { paddingVertical: Responsive.height(2) }]}>
                                            <CustomImage source={Images.icLikeHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />
                                            <Text style={styles.textLikeCommentLarge}>24</Text>
                                        </View>
                                        <View style={{ flex: 1 }} />
                                        <View style={Layout.rowHCenter}>
                                            <CustomImage source={Images.icCommentHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />
                                            <Text style={styles.textLikeCommentLarge}>24</Text>
                                        </View>
                                        <View style={{ flex: 1 }} />
                                        <CustomImage source={Images.icShareHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />
                                        <View style={{ flex: 1 }} />
                                        <CustomImage source={Images.icBookmarkHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />

                                    </View>
                                </View>
                            </View>
                            <View style={[Layout.fullWidth, { marginVertical: Responsive.height(10), marginHorizontal: Responsive.width(10) }]}>
                                <Text style={styles.textMessageLarge}>Hello, @Muhammad Its is the best topics for you Whether its a driving tour 😂</Text>
                            </View>
                        </View>
                        <View style={[Layout.fullWidth, Layout.row, { justifyContent: 'space-between', marginTop: Responsive.height(9) }]}>
                            {/* non selected color: #9DADC0 , otherwise: #5D5FEF*/}
                            <View style={{ width: Responsive.width(99) }}>
                                <HorizontalProgressBar progress={0.3} width={Responsive.width(99)} height={Responsive.width(26)}
                                    borderColor={'#9DADC0'} borderRadius={Responsive.width(26)}
                                    color={'#C0C1FB'}
                                />
                                <View style={[Layout.row, { position: 'absolute', left: Responsive.width(5), bottom: 0, top: 0, right: Responsive.width(5), alignItems: 'center', justifyContent: 'space-between' }]}>
                                    <Text style={styles.textReviewImage}>Insightful</Text>
                                    <Text style={styles.textPercentImage}>30%</Text>
                                </View>
                            </View>

                            <View style={{ width: Responsive.width(99) }}>
                                <HorizontalProgressBar progress={0.6} width={Responsive.width(99)} height={Responsive.width(26)}
                                    borderColor={'#9DADC0'} borderRadius={Responsive.width(26)}
                                    color={'#C0C1FB'}
                                />
                                <View style={[Layout.row, { position: 'absolute', left: Responsive.width(5), bottom: 0, top: 0, right: Responsive.width(5), alignItems: 'center', justifyContent: 'space-between' }]}>
                                    <Text style={styles.textReviewImage}>WOW</Text>
                                    <Text style={styles.textPercentImage}>60%</Text>
                                </View>
                            </View>

                            <View style={{ width: Responsive.width(99) }}>
                                <HorizontalProgressBar progress={0.8} width={Responsive.width(99)} height={Responsive.width(26)}
                                    borderColor={'#9DADC0'} borderRadius={Responsive.width(26)}
                                    color={'#C0C1FB'}
                                />
                                <View style={[Layout.row, { position: 'absolute', left: Responsive.width(5), bottom: 0, top: 0, right: Responsive.width(5), alignItems: 'center', justifyContent: 'space-between' }]}>
                                    <Text style={styles.textReviewImage}>Other</Text>
                                    <Text style={styles.textPercentImage}>80%</Text>
                                </View>
                            </View>


                        </View>
                    
                    </View>

                </TouchableOpacity >
            );
        }
        if (item.type === 'question') {
            return (
                <TouchableOpacity style={{}} onPress={() => navigate('Conversation')}>
                    <View style={[Layout.fullWidth, Layout.column, styles.itemWapper]}>
                        <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter]}>
                            <Avatar
                                dotStyle={styles.dotStyle}
                                isShowDot={item['isOnline']}
                                source={Images.onBoarding3}
                                imageWrapperStyle={[styles.avatar, item['isOnline'] ? {} : { borderWidth: 0 }]}
                                imageStyle={[styles.avatarImage, item['isOnline'] ? {} : { width: Responsive.height(50), height: Responsive.height(50), borderRadius: Responsive.height(25) }]}
                                url={item['url']}
                                firstName={item['firstName']}
                                lastName={item['lastName']} 
                                onPress={() => {
                                    navigate('OtherProfile')
                                }}/>
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
                            <CustomImage source={Images.icThreeDotVertical} width={Responsive.width(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} onPress={() => {}} />
                        </View>
                        <View style={Layout.fullWidth}>
                            <Text style={styles.textQuestion}>What do you do in the morning?</Text>
                        </View>
                        <View style={Layout.fullWidth}>
                            <Text style={styles.textThanks}>Thanks fro participating</Text>
                        </View>

                        <View style={[Layout.fullWidth, Layout.column, { marginTop: Responsive.height(12) }]}>
                            {/* non selected color: #9DADC0 , otherwise: #5D5FEF*/}
                            <View style={[Layout.fullWidth, Layout.rowHCenter, {
                                marginBottom: Responsive.height(12), borderColor: '#9DADC0', borderRadius: Responsive.width(26), height: Responsive.width(29),
                                borderWidth: 1, justifyContent: 'center'
                            }]}>

                                <Text style={[styles.textQuestion, { marginTop: 0 }]}>Good</Text>
                            </View>

                            <View style={[Layout.fullWidth, Layout.rowHCenter, {
                                marginBottom: Responsive.height(12), borderColor: '#9DADC0', borderRadius: Responsive.width(26), height: Responsive.width(29),
                                borderWidth: 1, justifyContent: 'center'
                            }]}>

                                <Text style={[styles.textQuestion, { marginTop: 0 }]}>Bad</Text>
                            </View>

                            <View style={[Layout.fullWidth, Layout.rowHCenter, {
                                marginBottom: Responsive.height(12), borderColor: '#9DADC0', borderRadius: Responsive.width(26), height: Responsive.width(29),
                                borderWidth: 1, justifyContent: 'center'
                            }]}>

                                <Text style={[styles.textQuestion, { marginTop: 0 }]}>Other</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >
            );
        }
        if (item.type === 'answer') {
            return (
                <TouchableOpacity style={{}} onPress={() => navigate('Conversation')}>
                    <View style={[Layout.fullWidth, Layout.column, styles.itemWapper]}>
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
                            <CustomImage source={Images.icThreeDotVertical} width={Responsive.width(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} onPress={() => {}} />
                        </View>
                        <View style={Layout.fullWidth}>
                            <Text style={styles.textQuestion}>What do you do in the morning?</Text>
                        </View>
                        <View style={Layout.fullWidth}>
                            <Text style={styles.textThanks}>Thanks fro participating</Text>
                        </View>

                        <View style={[Layout.fullWidth, Layout.column, { marginTop: Responsive.height(12) }]}>
                            {/* non selected color: #9DADC0 , otherwise: #5D5FEF*/}
                            <View style={[Layout.fullWidth, { marginBottom: Responsive.height(12) }]}>
                                <HorizontalProgressBar progress={0.3} width={Responsive.width(365)} height={Responsive.width(26)}
                                    borderColor={'#9DADC0'} borderRadius={Responsive.width(26)}
                                    color={'#C0C1FB'}
                                />
                                <View style={[Layout.row, { position: 'absolute', left: Responsive.width(5), bottom: 0, top: 0, right: Responsive.width(5), alignItems: 'center', justifyContent: 'space-between' }]}>
                                    <Text style={[styles.textReviewImage, { fontSize: Responsive.font(14), fontFamily: 'Poppins-SemiBold', }]}>Good</Text>
                                    <Text style={[styles.textPercentImage, { fontSize: Responsive.font(12) }]}>30%</Text>
                                </View>
                            </View>

                            <View style={[Layout.fullWidth, { marginBottom: Responsive.height(12) }]}>
                                <HorizontalProgressBar progress={0.3} width={Responsive.width(365)} height={Responsive.width(26)}
                                    borderColor={'#9DADC0'} borderRadius={Responsive.width(26)}
                                    color={'#C0C1FB'}
                                />
                                <View style={[Layout.row, { position: 'absolute', left: Responsive.width(5), bottom: 0, top: 0, right: Responsive.width(5), alignItems: 'center', justifyContent: 'space-between' }]}>
                                    <Text style={[styles.textReviewImage, { fontSize: Responsive.font(14), fontFamily: 'Poppins-SemiBold', }]}>Bad</Text>
                                    <Text style={[styles.textPercentImage, { fontSize: Responsive.font(12) }]}>30%</Text>
                                </View>
                            </View>

                            <View style={[Layout.fullWidth, { marginBottom: Responsive.height(12) }]}>
                                <HorizontalProgressBar progress={0.3} width={Responsive.width(365)} height={Responsive.width(26)}
                                    borderColor={'#9DADC0'} borderRadius={Responsive.width(26)}
                                    color={'#C0C1FB'}
                                />
                                <View style={[Layout.row, { position: 'absolute', left: Responsive.width(5), bottom: 0, top: 0, right: Responsive.width(5), alignItems: 'center', justifyContent: 'space-between' }]}>
                                    <Text style={[styles.textReviewImage, { fontSize: Responsive.font(14), fontFamily: 'Poppins-SemiBold', }]}>Other</Text>
                                    <Text style={[styles.textPercentImage, { fontSize: Responsive.font(12) }]}>30%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >
            );
        }
        if (item.type === 'story') {
            return (
                <TouchableOpacity style={{}} onPress={() => navigate('Conversation')}>
                    <View style={[Layout.fullWidth, Layout.column, styles.itemWapper]}>
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
                            <CustomImage source={Images.icThreeDotVertical} width={Responsive.width(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} onPress={() => {}} />
                        </View>

                        <View style={[Layout.fullWidth, Layout.column, {
                            backgroundColor: '#F5F6FB',
                            borderRadius: Responsive.width(20), marginTop: Responsive.height(10),
                            marginBottom: Responsive.height(15),
                        }]}>
                            <View style={[Layout.fullWidth, { minHeight: Responsive.height(100) }]}>
                                <View style={[Layout.fullWidth, {
                                    marginBottom: Responsive.height(45), marginTop: Responsive.height(4),
                                    marginHorizontal: Responsive.width(10), paddingTop: Responsive.height(15)
                                }]}>

                                    <View style={[Layout.row]}>
                                        <CustomImage source={Images.icBookOpen} width={Responsive.width(22)} height={Responsive.width(22)} />
                                        <Text style={styles.textTitleStory}>Shifts in the Paradigm</Text>
                                    </View>
                                    <Text style={styles.textDesciptionStory}>I had moments when I thought this
                                        project would never happen . However 14 years later, a global recession , amassing the 4 parcels of land, an Historic England challenge, a global pandemic , some istakes and a lot of hard work and ersistence by many along the way...
                                    </Text>
                                </View>

                                <View style={Layout.fullWidth, { position: 'absolute', bottom: Responsive.width(-15), left: 0, right: 0, alignItems: 'center' }}>
                                    <View style={Layout.fullWidth, {
                                        backgroundColor: '#ffffff', borderRadius: Responsive.width(20), width: Responsive.width(300), flexDirection: 'row',
                                        paddingVertical: Responsive.height(5),
                                        paddingHorizontal: Responsive.width(10)
                                    }}>
                                        <View style={[Layout.rowHCenter, { paddingVertical: Responsive.height(2) }]}>
                                            <CustomImage source={Images.icLikeHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />
                                            <Text style={styles.textLikeCommentLarge}>24</Text>
                                        </View>
                                        <View style={{ flex: 1 }} />
                                        <View style={Layout.rowHCenter}>
                                            <CustomImage source={Images.icCommentHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />
                                            <Text style={styles.textLikeCommentLarge}>24</Text>
                                        </View>
                                        <View style={{ flex: 1 }} />
                                        <CustomImage source={Images.icShareHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />
                                        <View style={{ flex: 1 }} />
                                        <CustomImage source={Images.icBookmarkHomeTabSmall} width={Responsive.width(22)} height={Responsive.width(22)} />

                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                </TouchableOpacity >
            );
        }
        return (
            <TouchableOpacity style={{}} onPress={() => navigate('Conversation')}>
                <View style={[Layout.fullWidth, Layout.column, styles.itemWapper]}>
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
                        <CustomImage source={Images.icThreeDotVertical} width={Responsive.width(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} onPress={() => {}} />
                    </View>
                    <View style={Layout.fullWidth}>
                        <Text style={styles.textMessageSmall}>Hello, @Muhammad Its is the best topics for you Whether its a driving tour 😂</Text>
                    </View>
                    <View style={Layout.fullWidth, Layout.row}>
                        <CustomImage source={Images.icEmojiHomeTab} width={Responsive.width(20)} height={Responsive.width(20)} style={{ marginLeft: Responsive.width(5) }} />
                        <CustomImage source={Images.icHeartHomeTab} width={Responsive.width(20)} height={Responsive.width(20)} style={{ marginLeft: Responsive.width(5) }} />
                        <Text style={styles.textCountLikeComment}>24 .10 comments</Text>

                    </View>
                    <View style={[Layout.fullWidth, Layout.row, { paddingVertical: Responsive.height(5), justifyContent: 'space-between' }]}>
                        <CustomImage source={Images.icLikeHomeTabSmall} width={Responsive.width(20)} height={Responsive.width(20)} />
                        <CustomImage source={Images.icCommentHomeTabSmall} width={Responsive.width(20)} height={Responsive.width(20)} />
                        <CustomImage source={Images.icShareHomeTabSmall} width={Responsive.width(20)} height={Responsive.width(20)} />
                        <CustomImage source={Images.icBookmarkHomeTabSmall} width={Responsive.width(20)} height={Responsive.width(20)} />
                    </View>
                    <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(10) }]}>
                        <View style={styles.viewButtonStatus}>
                            <Text style={styles.textButtonStatus}>Good</Text>
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={styles.viewButtonStatus}>
                            <Text style={styles.textButtonStatus}>Bad</Text>
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={styles.viewButtonStatus}>
                            <Text style={styles.textButtonStatus}>Other</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity >
        );
    };

    return (<View style={[Layout.fill, styles.parentContainer]} >
        <View
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgba(234, 237, 245, 1.0)'}]}>
        </View>
        <View style={{ height: Responsive.height(1), backgroundColor: '#D5DDE5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <FlatList nestedScrollEnabled={true}
                style={[Layout.fullWidth]}
                data={data}
                renderItem={renderItem}
                ListHeaderComponent={<View style={{ height: Responsive.height(24) }} />}
                ListFooterComponent={<View style={{ height: Responsive.height(70) }} />}
                ItemSeparatorComponent={() => (<View style={[styles.line, { marginVertical: Responsive.height(15) }]} />)}
                keyExtractor={(item) => item.id} />
        </KeyboardAvoidingView>
    </View>)
}

export default BookmarksContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
        marginTop: Responsive.height(2),
        marginBottom: Responsive.height(8)
    },

    textCancel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#272D37',
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
        minHeight: Responsive.height(68)
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
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(20),
        color: '#3F464E'
    },
    textUserDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(20),
        color: '#B0B0B0'
    },

    wrapperAvatarTopBar: {
        marginTop: Responsive.height(5),
        marginRight: Responsive.width(10)
    },
    circleUnread: {
        backgroundColor: '#FA4D56', width: Responsive.width(20), height: Responsive.width(20), position: 'absolute',
        right: 0, top: 0, zIndex: 2,
        borderRadius: Responsive.width(10), alignItems: 'center',
        justifyContent: 'center',
    },
    textUnread: {
        color: '#ffffff',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
    },

    viewButtonStatus: {
        borderRadius: Responsive.width(26 / 2), height:
            Responsive.width(26), width: Responsive.width(100),
        borderWidth: 1, borderColor: '#9DADC0',
        justifyContent: 'center', alignItems: 'center'
    },
    textButtonStatus: {
        color: '#131322',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(13),
    },
    textMessageSmall: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#525563',
        flex: 1,
        marginTop: Responsive.height(10),
    },
    textMessageLarge: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(11),
        lineHeight: Responsive.width(22),
        color: '#525563',
        flex: 1
    },
    textLikeCommentLarge: {
        color: '#131322',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
        marginLeft: Responsive.width(2)
    },

    textCountLikeComment: {
        color: '#B1B3BC',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(20),
        marginLeft: Responsive.width(2)
    },
    textQuestion: {
        color: '#525563',
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        marginTop: Responsive.height(10),
    },
    textThanks: {
        color: '#525563',
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        marginTop: Responsive.height(2),
    },
    textReviewImage: {
        color: '#525563',
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(11),
        lineHeight: Responsive.width(16.5),
        flex: 1
    },
    textPercentImage: {
        color: '#525563',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(9),
        lineHeight: Responsive.width(20),
    },
    textTitleStory: {
        color: '#3F464E',
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(20),
        marginLeft: Responsive.width(6),
    },
    textDesciptionStory: {
        color: '#525563',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.width(22),
    },
});
