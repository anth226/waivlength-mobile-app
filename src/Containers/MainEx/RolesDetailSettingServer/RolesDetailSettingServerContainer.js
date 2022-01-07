import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ActionBar, GradientBackgroundAngle, CustomImage, BackIcon } from '@/Components'
import { DisplayRolesContainer, PermissionRolesContainer, MemberRolesContainer} from '@/Containers'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'


const Tab = createMaterialTopTabNavigator();
Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const RolesDetailSettingServerContainer = ({ navigation }) => {
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
        {/* <GradientBackgroundAngle style={{ position: 'absolute' }} /> */}
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: '#e9eef5' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
            center={<View style={{ alignItems: 'center' }}>
                <Text style={styles.textTitle}>WAIV CORE TEAM - CEO</Text>
                <Text style={styles.textRole}>Manager</Text>
            </View>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen name="Display" component={DisplayRolesContainer} />
                <Tab.Screen name="Permissions" component={PermissionRolesContainer} />
                <Tab.Screen name="Members" component={MemberRolesContainer} />
            </Tab.Navigator>
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.viewTabBarWrapper}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        activeOpacity={0.5}
                        style={[styles.buttonTabBar, isFocused ? {} : {backgroundColor: 'transparent'}]}
                    >
                        <Text style={[styles.textLabelTabBar, { color: isFocused ? 'white' : '#787C92' }]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default RolesDetailSettingServerContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((16))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
        lineHeight: Responsive.height(24),
    },
    textRole: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#787C92',
        lineHeight: Responsive.height(22),
    },
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(26),
    },
    viewTabBarWrapper: {
        flexDirection: 'row',
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        height: Responsive.height(40),
        marginHorizontal: Responsive.width(16),
        borderRadius: Responsive.height(16),
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTabBar: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(16),
        height: Responsive.height(30),
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Responsive.width(5),
    },
    textLabelTabBar: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(14),
    }

});
