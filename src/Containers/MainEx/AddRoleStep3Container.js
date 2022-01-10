import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { ExampleContainer } from '@/Containers'

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon, Avatar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate, goBack } from '@/Navigators/utils'
import _ from 'lodash'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const AddRoleStep3Container = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("");
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    const onOpenPickRoleColour = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_PICK_ROLE_COLOUR_DIALOG, {})
    };

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
            <TouchableOpacity style={[Layout.fullWidth, styles.viewItemWrapper, Layout.rowHCenter, { paddingLeft: Responsive.width(16), paddingRight: Responsive.width(8) }]}>
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
                <RadioButton
                    selected={false}
                    size={Responsive.height(24)}
                    onPress={() => { }}
                    text={``}
                    isHtml={false}
                    textStyle={styles.textRadioButton}
                    style={{}}
                />
            </TouchableOpacity>
        )
    }

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<CustomImage height={Responsive.height(36)} width={Responsive.height(36)} source={Images.icClose2}
                styleImage={{ width: Responsive.height(28), height: Responsive.height(28) }} onPress={goBack} />}
            center={<Text style={styles.textTitle}>Step 3 of 3</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />

        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView style={Layout.fill}>
                <Text style={[Layout.fullWidth, styles.text242A31Bold16, { textAlign: 'center' }]}>Add members</Text>
                <View style={{ height: Responsive.height(12) }} />
                <Text style={[Layout.fullWidth, styles.text525563Medium12, { textAlign: 'center' }]}>Assign this role to your members.{'\n'}Members can have more than one role.</Text>
                <View style={{ height: Responsive.height(20) }} />
                <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(20) }]}>
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
                <View style={[styles.viewActionWrapper, Layout.fill]}>
                    <FlatList
                        nestedScrollEnabled={true}
                        data={DATA}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                        keyExtractor={(item) => item.id} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        <View style={[Layout.fullWidth, Layout.rowCenter, { paddingHorizontal: Responsive.width(27), paddingBottom: Responsive.height(33) }]}>
            <TouchableOpacity style={[Layout.fill, styles.buttonFinish, Layout.rowCenter]} onPress={() => navigate('RolesSettingServer')}>
                <Text style={styles.textFinish}>Finish</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>)
}

export default AddRoleStep3Container

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width(16)
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
    },
    textHeader: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    searchWrapper: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'rgba(249,250,252,1.0)',
        borderRadius: Responsive.height(16),
        alignItems: 'center',
        paddingHorizontal: Responsive.width(16)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(12),
        height: Responsive.height(44),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
    },
    textRoleColor: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    textDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(10),
        color: '#242A31',
        paddingHorizontal: Responsive.width(16)
    },
    text242A31Bold16: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(16),
        color: '#242A31',
        lineHeight: Responsive.height(24)
    },
    text525563Medium12: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#525563',
    },
    buttonFinish: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(14),
        height: Responsive.height(52),
    },
    textFinish: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: 'white',
    },
    avatarImage: {
        width: Responsive.width(26),
        height: Responsive.width(26),
        borderRadius: Responsive.width(13),
        marginRight: Responsive.width(6),
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        marginHorizontal: Responsive.width(16),
    },
    viewItemWrapper: {
        paddingVertical: Responsive.height(14),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
    },
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },
});
