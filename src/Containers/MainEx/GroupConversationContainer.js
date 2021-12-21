import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import _ from 'lodash';
import { ExampleContainer } from '@/Containers'

import { CustomImage, ActionBar, AvatarGroup, GradientBackground, BackIcon, Avatar, TypingAnimation } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const GroupConversationContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();
    const [userTextInput, setUserTextInput] = useState("");

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })
    const DATA = [
        {
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
            content: "Hi! How you doing? Your last post was really cool ",
            time: "10:20 PM"
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            content: "Thank you a lot! I did it on last Weekend at my free time.",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it End",
            time: "10:20 PM"
        },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity >
                {
                    (index % 2 == 0) ? (
                        <View style={[Layout.row, styles.itemStyleWrapper, { width }]}>
                            <View style={[Layout.fill, Layout.row]}>
                                <Text style={styles.textBubbleOrtherWrapper}>{item['content']}</Text>
                                <View style={Layout.fill} />
                            </View>
                            <View style={{ width: Responsive.width(49) }} />
                            <Text style={styles.textItemTime}>{item['time']}</Text>

                        </View>
                    ) : (
                        <View style={[Layout.row, styles.itemStyleWrapper, { width }]}>
                            <Text style={styles.textItemTime}>{item['time']}</Text>
                            <View style={{ width: Responsive.width(49) }} />
                            <View style={[Layout.fill, Layout.row]}>
                                <View style={Layout.fill} />
                                <Text style={styles.textBubbleMeWrapper}>{item['content']}</Text>
                            </View>
                        </View>
                    )
                }

            </TouchableOpacity>
        );
    };


    return (<SafeAreaView style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { paddingHorizontal: Responsive.width(13) }]}>
                <CustomImage width={Responsive.height(30)} height={Responsive.height(30)} styleImage={{ borderRadius: Responsive.height(40) }} source={{ uri: 'https://picsum.photos/200/200' }} />
                <View style={{ width: Responsive.width(8) }} />
                <Text style={styles.textTitle}>Social Community</Text>
            </View>}
        />
        <View style={styles.line} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >

            <FlatList nestedScrollEnabled={false}
                style={[Layout.fill]}
                data={DATA}
                ListFooterComponent={<View style={{ height: Responsive.height(70) }} />}
                renderItem={renderItem}
                inverted
                contentContainerStyle={{ flexDirection: 'column-reverse' }}
                keyExtractor={(item) => item.id} />


            <View style={[Layout.column, styles.floatingActionInputWrapper]}>
                <View style={Layout.row}>
                    <Text style={styles.textTyping}>Muhammad<Text style={[styles.textTyping, { color: '#9498AA' }]}> is Typing</Text></Text>
                    <TypingAnimation
                        style={{ marginTop: Responsive.width(5) }}
                        dotMargin={Responsive.width(5)}
                        dotAmplitude={Responsive.width(3)}
                        dotRadius={Responsive.height(1.5)}
                        dotSpeed={0.1}
                        dotColor={'#414555'} />
                </View>
                <TouchableOpacity
                    style={[Layout.fill, styles.inputWrapper]}
                    disabled={true}>
                    <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionInput} source={Images.icAttachment} onPress={() => { }} />
                    <TextInput
                        onChangeText={text => setUserTextInput(text)}
                        editable={true}
                        placeholder={'Send Message ...'}
                        placeholderTextColor={'#7C8093'}
                        selectTextOnFocus
                        style={[Layout.fill, Common.textInput, styles.inputText]}
                    />
                    <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionIEmoji} source={Images.icEmoji} onPress={() => { }} />
                    {
                        _.isEmpty(userTextInput) ? (
                            <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionInput} source={Images.icMicrophone} onPress={() => { }} />
                        ) : (
                            <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionInput} source={Images.icSend} onPress={() => { }} />
                        )
                    }
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default GroupConversationContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#D5DDE5'
    },
    itemStyleWrapper: {
        paddingVertical: Responsive.height(16),
        paddingHorizontal: Responsive.height(24),
    },
    textItemTime: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        textAlignVertical: 'bottom',
        color: '#9498AA'
    },
    floatingActionInputWrapper: {
        marginBottom: Responsive.width(11),
        marginHorizontal: Responsive.width(24),
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0
    },
    textBubbleOrtherWrapper: {
        backgroundColor: '#ffffff',
        paddingHorizontal: Responsive.width(17),
        paddingVertical: Responsive.height(14),
        borderBottomLeftRadius: Responsive.height(14),
        borderTopRightRadius: Responsive.height(14),
        borderBottomRightRadius: Responsive.height(14),
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#000000',
        lineHeight: Responsive.width(22),
    },
    textBubbleMeWrapper: {
        backgroundColor: '#5D5FEF',
        paddingHorizontal: Responsive.width(17),
        paddingVertical: Responsive.height(14),
        borderBottomLeftRadius: Responsive.height(14),
        borderTopLeftRadius: Responsive.height(14),
        borderBottomRightRadius: Responsive.height(14),
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#ffffff',
        lineHeight: Responsive.width(22),
    },
    inputWrapper: {
        height: Responsive.height(50),
        borderRadius: Responsive.height(14),
        flexDirection: 'row',
        borderRadius: Responsive.width(12),
        backgroundColor: '#ffffff',
        paddingHorizontal: Responsive.width(5),
        alignItems: 'center'
    },
    inputText: {
        height: Responsive.height(48),
        borderBottomWidth: 0,
        fontFamily: 'NotoSans-Regular',
    },
    imageActionInput: {
        width: Responsive.height(24),
        height: Responsive.height(24)
    },
    imageActionIEmoji: {
        width: Responsive.height(17),
        height: Responsive.height(17)
    },
    textTyping: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        color: '#2F3244'
    }
});
