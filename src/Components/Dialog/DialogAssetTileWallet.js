import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'

const DialogAssetTileWallet = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()


    return (<Modalize ref={modalizeRef} {...props}>
        <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]}>
            <View style={[{ marginTop: Responsive.height(33) }, Layout.rowCenter]}>
                <CustomImage source={Images.icBinanceCoin} width={Responsive.height(36)} height={Responsive.height(36)} />
                <Text style={styles.textBNB}>BNB</Text>
            </View>
            <View style={[styles.viewInfoContainer]}>
                <Text style={styles.textBalance}>Balance</Text>
                <Text style={styles.textBalanceValue}>30.4422 BNB</Text>
                <Text style={styles.textAmountValue}>US$18,920.20</Text>
            </View>
            <Text style={styles.textPriceLabel}>Price</Text>
            <Text style={styles.textPriceValue}>US$621.52</Text>

            <View style={[Layout.fullWidth, Layout.rowHCenter]}>
                <TouchableOpacity style={[Layout.fill, styles.buttonBlue, Layout.rowCenter]} onPress={onPressSend}>
                    <CustomImage source={Images.icSend20} width={Responsive.height(20)} height={Responsive.height(20)} />
                    <Text style={styles.textButton}>Send</Text>
                </TouchableOpacity>
                <View style={{ width: Responsive.width(13) }} />
                <TouchableOpacity style={[Layout.fill, styles.buttonBlue, Layout.rowCenter]} onPress={onPressSwap}>
                    <CustomImage source={Images.icArrowSwapHorizontal} width={Responsive.height(20)} height={Responsive.height(20)} />
                    <Text style={styles.textButton}>Swap</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Modalize>)
}

DialogAssetTileWallet.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogAssetTileWallet.defaultProps = {
    style: {}
}

export default DialogAssetTileWallet


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textBNB: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#242A31',
        lineHeight: Responsive.height(22),
        marginLeft: Responsive.width(8),
    },
    viewInfoContainer: {
        backgroundColor: 'rgba(237, 241, 245, 1.0)',
        borderRadius: Responsive.height(16),
        minHeight: Responsive.height(134),
        paddingHorizontal: Responsive.height(20),
        paddingVertical: Responsive.height(20),
        marginTop: Responsive.height(20),
        marginBottom: Responsive.height(30),
    },
    textBalance: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        textAlign: 'center',
        marginBottom: Responsive.height(10),
    },
    textBalanceValue: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        color: '#242A31',
        textAlign: 'center',
        marginBottom: Responsive.height(10),
    },
    textAmountValue: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        textAlign: 'center',
    },
    textPriceLabel: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
    },
    textPriceValue: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        marginTop: Responsive.height(5),
        marginBottom: Responsive.height(24),
    },
    buttonBlue: {
        height: Responsive.height(60),
        borderRadius: Responsive.height(20),
        marginTop: Responsive.height(22),
        marginBottom: Responsive.height(18),
        backgroundColor: '#5D5FEF',
    },
    textButton: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff',
        marginLeft: Responsive.width(5),
    },

});