import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TextInput, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, BackIcon, Avatar, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const NewPostContainer = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }


    useEffect(() => {
        init()
    })


    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />

        <View style={[Layout.rowHCenter, {
            justifyContent: 'space-between',
            marginBottom: Responsive.height(10), marginTop: Responsive.height(9)
        }]}>
            <TouchableOpacity style={{ paddingHorizontal: Responsive.width(16) }} onPress={goBack}>
                <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Layout.rowCenter, {
                paddingHorizontal: Responsive.width(15),
                backgroundColor: 'rgba(164, 169, 237, 1.0)',
                height: Responsive.height(28),
                borderRadius: Responsive.height(15),
                marginHorizontal: Responsive.width(16),
            }]}>
                <Text style={styles.textPost}>Post</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewHorizontalLines} />

        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView>
                <View style={Layout.fill}>
                    <View style={[Layout.fullWidth, Layout.row]}>
                        <Avatar
                            source={Images.onBoarding3}
                            imageWrapperStyle={[styles.avatar, { borderWidth: 0 }]}
                            imageStyle={[styles.avatarImage]}
                            url={""}
                        />
                        <View style={Layout.fill, styles.searchWrapper}>
                            <TextInput
                                onChangeText={text => { }}
                                editable={true}
                                placeholder={'Invite friends to Waivlength'}
                                placeholderTextColor={'#7C8093'}
                                multiline
                                style={[Layout.fill, Common.textInput, styles.inputText]}
                            />

                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewHorizontalLines} />
            <View style={[Layout.fullWidth, Layout.rowHCenter, { height: Responsive.height(48) }]}>

                <View style={[Layout.rowHCenter, Layout.fill]}>
                    <CustomImage source={Images.icGlobalNewPost} width={Responsive.height(16)}
                        style={{ marginLeft: Responsive.width(16) }} />
                    <Text style={styles.textMode}>Everyone can reply</Text>
                </View>
                <CustomImage source={Images.icGallery} width={Responsive.width(45)} height={Responsive.width(45)}
                    style={{ marginLeft: Responsive.width(16) }} styleImage={{
                        width: Responsive.height(20), height: Responsive.height(20),
                    }} onPress={() => { }} />
                <CustomImage source={Images.icGifNewPost} width={Responsive.width(45)} height={Responsive.width(45)} styleImage={{
                    width: Responsive.height(20), height: Responsive.height(20),
                }} onPress={() => { }} />
                <CustomImage source={Images.icAlignLeft} width={Responsive.width(45)} height={Responsive.width(45)} styleImage={{
                    width: Responsive.height(20), height: Responsive.height(20),
                }} onPress={() => { }} />
                <CustomImage source={Images.icLocationNewPost} width={Responsive.width(45)} height={Responsive.width(45)} styleImage={{
                    width: Responsive.height(20), height: Responsive.height(20),
                }} onPress={() => { }} />


            </View>

        </KeyboardAvoidingView>

    </SafeAreaView>)
}

export default NewPostContainer

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
    itemStyleWrapper: {
        paddingVertical: Responsive.height(16),
        paddingHorizontal: Responsive.height(24),
    },
    textCancel: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(24)
    },
    textPost: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#ffffff',
        lineHeight: Responsive.height(22)
    },
    viewHorizontalLines: {
        height: Responsive.height(0.5),
        backgroundColor: '#ADAEC4',
        width: '100%'
    },
    avatar: {
        width: Responsive.height(32),
        height: Responsive.height(32),
        borderRadius: Responsive.height(16),
        marginTop: Responsive.height(20),
        marginLeft: Responsive.width(16),
    },
    avatarImage: {
        width: Responsive.height(32),
        height: Responsive.height(32),
        borderRadius: Responsive.height(16),
        backgroundColor: '#BBBEDD',
    },
    searchWrapper: {
        flex: 1,
        flexDirection: 'row',
        minHeight: Responsive.height(44),
        borderRadius: Responsive.height(22),
        alignItems: 'center',
        paddingHorizontal: Responsive.width(10),
        marginTop: Responsive.height(20)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(14),
    },
    textMode: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#3B454E',
        lineHeight: Responsive.height(22),
        marginLeft: Responsive.width(6),
    }

});
