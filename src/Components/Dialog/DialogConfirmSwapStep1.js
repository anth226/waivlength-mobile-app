import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { EVENTS } from '@/Constants';
import EventBus from 'react-native-event-bus';

const DialogConfirmSwapStep1 = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    return (<Modalize ref={modalizeRef} {...props} adjustToContentHeight={true}>
        <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]}
            onPress={() => {
                modalizeRef?.current?.close()
            }}>
            <View style={[{ marginTop: Responsive.height(33) }]}>
                <Text style={styles.textSettings}>Confirm Swap</Text>
            </View>
            <View style={[Layout.rowHCenter, { marginTop: Responsive.height(20) }]}>
                <CustomImage source={Images.icCryptocurrencyBnb} width={Responsive.height(24)} height={Responsive.height(24)} />
                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginLeft: Responsive.width(16) }]}>
                    <Text style={styles.textSwapValue}>0.5</Text>
                    <Text style={styles.textSwapValue}>BNB</Text>
                </View>
            </View>
            <View style={[{ height: Responsive.height(26), justifyContent: 'center', marginLeft: Responsive.width(4) }]}>
                <CustomImage source={Images.icArrowDownConfirmSwap} width={Responsive.height(16)} height={Responsive.height(16)} />
            </View>
            <View style={[Layout.rowHCenter,]}>
                <CustomImage source={Images.icCryptocurrencyUsdt} width={Responsive.height(24)} height={Responsive.height(24)} />
                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginLeft: Responsive.width(16) }]}>
                    <Text style={styles.textSwapValue}>321.445</Text>
                    <Text style={styles.textSwapValue}>USDT</Text>
                </View>
            </View>

            <View style={[Layout.rowHCenter, { marginTop: Responsive.height(29), marginBottom: Responsive.height(30) }]}>
                <Text style={styles.textTransactionMessage}>Output is estimated. You will receive at least 319.213 USDT or transaction will revert.</Text>
            </View>
            <View style={styles.viewInfoContainer}>
                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(14) }]}>
                    <Text style={styles.textMedium13}>Price</Text>
                    <Text style={styles.textMedium13}>642.89 USDT / BNB</Text>
                </View>
                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(14), marginTop: Responsive.height(16) }]}>
                    <View style={Layout.rowHCenter}>
                        <Text style={styles.textMedium13}>Minimum received </Text>
                        <CustomImage source={Images.icHelpCircle} width={Responsive.height(16)} height={Responsive.height(16)} />
                    </View>

                    <Text style={styles.textMedium13}>319.213 USDT</Text>
                </View>
                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(14), marginTop: Responsive.height(16) }]}>
                    <View style={Layout.rowHCenter}>
                        <Text style={styles.textMedium13}>Price Impact </Text>
                        <CustomImage source={Images.icHelpCircle} width={Responsive.height(16)} height={Responsive.height(16)} />
                    </View>

                    <Text style={styles.textMedium13}>{'<0.01%'}</Text>
                </View>
                <View style={[Layout.fill, Layout.rowHCenter, { justifyContent: 'space-between', marginHorizontal: Responsive.width(14), marginTop: Responsive.height(16) }]}>
                    <View style={Layout.rowHCenter}>
                        <Text style={styles.textMedium13}>Liquidity Provider Fee </Text>
                        <CustomImage source={Images.icHelpCircle} width={Responsive.height(16)} height={Responsive.height(16)} />
                    </View>
                    <Text style={styles.textMedium13}>0.0005 BNB</Text>
                </View>
            </View>

            <TouchableOpacity style={[Layout.rowCenter, styles.viewButtonBlue]} onPress={()=> {
                EventBus.getInstance().fireEvent(EVENTS.OPEN_CONFIRM_SWAP_STEP2_DIALOG, {})
            }}>
                <Text style={styles.textBlueButton}>Confirm Swap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Layout.rowCenter, styles.viewButtonStroke]} onPress={()=> {
                modalizeRef?.current?.close()
            }}>
                <Text style={styles.textStrokeButton}>Cancel</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    </Modalize>)
}

DialogConfirmSwapStep1.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogConfirmSwapStep1.defaultProps = {
    style: {}
}

export default DialogConfirmSwapStep1


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textSettings: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#242332',
        lineHeight: Responsive.height(27),
    },
    textSwapValue: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(24),
    },
    textWhiteItem14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: 'white',
        lineHeight: Responsive.height(21),
        marginHorizontal: Responsive.width(15),
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1),
    },
    textTransactionMessage: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    viewInfoContainer: {
        backgroundColor: 'rgba(242, 244, 248, 1.0)',
        borderRadius: Responsive.height(16),
        borderColor: 'rgba(233, 238, 243, 1.0)',
        borderWidth: Responsive.height(1),
        marginBottom: Responsive.height(30),
        minHeight: Responsive.height(50),
        paddingTop: Responsive.height(10),
        paddingBottom: Responsive.height(19),
    },
    textMedium13: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(19.5),
    },
    viewButtonBlue: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(27),
        height: Responsive.height(52),
        marginHorizontal: Responsive.width(27),
    },
    viewButtonStroke: {
        backgroundColor: 'white',
        borderColor: 'rgba(193, 203, 213, 1.0)',
        borderWidth: Responsive.height(1),
        borderRadius: Responsive.height(27),
        height: Responsive.height(52),
        marginHorizontal: Responsive.width(27),
        marginVertical: Responsive.height(12)
    },
    textBlueButton: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: Responsive.height(28),
    },
    textStrokeButton: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(28),
    }

});