import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'

const DialogHistoryTileWallet = ({ height, width, style, modalizeRef, onPressClose, ...props }) => {
    const { Layout, Images, Common } = useTheme()


    return (<Modalize ref={modalizeRef} {...props}>
        <TouchableOpacity style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20) }]} onPress={onPressClose}>
            <View style={[{ marginTop: Responsive.height(33) }, Layout.rowCenter]}>
                <CustomImage source={Images.icBinanceCoin} width={Responsive.height(36)} height={Responsive.height(36)} style={{ marginRight: Responsive.width(5) }} />
                <CustomImage source={Images.icReceivedHistoryTile} width={Responsive.height(16)} height={Responsive.height(16)} />
                <Text style={styles.textReceive}>Receive</Text>
            </View>
            <Text style={styles.textDateTime}>01/11/2021 14:21</Text>
            <Text style={styles.textAmount}>+30.4422 BNB</Text>

            <View style={[styles.viewInfoContainer]}>
                <Text style={styles.textLabel}>From</Text>
                <View style={Layout.rowHCenter}>
                    <Text style={styles.textValue}>0x6981a68f163799..d186cabd1d0b324</Text>
                    <CustomImage source={Images.icCopyHistoryTile} width={Responsive.height(18)} height={Responsive.height(18)} />
                </View>

            </View>

            <View style={[styles.viewInfoContainer, { height: Responsive.height(85) }]}>
                <Text style={[styles.textLabel, { marginBottom: Responsive.height(4) }]}>To</Text>
                <View style={Layout.rowHCenter}>
                    <View style={{ width: Responsive.height(36), height: Responsive.height(36), borderRadius: Responsive.height(4), 
                        backgroundColor: 'gray' , marginRight: Responsive.width(9)}}>

                    </View>
                    <View style={Layout.fill}>
                        <Text style={[styles.textLabel, {fontSize: Responsive.font(12), lineHeight: Responsive.height(18)}]}>Wallet 2</Text>
                        <Text style={[styles.textValue, {fontSize: Responsive.font(12), lineHeight: Responsive.height(18)}]}>0x6981a68f163799..d186cabd1d0b324</Text>
                    </View>

                    <CustomImage source={Images.icCopyHistoryTile} width={Responsive.height(18)} height={Responsive.height(18)} />
                </View>

            </View>

            <View style={[styles.viewInfoContainer]}>
                <Text style={styles.textLabel}>Fee</Text>
                <View style={Layout.rowHCenter}>
                    <Text style={styles.textValue}>0.000105 BNB</Text>

                </View>

            </View>

            <View style={[styles.viewInfoContainer]}>
                <Text style={styles.textLabel}>Hash</Text>
                <View style={Layout.rowHCenter}>
                    <Text style={styles.textValue}>0x6981a68f163799..d186cabd1d0b324</Text>
                    <TouchableOpacity style={{ paddingHorizontal: Responsive.width(7.5) }}>
                        <CustomImage source={Images.icCopyHistoryTile} width={Responsive.height(18)} height={Responsive.height(18)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: Responsive.width(7.5) }}>
                        <CustomImage source={Images.icGlobalHistoryTile} width={Responsive.height(18)} height={Responsive.height(18)} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={[styles.viewInfoContainer]}>
                <Text style={styles.textLabel}>Nonce</Text>
                <View style={Layout.rowHCenter}>
                    <Text style={styles.textValue}>377</Text>

                </View>

            </View>

        </TouchableOpacity>
    </Modalize>)
}

DialogHistoryTileWallet.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressClose: PropTypes.func
}

DialogHistoryTileWallet.defaultProps = {
    style: {}
}

export default DialogHistoryTileWallet


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textReceive: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#242A31',
        lineHeight: Responsive.height(22),
        marginLeft: Responsive.width(5),
    },
    textDateTime: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        lineHeight: Responsive.height(22),
        textAlign: 'center',
        marginTop: Responsive.height(10),
        marginBottom: Responsive.height(15),
    },
    textAmount: {
        fontSize: Responsive.font(22),
        fontFamily: 'Poppins-SemiBold',
        color: '#24A148',
        lineHeight: Responsive.height(33),
        textAlign: 'center',
        marginBottom: Responsive.height(25),
    },
    viewInfoContainer: {
        backgroundColor: 'rgba(237, 241, 245, 1.0)',
        borderRadius: Responsive.height(16),
        height: Responsive.height(70),
        paddingHorizontal: Responsive.height(14),
        paddingVertical: Responsive.height(10),
        marginBottom: Responsive.height(10),
    },
    textLabel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        textAlign: 'center',
        marginBottom: Responsive.height(5),
        lineHeight: Responsive.height(22),
        textAlign: 'left'
    },
    textValue: {
        fontSize: Responsive.font(15),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        textAlign: 'center',
        lineHeight: Responsive.height(22.5),
        textAlign: 'left',
        flex: 1,
    },

});