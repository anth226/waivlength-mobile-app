import React, { useEffect, useRef } from 'react'
import { KeyboardAvoidingView, View, Text, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomImage, ActionBar, BackIcon, GradientBackground, HorizontalProgressBar } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, goBack, navigate } from '@/Navigators/utils'

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });

const ListOfDailyChallengeContainer = ({ }) => {
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
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "I am the sunshine",
      unRead: 4,
      time: "02:17",
      type: 'top_post'
    },
    {
      id: 2,
      firstName: "Ruth",
      lastName: "Hamptom",
      url: "https://picsum.photos/200/200",
      bio: "Live, Learn, Love",
      unRead: 4,
      time: "02:17"
    },
    {
      id: 3,
      firstName: "Edgar",
      lastName: "Jones",
      url: "",
      bio: "Change ain't easy",
      unRead: 4,
      time: "02:17"
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity disabled={true}>
        <View style={[Layout.fill, Layout.column, Layout.alignItemsCenter, styles.itemStyleWrapper]}>
          <View style={[Layout.row, styles.viewBoundItem]}>

            <View style={styles.viewBoundCircle}>
              <View style={styles.viewCircle} />

              <CustomImage source={Images.icChallengeItemPurple} width={Responsive.height(81)} height={Responsive.height(87)} style={{
                position: 'absolute',
                left: Responsive.height(10), bottom: Responsive.height(5)
              }} />
            </View>

            <View style={[Layout.fill]}>
              <Text style={styles.textChallengeName} >Challenges Name</Text>
              <Text style={styles.textChallengeType} >Sucessfully verify yourself by completing KYC</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <View style={{ marginRight: Responsive.width(10), marginBottom: Responsive.height(8) }}>
                <HorizontalProgressBar progress={0.3} width={Responsive.width(82)} height={Responsive.height(18)}
                  borderRadius={Responsive.height(40)}
                  borderColor={'transparent'}
                  borderWidth={Responsive.width(2)}
                  color={'#D1D9E2'} backgroundColor={'#E3E6F6'}
                />
                <Text style={styles.textProgressBar}>1/6</Text>
              </View>

              <View>
                <CustomImage source={Images.icBgChallengeItem} width={Responsive.height(34)} height={Responsive.height(36)} />
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: Responsive.width(5), justifyContent: 'center' }}>
                  <Text style={styles.textCountXp}>10</Text>
                  <Text style={styles.textXp}>XP</Text>
                </View>

              </View>
            </View>

          </View>

        </View>

      </TouchableOpacity >
    );
  };

  return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
    <GradientBackground style={{ position: 'absolute' }} />
    <ActionBar
      left={<BackIcon onPress={goBack} width={Responsive.height(36)} height={Responsive.height(36)} />}
      center={<Text style={styles.textHeaderTitle}>Daily Challenges</Text>}
      right={<View style={{ height: Responsive.width(36), width: Responsive.width(36) }} />}
    />
    <Text style={styles.textNote}>Daily Challenges Refresh in 24 hours</Text>
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}
    >
      <FlatList nestedScrollEnabled={true}
        style={[Layout.fullWidth]}
        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={<View style={{ height: Responsive.height(18) }} />}
        ListFooterComponent={<View style={{ height: Responsive.height(65) }} />}
        ItemSeparatorComponent={() => (<View style={[styles.line, { marginBottom: Responsive.height(16) }]} />)}
        keyExtractor={(item) => item.id} />
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default ListOfDailyChallengeContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Responsive.width((24))
  },
  textHeaderTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#3B3F51',
  },
  textNote: {
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Regular',
    color: '#676C81',
    marginHorizontal: Responsive.width(20),
    marginTop: Responsive.height(14),
    marginBottom: Responsive.height(25),
  },
  textTitle: {
    fontSize: Responsive.font(16),
    fontFamily: 'Poppins-Medium',
    color: '#242332',
  },
  itemStyleWrapper: {
    borderRadius: Responsive.height(18),
    paddingHorizontal: Responsive.height(21),
  },
  viewBoundItem: {
    width: '100%', height: Responsive.height(96),
    backgroundColor: '#4D5B80',
    borderRadius: Responsive.width(16),
    alignItems: 'center'
  },
  viewBoundCircle: {
    width: Responsive.width(81), height: Responsive.height(87),
    alignItems: 'center', marginTop: Responsive.height(4),
  },
  viewCircle: {
    width: Responsive.height(67), height: Responsive.height(67),
    backgroundColor: '#EBE3FF', borderRadius: Responsive.width(67 / 2),
    alignItems: 'center', marginTop: Responsive.height(4),
  },
  textChallengeName: {
    fontSize: Responsive.font(14),
    fontFamily: 'Poppins-Medium',
    color: '#F5F5F5',
    lineHeight: Responsive.width(18),
    alignSelf: 'flex-start',
  },
  textChallengeType: {
    fontSize: Responsive.font(12),
    fontFamily: 'Poppins-Regular',
    color: '#9DAACC',
    lineHeight: Responsive.width(14),
    alignSelf: 'flex-start',
    marginTop: Responsive.height(1),
  },
  textProgressBar: {
    fontSize: Responsive.font(12),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    alignSelf: 'center',
    position: 'absolute',
  },
  textCountXp: {
    fontSize: Responsive.font(12.31),
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
    alignSelf: 'center',
    lineHeight: Responsive.height(18),
  },
  textXp: {
    fontSize: Responsive.font(7),
    fontFamily: 'Poppins-Regular',
    color: '#ffffff',
    alignSelf: 'center',
    lineHeight: Responsive.height(10),
  },
});
