import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { Switch } from 'react-native-switch';
import { CustomImage, Avatar } from '@/Components'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'

const DialogGroupConversationLeaveGroup = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()



    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.colCenter, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textHeader}>Leave Group</Text>
                    <View style={{ height: Responsive.height(10) }} />
                    <Text style={styles.textSubHeader}>Are you sure you want to leave Waivlength?</Text>

                </View>
                <View style={{ height: Responsive.height(30) }} />
                <TouchableOpacity
                    style={[Common.button.rounded, styles.buttonYes]}
                    onPress={() => modalizeRef.current?.close()}>
                    <Text style={styles.textButtonYes}>Yes</Text>
                </TouchableOpacity>
                <View style={{ height: Responsive.height(18) }} />
                <TouchableOpacity
                    style={[Common.button.rounded, styles.buttonCancel]}
                    onPress={() => modalizeRef.current?.close()}>
                    <Text style={styles.textButtonCancel}>Cancel</Text>
                </TouchableOpacity>
                <View style={{ height: Responsive.height(18) }} />
            </View>
        </ScrollView>
    </Modalize>)
}

DialogGroupConversationLeaveGroup.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogGroupConversationLeaveGroup.defaultProps = {
    style: {}
}

export default DialogGroupConversationLeaveGroup


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textHeader: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#141735',
        marginTop: Responsive.height(23),
    },
    textSubHeader: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        lineHeight: Responsive.width(22),
        color: '#525769',
    },
    buttonYes: {
        height: Responsive.height(46),
        borderRadius: Responsive.height(23),
        marginHorizontal: Responsive.width(28),
        backgroundColor: '#EC3939'
    },
    textButtonYes: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#FFFFFF',
    },
    buttonCancel: {
        height: Responsive.height(46),
        borderRadius: Responsive.height(23),
        marginHorizontal: Responsive.width(28),
        backgroundColor: 'transparent',
        borderWidth: Responsive.height(1),
        borderColor: '#B7C2CD'
    },
    textButtonCancel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#55606B',
    },

});