import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const ChangeCategoryContainer = ({ navigation }) => {
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
            center={<Text style={styles.textTitle}>Change Category</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>

                <View style={[Layout.fullWidth, { marginBottom: Responsive.height(10) }]}>
                    <Text style={[Layout.fill, styles.textMoveFrom]}>Move from Internal Space to</Text>
                </View>
                <View style={[Layout.fullWidth, Layout.row, { backgroundColor: 'rgba(245, 246, 249, 1.0)', height: Responsive.height(53), alignItems: 'center', borderRadius: Responsive.height(16), paddingHorizontal: Responsive.width(16)}]}>
                    <TextInput
                        onChangeText={text => setChannelName(text)}
                        editable={true}
                        value={channelName}
                        placeholder={'Enter category name'}
                        placeholderTextColor={'#7C8093'}
                        selectTextOnFocus
                        style={[Layout.fill, Common.textInput, styles.inputText]}
                    />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default ChangeCategoryContainer

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
    textMoveFrom: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(27),
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(14),
        height: Responsive.height(52),
        color: '#242A31',
        fontFamily: 'Poppins-Medium',
      },
});
