import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { ActionBar, GradientBackground, BackIcon, Avatar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack } from '@/Navigators/utils'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const PinnedMessageContainer = ({ navigation }) => {
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
      firstName: "Masum",
      lastName: "Pervej",
      url: "https://picsum.photos/200/200",
      quote: "Hi! How you doing? Your last post was really cool ",
      content: "You can check out community We are still working.",
      time: "06/03/2021"
    },
    {
      id: 2,
      firstName: "Masum",
      lastName: "Pervej",
      url: "https://picsum.photos/200/200",
      quote: "Hi! How you doing? Your last post was really cool ",
      content: "You can check out community We are still working.",
      time: "06/03/2021"
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity >
        <View style={[Layout.column, { width }]}>
          <View style={[Layout.fill, Layout.row, styles.itemStyleWrapper]}>
            <View style={{ marginRight: Responsive.width(8) }}>
              <Avatar
                isShowDot={false}
                source={Images.onBoarding3}
                imageWrapperStyle={styles.avatar}
                imageStyle={styles.avatarImage}
                url={item['url']}
                textStyle={{ fontSize: Responsive.font(13), marginTop: Responsive.height(2) }}
                firstName={item['firstName']}
                lastName={item['lastName']} />
            </View>

            <View style={[Layout.fill, Layout.row]}>
              <View style={styles.viewBubbleOrtherWrapper}>
                <Text style={styles.textBubbleName}>{`${item['firstName']} ${item['lastName']}`}</Text>
                <View style={Layout.row}>
                  <View style={[{ width: Responsive.width(1), backgroundColor: '#5D5FEF' }]} />
                  <View style={{ width: Responsive.width(5) }} />
                  <Text style={styles.textBubbleQuote}>{item['quote']}</Text>
                </View>

                <Text style={styles.textBubbleOrtherWrapper}>{item['content']}</Text>
              </View>
              <View style={Layout.fill} />
            </View>
          </View>
          <Text style={styles.textItemTime}>{item['time']}</Text>
        </View>
      </TouchableOpacity>)
  };


  return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
    <GradientBackground style={{ position: 'absolute' }} />
    <ActionBar
      left={<BackIcon width={Responsive.height(36)} height={Responsive.height(36)} onPress={goBack} />}
      right={<View style={{ height: Responsive.height(36), width: Responsive.height(36) }} />}
      center={<Text style={styles.textTitle}>Pinned Messages</Text>}
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <FlatList nestedScrollEnabled={false}
        style={[Layout.fill]}
        data={DATA}
        ListHeaderComponent={<View style={{ height: Responsive.height(10) }} />}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} />

    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default PinnedMessageContainer

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
  itemStyleWrapper: {
    paddingVertical: Responsive.height(16),
    paddingHorizontal: Responsive.height(24),
  },
  avatar: {
    width: Responsive.height(26),
    height: Responsive.height(26),
    borderRadius: Responsive.height(13),
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarImage: {
    width: Responsive.height(26),
    height: Responsive.height(26),
    borderRadius: Responsive.height(13),
    backgroundColor: '#BBBEDD',
  },

  textItemTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(12),
    textAlign: 'right',
    paddingHorizontal: Responsive.height(24),
    color: '#9498AA'
  },
  viewBubbleOrtherWrapper: {
    backgroundColor: '#ffffff',
    paddingHorizontal: Responsive.width(17),
    paddingVertical: Responsive.height(8),
    borderBottomLeftRadius: Responsive.height(14),
    borderTopRightRadius: Responsive.height(14),
    borderBottomRightRadius: Responsive.height(14),
    overflow: "hidden",
    flexDirection: 'column'
  },
  textBubbleName: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#5D5FEF',
    lineHeight: Responsive.width(22),
  },
  textBubbleOrtherWrapper: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#000000',
    lineHeight: Responsive.width(22),
  },
  textBubbleQuote: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(13),
    color: '#4B525B',
    lineHeight: Responsive.width(22),
  },
  viewBubbleMeWrapper: {
    backgroundColor: '#5D5FEF',
    paddingHorizontal: Responsive.width(17),
    paddingVertical: Responsive.height(14),
    borderBottomLeftRadius: Responsive.height(14),
    borderTopLeftRadius: Responsive.height(14),
    borderBottomRightRadius: Responsive.height(14),
    overflow: "hidden",
  },
  textBubbleMeWrapper: {
    fontFamily: 'Poppins-Medium',
    fontSize: Responsive.font(14),
    color: '#ffffff',
    lineHeight: Responsive.width(22),
  },
});
