import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, Keyboard, useWindowDimensions, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackIcon, ActionBar, CustomImage, ButtonNext, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { navigateAndSimpleReset } from '@/Navigators/utils'

import CreateAccount from './CreateAccount'

const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateAccountContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const [keyboardHeight, setKeyboardHeight] = useState(0);

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    function onKeyboardDidShow(e) {
        setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
        setKeyboardHeight(0);
    }

    useEffect(() => {
        init()
        Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
        };
    }, []);

    return (
        <SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
            <GradientBackground style={{ position: 'absolute' }} />
            <ActionBar
                left={<BackIcon width={Responsive.width(36)} height={Responsive.height(36)} />}
                right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
                center={<Text style={styles.textTitle}>Create account</Text>}
            />
            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                style={[Layout.fill]}
            >
                <ScrollView
                    style={[Layout.fill]}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event) => {

                    }}
                >

                    <CreateAccount />
                    <CreateAccount />
                    <CreateAccount />
                </ScrollView>

                <View style={[Layout.row, styles.floatingActionWrapper, { bottom: keyboardHeight }]}>
                    <ButtonNext disabled={false} width={Responsive.width(76)} height={Responsive.height(76)} style={{ marginRight: Responsive.width(24) }} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default CreateAccountContainer

const styles = StyleSheet.create({
    parentContainer: {

    },
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
    floatingActionWrapper: {
        marginBottom: Responsive.width(27),
        position: 'absolute',
        right: 0
    }
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
