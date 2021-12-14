import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { ActionSheetCustom as ActionSheet } from '@alessiocancian/react-native-actionsheet'

import { CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const Verification = ({ goBack }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();
    const actionSheetRef = useRef(null)

    const options = [
        <Text style={styles.textPopup}>Send again</Text>,
        <Text style={styles.textPopup}>Edit number</Text>,
        <Text style={styles.textPopup}>Cancel</Text>
      ]
    function showActionSheet() {
        actionSheetRef.current?.show()
    }

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
            style={[Layout.fill]}>

            <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
                <CustomImage width={Responsive.height(45)} height={Responsive.height(45)} source={Images.icVerification} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>2</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>Please enter your{'\n'}verification code</Text>


            <View style={[Layout.row, { marginTop: Responsive.height(20) }]}>
                <Text style={[styles.textDescription]}>Sent to example@email.com</Text>
                <TouchableOpacity onPress={goBack}>
                    <Text style={styles.textEdit}>Edit</Text>
                </TouchableOpacity>
            </View>


            <View style={[Layout.fullWidth, Layout.row, Layout.justifyContentBetween, styles.verificationCodeWrapper]}>
                <View style={[styles.textCodeWrapper]}>
                    <TextInput
                        style={[Layout.fill, Common.textInput, Fonts.textCenter]}
                        keyboardType={'decimal-pad'}
                        defaultValue={'1'}
                        maxLength={1} />
                </View>
                <View style={[styles.textCodeWrapper]}>
                    <TextInput
                        style={[Layout.fill, Common.textInput, Fonts.textCenter]}
                        keyboardType={'decimal-pad'}
                        defaultValue={'2'}
                        maxLength={1} />
                </View>
                <View style={[styles.textCodeWrapper]}>
                    <TextInput
                        style={[Layout.fill, Common.textInput, Fonts.textCenter]}
                        keyboardType={'decimal-pad'}
                        defaultValue={'3'}
                        maxLength={1} />
                </View>
                <View style={[styles.textCodeWrapper]}>
                    <TextInput
                        style={[Layout.fill, Common.textInput, Fonts.textCenter]}
                        keyboardType={'decimal-pad'}
                        defaultValue={'4'}
                        maxLength={1} />
                </View>
                <View style={[styles.textCodeWrapper]}>
                    <TextInput
                        style={[Layout.fill, Common.textInput, Fonts.textCenter]}
                        keyboardType={'decimal-pad'}
                        defaultValue={'5'}
                        maxLength={1} />
                </View>
                <View style={[styles.textCodeWrapper]}>
                    <TextInput
                        style={[Layout.fill, Common.textInput, Fonts.textCenter]}
                        keyboardType={'decimal-pad'}
                        defaultValue={'6'}
                        maxLength={1} />
                </View>
            </View>

            <TouchableOpacity
                onPress={showActionSheet}
                style={{ marginTop: Responsive.height(65) }}>
                <Text style={styles.textDidntGetCode}>Didn’t get a code?</Text>
            </TouchableOpacity>

            <View style={Layout.fill} />
            <ActionSheet
                ref={actionSheetRef}
                options={options}
                cancelButtonIndex={2}
                destructiveButtonIndex={2}
                onPress={(index) => { /* do something */ }}
            />
        </ScrollView>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    textStep: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#8C93BC',
        paddingHorizontal: Responsive.width(8)
    },
    textCurrentStep: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(19),
        color: '#5D5FEF',
    },
    textHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(24),
        lineHeight: Responsive.width(36),
        marginTop: Responsive.height(15),
        color: '#242332'
    },
    textDescription: {
        fontFamily: 'NotoSans-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(19),
        color: '#8184A3'
    },
    textEdit: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        lineHeight: Responsive.width(19),
        paddingHorizontal: 10,
    },
    verificationCodeWrapper: {
        marginTop: Responsive.height(30),
        marginBottom: Responsive.height(5)
    },
    textCodeWrapper: {
        width: Responsive.width(42),
    },
    textCode: {
        color: '#242332',
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
    },
    textDidntGetCode: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#5D5FEF',
        lineHeight: Responsive.width(21)
    },
    textPopup: {
        fontFamily: 'Poppins-SemiBold',
        color: '#5D5FEF',
        fontSize: Responsive.font(16)
    }
});
