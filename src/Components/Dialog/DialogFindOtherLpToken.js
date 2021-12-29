import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'

const DialogFindOtherLpToken = ({ height, width, style, modalizeRef, onPressSend, onPressSwap, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const [token, setToken] = useState(null);

    return (<Modalize ref={modalizeRef} {...props} adjustToContentHeight>
        <TouchableOpacity activeOpacity={0.9} style={[Layout.fullWidth, Layout.column]}
            onPress={() => {
                modalizeRef?.current?.close()
            }}>
            <View style={[{ marginTop: Responsive.height(33) }]}>
                <Text style={styles.textSettings}>Import Pool</Text>
            </View>
            <Text style={styles.textImportExistingPool}>Import an existing pool</Text>
            <View style={styles.line} />
            <View style={[Layout.rowHCenter, styles.viewOption, { marginBottom: Responsive.height(10) }]}>
                <View style={[Layout.rowHCenter]}>
                    <CustomImage source={Images.icBinanceCoin} width={Responsive.height(36)} height={Responsive.height(36)}
                        style={{ marginLeft: Responsive.width(10) }} />
                    <Text style={styles.textBNB}>BNB</Text>
                </View>
                <CustomImage source={Images.icArrowDown2} width={Responsive.height(18)} height={Responsive.height(18)} style={{ marginRight: Responsive.width(15) }} />
            </View>
            <CustomImage source={Images.icPlus} width={Responsive.height(18)} height={Responsive.height(18)} style={{ alignSelf: 'center' }} />
            <TouchableOpacity activeOpacity={0.9} style={[Layout.rowHCenter, styles.viewOption, { marginTop: Responsive.height(10) }]}
                onPress={() => { setToken({ id: 1, name: 'BNB' }) }}>
                {token && <View style={[Layout.rowHCenter]}>
                    <CustomImage source={Images.icBinanceCoin} width={Responsive.height(36)} height={Responsive.height(36)} style={{ marginLeft: Responsive.width(10) }} />
                    <Text style={styles.textBNB}>BNB</Text>
                </View>}
                {
                    token == null && <Text style={styles.textSelectToken}>Select a Token</Text>
                }
                <CustomImage source={Images.icArrowDown2} width={Responsive.height(18)} height={Responsive.height(18)} style={{ marginRight: Responsive.width(15) }} />
            </TouchableOpacity>
            {token == null && <Text style={styles.textSelectTokenGuide}>Select a token to find your liquidity.</Text>}
            {token && <View style={Layout.fullWidth}>
                <Text style={styles.textPoolFound}>Pool Found!</Text>
                <Text style={[styles.textPoolFound, { marginTop: Responsive.height(10), marginBottom: Responsive.height(22) }]}>Manage this pool.</Text>
                <View style={styles.viewInfoToken}>
                    <Text style={styles.textLPTokens}>LP Tokens in your Wallet</Text>

                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                        <View style={[Layout.rowHCenter]}>
                            <CustomImage source={Images.icCryptocurrencyBnb} width={Responsive.height(24)} height={Responsive.height(24)} style={{marginRight: Responsive.width(4)}}/>
                            <CustomImage source={Images.icCryptocurrencyUsdt} width={Responsive.height(24)} height={Responsive.height(24)} />
                            <Text style={styles.textBlueMedium18}>CAKE/BNB LP</Text>
                        </View>
                        <Text style={styles.textBlueMedium24}>0.553</Text>

                    </View>

                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                        <Text style={styles.textRegular14}>Pooled CAKE</Text>
                        <Text style={styles.textMedium16}>41.77</Text>

                    </View>
                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                        <Text style={styles.textRegular14}>Pooled BNB</Text>
                        <Text style={styles.textMedium16}>0.034</Text>

                    </View>
                    <View style={[Layout.rowHCenter, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                        <Text style={styles.textRegular14}>Share of Pool</Text>
                        <Text style={styles.textMedium16}>{'<0.01%'}</Text>

                    </View>
                </View>
            </View>}
        </TouchableOpacity>
    </Modalize>)
}

DialogFindOtherLpToken.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressSend: PropTypes.func,
    onPressSwap: PropTypes.func
}

DialogFindOtherLpToken.defaultProps = {
    style: {}
}

export default DialogFindOtherLpToken


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textSettings: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#242332',
        lineHeight: Responsive.height(27),
        marginHorizontal: Responsive.width(20)
    },
    textImportExistingPool: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
        marginTop: Responsive.height(6),
        marginBottom: Responsive.height(15),
        marginHorizontal: Responsive.width(20)
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
        marginTop: Responsive.height(15),
        justifyContent: 'space-between',
        height: Responsive.height(54),
        borderRadius: Responsive.height(16),
        backgroundColor: 'rgba(237, 241, 245, 1.0)',
        marginHorizontal: Responsive.width(20),
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
    textBlueMedium18: {
        fontSize: Responsive.font(18),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        lineHeight: Responsive.height(27),
        marginLeft: Responsive.width(7)
    },
    textBlueMedium24: {
        fontSize: Responsive.font(24),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        lineHeight: Responsive.height(36),
    }

});