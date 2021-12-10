import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

const ButtonNext = ({ height, width, disabled, style, onPress }) => {
    const { Layout, Images } = useTheme()

    return (
        <TouchableOpacity
            style={[disabled ? styles.containerDisabled : styles.container, style, { height, width, borderRadius: height / 2 }]}
            disabled={disabled}
            onPress={onPress}>
            <Image style={styles.icon} source={Images.icArrow} resizeMode={'contain'} />
        </TouchableOpacity>
    )
}

ButtonNext.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

ButtonNext.defaultProps = {
    height: Responsive.height(76),
    width: Responsive.width(76),
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
    },
    icon: {
        height: Responsive.height(30),
        width: Responsive.width(30),
    }
});