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

const StakingDeFiContainer = ({ }) => {
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
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.viewBoundItem]}>
                    <View style={[Layout.rowHCenter, { paddingHorizontal: Responsive.width(16), marginBottom: Responsive.height(7) }]}>
                        <CustomImage source={Images.icCryptocurrencyEth} width={Responsive.height(32)} height={Responsive.height(32)} />
                        <View style={[Layout.fill, { paddingLeft: Responsive.width(7) }]}>
                            <Text style={styles.textETHItem}>Auto WAIV</Text>
                            <Text style={styles.textAutomaticRestakingItem}>Automatic Restaking</Text>
                        </View>
                    </View>
                    <View style={[Layout.fullWidth, styles.line]} />
                    <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(14) }]}>
                        <View style={[Layout.row, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                            <Text style={styles.textSemiBoldItem}>APY</Text>
                            <Text style={styles.textSemiBoldItem}>78.44%</Text>
                        </View>
                        <View style={[Layout.row, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                            <Text style={styles.textSemiBoldItem}>Total Staked</Text>
                            <Text style={styles.textSemiBoldItem}>106,681 WAIV</Text>
                        </View>
                        <View style={[Layout.row, { justifyContent: 'space-between', marginTop: Responsive.height(10) }]}>
                            <Text style={styles.textSemiBoldItem}>Ends in</Text>
                            <Text style={styles.textSemiBoldItem}>-</Text>
                        </View>
                    </View>
                    <View style={Layout.fullWidth}>
                        <TouchableOpacity style={[Layout.fill, styles.viewButton, Layout.rowCenter]}>
                        <Text style={styles.textDetailsButton}>Details</Text>
                        </TouchableOpacity>
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
            center={<Text style={styles.textHeaderTitle}>Staking</Text>}
            right={<View width={Responsive.height(36)} height={Responsive.height(36)} />}
        />

        <View style={[Layout.row, Layout.fullWidth, {
            marginBottom: Responsive.height(9),
            paddingHorizontal: Responsive.width(16), marginTop: Responsive.height(25)
        }]}>
            <Text style={styles.textRecentWAIV}>Recent WAIV Profit</Text>
            <Text style={styles.textAmountWAIVProfit}>0.0</Text>
        </View>
        <Text style={styles.textUSD}>0 USD</Text>

        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <FlatList
                style={[Layout.fill, { paddingHorizontal: Responsive.width(16)}]}
                data={DATA}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (<View style={{ height: Responsive.height(20) }} />)}
                keyExtractor={(item) => item.id} />

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default StakingDeFiContainer

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

    textRecentWAIV: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#242A31',
        lineHeight: Responsive.height(21),
        flex: 1,
    },
    textAmountWAIVProfit: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Bold',
        color: '#3B454E',
        lineHeight: Responsive.height(24),
    },
    textUSD: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(21),
        marginBottom: Responsive.height(20),
        textAlign: 'right',
        marginHorizontal: Responsive.width(16),
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#BFCBD6'
    },
    viewBoundItem: {
        minHeight: Responsive.height(215),
        backgroundColor: 'rgba(249, 251, 252, 1.0)',
        paddingTop: Responsive.height(7),
        paddingBottom: Responsive.height(15),
        borderRadius: Responsive.height(20),
    },
    textETHItem: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#3B454E',
        lineHeight: Responsive.height(24)
    },
    textAutomaticRestakingItem: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Medium',
        color: '#8F95A6',
        lineHeight: Responsive.height(18)
    },
    textSemiBoldItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: '#3B454E',
        lineHeight: Responsive.height(21)
    },
    textAmountItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#24A148',
        lineHeight: Responsive.height(21)
    },
    viewButton: {
        height: Responsive.height(44),
        borderWidth: Responsive.width(1),
        borderColor: '#5D5FEF',
        marginHorizontal: Responsive.width(16),
        borderRadius: Responsive.height(16),
        marginTop: Responsive.height(10),
    },
    textDetailsButton: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
        lineHeight: Responsive.height(28)
    }

});
