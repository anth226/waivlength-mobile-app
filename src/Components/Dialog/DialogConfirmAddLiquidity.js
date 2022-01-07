import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';

const DialogConfirmAddLiquidity = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const [fromCurrencyValue, setFromCurrencyValue] = useState('0.0');

    return (<Modalize ref={modalizeRef} {...props} adjustToContentHeight={fromCurrencyValue == '0.0'}>
        <ScrollView>
            <View style={[Layout.fullWidth, Layout.column]}>
                <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, { height: Responsive.height(33) }]} onPress={() => {
                    modalizeRef?.current?.close()
                }}>
                </TouchableOpacity>
                <Text style={styles.textSettings}>You will receive</Text>
                <View style={[Layout.rowHCenter, { marginLeft: Responsive.width(16) }]}>
                    <Text style={styles.text3B454ESemiBold36}>0.5587</Text>
                    <CustomImage source={Images.icCryptocurrencyBnb} width={Responsive.height(24)} height={Responsive.height(24)} style={{ marginLeft: Responsive.width(12) }} />
                    <CustomImage source={Images.icCryptocurrencyUsdt} width={Responsive.height(24)} height={Responsive.height(24)} style={{ marginLeft: Responsive.width(4) }} />
                </View>
                <Text style={[styles.text3B454ESemiBold16, {marginLeft: Responsive.width(16)}]}>BNB/CAKE Pool Tokens</Text>
                <Text style={styles.textImportExistingPool}>Output is estimated. If the price changes by more than 0.5% your transaction will revert.</Text>

                <View style={Layout.fullWidth}>
                    <View style={styles.viewInfoToken}>

                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(16) }]}>
                            <Text style={styles.textMedium13}>BNB Deposited</Text>
                            <View style={Layout.rowHCenter}>
                                <CustomImage source={Images.icCryptocurrencyBnb} width={Responsive.height(24)} height={Responsive.height(24)} style={{ marginRight: Responsive.width(7) }} />
                                <Text style={styles.textMedium13}>0.08737312</Text>
                            </View>

                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(16) }]}>
                            <Text style={styles.textMedium13}>CAKE Deposited</Text>
                            <View style={Layout.rowHCenter}>
                                <CustomImage source={Images.icCryptocurrencyUsdt} width={Responsive.height(24)} height={Responsive.height(24)} style={{ marginRight: Responsive.width(7) }} />
                                <Text style={styles.textMedium13}>3.2847</Text>
                            </View>
                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(16) }]}>
                            <Text style={styles.textMedium13}>Rates</Text>
                            <Text style={styles.textMedium13}>1 BNB = 41.23 CAKE</Text>
                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'flex-end', marginTop: Responsive.height(16) }]}>
                            <Text style={styles.textMedium13}>1 CAKE = 0.02839 BNB</Text>

                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(16) }]}>
                            <Text style={styles.textMedium13}>Share of Pool</Text>
                            <Text style={styles.textMedium13}>0.0005 BNB</Text>

                        </View>
                    </View>

                </View>

                <View style={Layout.fullWidth}>
                        <TouchableOpacity style={[Layout.rowCenter, styles.buttonBlue]} onPress={()=> {
                            modalizeRef?.current?.close()
                        }}>
                            <Text style={styles.textWhiteSemiBold16}>Confirm Supply</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Layout.fullWidth}>
                        <TouchableOpacity style={[Layout.rowCenter, styles.buttonCancel]} onPress={()=> {
                            modalizeRef?.current?.close()
                        }}>
                            <Text style={styles.text3B454ESemiBold16}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>

    </Modalize>)
}

DialogConfirmAddLiquidity.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogConfirmAddLiquidity.defaultProps = {
    style: {}
}

export default DialogConfirmAddLiquidity


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
    text3B454ESemiBold36: {
        fontSize: Responsive.font(36),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(54),
    },
    text3B454ESemiBold16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(24),
        marginHorizontal: Responsive.width(16),
    },
    textImportExistingPool: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
        marginHorizontal: Responsive.width(16),
        marginVertical: Responsive.height(20),
    },
    text242A31Regular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
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
        marginBottom: Responsive.height(12),
    },
    buttonCancel: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
        borderColor: 'rgba(193, 203, 213, 1.0)',
        borderWidth: Responsive.height(1),
        marginHorizontal: Responsive.width(27),
        marginBottom: Responsive.height(20),
    },
    textWhiteSemiBold16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: Responsive.height(28),
    },
    text3B454ESemiBold16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(28),
    },
    viewInfoToken: {
        justifyContent: 'space-between',
        borderRadius: Responsive.height(16),
        borderColor: 'rgba(233, 238, 243, 1.0)',
        backgroundColor: '#F2F4F8',
        borderWidth: Responsive.height(1),
        marginHorizontal: Responsive.width(19),
        minHeight: Responsive.height(100),
        marginBottom: Responsive.height(15),
        marginBottom: Responsive.height(20),
        paddingTop: Responsive.height(13),
        paddingBottom: Responsive.height(14),
        paddingHorizontal: Responsive.width(14),
    },
    textLPTokens: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    textRegular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    textMedium13: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(19.5),
    },
    textMedium16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(24),
    },

});