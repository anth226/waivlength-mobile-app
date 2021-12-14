import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native'
import _ from 'lodash';
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

const Avatar = ({ height, width, style, url, firstName, lastName, onPress, imageStyle }) => {
    const { Layout, Images } = useTheme()

    return (
        <TouchableOpacity
            style={[styles.container, style, { height, width, borderRadius: height / 2 }]}
            onPress={onPress}>
            {
                !_.isEmpty(url) ? (
                    <View style={[{ width, height, borderRadius: height / 2 }, imageStyle]}>
                        <Image style={[Layout.fill, { borderRadius: height / 2 }, imageStyle]} source={{ uri: url }} resizeMode={'cover'} />
                    </View>
                ) : (
                    <View style={[Layout.fill, Layout.rowCenter]}>
                        <Text style={styles.textStyle}>{!_.isNil(firstName) ? firstName.charAt(0) : ''}</Text>
                        <Text style={styles.textStyle}>{!_.isNil(lastName) ? lastName.charAt(0) : ''}</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

Avatar.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

Avatar.defaultProps = {
    height: Responsive.height(46),
    width: Responsive.width(46),
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BABCD9'
    },
    textStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#5D5FEF'
    }
});