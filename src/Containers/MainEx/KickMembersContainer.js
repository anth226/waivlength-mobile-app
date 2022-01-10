import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, Avatar, BackIcon, RadioButton } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const KickMembersContainer = ({ navigation }) => {
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

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>Kick Member</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                    <Avatar
                        isShowDot={false}
                        imageStyle={styles.avatarImage}
                        url={'https://picsum.photos/200/200'}
                        firstName={"A"}
                        lastName={"A"} />
                </View>
                <View style={{ height: Responsive.height(10) }} />
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                    <View style={Layout.rowHCenter}>
                        <Text style={[styles.text242A31Medium14, {}]}>Faruk</Text>
                        <Text style={[styles.textUsername, {}]}> #8425</Text>
                    </View>

                </View>
                <View style={{ height: Responsive.height(15) }} />
                <Text style={styles.textDescription}>Are you sure want to kick Faruk from the server?
                    They will be able to rejoin again with a new invite.</Text>

                <Text style={styles.textSubTitle}>Reason for kick</Text>
                <View style={Layout.fullWidth}>
                    <TextInput
                        onChangeText={text => { }}
                        editable={true}
                        placeholder={'Type a reason...'}
                        placeholderTextColor={'#ADAEC4'}
                        selectTextOnFocus
                        multiline
                        style={[Layout.fullWidth, Common.textInput, styles.inputTextMultiline]}
                    />
                    {/* <Text style={[styles.textDescription, { position: 'absolute', right: Responsive.width(5), bottom: Responsive.height(5), color: '#ADAEC4' }]}>1024</Text> */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

        <View style={[Layout.fullWidth, Layout.rowCenter]}>
            <TouchableOpacity style={[styles.buttonWhiteWrapper, Layout.rowCenter]}>
                <Text style={styles.textWhiteButton}>Kick ‘Faruk’</Text>
            </TouchableOpacity>
        </View>
        <View style={{ height: Responsive.height(20) }} />
    </SafeAreaView>)
}

export default KickMembersContainer

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
    textDescription: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Medium',
        color: '#525563',
        textAlign: 'center',
        marginHorizontal: Responsive.width(24)
    },
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(8),
        marginTop: Responsive.height(15),
        marginBottom: Responsive.height(10),
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        marginBottom: Responsive.height(5),
    },
    textName: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    avatarImage: {
        width: Responsive.width(60),
        height: Responsive.width(60),
        borderRadius: Responsive.width(30),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
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
    buttonWhiteWrapper: {
        backgroundColor: 'rgba(249, 251, 252, 1.0)',
        height: Responsive.height(46),
        borderRadius: Responsive.height(28),
        width: Responsive.width(214),
    },
    textWhiteButton: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#EC3939',
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: 'rgba(220, 221, 224, 1.0)',
    },
    textHeader: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    inputTextMultiline: {
        height: Responsive.height(169),
        backgroundColor: 'rgba(252, 252, 254, 1.0)',
        borderBottomWidth: 0,
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        textAlignVertical: 'top',
        borderRadius: Responsive.height(12),
        paddingVertical: Responsive.height(15),
        paddingHorizontal: Responsive.width(15)
    },

});
