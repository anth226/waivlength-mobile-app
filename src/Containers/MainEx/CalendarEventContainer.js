import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { CustomImage, ActionBar, BackIcon, GradientBackground, AvatarGroup } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'
import { Layout } from '@/Theme'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const CalendarEventContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

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
            bio: "I am the sunshine",
            unRead: 4,
            time: "02:17"
        },
        {
            id: 2,
            firstName: "Ruth",
            lastName: "Hamptom",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            unRead: 4,
            time: "02:17"
        },
        {
            id: 3,
            firstName: "Edgar",
            lastName: "Jones",
            url: "",
            bio: "Change ain't easy",
            unRead: 4,
            time: "02:17"
        },
        {
            id: 4,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 5,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
        {
            id: 6,
            firstName: "Carlos",
            lastName: "Daniels",
            url: "https://picsum.photos/200/200",
            bio: "Try new things",
            unRead: 1,
            time: "02:17"
        },
    ];

    const getColor = (index) => {
        if((index + 1) % 3 === 1) return '#4D5B80'
        if((index + 1) % 3 === 2) return '#6A76E4'
        if((index + 1) % 3 === 0) return '#A586F9'
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper, { backgroundColor: getColor(index) }]}>
                    <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { marginTop: Responsive.height(15) }]}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={[Layout.fill, styles.textHeader]}>{`Tech Fair 2022`}</Text>

                        <View width={Responsive.width(12)} />
                        <CustomImage source={Images.icActionOptionMore} width={Responsive.height(24)} height={Responsive.height(24)} onPress={() => {}} />
                    </View>
                    <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(3) }]}>
                        <View style={[Layout.row, styles.buttonInfo]}>
                            <CustomImage source={Images.icClock} height={Responsive.height(16)} width={Responsive.height(16)} />
                            <Text style={styles.textInfo}>{`10.00 Am-12.00 Pm`}</Text>
                        </View>
                        <View style={{ width: Responsive.width(8) }} />
                        <View style={[Layout.row, styles.buttonInfo]}>
                            <CustomImage source={Images.icCalendar} height={Responsive.height(16)} width={Responsive.height(16)} />
                            <Text style={styles.textInfo}>{`20 September`}</Text>
                        </View>
                    </View>
                    <View style={[Layout.fullWidth, { height: Responsive.height(1), backgroundColor: '#848FAC', marginTop: Responsive.height(10), marginBottom: Responsive.height(12) }]} />
                    <Text numberOfLines={4} ellipsizeMode={'tail'} style={[Layout.fullWidth, styles.textDescription]}>{`This quality, or event whose presence or occurrence indicates the probable presence or occurrence of something els`}</Text>
                    <View style={Layout.fill}></View>
                    <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter]}>
                        <AvatarGroup height={Responsive.height(32)} text='Perticipants' textStyle={styles.avatarGroupTextStyle} colorCircle={getColor(index)} />
                    </View>
                    <View style={{ height: Responsive.height(13) }} />
                </View>

            </TouchableOpacity >
        );
    };


    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            center={<View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { paddingHorizontal: Responsive.width(13) }]}>
                <Text style={styles.textTitle}>Upcoming events</Text>
            </View>}
            right={<View style={Layout.row}>
                <CustomImage width={Responsive.height(40)} height={Responsive.height(40)} source={Images.icActionCalendarAdd} onPress={() => navigate('CalendarEvent')} />
                <View style={{ width: Responsive.width(16) }} />
                <CustomImage width={Responsive.height(40)} height={Responsive.height(40)} source={Images.icActionSearchBg} onPress={() => { }} />
            </View>}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
                style={[Layout.fill]}>

                <FlatList nestedScrollEnabled={false}
                    style={[Layout.fullWidth, { marginTop: Responsive.height(20) }]}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />


            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default CalendarEventContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    itemStyleWrapper: {
        backgroundColor: '#6A76E4',
        borderRadius: Responsive.height(18),
        marginVertical: Responsive.height(8),
        paddingHorizontal: Responsive.height(15),
        marginHorizontal: Responsive.width(24),
        height: Responsive.height(217),
    },
    textHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: '#ffffff'
    },
    textDescription: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        color: '#ffffff',
        lineHeight: Responsive.width(18),
    },
    buttonInfo: {
        alignItems: 'center',
        flex: 1,
    },
    textInfo: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        paddingHorizontal: Responsive.width(8),
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#A4ADC6',
        marginTop: Responsive.height(4)
    },
    avatarGroupTextStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.width(18),
        color: '#ffffff'
    }
});
