import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image } from 'react-native'
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

Responsive.setOptions({ width: 375, height: 812, enableOnlySmallSize: true });
const ActionBar = ({ height, width, style, left, right, center }) => {
    const { Layout } = useTheme()

    return (
        <View style={[Layout.row, styles.container, style, { height, width }]}>
            <View style={styles.left}>
                {left}
            </View>
            <View style={styles.center}>
                {center}
            </View>
            <View style={styles.right}>
                {right}
            </View>
        </View>
    )
}

ActionBar.propTypes = {
    height: PropTypes.any,
    width: PropTypes.any,
    left: PropTypes.element,
    right: PropTypes.element,
    center: PropTypes.element
}

ActionBar.defaultProps = {
    height: Responsive.height(45),
    width: '100%',
}

export default ActionBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: Responsive.width(24)
    },
    left: {
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    center: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    right: {
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    }
});