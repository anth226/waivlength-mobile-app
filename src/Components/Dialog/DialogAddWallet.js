import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';

const DialogAddWallet = ({ height, width, style, modalizeRef, onPressCreate, onPressImport, ...props }) => {
    const { Layout, Images, Common } = useTheme()


    return (<Modalize ref={modalizeRef} {...props}>
        <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(30) }]}>
            <Text style={styles.textAddWallet}>Add Wallet</Text>
            <Text style={styles.textMessage}>Do you want to create a new wallet or import an existing wallet?</Text>
            <TouchableOpacity style={[Layout.rowCenter, styles.buttonCreate]} onPress={onPressCreate}>
                <Text style={styles.textCreate}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Layout.rowCenter, styles.buttonImport]} onPress={onPressImport}>
                <Text style={styles.textImport}>Import</Text>
            </TouchableOpacity>
        </View>
    </Modalize>)
}

DialogAddWallet.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressCreate: PropTypes.func,
    onPressImport: PropTypes.func
}

DialogAddWallet.defaultProps = {
    style: {}
}

export default DialogAddWallet


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textAddWallet: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#141735',
        lineHeight: Responsive.height(40),
        alignSelf: 'center',
        marginTop: Responsive.height(13),
    },
    textMessage: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#525769',
        textAlign: 'center',
        marginHorizontal: Responsive.width(32),
    },
    buttonCreate: {
        height: Responsive.height(46),
        borderRadius: Responsive.height(27),
        marginTop: Responsive.height(22),
        marginBottom: Responsive.height(18),
        backgroundColor: '#5D5FEF',
    },
    buttonImport: {
        height: Responsive.height(46),
        borderRadius: Responsive.height(28),
        backgroundColor: '#ffffff',
        borderWidth: Responsive.height(1),
        borderColor: '#B7C2CD',
        marginBottom: Responsive.height(19),
    },
    textCreate: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff'
    },
    textImport: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#55606B'
    },

});