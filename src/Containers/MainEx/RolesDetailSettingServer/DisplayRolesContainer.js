import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';

import { CustomImage, Avatar, AvatarGroup, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const DisplayRolesContainer = ({ goBack }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const onOpenPickRoleColour = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_PICK_ROLE_COLOUR_DIALOG, {})
    };

    const onOpenDeleteRoleColour = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_DELETE_ROLE_DIALOG, {})
    };

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })


    return (<View style={[Layout.fill, styles.parentContainer]} >
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#e9eef5' }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill, { paddingHorizontal: Responsive.width(16) }]}>

                <View style={[Layout.fullWidth, { marginTop: Responsive.height(15), marginLeft: Responsive.width(8) }]}>
                    <Text style={styles.text242A31Medium14}>Role name</Text>
                </View>
                <View style={{ height: Responsive.height(10) }} />
                <View style={[styles.viewActionWrapper, Layout.rowHCenter, Layout.fullWidth, { justifyContent: 'space-between' }]}>
                    <Text style={styles.text242A31Medium14}>WAIV CORE TEAM - CEO</Text>
                    <CustomImage source={Images.icClose} width={Responsive.height(25)} height={Responsive.height(25)} />
                </View>
                <View style={{ height: Responsive.height(10) }} />
                <TouchableOpacity style={[styles.viewActionWrapper, Layout.rowHCenter, Layout.fullWidth, { justifyContent: 'space-between' }]} onPress={onOpenPickRoleColour}>
                    <Text style={styles.text242A31Medium14}>Role color</Text>
                    <View style={[Layout.rowHCenter]}>
                        <View style={{ backgroundColor: '#E91E63', borderRadius: Responsive.height(5), width: Responsive.height(22), height: Responsive.height(22) }} />
                        <CustomImage source={Images.icArrowRightMenu} width={Responsive.height(24)} height={Responsive.height(24)} tintColor={'#B7B5BE'} />
                    </View>

                </TouchableOpacity>
                <View style={{ height: Responsive.height(10) }} />
                <View style={[styles.viewActionWrapper, Layout.rowHCenter, Layout.fullWidth, { justifyContent: 'space-between' }]}>
                    <View style={[Layout.fill, { marginVertical: Responsive.height(14) }]}>
                        <Text style={styles.text242A31Medium14}>Display separately</Text>
                        <Text style={styles.text242A31Regular12}>Display role members separately from online members</Text>
                    </View>
                    <Switch
                        style={styles.switch}
                        renderActiveText={false}
                        renderInActiveText={false}
                        backgroundInactive='#A2A9B0'
                        backgroundActive='#5E60EB'
                        circleBorderInactiveColor='#A2A9B0'
                        circleBorderActiveColor='#5E60EB'
                        circleBorderWidth={2}
                        onValueChange={(val) => console.log(val)}
                        value={false}
                        circleSize={30}
                    />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
        <View style={[Layout.fullWidth, Layout.rowCenter, { marginBottom: Responsive.height(21) }]}>
            <TouchableOpacity style={[Layout.rowCenter, styles.viewButtonRed]} onPress={onOpenDeleteRoleColour}>
                <Text style={styles.textRedButton}>Delete Role</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

export default DisplayRolesContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    parentContainer: {
        backgroundColor: 'transparent'
    },

    text242A31Medium14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        paddingHorizontal: Responsive.width(16),
    },
    text242A31Regular12: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.width(22),
    },
    viewButtonRed: {
        backgroundColor: '#DA1E28',
        borderRadius: Responsive.height(27),
        width: Responsive.width(214),
        height: Responsive.height(46),
    },
    textRedButton: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: Responsive.height(28),
    },

});
