import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, TextInput, useWindowDimensions, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackIcon, ActionBar, CustomImage, ButtonNext, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { navigateAndSimpleReset } from '@/Navigators/utils'

const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateAccount = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })

    return (
        <ScrollView
            contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
            style={[Layout.fill]}>

            <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
                <CustomImage width={Responsive.width(45)} height={Responsive.height(45)} source={Images.icEmail} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>1</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>What’s your Email?</Text>

            <TextInput
                onChangeText={text => { }}
                editable={true}
                placeholder={'enter your email'}
                placeholderTextColor={'#7C8093'}
                selectTextOnFocus
                style={[Layout.fullWidth, Common.textInput, styles.inputText]}
            />

            <RenderHtml
                tagsStyles={tagsStyles}
                contentWidth={width}
                systemFonts={systemFonts}
                source={{ html: `<p style='text-align: left;'>Waivlength will send you an email with a verification code. By continuing you agree to our <a href='https://google.com.vn'>Terms of use</a> and <a href='https://google.com.vn'>Privacy Policy</a>.</p>` }}
            />
            <View style={Layout.fill} />

        </ScrollView>
    )
}

export default CreateAccount

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
    inputText: {
        marginTop: Responsive.height(59),
        marginBottom: Responsive.height(5)
    },
});

const tagsStyles = {
    p: {
        fontSize: Responsive.font(12),
        color: '#878893',
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: Responsive.width(3),
        lineHeight: Responsive.width(18)
    },
    a: {
        fontSize: Responsive.font(12),
        color: '#2773F1',
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(18),
    }
}
