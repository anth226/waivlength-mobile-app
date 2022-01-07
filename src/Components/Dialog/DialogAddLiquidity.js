import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants'

const DialogAddLiquidity = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
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
                <Text style={styles.textSettings}>Add Liquidity</Text>
                <Text style={styles.textImportExistingPool}>Add liquidity to receive LP tokens</Text>
                <View style={styles.line} />
                <View style={[Layout.row, styles.viewSelectCurrency, { justifyContent: 'space-between' }]}>
                    <View style={[Layout.rowHCenter]}>
                        <Text style={styles.text242A31Regular14}>Select a currency</Text>
                        <CustomImage source={Images.icChevronDown} width={Responsive.height(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} />
                    </View>
                    <Text style={styles.text3B454ERegular14}>-</Text>
                </View>
                <View style={[Layout.rowHCenter, styles.viewOption, { marginBottom: Responsive.height(10) }]}>
                    <TextInput
                        value={fromCurrencyValue}
                        onChangeText={text => {
                            if (text == '') {
                                setFromCurrencyValue('0.0')
                            } else {
                                setFromCurrencyValue(text)
                            }
                        }}
                        editable={true}
                        placeholder={'0.0'}
                        placeholderTextColor={'#3B3F51'}
                        selectTextOnFocus
                        underlineColorAndroid='transparent'
                        textAlignVertical={"center"}
                        textAlign={'right'}
                        keyboardType={'decimal-pad'}
                        style={[Layout.fill, styles.viewTextInput]} />
                </View>
                <CustomImage source={Images.icPlus} width={Responsive.height(18)} height={Responsive.height(18)} style={{ alignSelf: 'center' }} />
                <View style={[Layout.row, styles.viewSelectCurrency, { justifyContent: 'space-between' }]}>
                    <View style={[Layout.rowHCenter]}>
                        <Text style={styles.text242A31Regular14}>Select a currency</Text>
                        <CustomImage source={Images.icChevronDown} width={Responsive.height(20)} height={Responsive.height(20)} style={{ marginLeft: Responsive.width(5) }} />
                    </View>
                    <Text style={styles.text3B454ERegular14}>-</Text>
                </View>
                <View style={[Layout.rowHCenter, styles.viewOption]}>
                    <TextInput
                        value={toCurrencyValue}
                        onChangeText={text => {
                            if (text == '') {
                                setToCurrencyValue('0.0')
                            } else {
                                setToCurrencyValue(text)
                            }
                        }}
                        editable={true}
                        placeholder={'0.0'}
                        placeholderTextColor={'#3B3F51'}
                        selectTextOnFocus
                        underlineColorAndroid='transparent'
                        textAlignVertical={"center"}
                        textAlign={'right'}
                        keyboardType={'decimal-pad'}
                        style={[Layout.fill, styles.viewTextInput]} />
                </View>

                {
                    fromCurrencyValue == '0.0' && <View style={Layout.fullWidth}>
                        <TouchableOpacity style={[Layout.rowCenter, styles.buttonInvalidPair]}>
                            <Text style={styles.textWhiteSemiBold16}>Invalid pair</Text>
                        </TouchableOpacity>
                    </View>
                }
                {fromCurrencyValue != '0.0' && <View style={Layout.fullWidth}>
                    <View style={styles.viewInfoToken}>
                        <Text style={styles.textLPTokens}>Prices and Pool Shares</Text>

                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                            <Text style={styles.textRegular14}>CAKE per BNB</Text>
                            <Text style={styles.textMedium16}>41.77</Text>

                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                            <Text style={styles.textRegular14}>BNB per CAKE</Text>
                            <Text style={styles.textMedium16}>0.034</Text>

                        </View>
                        <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                            <Text style={styles.textRegular14}>Share of Pool</Text>
                            <Text style={styles.textMedium16}>{'<0.01%'}</Text>

                        </View>
                    </View>
                    <View style={Layout.fullWidth}>
                        <TouchableOpacity style={[Layout.rowCenter, styles.buttonBlue]} onPress={()=> {
                            EventBus.getInstance().fireEvent(EVENTS.OPEN_CONFIRM_ADD_LIQUIDITY_DIALOG, {})
                        }}>
                            <Text style={styles.textWhiteSemiBold16}>Enable CAKE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewNote}>
                        <Text style={styles.textNote}>
                            By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
                        </Text>
                    </View>
                </View>}
            </View>
        </ScrollView>

    </Modalize>)
}

DialogAddLiquidity.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogAddLiquidity.defaultProps = {
    style: {}
}

export default DialogAddLiquidity


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
    text3B454ERegular14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    textSelectToken: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
        marginLeft: Responsive.width(18),
    },
    textSelectTokenGuide: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
        marginTop: Responsive.height(30),
        marginBottom: Responsive.height(15),
        marginHorizontal: Responsive.width(20),
        textAlign: 'center'
    },
    textPoolFound: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
        marginHorizontal: Responsive.width(20),
        textAlign: 'center',
        marginTop: Responsive.height(27)
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1),
    },
    textBNB: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
        lineHeight: Responsive.height(24),
        marginLeft: Responsive.width(12),
    },
    viewOption: {
        justifyContent: 'space-between',
        height: Responsive.height(54),
        borderRadius: Responsive.height(16),
        backgroundColor: 'rgba(237, 241, 245, 1.0)',
        marginHorizontal: Responsive.width(20),
    },
    viewTextInput: {
        paddingHorizontal: Responsive.width(10),
        fontSize: Responsive.font(24),
        fontFamily: 'Poppins-Medium',
        color: '#3B3F51',
        lineHeight: Responsive.height(36),
        height: Responsive.height(54),
        paddingTop: 0, paddingBottom: 0
    },
    buttonInvalidPair: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
        backgroundColor: '#BFCBD6',
        marginHorizontal: Responsive.width(27),
        marginTop: Responsive.height(35),
        marginBottom: Responsive.height(5),
    },
    buttonBlue: {
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
        backgroundColor: '#5D5FEF',
        marginHorizontal: Responsive.width(27),
        marginBottom: Responsive.height(20),
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
        marginBottom: Responsive.height(15),
        padding: Responsive.height(20),
        marginVertical: Responsive.height(20),
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
    textMedium16: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(24),
    },
    viewNote: {
        minHeight: Responsive.height(100),
        borderRadius: Responsive.height(16),
        backgroundColor: 'rgba(237, 241, 245, 1.0)',
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(3.7),
        paddingHorizontal: Responsive.width(8),
    },
    textNote: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        lineHeight: Responsive.height(22),
        textAlign: 'center',
        marginVertical: Responsive.height(20)
    },

});