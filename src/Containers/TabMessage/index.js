import React, { useEffect, useRef } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleContainer, MessageContainer, AudioContainer } from '@/Containers'

import { CustomImage, ActionBar, Avatar, GradientBackground, ButtonNext } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'



Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const TabMessageContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Common, Images } = useTheme()
  const { t } = useTranslation()
  const { width } = useWindowDimensions();

  const init = async () => {
    await setDefaultTheme({ theme: 'default', darkMode: false })
  }


  useEffect(() => {
    init()
  })
  const DATA_STORY = [
    {
      id: 1,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    },
    {
      id: 2,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    },
    {
      id: 3,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    },
    {
      id: 4,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    },
    {
      id: 5,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    },
    {
      id: 6,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    },
    {
      id: 7,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨"
    }
  ]
  const DATA = [
    {
      id: 1,
      firstName: "Linnie",
      lastName: "Summers",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨",
      unRead: "+4",
      time: "02:17"
    },
    {
      id: 2,
      firstName: "Social",
      lastName: "Community",
      url: "https://picsum.photos/200/200",
      bio: "You: Hey ! Look at that ...",
      unRead: "+4",
      time: "02:17",
      isChatRoom: true
    },
    {
      id: 3,
      firstName: "Edgar",
      lastName: "Jones",
      url: "",
      bio: "Great, Let’s start ...✨",
      unRead: "4",
      time: "02:17"
    },
    {
      id: 4,
      firstName: "Carlos",
      lastName: "Daniels",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨",
      unRead: "1",
      time: "02:17"
    },
    {
      id: 5,
      firstName: "Carlos",
      lastName: "Daniels",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨",
      unRead: "1",
      time: "02:17"
    },
    {
      id: 6,
      firstName: "Carlos",
      lastName: "Daniels",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨",
      unRead: "1",
      time: "02:17"
    },
    {
      id: 7,
      firstName: "Carlos",
      lastName: "Daniels",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨",
      unRead: "1",
      time: "02:17"
    },
    {
      id: 8,
      firstName: "Carlos",
      lastName: "Daniels",
      url: "https://picsum.photos/200/200",
      bio: "Great, Let’s start ...✨",
      unRead: "1",
      time: "02:17"
    },
  ];

  const renderItemStory = ({ item }) => {

    return (<View style={Layout.colVCenter}>
      <Avatar
        dotStyle={styles.dotStyle}
        isShowDot={false}
        source={Images.onBoarding3}
        imageWrapperStyle={styles.avatarStory}
        imageStyle={styles.avatarImageStory}
        url={item['url']}
        firstName={item['firstName']}
        lastName={item['lastName']} />
      <Text style={styles.textItemNameStory}>{`${item['firstName']}`}</Text>
    </View>)
  }

  const renderItem = ({ item }) => {
    let isChatRoom = item['isChatRoom']
    return (
      <TouchableOpacity style={{}} onPress={() => isChatRoom ? navigate('GroupConversation') : navigate('Conversation')}>
        <View style={[Layout.fullWidth, Layout.column, Layout.alignItemsCenter, styles.itemWapper]}>
          <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter]}>
            <Avatar
              dotStyle={styles.dotStyle}
              isShowDot={!isChatRoom}
              source={Images.onBoarding3}
              imageWrapperStyle={styles.avatar}
              imageStyle={styles.avatarImage}
              url={item['url']}
              firstName={item['firstName']}
              lastName={item['lastName']} />
            <View style={[Layout.fill, Layout.column, { marginLeft: Responsive.width(10) }]}>
              <Text style={styles.textItemName}>{`${item['firstName']} ${item['lastName']}`}</Text>
              <Text style={styles.textItemDescription}>{item['bio']}</Text>
              {
                isChatRoom && (
                  <Text style={styles.textItemLabelChatRoom}>{`@ - Chat Room`}</Text>
                )
              }
            </View>
            <View style={[Layout.column]}>
              <Text style={styles.textItemBadgeUnread}>{`${item['unRead']}`}</Text>
              <Text style={styles.textItemTime}>{item['time']}</Text>
            </View>
          </View>
        </View>

      </TouchableOpacity >
    );
  };

  return (<SafeAreaView edges={['top']} style={[Layout.fill, styles.parentContainer]} >
    <GradientBackground style={{ position: 'absolute' }} />
    <ActionBar
      left={<View style={{ width: Responsive.height(40), height: Responsive.height(40) }} />}
      center={<Text style={styles.textTitle}>Community Servers</Text>}
      right={<View style={Layout.row}>
        <CustomImage width={Responsive.height(40)} height={Responsive.height(40)} source={Images.icActionSetting} onPress={() => navigate('SettingMessage')} />
      </View>}
    />
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      style={[Layout.fill]}>
      <View style={{ height: Responsive.height(10) }} />
      <View style={[Layout.fullWidth]}>
        <FlatList
          data={DATA_STORY}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: Responsive.width(16) }}
          ItemSeparatorComponent={() => (<View style={{ width: Responsive.width(8) }} />)}
          ListHeaderComponent={
            <View style={Layout.colVCenter}>
              <View style={styles.addStoryWrapper}>
                <CustomImage source={Images.icPlus} tintColor={'#5D5FEF'} width={Responsive.height(15)} height={Responsive.height(15)} style={{ alignSelf: 'center' }} />
              </View>
              <Text style={styles.textItemNameStory}>{`Your Story`}</Text>
            </View>
          }
          keyExtractor={(item, index) => index}
          renderItem={renderItemStory} />
      </View>
      <View style={{ height: Responsive.height(10) }} />
      <View style={[Layout.fullWidth, styles.lineItem]}></View>
      <View style={[Layout.fullWidth, Layout.row]}>
        <View style={{ width: Responsive.width(29) }} />
        <View style={[Layout.fill, styles.searchStyle]}>
          <View style={[Layout.fullWidth, Layout.row, { alignItems: 'center' }]}>
            <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icSearch} />
            <TextInput
              onChangeText={text => { }}
              editable={true}
              placeholder={'Search for messeges'}
              placeholderTextColor={'#7C8093'}
              selectTextOnFocus
              style={[Layout.fullWidth, Common.textInput, styles.inputText]}
            />
          </View>
        </View>
        <View style={{ width: Responsive.width(29) }} />
      </View>
      <FlatList nestedScrollEnabled={false}
        style={[Layout.fill, { marginTop: Responsive.height(5), marginHorizontal: Responsive.width(16) }]}
        data={DATA}
        ListHeaderComponent={<View style={{ height: Responsive.height(15) }} />}
        ItemSeparatorComponent={() => (<View style={{ height: Responsive.height(15) }} />)}
        ListFooterComponent={<View style={{ height: Responsive.height(15) }} />}
        renderItem={renderItem}
        keyExtractor={(item, index) => index} />

      <View style={[Layout.row, styles.floatingActionWrapper, { bottom: 0 }]}>
        <ButtonNext disabled={false} width={Responsive.height(56)} height={Responsive.height(56)}
          iconStyle={{
            width: Responsive.height(19),
            height: Responsive.height(18)
          }}
          onPress={() => navigate('NewMessage')}
          icon={Images.icMessage} />
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>)
}

