import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const LanguageContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [channelName, setChannelName] = useState("");
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }


    useEffect(() => {
        init()
    })

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>Language</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <Text style={styles.textSubTitle}>Select a primary language</Text>
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>

                <View style={[Layout.fullWidth, Layout.rowHCenter]}>
                    <View style={[Layout.fill, Layout.rowHCenter, styles.viewActionWrapper]}>
                        <Text style={[Layout.fill, styles.textName]}>English</Text>
                        <RadioButton
                            selected={true}
                            size={Responsive.height(24)}
                            onPress={() => { }}
                            text={``}
                            isHtml={false}
                            textStyle={styles.textRadioButton}
                            style={{}}
                        />
                    </View>
                </View>
                <Text style={styles.textNote}>Primary Language has been selected as English. Waivlength intends on adding more languages as we grow. Stay tuned!</Text>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default LanguageContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((16))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
    },
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(24),
        marginBottom: Responsive.height(10),
    },
    textNote: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(10),
        color: '#242A31',
        marginHorizontal: Responsive.width(18),
        textAlign: 'center'
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        marginBottom: Responsive.height(5),
        paddingLeft: Responsive.width(16),
        paddingRight: Responsive.width(8)
    },
    textName: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    }

});
