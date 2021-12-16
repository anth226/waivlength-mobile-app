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
const SearchMessageContainer = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }


    useEffect(() => {
        init()
    })

    const DATA = [];


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity disabled={true}>
                <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper]}>
                    <View style={[Layout.fullWidth, Layout.row, Layout.alignItemsCenter, { marginTop: Responsive.height(15) }]}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={[Layout.fill, styles.textHeader]}>{`Tech Fair 2022`}</Text>

                        <View width={Responsive.width(12)} />
                        <CustomImage source={Images.icActionOptionMore} width={Responsive.height(24)} height={Responsive.height(24)} onPress={() => { }} />
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
                        <AvatarGroup height={Responsive.height(32)} text='Perticipants' textStyle={styles.avatarGroupTextStyle} />
                    </View>
                    <View style={{ height: Responsive.height(13) }} />
                </View>

            </TouchableOpacity >
        );
    };

    const EmptyComponent = () => {
        return (
            <View style={styles.emptyContainer}>
                <CustomImage source={Images.icEmptySearch} width={Responsive.height(162)} height={Responsive.height(162)}/>
                <Text style={styles.textEmpty}>Try searching for messages, audio room</Text>
            </View>
        )
    }


    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackground style={{ position: 'absolute' }} />
        <ActionBar
            left={<View style={{ width: Responsive.width(15) }} />}
            center={<View style={[Layout.fill, styles.searchStyle]}>
                <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center' }]}>
                    <TextInput
                        onChangeText={text => { }}
                        editable={true}
                        placeholder={'Search'}
                        placeholderTextColor={'#7C8093'}
                        selectTextOnFocus
                        style={[Layout.fullWidth, Common.textInput, styles.inputText]}
                    />
                    <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icSearch} />
                </View>
            </View>}
            right={<TouchableOpacity style={styles.buttonCancel} onPress={goBack} >
                <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>}
        />
        <View style={{ height: Responsive.height(1), backgroundColor: '#B1B3BC', marginVertical: Responsive.height(8) }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >


            <FlatList nestedScrollEnabled={false}
                style={[Layout.fill]}
                data={DATA}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={renderItem}
                ListEmptyComponent={<EmptyComponent />}
                keyExtractor={(item) => item.id} />

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default SearchMessageContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    searchStyle: {
        height: Responsive.height(48),
        borderColor: '#E1E2EF',
        backgroundColor: '#ffffff',
        borderRadius: Responsive.height(24),
        borderWidth: Responsive.height(1),
        marginRight: Responsive.width(29),
        justifyContent: 'center',
        paddingHorizontal: Responsive.width(14)
    },
    inputText: {
        height: Responsive.height(48),
        borderBottomWidth: 0,
        marginRight: Responsive.width(10),
        justifyContent: 'center',
        fontFamily: 'NotoSans-Regular',
    },
    buttonCancel: {
        height: Responsive.height(36),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCancel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#5D5FEF',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textEmpty: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        color: '#8F95A6'
    }
});