export default TabMessageContainer

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  textTitle: {
    fontSize: Responsive.font(20),
    fontFamily: 'Poppins-Bold',
    color: '#272D37'
  },
  searchStyle: {
    height: Responsive.height(48),
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: Responsive.height(24),
    borderWidth: 0,
    marginTop: Responsive.width(17),
    justifyContent: 'center',
    paddingHorizontal: Responsive.width(20)
  },
  inputText: {
    height: Responsive.height(48),
    borderBottomWidth: 0,
    marginLeft: Responsive.width(10),
    justifyContent: 'center',
    fontFamily: 'NotoSans-Regular',
  },
  itemWapper: {
    paddingHorizontal: Responsive.width(24),
    height: Responsive.height(90),
    backgroundColor: '#FFFFFF',
    borderRadius: Responsive.height(16)
  },
  avatar: {
    width: Responsive.height(50),
    height: Responsive.height(50),
    borderRadius: Responsive.height(25),
    borderWidth: 2,
    borderColor: '#C665F0',
  },
  avatarImage: {
    width: Responsive.height(50),
    height: Responsive.height(50),
    borderRadius: Responsive.height(25),
    backgroundColor: '#BBBEDD',
  },
  dotStyle: {
    right: Responsive.height(0.1),
    bottom: Responsive.height(3),
  },
  textItemName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(16),
    lineHeight: Responsive.width(22),
    color: '#242A31'
  },
  textItemDescription: {
    fontFamily: 'Poppins-Light',
    fontSize: Responsive.font(13),
    lineHeight: Responsive.width(22),
    color: '#8C97A7'
  },
  textItemLabelChatRoom: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(13),
    lineHeight: Responsive.width(22),
    color: '#8C97A7'
  },
  textItemBadgeUnread: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(11),
    lineHeight: Responsive.width(16),
    color: '#fff',
    backgroundColor: '#5D5FEF',
    width: Responsive.height(18),
    height: Responsive.height(18),
    borderRadius: Responsive.height(9),
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'flex-end'
  },
  textItemTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: Responsive.font(11),
    lineHeight: Responsive.width(16),
    color: '#8F9CA9',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginTop: Responsive.height(12)
  },
  lineItem: {
    backgroundColor: '#D5DDE5',
    height: Responsive.height(1)
  },
  avatarStory: {
    width: Responsive.height(65),
    height: Responsive.height(65),
    borderRadius: Responsive.height(33),
    borderWidth: 2,
    borderColor: '#C665F0',
  },
  avatarImageStory: {
    width: Responsive.height(56),
    height: Responsive.height(56),
    borderRadius: Responsive.height(30),
    backgroundColor: '#BBBEDD',
  },
  addStoryWrapper: {
    width: Responsive.height(65),
    height: Responsive.height(65),
    borderRadius: Responsive.height(33),
    borderWidth: 2,
    borderColor: '#BBBEDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Responsive.width(8)
  },
  textItemNameStory: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Responsive.font(12),
    color: '#242A31'
  },
  floatingActionWrapper: {
    marginBottom: Responsive.width(27),
    marginRight: Responsive.width(24),
    position: 'absolute',
    right: 0
}
});
