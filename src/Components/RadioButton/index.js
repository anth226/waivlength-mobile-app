import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RenderHtml from 'react-native-render-html';

const { width } = Dimensions.get('window');
const RadioButton = ({ selected, onPress, style, textStyle, size = 30, color = '#5D5FEF', text = '', tagsStyles, isHtml = false, ...props }) => (
    <TouchableOpacity style={[styles.radioButton, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
        />
        {
            isHtml ? (
                <RenderHtml
                    tagsStyles={tagsStyles}
                    contentWidth={width}
                    source={{ html: text }}
                />
            ) : (
                <Text style={textStyle}> {text} </Text>
            )
        }
    </TouchableOpacity>
)

export default RadioButton


const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})