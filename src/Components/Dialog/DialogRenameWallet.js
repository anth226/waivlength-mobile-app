import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions, Modal } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { ScrollView } from 'react-native-gesture-handler';

const DialogRenameWallet = ({ height, width, style, modalizeRef, onPressCreate, onPressImport, ...props }) => {
    const { Layout, Images, Common } = useTheme()
    const { widthScreen, heightScreen } = useWindowDimensions();

    return (<Modalize ref={modalizeRef} {...props} modalHeight={heightScreen}
        modalStyle={{
            backgroundColor: 'transparent', elevation: 0,
        }}>
        <View style={[Layout.fill, Layout.center, {
                borderRadius: Responsive.height(14),
                backgroundColor: '#eae9ed', alignSelf: 'center',
                marginTop: Responsive.height(100),
                width: Responsive.width(270),
                height: Responsive.height(145),
            }]}>
                <Text style={styles.textAddWallet}>Rename Wallet</Text>

                <View style={[Layout.fill, { paddingHorizontal: Responsive.width(16), paddingTop: Responsive.height(21) }]}>
                    <View style={[Layout.row, styles.viewTextInputContainer]}>
                    <TextInput
                            onChangeText={text => { }}
                            editable={true}
                            placeholder={'enter your name wallet'}
                            placeholderTextColor={'#7C8093'}
                            selectTextOnFocus
                            style={[Layout.fullWidth, styles.viewTextInput]} />
                    </View>
                </View>


                <View style={{ width: Responsive.width(270), height: Responsive.height(1), backgroundColor: '#ccccd0' }} />
                <View style={Layout.rowHCenter}>
                    <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.buttonCreate]} onPress={onPressCreate}>
                        <Text style={styles.textCreate}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={{ width: Responsive.width(1), height: Responsive.height(44), backgroundColor: '#ccccd0' }} />
                    <TouchableOpacity style={[Layout.fill, Layout.rowCenter, styles.buttonImport]} onPress={onPressImport}>
                        <Text style={styles.textImport}>Update</Text>
                    </TouchableOpacity>
                </View>

            </View>


    </Modalize>)
}

DialogRenameWallet.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressCreate: PropTypes.func,
    onPressImport: PropTypes.func
}

DialogRenameWallet.defaultProps = {
    style: {}
}

export default DialogRenameWallet


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textAddWallet: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: Responsive.height(22),
        alignSelf: 'center',
        marginTop: Responsive.height(18),
    },
    textMessage: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Medium',
        color: '#525769',
        textAlign: 'center',
        marginHorizontal: Responsive.width(32),
    },
    buttonCreate: {
        height: Responsive.height(44),
    },
    buttonImport: {
        height: Responsive.height(44),
    },
    textCreate: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#007AFF'
    },
    textImport: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-Medium',
        color: '#007AFF'
    },
    viewTextInputContainer: {
        borderRadius: Responsive.height(5),
        borderWidth: 0.5,
        borderColor: '#3C3C43',
        backgroundColor: 'white',
        width: Responsive.width(238),
        height: Responsive.height(25),
    },
    viewTextInput: {
        paddingHorizontal: Responsive.width(10),
        fontSize: Responsive.font(13),
        fontFamily: 'Poppins-Regular',
        color: '#242A31',
        lineHeight: Responsive.height(18),
        height: Responsive.height(25)
    }

});