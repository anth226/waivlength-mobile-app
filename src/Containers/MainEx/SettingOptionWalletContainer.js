import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { CustomImage, ActionBar, BackIcon, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const SettingOptionWalletContainer = ({ }) => {
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

                        <View style={[Layout.rowHCenter, Layout.fill]}>
                            <View style={[Layout.rowCenter,styles.viewStrokeCircleItem, {borderColor: item.selected ? '#5D5FEF' : '#8F95A6'}]}>
                                {
                                    item.selected ? <View style={styles.viewFillCircleItem}>

                                    </View> : null
                                }
                            </View>
                            <Text style={styles.textContentItem}>{item.name}</Text>
                        </View>

                        <Text style={styles.textRightItem}>{item.value}</Text>
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
            center={<Text style={styles.textHeaderTitle}>Send Options</Text>}
            right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView nestedScrollEnabled={true} style={Layout.fill}>
                <View style={[Layout.fullWidth, Layout.column]}>
                    <Text style={styles.textGasFee}>Gas fee</Text>
                    <View style={[Layout.fill, styles.viewWhiteContainer]}>
                        <FlatList
                            style={[Layout.fill]}
                            data={DATA}
                            renderItem={renderItem}
                            ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                            keyExtractor={(item) => item.id} />
                    </View>

                    <View style={[Layout.row, styles.viewPriceContainer]}>
                        <Text style={styles.textTransactionFee}>Transaction Fee</Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.textWat}>0.002625 W</Text>
                            <Text style={styles.textPrice}>~US$11.35</Text>
                        </View>
                    </View>

                    <View style={[Layout.fullWidth, {
                        height: Responsive.height(52), marginBottom: Responsive.height(26),
                        marginTop: Responsive.height(20)
                    }]}>
                        <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.viewResetButton]}>
                            <Text style={styles.textReset}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>


        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default SettingOptionWalletContainer

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
    textGasFee: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#2B2F3F',
        marginHorizontal: Responsive.width(20),
        marginVertical: Responsive.height(20),
        flex: 1,
    },
    viewWhiteContainer: {
        borderRadius: Responsive.height(16),
        backgroundColor: 'rgba(249,250,252, 1.0)',
        marginHorizontal: Responsive.width(20),
        marginBottom: Responsive.height(20),
    },
    viewPriceContainer: {
        borderRadius: Responsive.height(20),
        borderColor: '#BFCBD6',
        backgroundColor: 'rgba(249,250,252, 1.0)',
        minHeight: Responsive.height(75),
        padding: Responsive.height(15),
        marginHorizontal: Responsive.width(20),
    },
    textTransactionFee: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        flex: 1,
    },
    textWat: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        flex: 1,
    },
    textPrice: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6',
        marginTop: Responsive.height(3),
    },
    viewResetButton: {
        borderColor: '#5D5FEF',
        borderWidth: Responsive.height(2),
        marginHorizontal: Responsive.width(27),
        height: Responsive.height(52),
        borderRadius: Responsive.height(27),
    },
    textReset: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#5D5FEF',
        lineHeight: Responsive.height(28),
    },
    viewBoundItem: {
        height: Responsive.height(52),
        paddingHorizontal: Responsive.width(16),
    },
    viewStrokeCircleItem: {
        width: Responsive.height(22),
        height: Responsive.height(22),
        borderRadius: Responsive.height(11),
        borderColor: '#8F95A6',
        borderWidth: Responsive.height(1),
        padding: Responsive.height(2),
        marginRight: Responsive.width(10),
    },
    viewFillCircleItem: {
        width: Responsive.height(13),
        height: Responsive.height(13),
        borderRadius: Responsive.height(13 / 2),
        backgroundColor: '#5D5FEF',
        alignSelf: 'center',
    },
    textContentItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
    },
    textRightItem: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#BFCBD6'
    },

});
