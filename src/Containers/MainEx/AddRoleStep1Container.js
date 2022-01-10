import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { ExampleContainer } from '@/Containers'

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate, goBack } from '@/Navigators/utils'
import _ from 'lodash'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const AddRoleStep1Container = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("Waivlength");
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

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<CustomImage height={Responsive.height(36)} width={Responsive.height(36)} source={Images.icClose2}
                styleImage={{ width: Responsive.height(28), height: Responsive.height(28) }} onPress={goBack} />}
            center={<Text style={styles.textTitle}>Step 1 of 3</Text>}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>

                <View style={{ height: Responsive.height(23) }} />
                <Text style={[Layout.fullWidth, styles.text242A31Bold16, { textAlign: 'center' }]}>Create a new role</Text>
                <View style={{ height: Responsive.height(12) }} />
                <Text style={[Layout.fullWidth, styles.text525563Medium12, { textAlign: 'center' }]}>Give this role a unique name and color.{'\n'}You can always change this later.</Text>
                <View style={{ height: Responsive.height(26) }} />
                <Text style={[Layout.fullWidth, styles.textHeader, { marginLeft: Responsive.width(8) }]}>Role name</Text>
                <View style={{ height: Responsive.height(5) }} />
                <View style={Layout.fullWidth, styles.searchWrapper}>
                    <TextInput
                        onChangeText={text => setChannelName(text)}
                        editable={true}
                        value={channelName}
                        placeholder={'Enter role name'}
                        placeholderTextColor={'#7C8093'}
                        selectTextOnFocus
                        style={[Layout.fill, Common.textInput, styles.inputText]}
                    />
                    {
                        _.isEmpty(channelName) ? (
                            null
                        ) : (
                            <CustomImage width={Responsive.height(25)} height={Responsive.height(25)} source={Images.icClose} onPress={() => setChannelName('')} />
                        )
                    }
                </View>
                <View style={{ height: Responsive.height(5) }} />
                <Text style={styles.textDescription}>e.g. coach, moderator, subscriber, pet club</Text>
                <View style={{ height: Responsive.height(15) }} />

                <View style={[Layout.fullWidth, Layout.column, { backgroundColor: 'rgba(249,250,252,1.0)', alignItems: 'center', borderRadius: Responsive.height(16) }]}>
                    <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', height: Responsive.height(52) }]}>
                        <View style={{ width: Responsive.width(16) }} />
                        <Text style={[Layout.fill, styles.textRoleColor]}>Role color</Text>
                        <TouchableOpacity style={[Layout.rowHCenter]} onPress={onOpenPickRoleColour}>
                            <View style={{ backgroundColor: '#E91E63', borderRadius: Responsive.height(5), width: Responsive.height(22), height: Responsive.height(22) }} />
                            <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} tintColor={'#B7B5BE'} />
                        </TouchableOpacity>
                        <View style={{ width: Responsive.width(8) }} />
                    </View>
                </View>

                <View style={{ height: Responsive.height(5) }} />
                <Text style={styles.textDescription}>This will determine whether members who have not explicitly set their notification settings receive a notification for every message sent in this server or not. We highly recommend setting this to only @mentions for a public Discord.</Text>

                <View style={{ height: Responsive.height(20) }} />
            </ScrollView>

            <View style={[Layout.fullWidth, Layout.rowCenter, { paddingHorizontal: Responsive.width(27), paddingBottom: Responsive.height(33)}]}>
                <TouchableOpacity style={[Layout.fill, styles.buttonCreate, Layout.rowCenter]} onPress={()=> navigate('AddRoleStep2')}>
                    <Text style={styles.textCreate}>Create</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default AddRoleStep1Container

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
        fontSize: Responsive.font(14),
        height: Responsive.height(52),
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
    buttonCreate: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(14),
        height: Responsive.height(52),
    },
    textCreate: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: 'white',
    }
});
