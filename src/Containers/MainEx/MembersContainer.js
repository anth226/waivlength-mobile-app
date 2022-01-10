import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, Avatar, BackIcon, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const MembersContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("");
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
            name: "Linnie",
            url: "https://picsum.photos/200/200",
            bio: "I am the sunshine",
            unRead: 4,
            time: "02:17",
            isVerified: true
        },
        {
            id: 2,
            name: "Ruth",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            unRead: 4,
            time: "02:17",
            isVerified: true
        },
        {
            id: 3,
            name: "Edgar",
            url: "",
            bio: "Change ain't easy",
            unRead: 4,
            time: "02:17",
            isVerified: true
        },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[Layout.fullWidth, styles.viewItemWrapper, Layout.rowHCenter, { paddingHorizontal: Responsive.width(16) }]} onPress={()=> navigate('MemberDetails')}>
                <Avatar
                    isShowDot={false}
                    imageStyle={styles.avatarImage}
                    url={'https://picsum.photos/200/200'}
                    firstName={"A"}
                    lastName={"A"} />
                <View style={{ width: Responsive.width(14) }} />
                <Text style={[styles.text242A31Medium14, {}]}>{item.name}</Text>
                <Text style={[styles.textUsername, {}]}> @username</Text>
                <View style={[styles.viewVerifiedWrapper, { marginLeft: Responsive.width(3) }]}>
                    <CustomImage source={item.isVerified ? Images.icUserChatVerified : Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} />
                </View>
                <View style={Layout.fill} />
                <CustomImage
                    width={Responsive.height(12)}
                    height={Responsive.height(12)}
                    source={Images.icArrowDown2}
                    tintColor={'#B7B5BE'}
                    style={{ transform: [{ rotate: '-90deg' }] }} />
            </TouchableOpacity>
        )
    }

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>Members</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />

        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>
                <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(4) }]}>
                    <View style={[Layout.fill, styles.searchWrapper, Layout.rowHCenter]}>
                        <TextInput
                            //onChangeText={text => setChannelName(text)}
                            editable={true}
                            //value={channelName}
                            placeholder={'Search for a member'}
                            placeholderTextColor={'#8D8F95'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.icSearch} />
                    </View>
                </View>
                <View style={{ height: Responsive.height(15) }} />
                <FlatList
                        contentContainerStyle={[styles.viewActionWrapper, {width: width - Responsive.width(32)}]}
                        style={[Layout.fill]}
                        data={DATA}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                        keyExtractor={(item) => item.id} />
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default MembersContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((16))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
    },
    searchWrapper: {
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        borderRadius: Responsive.height(24),
        borderWidth: Responsive.height(1),
        borderColor: '#E1E2EF',
        height: Responsive.height(44),
        paddingHorizontal: Responsive.width(16)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(12),
        height: Responsive.height(49),
        fontFamily: 'Poppins-Medium',
    },
    text242A31Medium14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(22),
    },
    textUsername: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'rgba(125,128,147,1.0)'
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
    },
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },
    viewItemWrapper: {
        paddingVertical: Responsive.height(15),
    },
    avatarImage: {
        width: Responsive.width(26),
        height: Responsive.width(26),
        borderRadius: Responsive.width(13),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
    },

});
