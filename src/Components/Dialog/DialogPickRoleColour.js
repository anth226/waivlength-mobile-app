import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, KeyboardAvoidingView, SectionList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Modalize } from 'react-native-modalize';
import { CustomImage, Avatar } from '@/Components'

const DialogPickRoleColour = ({ height, width, style, modalizeRef, onPressAddATopic, onPressLetGo, ...props }) => {
    const { Layout, Images, Common } = useTheme()

    return (<Modalize ref={modalizeRef} {...props}>
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={[Layout.fullWidth, Layout.column]}>
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(20) }]}>
                    <Text style={styles.textHeader}>Pick a color</Text>
                    <View style={Layout.fill} />
                    <TouchableOpacity style={[Layout.rowCenter, { height: Responsive.height(35), marginTop: Responsive.height(30) }]}>
                        <Text style={styles.textSave}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: Responsive.height(21) }} />
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(19), justifyContent: 'space-between' }]}>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#59B99D' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#64C97B' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#5296D5' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#925CB0' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#D53865' }]}>

                    </View>
                </View>
                <View style={{ height: Responsive.height(18) }} />
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(19), justifyContent: 'space-between' }]}>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#3D7D6C' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#438A52' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#356490' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#693985' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#9F2755' }]}>

                    </View>
                </View>
                <View style={{ height: Responsive.height(18) }} />
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(19), justifyContent: 'space-between' }]}>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#E8C545' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#D7833A' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#D55846' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#99A4A6' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#667C89' }]}>

                    </View>
                </View>

                <View style={{ height: Responsive.height(18) }} />
                <View style={[Layout.fullWidth, Layout.row, { paddingHorizontal: Responsive.width(56), justifyContent: 'space-between' }]}>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#B87F30' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#9C4A1B' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: '#8D3529' }]}>

                    </View>
                    <View style={[styles.viewColorWapper, { backgroundColor: 'transparent' }, Layout.rowCenter]}>
                        <CustomImage source={Images.icEyedropper} width={Responsive.height(29)} height={Responsive.height(29)}/>
                    </View>
                </View>
                <View style={[Layout.fullWidth, Layout.rowCenter]}>
                     <TouchableOpacity style={[{height: Responsive.height(70)}, Layout.rowCenter]}>
                         <Text style={styles.textReset}>Reset</Text>
                     </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </Modalize>)
}

DialogPickRoleColour.propTypes = {
    modalizeRef: PropTypes.any,
    height: PropTypes.any,
    width: PropTypes.any,
    style: PropTypes.any,
    onPressAddATopic: PropTypes.func,
    onPressLetGo: PropTypes.func
}

DialogPickRoleColour.defaultProps = {
    style: {}
}

export default DialogPickRoleColour


const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textHeader: {
        fontSize: Responsive.font(20),
        fontFamily: 'Poppins-Bold',
        lineHeight: Responsive.width(22),
        color: '#242A31',
        marginTop: Responsive.height(40),
    },
    textSave: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        lineHeight: Responsive.width(22),
        color: '#5D5FEF',
    },
    viewColorWapper: {
        width: Responsive.width(45),
        height: Responsive.width(45),
        borderRadius: Responsive.width(45 / 2),
        backgroundColor: 'green'
    },
    textReset: {
        fontSize: Responsive.font(16),
        fontFamily: 'Poppins-SemiBold',
        lineHeight: Responsive.width(24),
        color: '#242A31',
    }

});