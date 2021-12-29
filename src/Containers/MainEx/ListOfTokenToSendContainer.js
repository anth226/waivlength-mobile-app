import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const ListOfTokenToSendContainer = ({ }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

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

                        <View style={[Layout.fill, { paddingLeft: Responsive.width(5) }]}>
                            <Text style={styles.textETHItem}>ETH</Text>
                            <Text style={styles.textEthereumItem}>Ethereum</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={styles.textCountItem}>0</Text>
                            <Text style={styles.textAmountItem}>US$0.00</Text>
                        </View>

                    </View>
                </View>

            </TouchableOpacity >
        );
    };

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <LinearGradient
            colors={['#ebeff5', '#DED8F3']}
            useAngle={true} angle={-45} angleCenter={{ x: 0.2, y: 0.2 }}
            style={[Layout.fill, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
        </LinearGradient>
        <ActionBar
            left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
            center={<Text style={styles.textHeaderTitle}>Token to Send</Text>}
            right={<CustomImage source={Images.icAddCustomToken} width={Responsive.height(36)} height={Responsive.height(36)} onPress={() => {
                navigate('AddCustomToken')
            }} />}
        />
        <View style={[Layout.fullWidth, {marginTop: Responsive.height(20)}]}>
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

        <View style={[Layout.row, Layout.fullWidth, { marginBottom: Responsive.height(9), paddingHorizontal: Responsive.width(16)}]}>
            <CustomImage source={Images.icVerifyListedToken} width={Responsive.height(21)} height={Responsive.height(21)} />
            <Text style={styles.textListedTokens}>Listed Tokens</Text>
        </View>

        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <FlatList
                style={[Layout.fill, { paddingHorizontal: Responsive.width(16) }]}
                data={DATA}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                keyExtractor={(item) => item.id} />

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default ListOfTokenToSendContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textHeaderTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B3F51',
    },
    textTitle: {
        marginTop: Responsive.height(20),
        marginBottom: Responsive.height(12),
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#2B2F3F',
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
        marginHorizontal: Responsive.width(16),
    },

    viewTextInputSearch: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.height(27),
    },
    textListedTokens: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#4589FF',
        marginLeft: Responsive.width(5),
        lineHeight: Responsive.height(21)
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#BFCBD6'
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
