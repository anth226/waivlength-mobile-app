import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { EVENTS } from '@/Constants';
import EventBus from 'react-native-event-bus';

const DialogDeleteRole = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    return (<Modalize ref={modalizeRef} {...props} adjustToContentHeight={true} withHandle={false}>
        <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]}>
            <View style={[{ marginTop: Responsive.height(33) }, Layout.rowCenter]}>
                <Text style={styles.textSettings}>Delete WAIV CORE TEAM - CEO</Text>
            </View>
            <View style={[Layout.rowCenter, { marginBottom: Responsive.height(30) }]}>
                <Text style={styles.textNote}>This cannot be undone.</Text>
            </View>
            <View style={[Layout.fullWidth, Layout.column, {alignItems: 'center'}]}>
                <TouchableOpacity style={[Layout.rowCenter, styles.viewButtonRed]} onPress={() => { modalizeRef?.current?.close() }}>
                    <Text style={styles.textRedButton}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Layout.rowCenter, styles.viewButtonCancel, { marginBottom: Responsive.height(20) }]} onPress={() => { modalizeRef?.current?.close() }}>
                    <Text style={styles.textCancel}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Modalize>)
}

DialogDeleteRole.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogDeleteRole.defaultProps = {
    style: {}
}

export default DialogDeleteRole


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textSettings: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#141735',
        lineHeight: Responsive.height(40),
        alignSelf: 'center'
    },
    textNote: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#525769',
        lineHeight: Responsive.height(18),
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1),
    },
    viewButtonRed: {
        backgroundColor: '#DA1E28',
        borderRadius: Responsive.height(27),
        width: Responsive.width(214),
        height: Responsive.height(46),
        marginVertical: Responsive.height(18)
    },
    viewButtonCancel: {
        borderColor: '#B7C2CD',
        borderWidth: Responsive.height(1),
        borderRadius: Responsive.height(28),
        width: Responsive.width(214),
        height: Responsive.height(46),
    },
    textRedButton: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: Responsive.height(28),
    },
    textCancel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#55606B',
        lineHeight: Responsive.height(22),
    }

});