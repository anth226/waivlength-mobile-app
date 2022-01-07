import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, SectionList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, CustomImage, BackIcon, Avatar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'
import _ from 'lodash'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const RolesSettingServerContainer = ({ navigation }) => {
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

    const ROLE_LIST = [
        { id: '1', name: 'Admin', selected: true, count: 1, type: 'role' },
        { id: '2', name: 'WAIV CORE TEAM - COO', selected: false, count: 1, type: 'role' },
        { id: '3', name: 'Team Leader', selected: false, count: 1, type: 'role' },
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={[styles.line, { marginHorizontal: Responsive.width(16) }]} />
        );
    };

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<TouchableOpacity style={{ height: Responsive.height(36), minWidth: Responsive.height(36) }} >
                <Text style={styles.textAddRole}>Add Role</Text>
            </TouchableOpacity>}
            center={<Text style={styles.textTitle}>Server Roles</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <View style={[Layout.fullWidth, { paddingHorizontal: Responsive.width(24) }]}>
            <Text style={styles.textSubTitle}>Use roles to organize your server members and customize their permissions.</Text>
        </View>
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <SectionList
                ItemSeparatorComponent={FlatListItemSeparator}
                sections={[
                    {
                        index: 0, title: 'ROLES - 3', data: ROLE_LIST.map((item, index) => {
                            item.index = index;
                            item.isLastIndex = (index === (ROLE_LIST.length > 0 ? ROLE_LIST.length - 1 : 0))
                            return item;
                        })
                    }
                ]}
                renderSectionHeader={({ section }) => (
                    <View style={[Layout.fullWidth, Layout.rowHCenter, styles.viewSectionHeader]}>
                        <Text style={[styles.textSectionHeader, {}]}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    // Item for the FlatListItems
                    <TouchableOpacity style={[Layout.fullWidth]} onPress={() => navigate('RolesDetailSettingServer')}>
                        <View style={[Layout.fill, Layout.rowHCenter, styles.viewItemWrapper, {
                            borderTopLeftRadius: item.index === 0 ? Responsive.height(16) : 0,
                            borderTopRightRadius: item.index === 0 ? Responsive.height(16) : 0,
                            borderBottomLeftRadius: item.isLastIndex ? Responsive.height(16) : 0,
                            borderBottomRightRadius: item.isLastIndex ? Responsive.height(16) : 0,
                        }]}>
                            <View style={{ marginRight: Responsive.width(5) }}>
                                <CustomImage source={Images.icAdminRole} width={Responsive.height(28)}
                                    height={Responsive.height(28)} />
                            </View>
                            <View style={Layout.fill}>
                                <Text style={[styles.textChatRoom, {}]}>{item.name}</Text>
                                <View style={[Layout.rowHCenter, { marginLeft: Responsive.height(13) }]}>
                                    <CustomImage source={Images.icProfileRole} width={Responsive.height(14)}
                                        height={Responsive.height(14)} />
                                    <Text style={[styles.textRole, {}]}>{item.count} Members</Text>
                                </View>

                            </View>
                            <CustomImage width={Responsive.height(24)} height={Responsive.height(24)} source={Images.icArrowRightMenu} tintColor={'#B7B5BE'} />
                        </View>

                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
            />
        </KeyboardAvoidingView>
    </SafeAreaView>)
}

export default RolesSettingServerContainer

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((16))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
        marginLeft: Responsive.width(15)
    },
    textAddRole: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#5D5FEF',
    },
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#525563',
    },
    textChatRoom: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        flex: 1,
        marginLeft: Responsive.width(13)
    },
    textRole: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#787C92',
        marginLeft: Responsive.width(1),
        lineHeight: Responsive.height(22)
    },
    viewSectionHeader: {
        paddingHorizontal: Responsive.width(17),
        marginTop: Responsive.height(15),
    },
    textSectionHeader: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        flex: 1,
    },
    avatarImage: {
        width: Responsive.width(26),
        height: Responsive.width(26),
        borderRadius: Responsive.width(13),
        marginRight: Responsive.width(6),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    viewItemWrapper: {
        paddingHorizontal: Responsive.width(16),
        paddingVertical: Responsive.height(15),
        backgroundColor: 'rgba(247, 249, 250, 1.0)',
        marginHorizontal: Responsive.height(16),
    },
    line: {
        backgroundColor: 'rgba(220, 221, 223, 1.0)',
        height: Responsive.height(1)
    },

});
