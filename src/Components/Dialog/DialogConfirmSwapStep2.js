import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { EVENTS } from '@/Constants';
import EventBus from 'react-native-event-bus';

const DialogConfirmSwapStep2 = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    return (<Modalize ref={modalizeRef} {...props} adjustToContentHeight={true}>
        <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]}
            onPress={() => {
                modalizeRef?.current?.close()
            }}>
            <View style={[{ marginTop: Responsive.height(33) }]}>
                <Text style={styles.textSettings}>Transaction Submitted</Text>
            </View>
            <View style={[Layout.rowCenter]}>
                <View style={styles.viewDot} />
                <Text style={styles.textBSC}>BSC</Text>
            </View>
            <View style={[Layout.rowHCenter, styles.viewHashInfo, { justifyContent: 'space-between' }]}>
                <View style={[Layout.rowHCenter]}>
                    <View style={[Layout.rowCenter, styles.viewCorner]}>
                        <CustomImage source={Images.icHashtag} width={Responsive.height(20)} height={Responsive.height(20)} />
                    </View>
                    <Text style={[styles.textSemiBold14, {marginLeft: Responsive.width(10)}]}>Hash</Text>
                </View>


                <View style={[Layout.rowHCenter]}>
                    <Text style={styles.textSemiBold14}>0x43bae6732...de8</Text>
                    <CustomImage source={Images.icCopyBlue} width={Responsive.height(20)} 
                    height={Responsive.height(20)} style={{marginLeft: Responsive.width(5)}}/>
                </View>

            </View>

            <TouchableOpacity style={[Layout.rowCenter, styles.viewButtonBlue]} onPress={() => { modalizeRef?.current?.close() }}>
                <Text style={styles.textBlueButton}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Layout.rowCenter, {marginBottom: Responsive.height(20)}]} onPress={() => { modalizeRef?.current?.close() }}>
            <CustomImage source={Images.icExternalLink} width={Responsive.height(24)} height={Responsive.height(24)} />
                <Text style={styles.textViewOn}>View on BscScan</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    </Modalize>)
}

DialogConfirmSwapStep2.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogConfirmSwapStep2.defaultProps = {
    style: {}
}

export default DialogConfirmSwapStep2


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textSettings: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#242332',
        lineHeight: Responsive.height(27),
        alignSelf: 'center'
    },
    viewDot: {
        width: Responsive.height(8),
        height: Responsive.height(8),
        borderRadius: Responsive.height(4),
        marginRight: Responsive.width(5),
        backgroundColor: '#F1C21B'
    },
    textBSC: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(24),
    },
    viewHashInfo: {
        minHeight: Responsive.height(36),
    },
    viewCorner: {
        width: Responsive.height(36),
        height: Responsive.height(36),
        backgroundColor: 'rgba(237, 241, 245, 1.0)',
        borderRadius: Responsive.height(8),
    },
    textSemiBold14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
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
        marginVertical: Responsive.height(20)
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

    textViewOn: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#242A31',
        lineHeight: Responsive.height(28),
        marginLeft: Responsive.width(7)
    }

});