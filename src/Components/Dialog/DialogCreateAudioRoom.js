import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage } from '@/Components'

const DialogCreateAudioRoom = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    const [optionSelected, setOptionSelected] = useState(0);

    const getTintColorSelected = (index) => {
        return optionSelected !== index ? '#EF5DA8' : '#FFFFFF'
    }

    const getTextColorSelected = (index) => {
        return optionSelected !== index ? '#242A31' : '#FAFAFA'
    }


    return (<Modalize ref={modalizeRef} {...props}>
        <View style={[Layout.fullWidth, Layout.column, { paddingHorizontal: Responsive.width(30) }]}>
            <View style={[Layout.fullWidth, Layout.row, { marginTop: Responsive.height(36) }]}>
                <View style={Layout.fill} />
                <TouchableOpacity onPress={onPressAddATopic}>
                    <Text style={styles.textAddATopic}>+ Add a Topic</Text>
                </TouchableOpacity>
            </View>
            <View style={[Layout.fullWidth, Layout.row, styles.actionWrapper]}>
                <TouchableOpacity
                    style={optionSelected !== 0 ? styles.actionItem : styles.actionItemSelected}
                    onPress={() => setOptionSelected(0)}  >
                    <CustomImage
                        tintColor={getTintColorSelected(0)}
                        height={Responsive.height(39)}
                        width={Responsive.height(39)}
                        source={Images.icWorld} />
                    <Text style={[styles.actionText, { color: getTextColorSelected(0) }]}>Open</Text>
                    {
                        optionSelected === 0 && ((
                            <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icCheck} style={styles.checkSelected} />
                        ))
                    }
                </TouchableOpacity>
                <View style={{ width: Responsive.width(47) }} />
                <TouchableOpacity
                    style={optionSelected !== 1 ? styles.actionItem : styles.actionItemSelected}
                    onPress={() => setOptionSelected(1)} >
                    <CustomImage
                        tintColor={getTintColorSelected(1)}
                        height={Responsive.height(39)}
                        width={Responsive.height(39)}
                        source={Images.icLock} />
                    <Text style={[styles.actionText, { color: getTextColorSelected(1) }]}>Closed</Text>
                    {
                        optionSelected === 1 && ((
                            <CustomImage width={Responsive.height(20)} height={Responsive.height(20)} source={Images.icCheck} style={styles.checkSelected} />
                        ))
                    }
                </TouchableOpacity>
            </View>
            <View style={[Layout.fullWidth, Layout.column, Layout.center]}>
                <View style={[Layout.fullWidth, styles.lineItem]} />

                <Text style={styles.textLabel}>Start a room open to everyone</Text>
                <TouchableOpacity
                    style={[Layout.fullWidth, Common.button.rounded, styles.buttonLetGo]}
                    onPress={onPressLetGo}>
                    <Text style={styles.textButtonLetGo}>Let’s Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modalize>)
}

DialogCreateAudioRoom.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogCreateAudioRoom.defaultProps = {
    style: {}
}

export default DialogCreateAudioRoom


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textAddATopic: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(17.5),
        color: '#2773F1'
    },
    actionWrapper: {
        marginVertical: Responsive.height(24),
        justifyContent: 'center'
    },
    actionItem: {
        flexDirection: 'column',
        height: Responsive.height(91),
        width: Responsive.width(80),
        backgroundColor: '#E1E2EF',
        borderRadius: Responsive.height(13),
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionItemSelected: {
        flexDirection: 'column',
        height: Responsive.height(91),
        width: Responsive.width(80),
        backgroundColor: '#2773F1',
        borderRadius: Responsive.height(13),
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        fontSize: Responsive.font(12),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(14),
        marginTop: Responsive.height(13),
        color: "#ff00ff"
    },
    lineItem: {
        backgroundColor: '#D5DDE5',
        height: Responsive.height(1)
    },
    textLabel: {
        fontSize: Responsive.font(14),
        fontFamily: 'Poppins-Regular',
        lineHeight: Responsive.width(21),
        marginTop: Responsive.height(32),
        color: '#081605'
    },
    buttonLetGo: {
        height: Responsive.height(50),
        borderRadius: Responsive.height(14),
        marginTop: Responsive.height(20),
        marginBottom: Responsive.height(36),
    },
    textButtonLetGo: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 'bold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(24),
        color: '#FAFAFA'
    },
    checkSelected: {
        position: 'absolute',
        right: -Responsive.height(6),
        top: -Responsive.height(6)
    }

});