import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

const ButtonNext = ({ height, width, disabled, style, onPress, iconStyle, icon }) => {
    const { Layout, Images } = useTheme()

    return (
        <TouchableOpacity
            style={[disabled ? styles.containerDisabled : styles.container, style, { height, width, borderRadius: height / 2 }]}
            disabled={disabled}
            onPress={onPress}>
            <Image style={[iconStyle]} source={icon ? icon : Images.icArrow} resizeMode={'contain'} />
        </TouchableOpacity>
    )
}

ButtonNext.propTypes = {
    height: PropTypes.any,
    width: PropTypes.any,
    icon: PropTypes.any,
    iconStyle: PropTypes.any
}

ButtonNext.defaultProps = {
    height: Responsive.height(76),
    width: Responsive.width(76),
    iconStyle: {
        height: Responsive.height(30),
        width: Responsive.width(30),
    }
}

export default ButtonNext

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5D5FEF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerDisabled: {
        backgroundColor: '#CBCBD4',
        alignItems: 'center',
        justifyContent: 'center'
    }
});