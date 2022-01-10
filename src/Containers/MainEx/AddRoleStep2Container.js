import React, { useEffect, useState, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventBus from 'react-native-event-bus';
import { EVENTS } from '@/Constants';
import { ExampleContainer } from '@/Containers'
import Carousel from 'react-native-snap-carousel'

import { ActionBar, GradientBackgroundAngle, CustomImage, RadioButton, BackIcon } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate, goBack } from '@/Navigators/utils'
import _ from 'lodash'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const AddRoleStep2Container = ({ navigation }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const [indexSlider, setIndexSlider] = useState(0);
    const carouselRef = useRef(null);
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    const onOpenPickRoleColour = () => {
        EventBus.getInstance().fireEvent(EVENTS.OPEN_PICK_ROLE_COLOUR_DIALOG, {})
    };

    useEffect(() => {
        init()
    }, [])

    const DATA = [
        {
            id: 1,
            title: "Member",
            note: "Basic permissions for a regular member to talk.",
            decription: "",
            features: [
                "✅  Talk in channels",
                "✅  Invite friends",
                "✅  Change nickname",
            ],
        },
        {
            id: 2,
            title: "Moderator",
            note: "People who can help you manage other members in this server.",
            decription: "Everything members can do, and:",
            features: [
                "✅  Delete any messages",
                "✅  Mute people in voice chat",
                "✅  Kick/ban members",
            ],
        },
        {
            id: 3,
            title: "Manager",
            note: "Trusted leaders who can help you build the server.",
            decription: "Everything moderators can do, and:",
            features: [
                "✅  Create and delete channels",
                "✅  Create and delete roles",
                "✅  Add emoji and bots",
                "✅  Pretty much anything",
            ],
        },
    ];

    const renderItem = ({ item, index }) => {
        const { title, note, decription, features } = item;
        return (
            <View style={[Layout.fullWidth]}>
                <View style={styles.slide}>
                    <Text style={[styles.text242A31Bold16, { textAlign: 'center' }]}>{title}</Text>
                    <Text style={[styles.text242A31Medium14, { marginTop: Responsive.height(9), marginBottom: Responsive.height(15) }]}>{note}</Text>
                    {
                        !_.isEmpty(decription) && <Text style={[styles.text242A31Medium14, { marginTop: Responsive.height(15), marginBottom: Responsive.height(15) }]}>{decription}</Text>
                    }
                    {
                        features.map(item => {
                            return <Text style={[styles.text242A31Medium14, { marginBottom: Responsive.height(10) }]}>{item}</Text>
                        })
                    }
                    <View style={Layout.fill} />
                    <View style={[Layout.fullWidth, Layout.rowCenter]}>
                        <TouchableOpacity style={[Layout.fill, styles.buttonSelect, Layout.rowCenter]} onPress={() => {
                            if (indexSlider < DATA.length - 1) {
                                const nextIndex = indexSlider + 1;
                                carouselRef.current?.snapToItem(nextIndex)
                            } else {
                                console.log('fgb')
                                navigate('AddRoleStep3')
                            }
                            
                        }}>
                            <Text style={styles.textSelect}>Select</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
        <GradientBackgroundAngle style={{ position: 'absolute' }} />
        <ActionBar
            left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
            right={<View style={{ width: Responsive.height(36), height: Responsive.height(36) }} />}
            center={<Text style={styles.textTitle}>Step 2 of 3</Text>}
        />
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            style={[Layout.fill]}
        >
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={[Layout.alignItemsStart, styles.container]}
                style={[Layout.fill]}>

                <View style={{ height: Responsive.height(23) }} />
                <Text style={[Layout.fullWidth, styles.text242A31Bold16, { textAlign: 'center' }]}>Set up permissions</Text>
                <View style={{ height: Responsive.height(12) }} />
                <Text style={[Layout.fullWidth, styles.text525563Medium12, { textAlign: 'center' }]}>How powerful should this role be?{'\n'}You can always change permission later.</Text>
                <View style={{ height: Responsive.height(42) }} />

                <HorizontalProgressTabBar index={indexSlider} />

                <View style={{ height: Responsive.height(38) }} />

                <View style={[Layout.fullWidth]}>
                    <Carousel
                        ref={carouselRef}
                        data={DATA}
                        scrollEnabled={true}
                        renderItem={renderItem}
                        sliderWidth={width}
                        itemWidth={Responsive.width(320)}
                        activeSlideAlignment={'center'}
                        inactiveSlideScale={1.0}
                        onSnapToItem={(slideIndex) => setIndexSlider(slideIndex)}
                    />
                </View>


            </ScrollView>

        </KeyboardAvoidingView>
    </SafeAreaView>)
}

const HorizontalProgressTabBar = ({ index }) => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const memberSelected = index === 0
    const moderatorSelected = index === 1
    const managerSelected = index === 2
    return (
        <View style={Layout.fullWidth}>
            <View style={[Layout.rowHCenter, Layout.fullWidth, { height: Responsive.height(21) }]}>
                <View style={[Layout.fill, Layout.center]}>
                    <View style={[Layout.row, Layout.fullWidth, { height: Responsive.height(1) }]}>
                        <View style={[Layout.fill]} />
                        <View style={[Layout.fill, { backgroundColor: memberSelected ? '#525563' : (moderatorSelected ? '#E9721C' : '#DA1E28') }]} />
                    </View>
                    {
                        <View style={[Layout.rowCenter, Layout.fullWidth, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
                            <View style={{ width: Responsive.height(memberSelected ? 21 : 5), height: Responsive.height(memberSelected ? 21 : 5), backgroundColor: memberSelected ? '#34C15C' : (managerSelected ? '#DA1E28' : '#E9721C'), borderRadius: Responsive.height(10.5) }} />
                        </View>
                    }
                </View>
                <View style={[Layout.fill, Layout.center]}>
                    <View style={[Layout.row, Layout.fullWidth, { height: Responsive.height(1) }]}>
                        <View style={[Layout.fill, { backgroundColor: memberSelected ? '#525563' : (moderatorSelected ? '#E9721C' : '#DA1E28') }]} />
                        <View style={[Layout.fill, { backgroundColor: managerSelected ? '#DA1E28' : '#525563' }]} />
                    </View>
                    {
                        <View style={[Layout.rowCenter, Layout.fullWidth, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
                            <View style={{ width: Responsive.height(moderatorSelected ? 21 : 5), height: Responsive.height(moderatorSelected ? 21 : 5), backgroundColor: moderatorSelected ? '#E9721C' : (memberSelected ? '#525563' : '#DA1E28'), borderRadius: Responsive.height(10.5) }} />
                        </View>
                    }
                </View>
                <View style={[Layout.fill, Layout.center]}>
                    <View style={[Layout.row, Layout.fullWidth, { height: Responsive.height(1) }]}>
                        <View style={[Layout.fill, { backgroundColor: managerSelected ? '#DA1E28' : '#525563' }]} />
                        <View style={[Layout.fill]} />
                    </View>
                    {
                        <View style={[Layout.rowCenter, Layout.fullWidth, { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }]}>
                            <View style={{ width: Responsive.height(managerSelected ? 21 : 5), height: Responsive.height(managerSelected ? 21 : 5), backgroundColor: managerSelected ? '#DA1E28' : '#525563', borderRadius: Responsive.height(10.5) }} />
                        </View>
                    }
                </View>
            </View>
            <View height={Responsive.height(10)} />
            <View style={[Layout.rowHCenter, Layout.fullWidth]}>
                <View style={[Layout.fill, Layout.center]}>
                    <Text style={styles.text525563Medium12}>Member</Text>
                </View>
                <View style={[Layout.fill, Layout.center]}>
                    <Text style={styles.text525563Medium12}>Moderator</Text>
                </View>
                <View style={[Layout.fill, Layout.center]}>
                    <Text style={styles.text525563Medium12}>Manager</Text>
                </View>
            </View>
        </View>
    )
}

export default AddRoleStep2Container

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#272D37',
    },
    textHeader: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
    },
    text242A31Bold16: {
        fontFamily: 'Poppins-Bold',
        fontSize: Responsive.font(16),
        color: '#242A31',
        lineHeight: Responsive.height(24)
    },
    text525563Medium12: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(12),
        color: '#525563',
    },
    buttonSelect: {
        backgroundColor: '#5D5FEF',
        borderRadius: Responsive.height(14),
        height: Responsive.height(52),
    },
    textSelect: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        color: 'white',
    },
    slide: {
        backgroundColor: 'rgba(249, 251, 252, 1.0)',
        minHeight: Responsive.height(438),
        borderRadius: Responsive.height(16),
        marginHorizontal: Responsive.width(7.5),
        padding: Responsive.height(16)
    },
    text242A31Medium14: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(14),
        color: '#242A31',
        lineHeight: Responsive.height(22)
    }
});
