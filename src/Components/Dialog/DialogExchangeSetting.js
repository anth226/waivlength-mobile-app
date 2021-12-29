import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { Switch } from 'react-native-switch';

const DialogExchangeSetting = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const DATA = [
        {
            id: 1,
            name: 'Instant',
            value: '7 Gwei',
            selected: true,
        },
        {
            id: 2,
            name: 'Fast',
            value: '6 Gwei',
            selected: false,
        },
        {
            id: 3,
            name: 'Standard',
            value: '5 Gwei',
            selected: false,
        },
    ];

    const renderItemTransactions = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.rowCenter, Layout.alignItemsCenter, styles.itemStyleWrapper, {

                }]}>
                    <Text style={styles.textWhiteItem14} >Standard (5)</Text>

                </View>

            </TouchableOpacity >
        );
    };

    const renderItemSwap = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.rowCenter, Layout.alignItemsCenter, styles.itemStyleWrapper, {

                }]}>
                    <Text style={styles.textWhiteItem14} >0.1%</Text>

                </View>

            </TouchableOpacity >
        );
    };

    return (<Modalize ref={modalizeRef} {...props}>
        <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]}
        onPress={()=> {
            modalizeRef?.current?.close()
        }}>
            <View style={[{ marginTop: Responsive.height(33) }]}>
                <Text style={styles.textSettings}>Settings</Text>
            </View>
            <Text style={styles.textTransactions}>Transactions</Text>
            <View style={[Layout.rowHCenter, { marginTop: Responsive.height(5) }]}>
                <Text style={styles.textTransactionSpeedLabel}>Default Transaction Speed (GWEI) </Text>
                <CustomImage source={Images.icHelpCircle} width={Responsive.height(16)} height={Responsive.height(16)} />
            </View>
            <View style={[Layout.fullWidth, { marginTop: Responsive.height(10), marginBottom: Responsive.height(25) }]}>
                <FlatList nestedScrollEnabled={true}
                    style={[Layout.fill, { height: Responsive.height(31) }]}
                    data={DATA}
                    renderItem={renderItemTransactions}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={<View style={{ width: Responsive.width(10) }} />}
                    keyExtractor={(item) => item.id} />
            </View>
            <View style={styles.line} />
            <Text style={styles.textTransactions}>Swaps & Liquidity</Text>
            <View style={[Layout.rowHCenter, { marginTop: Responsive.height(5) }]}>
                <Text style={styles.textTransactionSpeedLabel}>Slippage Tolerance </Text>
                <CustomImage source={Images.icHelpCircle} width={Responsive.height(16)} height={Responsive.height(16)} />
            </View>
            <View style={[Layout.fullWidth, { marginTop: Responsive.height(10), marginBottom: Responsive.height(10) }]}>
                <FlatList nestedScrollEnabled={true}
                    style={[Layout.fill, { height: Responsive.height(31) }]}
                    data={DATA}
                    renderItem={renderItemSwap}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={<View style={{ width: Responsive.width(10) }} />}
                    keyExtractor={(item) => item.id} />
            </View>
            <Text style={styles.textYourTransaction}>Your transaction may be frontrun</Text>
            <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(20) }]}>
                <Text style={styles.textTxDeadline}>Tx deadline (mins)</Text>
                <View style={[Layout.rowCenter, styles.viewTxDeadlineCorner]}>
                    <Text style={styles.textTxDeadlineCorner}>20</Text>
                </View>
            </View>
            <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginVertical: Responsive.height(20)}]}>
                <Text style={styles.textTxDeadline}>Disable Multihops</Text>
                <Switch
                    style={styles.switch}
                    renderActiveText={false}
                    renderInActiveText={false}
                    backgroundInactive='#A2A9B0'
                    backgroundActive='#5E60EB'
                    circleBorderInactiveColor='#A2A9B0'
                    circleBorderActiveColor='#5E60EB'
                    circleBorderWidth={2}
                    onValueChange={(val) => console.log(val)}
                    value={false}
                    circleSize={30}
                />
            </View>

        </TouchableOpacity>
    </Modalize>)
}

DialogExchangeSetting.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogExchangeSetting.defaultProps = {
    style: {}
}

export default DialogExchangeSetting


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
    textTransactions: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#5D5FEF',
        lineHeight: Responsive.height(24),
        marginTop: Responsive.height(20),
    },
    textTransactionSpeedLabel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    itemStyleWrapper: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(20),
        height: Responsive.height(31),
        marginRight: Responsive.width(10)
    },
    textWhiteItem14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: 'white',
        lineHeight: Responsive.height(21),
        marginHorizontal: Responsive.width(15),
    },
    textYourTransaction: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#FF832B',
        lineHeight: Responsive.height(21),
    },
    textTxDeadline: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    viewTxDeadlineCorner: {
        backgroundColor: '#F2F4F8',
        borderColor: '#DDE1E6',
        borderWidth: Responsive.height(1),
        width: Responsive.width(58),
        height: Responsive.height(31),
        borderRadius: Responsive.height(20),
    },
    textTxDeadlineCorner: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#ADAEC4',
        lineHeight: Responsive.height(21),
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1),
    },
    switch: {
        width: Responsive.width(51),
        height: Responsive.height(30),
    },

});