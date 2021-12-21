import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { CustomImage, ActionBar, BackIcon, GradientBackground, AvatarGroup } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CreateNewEventContainer = () => {
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
        <ActionBar
            left={
                <TouchableOpacity style={styles.buttonTextActionBar} onPress={goBack} >
                    <Text style={styles.textCancel}>Cancel</Text>
                </TouchableOpacity>
            }
            center={<Text style={styles.textTitle}>Create New Event</Text>}
            right={
                <TouchableOpacity style={styles.buttonTextActionBar} onPress={goBack} >
                    <Text style={styles.textCreate}>Create</Text>
                </TouchableOpacity>
            }
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >

            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
                style={[Layout.fill]}>


                <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(19) }]}>

                    <Text style={styles.textLabel}>Event Title</Text>

                    <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper, { marginTop: Responsive.height(8) }]}>
                        <TextInput
                            onChangeText={text => { }}
                            editable={true}
                            placeholder={'Tech fair 2022'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                    </View>
                    <View style={{ height: Responsive.height(24) }} />
                    <Text style={styles.textLabel}>Time & Date</Text>

                    <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper, { marginTop: Responsive.height(8) }]}>
                        <TextInput
                            onChangeText={text => { }}
                            editable={true}
                            placeholder={'Tech fair 2022'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <TouchableOpacity>
                            <CustomImage
                                width={Responsive.width(20)}
                                height={Responsive.height(20)}
                                source={Images.icCalendar}
                                tintColor={'#758299'}
                                style={{ marginRight: Responsive.width(18) }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: Responsive.height(23) }} />
                    <View style={[Layout.fullWidth, Layout.row]}>
                        <AvatarGroup
                            height={Responsive.height(32)}
                            text={'Add'}
                            textAction={'+'}
                            textStyle={{ color: '#15172A' }}
                            textActionStyle={{ fontSize: Responsive.font(13), color: '#15172A' }} />
                    </View>
                    <View style={{ height: Responsive.height(31) }} />
                    <Text style={styles.textLabel}>Select Channel</Text>

                    <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper, { marginTop: Responsive.height(8) }]}>
                        <TouchableOpacity>
                            <CustomImage
                                width={Responsive.width(12)}
                                height={Responsive.height(12)}
                                source={Images.icChatRoom}
                                style={{ marginLeft: Responsive.width(18) }} />
                        </TouchableOpacity>
                        <TextInput
                            onChangeText={text => { }}
                            editable={true}
                            placeholder={'Chat Room'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText]}
                        />
                        <TouchableOpacity>
                            <CustomImage
                                width={Responsive.width(24)}
                                height={Responsive.height(24)}
                                tintColor={'#8F95A6'}
                                source={Images.icArrow}
                                style={{ marginRight: Responsive.width(18), transform: [{ rotate: '90deg' }] }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: Responsive.height(24) }} />
                    <Text style={styles.textLabel}>Description</Text>

                    <View style={[Layout.fullWidth, Layout.row, Common.textInput, styles.inputTextWrapper, { marginTop: Responsive.height(8), height: Responsive.height(101) }]}>
                        <TextInput
                            onChangeText={text => { }}
                            editable={true}
                            multiline={true}
                            placeholder={'Tech fair 2022'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fill, Common.textInput, styles.inputText, styles.inputTextMultiLine]}
                        />
                    </View>

                </View>




            </ScrollView>


        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default CreateNewEventContainer

const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: '#ffffff'
    },
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    buttonTextActionBar: {
        height: Responsive.height(36),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCancel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#EF5DA8',
    },
    textCreate: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
    },
    textLabel: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        lineHeight: Responsive.width(16),
    },
    inputTextWrapper: {
        marginBottom: Responsive.height(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0,
        backgroundColor: '#EFF1F7',
        height: Responsive.height(56),
        borderRadius: Responsive.height(12)
    },
    inputText: {
        borderBottomWidth: 0,
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: Responsive.width(18),
        color: '#66666B'
    },
    inputTextMultiLine: {
        height: Responsive.height(101),
        textAlignVertical: 'top',
        paddingVertical: Responsive.height(10)
    }

});
