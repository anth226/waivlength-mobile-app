import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { Switch } from 'react-native-switch';
import { CustomImage, Avatar } from '@/Components'
import { navigateAndSimpleReset, navigate, goBack } from '@/Navigators/utils'

const DialogGroupConversationEvent = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const DATA = [
        {
            id: 1,
            firstName: "Linnie",
            lastName: "Summers",
            url: "https://picsum.photos/200/200",
            time: "02:17",
            isInterest: false
        },
        {
            id: 2,
            firstName: "Social",
            lastName: "Community",
            url: "https://picsum.photos/200/200",
            bio: "Live, Learn, Love",
            isInterest: true
        }
    ]


    const renderItem = ({ item }) => {
        const getColor = () => {
            if (item['isInterest']) return '#1EB852'
            return '#5D5FEF'
        }
        return (
            <TouchableOpacity disabled={true} style={{ paddingHorizontal: Responsive.width(20) }}>
                <View style={[Layout.fullWidth, Layout.column, Layout.alignItemsCenter, styles.itemWapper]}>
                    <View style={[Layout.fullWidth, Layout.rowHCenter, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(18) }]}>
                        <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} tintColor={'#242A31'} source={Images.icCalendar} />
                        <View style={{ width: Responsive.width(10) }} />
                        <Text style={[Layout.fill, styles.textTime]}>Today at 3:00 PM</Text>
                        <Avatar
                            isShowDot={false}
                            source={Images.onBoarding3}
                            imageWrapperStyle={{ height: Responsive.height(26), width: Responsive.height(26), borderRadius: Responsive.height(13) }}
                            imageStyle={{ height: Responsive.height(26), width: Responsive.height(26), borderRadius: Responsive.height(13) }}
                            url={item['url']}
                            textStyle={{ fontSize: Responsive.font(13), marginTop: Responsive.height(2) }}
                            firstName={item['firstName']}
                            lastName={item['lastName']} />
                        <View style={{ width: Responsive.width(15) }} />
                        <CustomImage width={Responsive.height(16)} height={Responsive.height(16)} source={Images.ic2Person} />
                        <View style={{ width: Responsive.width(4) }} />
                        <Text style={styles.textTime}>1</Text>
                    </View>
                    <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(20), marginTop: Responsive.height(13) }]}>
                        <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus nunc auctor.</Text>
                        <View style={[Layout.fullWidth, Layout.rowHCenter, { marginTop: Responsive.height(20) }]}>
                            <CustomImage width={Responsive.height(22)} height={Responsive.height(22)} tintColor={'#242A31'} source={Images.icLocation} />
                            <View style={{ width: Responsive.width(10) }} />
                            <Text style={[Layout.fill, styles.textTime]}>R163, Kells Co. Meath</Text>
                        </View>
                        <View style={[Layout.fullWidth, Layout.rowHCenter, { marginTop: Responsive.height(20) }]}>
                            <TouchableOpacity
                                style={[Layout.fill, Common.button.outlineRounded, styles.buttonInterest, { borderColor: getColor() }]}
                            >
                                <CustomImage height={Responsive.height(9)} width={Responsive.height(9)} tintColor={getColor()} source={item['isInterest'] ? Images.icCheck2 : Images.icPlus} />
                                <View style={{ width: Responsive.width(4) }} />
                                <Text style={[styles.textButtonInterest, { color: getColor() }]}>{item['isInterest'] ? 'Interested' : 'Interest'}</Text>
                            </TouchableOpacity>
                            <View style={{ width: Responsive.width(15) }} />
                            <CustomImage height={Responsive.height(36)} width={Responsive.height(36)} source={Images.icActionShareGray} onPress={() => { }} />
                        </View>

                    </View>

                </View>

            </TouchableOpacity >
        );
    };

    const EmptyComponent = () => {
        return (
            <View style={styles.emptyContainer}>
                <CustomImage source={Images.icEmptyEvent} width={Responsive.height(100)} height={Responsive.height(100)} />
                <View style={{ height: Responsive.width(40) }} />
                <Text style={styles.textEmptyHeader}>There are no upcoming events</Text>
                <View style={{ height: Responsive.width(12) }} />
                <Text style={styles.textEmpty}>
                    Schedule an event for any planned activity in{'\n'}your server. You can give other people{'\n'}permission to create events in{'\n'}
                    <Text style={styles.textEmptyHighlight}>Server Settings &gt; Roles.</Text>
                </Text>
            </View>
        )
    }


    return (<Modalize ref={modalizeRef} {...props}>
        <View style={[Layout.fullWidth, Layout.column]}>
            <View style={[Layout.fullWidth, Layout.row]}>
                <Text style={styles.textEvent}>Event</Text>
                <View style={Layout.fill} />
                <TouchableOpacity onPress={() => {
                    modalizeRef.current?.close();
                    navigate('CreateNewEventStep1')
                }}>
                    <Text style={styles.textCreate}>Create</Text>
                </TouchableOpacity>
            </View>


            <FlatList nestedScrollEnabled={false}
                style={[Layout.fill, { marginTop: Responsive.height(5) }]}
                data={DATA}
                ListEmptyComponent={<EmptyComponent />}
                ListHeaderComponent={<View style={{ height: Responsive.height(15) }} />}
                ItemSeparatorComponent={() => (<View style={{ height: Responsive.height(15) }} />)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />



            <View style={{ height: Responsive.height(44) }} />

        </View>
    </Modalize>)
}

DialogGroupConversationEvent.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogGroupConversationEvent.defaultProps = {
    style: {}
}

export default DialogGroupConversationEvent


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textEvent: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        marginTop: Responsive.height(23),
        paddingHorizontal: Responsive.width(20),
    },
    textCreate: {
        marginTop: Responsive.height(23),
        paddingHorizontal: Responsive.width(20),
        textAlignVertical: 'center',
        color: '#5D5FEF',
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        lineHeight: Responsive.width(22),
    },
    itemWapper: {
        backgroundColor: '#F0F3F8',
        height: Responsive.height(222),
        borderRadius: Responsive.height(24)
    },
    textTime: {
        color: '#242A31',
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        textAlignVertical: 'center',
    },
    textDescription: {
        color: '#3B454E',
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        textAlignVertical: 'center',
    },
    buttonInterest: {
        flexDirection: 'row',
        height: Responsive.height(36),
        borderRadius: Responsive.height(17)
    },
    textButtonInterest: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Mwdium',
        lineHeight: Responsive.width(22),
        color: '#5D5FEF',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Responsive.height(20)
    },
    textEmptyHeader: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31'
    },
    textEmpty: {
        paddingHorizontal: Responsive.width(20),
        textAlign: 'center',
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(21),
        color: '#242A31'
    },
    textEmptyHighlight: {
        paddingHorizontal: Responsive.width(20),
        textAlign: 'center',
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(21),
        color: '#5D5FEF'
    }



});