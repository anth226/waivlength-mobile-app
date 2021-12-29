import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'

const DialogSelectToken = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
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

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper]}>
                    <View style={[Layout.rowHCenter, styles.viewBoundItem]}>
                        <CustomImage source={Images.icCryptocurrencyEth} width={Responsive.height(32)} height={Responsive.height(32)} />

                        <View style={[Layout.fill, { paddingLeft: Responsive.width(8) }]}>
                            <Text style={styles.textETHItem}>ETH</Text>
                            <Text style={styles.textEthereumItem}>Ethereum</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.textCountItem}>0</Text>
                            <Text style={styles.textAmountItem}>US$0.00</Text>
                        </View>

                    </View>
                </View>

            </TouchableOpacity >
        );
    };

    return (<Modalize ref={modalizeRef} {...props}>
        <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]}
            onPress={() => {
                modalizeRef?.current?.close()
            }}>
            <View style={[Layout.rowHCenter, { marginTop: Responsive.height(33), justifyContent: 'space-between' }]}>
                <Text style={styles.textSettings}>Select a Token</Text>
                <CustomImage source={Images.icAddCustomToken} width={Responsive.height(36)} height={Responsive.height(36)} onPress={() => {
                    modalizeRef?.current?.close();
                    navigate('AddCustomToken')
                }} />
            </View>
            <View style={[Layout.fullWidth, { marginTop: Responsive.height(15) }]}>
                <View style={[Layout.row, styles.viewSearchContainer]}>
                    <TextInput
                        onChangeText={text => { }}
                        editable={true}
                        placeholder={'Search token'}
                        placeholderTextColor={'#8F95A6'}
                        selectTextOnFocus
                        style={[Layout.fill, styles.viewTextInputSearch]} />
                    <CustomImage source={Images.icSearch} width={Responsive.height(18)} height={Responsive.height(18)} style={{ alignSelf: 'center' }} />
                </View>
            </View>
            <View style={[Layout.fullWidth, { marginBottom: Responsive.height(25) }]}>
                <FlatList nestedScrollEnabled={true}
                    style={[Layout.fill]}
                    data={DATA}
                    renderItem={renderItem}
                    ListHeaderComponent={<View style={{ height: Responsive.height(10) }} />}
                    keyExtractor={(item) => item.id} />
            </View>


        </TouchableOpacity>
    </Modalize>)
}

DialogSelectToken.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogSelectToken.defaultProps = {
    style: {}
}

export default DialogSelectToken


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
    itemStyleWrapper: {
        borderRadius: Responsive.height(20),
    },
    textWhiteItem14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: 'white',
        lineHeight: Responsive.height(21),
        marginHorizontal: Responsive.width(15),
    },
    textTxDeadline: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1),
    },
    viewSearchContainer: {
        backgroundColor: 'rgba(245, 247, 251, 1.0)',
        height: Responsive.height(40),
        borderRadius: Responsive.height(24),
        borderColor: '#E1E2EF',
        borderWidth: Responsive.height(1),
        marginBottom: Responsive.height(29),
        paddingLeft: Responsive.width(20),
        paddingRight: Responsive.width(13),
    },
    viewTextInputSearch: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.height(27),
    },
    viewBoundItem: {
        height: Responsive.height(67),
    },
    textETHItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: Responsive.height(21)
    },
    textEthereumItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        lineHeight: Responsive.height(21)
    },
    textCountItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#8F95A6',
        lineHeight: Responsive.height(21)
    },
    textAmountItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#24A148',
        lineHeight: Responsive.height(21)
    },

});