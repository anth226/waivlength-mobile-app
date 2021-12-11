import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

import { CustomImage, TagGroup } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'


Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const Interested = () => {
    const { Layout, Gutters, Fonts, Common, Images } = useTheme()
    const { t } = useTranslation()
    const { width } = useWindowDimensions();

    const init = async () => {
        await setDefaultTheme({ theme: 'default', darkMode: false })
    }

    useEffect(() => {
        init()
    })



    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={[Layout.alignItemsStart, styles.container, { width }]}
            style={[Layout.fill]}>

            <View style={[Layout.row, Layout.fullWidth, { alignItems: 'center', marginTop: Responsive.height(28) }]}>
                <CustomImage width={Responsive.width(45)} height={Responsive.height(45)} source={Images.icInterested} />
                <Text style={styles.textStep}>
                    <Text style={styles.textCurrentStep}>5</Text>
                    /8
                </Text>
            </View>
            <Text style={styles.textHeader}>What are you{'\n'}interested in?</Text>

            <Text style={styles.textDescription}>Choose three or more</Text>

            <TagGroup
                source={['Art', 'Cryptocurrency', 'Science', 'True Crime', 'Markers',
                    'Money', 'Justice', 'Immigration', 'Technology', 'Programming',
                    'Travel', 'Mindfulness', 'Philosophy', 'Comics', 'Feminism',
                    'Basic Income', 'Gaming', 'Addiction', 'Education', 'Style',
                    'Psychology', 'Business', 'Spcae', 'Privary', 'Fiction']}
                onSelectedTagChange={(selected) => { }}
                tintColor={'#5D5FEF'}
                tagStyle={styles.tag}
                style={styles.tagGroup}
            />

            <View style={Layout.fill} />

        </ScrollView>
    )
}

export default Interested

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: Responsive.width((24))
    },
    textTitle: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#242332',
    },
    textStep: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(16),
        color: '#8C93BC',
        paddingHorizontal: Responsive.width(8)
    },
    textCurrentStep: {
        fontFamily: 'Poppins-Medium',
        fontSize: Responsive.font(19),
        color: '#5D5FEF',
    },
    textHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(24),
        lineHeight: Responsive.width(36),
        marginTop: Responsive.height(15),
        color: '#242332'
    },
    textDescription: {
        color: '#8184A3',
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(14),
        lineHeight: Responsive.width(21),
        marginTop: Responsive.height(10)
    },
    tagGroup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Responsive.height(50)
    },
    tag: {
        borderColor: '#8F95A6'
    }
});
