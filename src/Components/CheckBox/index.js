import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
const systemFonts = [...defaultSystemFonts, 'Poppins-Regular', 'Poppins-Medium'];

const { width } = Dimensions.get('window');
const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#5D5FEF', text = '', tagsStyles, isHtml = false, ...props }) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={selected ? 'check-box' : 'check-box-outline-blank'}
        />
        {
            isHtml ? (
                <RenderHtml
                    tagsStyles={tagsStyles}
                    contentWidth={width}
                    systemFonts={systemFonts}
                    source={{ html: text }}
                />
            ) : (
                <Text style={textStyle}> {text} </Text>
            )
        }
    </TouchableOpacity>
)

export default CheckBox


const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})