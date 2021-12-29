import React, { useRef, useEffect } from 'react'
import { StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Modalize } from 'react-native-modalize';
import { OnBoardingContainer, LoginContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './MainNavigator'
import AuthNavigator from './AuthNavigator'
import { navigationRef } from './utils'
import { EVENTS } from '@/Constants';
import EventBus from 'react-native-event-bus';
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils'

import {
  CustomImage,
  DialogCreateAudioRoom,
  DialogGroupConversationOption,
  DialogGroupConversationInvite,
  DialogGroupConversationEvent,
  DialogGroupConversationNotification,
  DialogGroupConversationLeaveGroup,
  DialogAddWallet,
  DialogRenameWallet,
  DialogAssetTileWallet,
  DialogHistoryTileWallet,
  DialogExchangeSetting,
  DialogSelectToken,
  DialogConfirmSwapStep1,
  DialogConfirmSwapStep2,
  DialogFindOtherLpToken,
} from '@/Components'
import Responsive from 'react-native-lightweight-responsive';

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Images, Common } = useTheme()
  const { colors } = NavigationTheme
  const modalizeCreateAudioRoomRef = useRef(null);
  const modalizeGroupConversationOptionRef = useRef(null);
  const modalizeGroupConversationInviteRef = useRef(null);
  const modalizeGroupConversationEventRef = useRef(null);
  const modalizeGroupConversationNotificationRef = useRef(null);
  const modalizeGroupConversationLeaveGroupRef = useRef(null);
  const modalizeAddWalletRef = useRef(null);
  const modalizeRenameWalletRef = useRef(null);
  const modalizeAssetTileWalletRef = useRef(null);
  const modalizeHistoryTileWalletRef = useRef(null);
  const modalizeExchangeSettingRef = useRef(null);
  const modalizeSelectTokenRef = useRef(null);
  const modalizeConfirmSwapStep1Ref = useRef(null);
  const modalizeConfirmSwapStep2Ref = useRef(null);
  const modalizeFindOtherLpTokenRef = useRef(null);

  const onOpenAudioRoomDialog = () => {
    modalizeCreateAudioRoomRef.current?.open();
  };

  const onCloseAudioRoomDialog = () => {
    modalizeCreateAudioRoomRef.current?.close();
  };

  const onOpenGroupConversationOptionDialog = () => {
    modalizeGroupConversationOptionRef.current?.open();
  };

  const onCloseAGroupConversationOptionDialog = () => {
    modalizeGroupConversationOptionRef.current?.close();
  };

  const onOpenGroupConversationInviteDialog = () => {
    modalizeGroupConversationInviteRef.current?.open();
  };

  const onCloseAGroupConversationInviteDialog = () => {
    modalizeGroupConversationInviteRef.current?.close();
  };

  const onOpenGroupConversationEventDialog = () => {
    modalizeGroupConversationEventRef.current?.open();
  };

  const onCloseAGroupConversationEventDialog = () => {
    modalizeGroupConversationEventRef.current?.close();
  };

  const onOpenGroupConversationNotificationDialog = () => {
    modalizeGroupConversationNotificationRef.current?.open();
  };

  const onCloseAGroupConversationNotificationDialog = () => {
    modalizeGroupConversationNotificationRef.current?.close();
  };

  const onOpenGroupConversationLeaveGroupDialog = () => {
    modalizeGroupConversationLeaveGroupRef.current?.open();
  };

  const onCloseAGroupConversationLeaveGroupDialog = () => {
    modalizeGroupConversationLeaveGroupRef.current?.close();
  };

  const onOpenAddWalletDialog = () => {
    modalizeAddWalletRef.current?.open();
  };

  const onCloseAddWalletDialog = () => {
    modalizeAddWalletRef.current?.close();
  };

  const onOpenRenameWalletDialog = () => {
    modalizeRenameWalletRef.current?.open();
  };

  const onCloseRenameWalletDialog = () => {
    modalizeRenameWalletRef.current?.close();
  };

  const onOpenAssetTileWalletDialog = () => {
    modalizeAssetTileWalletRef.current?.open();
  };

  const onCloseAssetTileWalletDialog = () => {
    modalizeAssetTileWalletRef.current?.close();
  };

  const onOpenHistoryTileWalletDialog = () => {
    modalizeHistoryTileWalletRef.current?.open();
  };

  const onCloseHistoryTileWalletDialog = () => {
    modalizeHistoryTileWalletRef.current?.close();
  };

  const onOpenExchangeSettingDialog = () => {
    modalizeExchangeSettingRef.current?.open();
  };

  const onCloseExchangeSettingDialog = () => {
    modalizeExchangeSettingRef.current?.close();
  };

  const onOpenSelectTokenDialog = () => {
    modalizeSelectTokenRef.current?.open();
  };

  const onCloseSelectTokenDialog = () => {
    modalizeSelectTokenRef.current?.close();
  };

  const onOpenConfirmSwapStep1Dialog = () => {
    modalizeConfirmSwapStep1Ref.current?.open();
  };

  const onCloseConfirmSwapStep1Dialog = () => {
    modalizeConfirmSwapStep1Ref.current?.close();
  };

  const onOpenConfirmSwapStep2Dialog = () => {
    modalizeConfirmSwapStep2Ref.current?.open();
  };

  const onCloseConfirmSwapStep2Dialog = () => {
    modalizeConfirmSwapStep2Ref.current?.close();
  };

  const onOpenFindOtherLpTokenDialog = () => {
    modalizeFindOtherLpTokenRef.current?.open();
  };

  const onCloseFindOtherLpTokenDialog = () => {
    modalizeFindOtherLpTokenRef.current?.close();
  };

  useEffect(() => {
    EventBus.getInstance().addListener(EVENTS.OPEN_CREATE_AUDIO_ROOM_DIALOG, onOpenAudioRoomDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_OPTION_DIALOG, onOpenGroupConversationOptionDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_INVITE_DIALOG, onOpenGroupConversationInviteDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_EVENT_DIALOG, onOpenGroupConversationEventDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_NOTIFICATION_DIALOG, onOpenGroupConversationNotificationDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_GROUP_CONVERSATION_LEAVE_GROUP_DIALOG, onOpenGroupConversationLeaveGroupDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_ADD_WALLET_DIALOG, onOpenAddWalletDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_RENAME_WALLET_DIALOG, onOpenRenameWalletDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_ASSET_TILE_WALLET_DIALOG, onOpenAssetTileWalletDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_HISTORY_TILE_WALLET_DIALOG, onOpenHistoryTileWalletDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_EXCHANGE_SETTING_DIALOG, onOpenExchangeSettingDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_SELECT_TOKEN_DIALOG, onOpenSelectTokenDialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_CONFIRM_SWAP_STEP1_DIALOG, onOpenConfirmSwapStep1Dialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_CONFIRM_SWAP_STEP2_DIALOG, onOpenConfirmSwapStep2Dialog)
    EventBus.getInstance().addListener(EVENTS.OPEN_FIND_OTHER_LP_TOKEN_DIALOG, onOpenFindOtherLpTokenDialog)
    return () => {
      EventBus.getInstance().removeListener(onOpenAudioRoomDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationOptionDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationInviteDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationEventDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationNotificationDialog)
      EventBus.getInstance().removeListener(onOpenGroupConversationLeaveGroupDialog)
      EventBus.getInstance().removeListener(onOpenAddWalletDialog)
      EventBus.getInstance().removeListener(onOpenRenameWalletDialog)
      EventBus.getInstance().removeListener(onOpenAssetTileWalletDialog)
      EventBus.getInstance().removeListener(onOpenHistoryTileWalletDialog)
      EventBus.getInstance().removeListener(onOpenExchangeSettingDialog)
      EventBus.getInstance().removeListener(onOpenSelectTokenDialog)
      EventBus.getInstance().removeListener(onOpenConfirmSwapStep1Dialog)
      EventBus.getInstance().removeListener(onOpenConfirmSwapStep2Dialog)
      EventBus.getInstance().removeListener(onOpenFindOtherLpTokenDialog)
    };
  });


  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={[Layout.fill, { backgroundColor: colors.card }]}
    >
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="OnBoarding" component={OnBoardingContainer} /> */}
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <DialogCreateAudioRoom
        handlePosition="inside"
        modalizeRef={modalizeCreateAudioRoomRef}
        adjustToContentHeight={true}
        onPressAddATopic={() => {

        }}
        onPressLetGo={() => {
          onCloseAudioRoomDialog();
          navigate('CreateNewAudioRoom');
        }} />
      <DialogGroupConversationOption
        handlePosition="inside"
        modalizeRef={modalizeGroupConversationOptionRef}
        modalTopOffset={Responsive.height(35)} />
      <DialogGroupConversationInvite
        handlePosition="inside"
        modalTopOffset={Responsive.height(35)}
        modalizeRef={modalizeGroupConversationInviteRef} />
      <DialogGroupConversationEvent
        handlePosition="inside"
        modalTopOffset={Responsive.height(35)}
        modalizeRef={modalizeGroupConversationEventRef} />
      <DialogGroupConversationNotification
        handlePosition="inside"
        adjustToContentHeight={true}
        modalizeRef={modalizeGroupConversationNotificationRef} />
      <DialogGroupConversationLeaveGroup
        handlePosition="inside"
        adjustToContentHeight={true}
        modalizeRef={modalizeGroupConversationLeaveGroupRef} />
      <DialogAddWallet
        withHandle={false}
        handlePosition="inside"
        adjustToContentHeight={true}
        modalizeRef={modalizeAddWalletRef}
        modalStyle={{ borderTopLeftRadius: Responsive.height(40), borderTopRightRadius: Responsive.height(40) }}
        onPressCreate={() => {
          onCloseAddWalletDialog();
        }}
        onPressImport={() => {
          onCloseAddWalletDialog();
        }}
      />
      <DialogRenameWallet
        withHandle={false}
        handlePosition="inside"
        modalizeRef={modalizeRenameWalletRef}
        modalStyle={{ borderRadius: Responsive.height(14) }}
        onPressCreate={() => {
          onCloseRenameWalletDialog();
        }}
        onPressImport={() => {
          onCloseRenameWalletDialog();
        }}
      />
      <DialogAssetTileWallet
        handlePosition="inside"
        modalizeRef={modalizeAssetTileWalletRef}
        adjustToContentHeight={true}
        modalStyle={{ borderRadius: Responsive.height(29) }}
        onPressSend={() => {
          onCloseAssetTileWalletDialog();
        }}
        onPressSwap={() => {
          onCloseAssetTileWalletDialog();
        }}
      />
      <DialogHistoryTileWallet
        handlePosition="inside"
        modalizeRef={modalizeHistoryTileWalletRef}
        adjustToContentHeight={true}
        modalStyle={{ borderTopLeftRadius: Responsive.height(29), borderTopRightRadius: Responsive.height(29)}}
        onPressClose={() => {
          onCloseHistoryTileWalletDialog();
        }}
      />
      <DialogExchangeSetting
        handlePosition="inside"
        modalizeRef={modalizeExchangeSettingRef}
        adjustToContentHeight={true}
        modalStyle={{ borderTopLeftRadius: Responsive.height(29), borderTopRightRadius: Responsive.height(29)}}
        onPressClose={() => {
          onCloseExchangeSettingDialog();
        }}
      />
      <DialogSelectToken
        handlePosition="inside"
        modalizeRef={modalizeSelectTokenRef}
        modalStyle={{ borderTopLeftRadius: Responsive.height(29), borderTopRightRadius: Responsive.height(29)}}
        onPressClose={() => {
          onCloseSelectTokenDialog();
        }}
      />
      <DialogConfirmSwapStep1
        handlePosition="inside"
        modalizeRef={modalizeConfirmSwapStep1Ref}
        modalStyle={{ borderTopLeftRadius: Responsive.height(29), borderTopRightRadius: Responsive.height(29)}}
        onPressClose={() => {
          onCloseConfirmSwapStep1Dialog();
        }}
      />
      <DialogConfirmSwapStep2
        handlePosition="inside"
        modalizeRef={modalizeConfirmSwapStep2Ref}
        modalStyle={{ borderTopLeftRadius: Responsive.height(29), borderTopRightRadius: Responsive.height(29)}}
        onPressClose={() => {
          onCloseConfirmSwapStep2Dialog();
        }}
      />
      <DialogFindOtherLpToken
        handlePosition="inside"
        modalizeRef={modalizeFindOtherLpTokenRef}
        modalStyle={{ borderTopLeftRadius: Responsive.height(29), borderTopRightRadius: Responsive.height(29)}}
        onPressClose={() => {
          onCloseFindOtherLpTokenDialog();
        }}
      />

    </SafeAreaProvider>
  )
}

export default ApplicationNavigator


