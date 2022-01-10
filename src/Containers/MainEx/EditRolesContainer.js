import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionBar, GradientBackgroundAngle, Avatar, BackIcon, RadioButton, CustomImage } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'
import _ from 'lodash'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const EditRolesContainer = ({ navigation }) => {
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

    const DATA = [
        {
            id: 1,
            name: "WAIV CORE TEAM - CEO",
            selected: true
        },
        {
            id: 2,
            name: "WAIV CORE TEAM - COO",
            selected: false
        },
        {
            id: 3,
            name: "WAIV CORE TEAM - CMO",
            selected: false
        },
        {
            id: 4,
            name: "Admin",
            selected: false,
            type: 'admin'
        },
        {
            id: 5,
            name: "Team Leader",
            selected: false,
            type: 'team_leader'
        },
    ];

    const getColorItem = (type) => {
        if (type === 'admin') return '#34C15C'
        if (type === 'team_leader') return '#F6892A'
        return '#E91E63'
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[Layout.fullWidth, styles.viewItemWrapper, Layout.rowHCenter, { paddingLeft: Responsive.width(16) }]} onPress={() => { }}>
                <Text style={[styles.text242A31Medium14, { color: getColorItem(item.type) }]}>{item.name}</Text>
                <View style={Layout.fill} />
                <RadioButton
                    selected={false}
                    size={22}
                    onPress={() => { }}
                    text={``}
                    isHtml={false}
                    textStyle={styles.textRadioButton}
                    style={{}}
                />
                <View style={{ width: Responsive.width(8) }} />
            </TouchableOpacity>
        )
    }

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<TouchableOpacity style={{ height: Responsive.height(36), minWidth: Responsive.height(40) }} >
                <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>}
            center={<Text style={styles.textTitle}>Edit Faruk</Text>}
        />
        <View style={{ height: Responsive.height(23) }} />
        <ScrollView
            contentContainerStyle={[Layout.alignItemsStart, styles.container]}
            style={[Layout.fill]}>
            <View style={[Layout.fullWidth, Layout.rowCenter]}>
                <Avatar
                    isShowDot={false}
                    imageStyle={styles.avatarImage}
                    url={'https://picsum.photos/200/200'}
                    firstName={"A"}
                    lastName={"A"} />
            </View>
            <View style={{ height: Responsive.height(6) }} />
            <View style={[Layout.fullWidth, Layout.rowCenter]}>
                <View style={Layout.rowHCenter}>
                    <Text style={[styles.text242A31Medium14, {}]}>Faruk</Text>
                    <Text style={[styles.textUsername, {}]}> #8425</Text>
                    <View style={[styles.viewVerifiedWrapper, { marginLeft: Responsive.width(3) }]}>
                        {/* <CustomImage source={item.isVerified ? Images.icUserChatVerified : Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} /> */}
                        <CustomImage source={Images.icUserChatNotVerified} width={Responsive.height(12)} height={Responsive.height(12)} />
                    </View>
                </View>

            </View>

            <Text style={styles.textSubTitle}>Roles</Text>
            <View style={Layout.fullWidth}>
                <FlatList
                    contentContainerStyle={[styles.viewActionWrapper, { width: width - Responsive.width(32) }]}
                    data={DATA}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => (<View style={[styles.line]} />)}
                    keyExtractor={(item) => item.id} />
            </View>
        </ScrollView>
    </SafeAreaView>)
}

export default EditRolesContainer

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
    textSubTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#272D37',
        marginLeft: Responsive.width(8),
        marginTop: Responsive.height(15),
        marginBottom: Responsive.height(10),
    },
    textSave: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#5D5FEF',
    },
    viewActionWrapper: {
        borderRadius: Responsive.height(16),
        backgroundColor: "rgba(249, 251, 252, 1.0)",
        minHeight: Responsive.height(53),
        marginBottom: Responsive.height(5),
    },
    avatarImage: {
        width: Responsive.width(60),
        height: Responsive.width(60),
        borderRadius: Responsive.width(30),
    },
    viewVerifiedWrapper: {
        width: Responsive.height(12),
        height: Responsive.height(12),
    },
    text242A31Medium14: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#242A31',
        lineHeight: Responsive.height(22),
    },
    textUsername: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'rgba(125,128,147,1.0)'
    },
    line: {
        height: Responsive.height(1),
        backgroundColor: 'rgba(220, 221, 224, 1.0)',
    },
    viewItemWrapper: {
        paddingVertical: Responsive.height(15),
    },

});
