import React, { useEffect } from 'react'
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
const ConversationAudioContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })
    const DATA_ADMIN = [
        {
            id: 1,
            firstName: "🔥 Blania",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
        },
        {
            id: 2,
            firstName: "✍ Miju",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
        }
    ]
    const DATA = [
        {
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
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
            id: 4,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 5,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 6,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 7,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 8,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it",
            time: "10:20 PM"
        },
        {
            id: 9,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            content: "Cool ! I even saved it End",
            time: "10:20 PM"
        },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={styles.itemStyleWrapper}>
                    <CustomImage styleImage={{ borderRadius: Responsive.height(47) }} height={Responsive.height(93)} width={Responsive.height(93)} source={{ uri: item['url'] }} />
                    <Text style={styles.itemTextName}>{item['firstName']}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderItemMember = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ width: width / 4, paddingVertical: Responsive.height(9) }}>
                <View style={styles.itemMemberStyleWrapper}>
                    <CustomImage styleImage={{ borderRadius: Responsive.height(31) }} height={Responsive.height(62)} width={Responsive.height(62)} source={{ uri: 'https://picsum.photos/200/200' }} />
                    <Text style={styles.itemTextNameMember}>Faruk</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (<SafeAreaView style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
                style={[Layout.fill]}>
                <Text style={styles.textTitle}>Degital Design Agency</Text>
                <Text style={styles.textHeader}>Every aspect of your 💪 company’s brand influences the user experience.</Text>

                <View style={{ height: Responsive.height(133), marginTop: Responsive.height(21) }}>
                    <FlatList
                        data={DATA_ADMIN}
                        horizontal={true}
                        renderItem={renderItem}
                        ListHeaderComponent={<View style={{ width: Responsive.width(6) }} />}
                        ListFooterComponent={<View style={{ width: Responsive.width(6) }} />}
                        keyExtractor={(item) => item.id} />
                </View>
                <Text style={styles.textFollowedBy}>Followed by the admins</Text>
                <FlatList nestedScrollEnabled={false}
                    style={[Layout.fill, Layout.fullWidth]}
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={DATA}
                    numColumns={4}
                    renderItem={renderItemMember}
                    keyExtractor={(item) => item.id} />
                <View style={{ height: Responsive.height(61) }} />
            </ScrollView>
            <View style={[Layout.row, styles.floatingActionInputWrapper]}>

                <TouchableOpacity
                    style={[Common.button.rounded, styles.buttonLeaveQuietly]}
                    onPress={() => { }}>
                    <Text style={styles.textButtonLeaveQuietly}>✌Leave quietly</Text>
                </TouchableOpacity>
                <View style={Layout.fill} />
                <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionIEmoji} source={Images.icActionPlus} onPress={() => { }} />
                <View style={{ width: Responsive.width(10) }} />
                <CustomImage width={Responsive.height(50)} width={Responsive.height(50)} styleImage={styles.imageActionIEmoji} source={Images.icActionEmoji} onPress={() => { }} />

            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default ConversationAudioContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
        textTransform: 'uppercase',
        marginTop: Responsive.height(28),
        paddingHorizontal: Responsive.width(24)
    },
    textHeader: {
        fontSize: Responsive.font(30),
        fontFamily: 'Poppins-Medium',
        color: '#15172A',
        marginTop: Responsive.height(28),
        paddingHorizontal: Responsive.width(24),
        lineHeight: Responsive.width(45),
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: '#D5DDE5'
    },
    itemStyleWrapper: {
        flexDirection: 'column',
        width: Responsive.height(129),
        alignItems: 'center',
        height: Responsive.width(133)
    },
    itemTextName: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(19),
        lineHeight: Responsive.width(28),
        marginTop: Responsive.height(11)
    },
    itemMemberStyleWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTextNameMember: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(21),
        marginTop: Responsive.height(3),
    },
    textFollowedBy: {
        color: '#8D8F9F',
        paddingHorizontal: Responsive.width(24),
        marginTop: Responsive.height(16),
        marginBottom: Responsive.height(9),
    },
    floatingActionInputWrapper: {
        marginBottom: Responsive.width(11),
        marginHorizontal: Responsive.width(24),
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0
    },
    buttonLeaveQuietly: {
        height: Responsive.height(50),
        borderRadius: Responsive.height(25),
        backgroundColor: '#FFFFFF'
    },
    textButtonLeaveQuietly: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(22),
        color: '#5D5FEF',
    }
});
