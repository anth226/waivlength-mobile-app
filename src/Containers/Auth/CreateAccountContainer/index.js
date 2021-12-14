import React, { useEffect, useState, useRef } from 'react'
import { KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, Keyboard, useWindowDimensions, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackIcon, ActionBar, CustomImage, ButtonNext, GradientBackground } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'

import Email from './Email'
import Verification from './Verification'
import Username from './Username'
import Password from './Password'
import Interested from './Interested'
import Recommended from './Recommended'
import ConnectTwitter from './ConnectTwitter'
import EnableNotification from './EnableNotification'

const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateAccountContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const scrollViewRef = useRef(null)

    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [page, setPage] = useState(0);

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    function onKeyboardDidShow(e) {
        setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
        setKeyboardHeight(0);
    }
    function nextPage() {
        let newPage = page + 1
        if (newPage <= 8) {
            scrollViewRef.current?.scrollTo({ x: newPage * width, animated: false });
            setPage(newPage)
        }
    }

    const goBackPage = () => {
        let newPage = page - 1
        if (newPage >= 0) {
            scrollViewRef.current?.scrollTo({ x: newPage * width, animated: false });
            setPage(newPage)
        }
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
                left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
                right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
                center={<Text style={styles.textTitle}>Create account</Text>}
            />
            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
                style={[Layout.fill]}
            >
                <ScrollView
                    ref={scrollViewRef}
                    style={[Layout.fill]}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    onScroll={(event) => {

                    }}>

                    <Email goBack={goBackPage} nextPage={nextPage}/>
                    <Verification goBack={goBackPage} nextPage={nextPage}/>
                    <Username goBack={goBackPage} nextPage={nextPage}/>
                    <Password goBack={goBackPage} nextPage={nextPage}/>
                    <Interested goBack={goBackPage} nextPage={nextPage}/>
                    <Recommended goBack={goBackPage} nextPage={nextPage}/>
                    <ConnectTwitter goBack={goBackPage} nextPage={nextPage}/>
                    <EnableNotification goBack={goBackPage} nextPage={nextPage}/>
                </ScrollView>
                {
                    (page < 6) ? (
                        <View style={[Layout.row, styles.floatingActionWrapper, { bottom: Platform.OS === 'ios' ? keyboardHeight : 0 }]}>
                            <ButtonNext onPress={nextPage} disabled={false} width={Responsive.height(76)} height={Responsive.height(76)} style={{ marginRight: Responsive.width(24) }} />
                        </View>
                    ) : (null)
                }

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

