import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants'

const DialogRemoveLiquidity = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const [fromCurrencyValue, setFromCurrencyValue] = useState('0.0');
    const [toCurrencyValue, setToCurrencyValue] = useState('0.0');

    return (<Modalize ref={modalizeRef} {...props} adjustToContentHeight={fromCurrencyValue == '0.0'}>
        <ScrollView>
            <View style={[Layout.fullWidth, Layout.column]}>
                <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, { height: Responsive.height(33) }]} onPress={() => {
                    modalizeRef?.current?.close()
                }}>

                </TouchableOpacity>
                <Text style={styles.textSettings}>Remove WAIV-USDT liquidity</Text>
                <Text style={styles.textImportExistingPool}>To receive WAIV and USDT</Text>
                <View style={styles.line} />
                <View style={[styles.viewInfoToken, { marginTop: Responsive.height(15), marginBottom: 0 }]}>
                    <Text style={[styles.text3B3F51Bold24, { marginTop: Responsive.height(15) }]}>15%</Text>
                    <Slider
                        style={{ width: '100%', height: Responsive.height(36), paddingHorizontal: 0 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#5D5FEF"
                        maximumTrackTintColor="#DDE1E6"
                    />
                    <View style={[Layout.fullWidth, Layout.rowHCenter, { justifyContent: 'space-between' }]}>
                        <View style={[Layout.rowCenter, styles.viewPercent]}>
                            <Text style={styles.text242A31SemiBold14}>25%</Text>
                        </View>
                        <View style={[Layout.rowCenter, styles.viewPercent]}>
                            <Text style={styles.text242A31SemiBold14}>50%</Text>
                        </View>
                        <View style={[Layout.rowCenter, styles.viewPercent]}>
                            <Text style={styles.text242A31SemiBold14}>75%</Text>
                        </View>
                        <View style={[Layout.rowCenter, styles.viewPercent]}>
                            <Text style={styles.text242A31SemiBold14}>Max</Text>
                        </View>
                    </View>
                </View>
                <CustomImage source={Images.icArrowDownRemoveLiquidity} width={Responsive.width(24)}
                    height={Responsive.width(24)} style={{ marginVertical: Responsive.height(15), alignSelf: 'center' }} />
                <Text style={[styles.text5D5FEFSemiBold14, { marginHorizontal: Responsive.width(18) }]}>You will receive</Text>
                <View style={styles.viewInfoToken}>
                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(22) }]}>
                        <View style={Layout.rowHCenter}>
                            <CustomImage source={Images.icCryptocurrencyBnb} width={Responsive.height(24)} height={Responsive.height(24)} style={{ marginRight: Responsive.width(10) }} />
                            <Text style={styles.text242A31Medium18}>WAIV</Text>
                        </View>

                        <Text style={styles.text242A31Medium16}>0.034</Text>

                    </View>
                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(16) }]}>
                        <View style={Layout.rowHCenter}>
                            <CustomImage source={Images.icCryptocurrencyUsdt} width={Responsive.height(24)} height={Responsive.height(24)} style={{ marginRight: Responsive.width(10) }} />
                            <Text style={styles.text242A31Medium18}>USDT</Text>
                        </View>

                        <Text style={styles.text242A31Medium16}>41.77</Text>

                    </View>
                    <View style={[Layout.rowHCenter, { justifyContent: 'flex-end', marginTop: Responsive.height(6), marginBottom: Responsive.height(15) }]}>
                        <Text style={styles.text5D5FEFMedium14}>{'Receive BUSD'}</Text>

                    </View>
                </View>
                <Text style={[styles.text5D5FEFSemiBold14, { marginHorizontal: Responsive.width(18) }]}>Prices</Text>
                <View style={styles.viewInfoToken}>
                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(20) }]}>
                        <Text style={styles.text242A31Medium18}>1 WAIV =</Text>
                        <Text style={styles.text242A31Medium16}>0.034 USDT</Text>

                    </View>
                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(13), marginBottom: Responsive.height(18) }]}>
                        <Text style={styles.text242A31Medium18}>0.034 USDT</Text>
                        <Text style={styles.text242A31Medium16}>0.034 USDT</Text>

                    </View>
                </View>
                <View style={Layout.fullWidth}>
                    <TouchableOpacity style={[Layout.rowCenter, styles.buttonBlue]} onPress={() => {
                        EventBus.getInstance().fireEvent(EVENTS.OPEN_CONFIRM_ADD_LIQUIDITY_DIALOG, {})
                    }}>
                        <Text style={styles.textWhiteSemiBold16}>Enable</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </Modalize>)
}

DialogRemoveLiquidity.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogRemoveLiquidity.defaultProps = {
    style: {}
}

export default DialogRemoveLiquidity


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textSettings: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#242332',
        lineHeight: Responsive.height(27),
        marginHorizontal: Responsive.width(16)
    },
    textImportExistingPool: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
        marginTop: Responsive.height(6),
        marginBottom: Responsive.height(15),
        marginHorizontal: Responsive.width(16)
    },
    viewSelectCurrency: {
        paddingTop: Responsive.height(14),
        paddingBottom: Responsive.height(10),
        height: Responsive.height(45),
        marginHorizontal: Responsive.width(20),
    },
    text242A31Regular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.height(21),
    },
    text242A31Medium16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(24),
    },
    text242A31Medium18: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(27),
    },
    text5D5FEFMedium14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        lineHeight: Responsive.height(21),
    },
    text3B454ERegular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1),
    },
    buttonBlue: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
        backgroundColor: '#5D5FEF',
        marginHorizontal: Responsive.width(27),
        marginBottom: Responsive.height(15),
    },
    textWhiteSemiBold16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: Responsive.height(28),
    },
    viewInfoToken: {
        justifyContent: 'space-between',
        borderRadius: Responsive.height(16),
        borderColor: 'rgba(193, 203, 213, 1.0)',
        borderWidth: Responsive.height(1),
        marginHorizontal: Responsive.width(19),
        minHeight: Responsive.height(100),
        marginBottom: Responsive.height(20),
        marginTop: Responsive.height(10),
        paddingHorizontal: Responsive.height(20),
    },
    text5D5FEFSemiBold14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#5D5FEF',
        lineHeight: Responsive.height(21),
    },
    text3B3F51Bold24: {
        fontSize: Responsive.font(24),
        fontFamily: 'Poppins-Bold',
        color: '#3B3F51',
        lineHeight: Responsive.height(36),
    },
    viewPercent: {
        backgroundColor: '#F2F4F8',
        borderColor: '#DDE1E6',
        borderWidth: Responsive.height(1),
        borderRadius: Responsive.height(20),
        width: Responsive.width(60),
        height: Responsive.height(31),
        marginTop: Responsive.height(15),
        marginBottom: Responsive.height(16)
    },
    text242A31SemiBold14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#242A31',
        lineHeight: Responsive.height(21),
    },
    textRegular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    textMedium16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(24),
    },

});