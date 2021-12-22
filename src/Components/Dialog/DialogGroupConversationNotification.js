import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { Switch } from 'react-native-switch';
import { CustomImage, Avatar } from '@/Components'

const DialogGroupConversationNotification = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()



    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textHeader}>Mute this channel</Text>
                    <View style={Layout.fill} />
                </View>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <CustomImage width={Responsive.height(18)} height={Responsive.height(18)} source={Images.icChatRoomLock} />
                    <View style={{ width: Responsive.width(5) }} />
                    <Text style={styles.textSubHeader}>admin-only</Text>
                    <View style={Layout.fill} />
                </View>
                <View style={{ height: Responsive.height(20) }} />
                <View style={[Layout.fullWidth, styles.line]} />

                <View style={{ height: Responsive.height(20) }} />
                <View style={[Layout.fill, Layout.column, styles.actionWrapper]}>

                    <View style={{ height: Responsive.height(52), justifyContent: 'center' }}>
                        <Text style={styles.textItemAction}>For 15 Minutes</Text>
                    </View>
                    <View style={[Layout.fullWidth, styles.line]} />
                    <View style={{ height: Responsive.height(52), justifyContent: 'center' }}>
                        <Text style={styles.textItemAction}>For 1 Hour</Text>
                    </View>
                    <View style={[Layout.fullWidth, styles.line]} />
                    <View style={{ height: Responsive.height(52), justifyContent: 'center' }}>
                        <Text style={styles.textItemAction}>For 8 Hours</Text>
                    </View>
                    <View style={[Layout.fullWidth, styles.line]} />
                    <View style={{ height: Responsive.height(52), justifyContent: 'center' }}>
                        <Text style={styles.textItemAction}>For 24 Hours</Text>
                    </View>
                    <View style={[Layout.fullWidth, styles.line]} />
                    <View style={{ height: Responsive.height(52), justifyContent: 'center' }}>
                        <Text style={styles.textItemAction}>Until I turn it back on</Text>
                    </View>

                </View>
                <View style={{ height: Responsive.height(20) }} />
                <View style={[Layout.fill, Layout.column, styles.actionWrapper]}>

                    <View style={{ height: Responsive.height(54), alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={[Layout.fill, styles.textItemAction]}>Notification Settings</Text>
                        <CustomImage
                            width={Responsive.height(12)}
                            height={Responsive.height(12)}
                            source={Images.icArrowDown2}
                            tintColor={'#8F95A6'}
                            style={{ transform: [{ rotate: '-90deg' }], paddingHorizontal: Responsive.width(20) }} />
                    </View>
                </View>
                <View style={{ height: Responsive.height(14) }} />
                <Text style={[Layout.fill, styles.textDescription]}>You are receiving notifications from only mentions{'\n'}in this server, but you can override it here</Text>
                <View style={{ height: Responsive.height(30) }} />
            </View>
        </ScrollView>
    </Modalize>)
}

DialogGroupConversationNotification.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogGroupConversationNotification.defaultProps = {
    style: {}
}

export default DialogGroupConversationNotification


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textHeader: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        marginTop: Responsive.height(23),
    },
    textSubHeader: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
    },
    line: {
        backgroundColor: '#BFCBD6',
        height: Responsive.height(1)
    },
    actionWrapper: {
        backgroundColor: '#B8E4EBF3',
        marginHorizontal: Responsive.width(20),
        borderRadius: Responsive.height(10)
    },
    textItemAction: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        paddingHorizontal: Responsive.width(20),
    },
    textDescription: {
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(22),
        color: '#44486F',
        paddingHorizontal: Responsive.width(20),
    }


});