import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { Switch } from 'react-native-switch';
import { CustomImage } from '@/Components'

const DialogGroupConversationInvite = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()



    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <Text style={styles.textInvite}>Invite a friend</Text>


                <View style={[Layout.fullWidth, Layout.row, { paddingVertical: Responsive.height(10), paddingHorizontal: Responsive.width(20) }]}>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(48)} height={Responsive.height(48)} source={Images.icActionShare} />
                        <Text style={styles.textAction}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(48)} height={Responsive.height(48)} source={Images.icActionCopyLink} />
                        <Text style={styles.textAction}>Copy Link</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(48)} height={Responsive.height(48)} source={Images.icActionWhatsapp} />
                        <Text style={styles.textAction}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(48)} height={Responsive.height(48)} source={Images.icActionFbMessenger} />
                        <Text style={styles.textAction}>Messenger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.fill, Layout.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <CustomImage width={Responsive.height(48)} height={Responsive.height(48)} source={Images.icActionGmail} />
                        <Text style={styles.textAction}>Gmail</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ height: Responsive.height(14) }} />
                <View style={[Layout.fullWidth, styles.line]} />

                <View style={[Layout.fullWidth, { flexDirection: 'column', paddingVertical: Responsive.height(10), paddingHorizontal: Responsive.width(30) }]}>

                    <View style={Layout.fullWidth, styles.searchWrapper}>
                        <TextInput
                            onChangeText={text => { }}
                            editable={true}
                            placeholder={'Invite friends to Waivlength'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icSearch} />
                    </View>
                    <View style={[Layout.row, { marginTop: Responsive.height(8) }]}>
                        <Text style={styles.textDescription}>Your invite link expires in 7 days.</Text>
                        <Text style={styles.editLinkInvite}> Edit invite link.</Text>
                    </View>
                    <View style={{ height: Responsive.height(14) }} />
                </View>


                <View style={[Layout.fullWidth, styles.line]} />

                <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', paddingHorizontal: Responsive.width(20), height: Responsive.height(65) }]}>
                    <CustomImage width={Responsive.height(36)} height={Responsive.height(36)} source={Images.icLogoDark} />
                    <Text style={styles.textNameFriend}>gavmcd (9R) #5138</Text>
                    <TouchableOpacity
                        style={[Common.button.outlineRounded, styles.buttonInvite]}
                    >
                        <Text style={styles.textButtonInvite}>Invite</Text>
                    </TouchableOpacity>
                </View>

                <View style={[Layout.fullWidth, styles.line]} />


                <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center', paddingHorizontal: Responsive.width(20), height: Responsive.height(65) }]}>
                    <CustomImage width={Responsive.height(36)} height={Responsive.height(36)} source={Images.icLogoDark} />
                    <Text style={styles.textNameFriend}>JACK#4438</Text>
                    <TouchableOpacity
                        style={[Common.button.outlineRounded, styles.buttonInvite]}
                    >
                        <Text style={styles.textButtonInvite}>Invite</Text>
                    </TouchableOpacity>
                </View>

                <View style={[Layout.fullWidth, styles.line]} />



                <View style={{ height: Responsive.height(44) }} />

            </View>
        </ScrollView>
    </Modalize>)
}

DialogGroupConversationInvite.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogGroupConversationInvite.defaultProps = {
    style: {}
}

export default DialogGroupConversationInvite


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textInvite: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        marginTop: Responsive.height(40),
        paddingHorizontal: Responsive.width(20)
    },
    dotOnline: {
        width: Responsive.height(8),
        height: Responsive.height(8),
        backgroundColor: '#24A148',
        borderRadius: Responsive.height(4)
    },
    textCount: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31'
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1)
    },
    textAction: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        marginTop: Responsive.height(5)
    },
    searchWrapper: {
        flexDirection: 'row',
        height: Responsive.height(44),
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: Responsive.height(22),
        borderColor: '#E1E2EF',
        borderWidth: Responsive.height(1),
        alignItems: 'center',
        paddingHorizontal: Responsive.width(10)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(14),
    },
    textDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        color: '#8F95A6'
    },
    editLinkInvite: {
        color: '#5D5FEF',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(12),
    },
    textNameFriend: {
        flex: 1,
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        paddingHorizontal: Responsive.width(10)
    },
    buttonInvite: {
        height: Responsive.height(32),
        paddingHorizontal: Responsive.width(15),
        borderRadius: Responsive.height(16)
    },
    textButtonInvite:{
        color: '#5D5FEF',
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
    }


});