import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native'
import _ from 'lodash';
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';

const Avatar = ({ height, width, imageWrapperStyle, url, firstName, lastName, onPress, imageStyle, isShowDot, dotStyle, containerStyle, textStyle, isText }) => {
    const { Layout, Images } = useTheme()

    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={onPress}>
            {
                !_.isEmpty(url) ? (
                    <View style={[styles.imageWrapper, imageWrapperStyle]}>
                        <Image style={[Layout.fullSize, imageStyle]} source={{ uri: url }} resizeMode={'cover'} />
                    </View>
                ) : (
                    isText ? (<View style={[Layout.fullSize, styles.imageWrapper, imageWrapperStyle]}>
                        <View style={[Layout.fullSize, Layout.rowCenter, imageStyle]}>
                            <Text style={[styles.textStyle, textStyle]}>{!_.isNil(firstName) ? firstName : ''}</Text>
                            <Text style={[styles.textStyle, textStyle]}>{!_.isNil(lastName) ? lastName : ''}</Text>
                        </View>
                    </View>) : (
                        <View style={[Layout.fullSize, styles.imageWrapper, imageWrapperStyle]}>
                            <View style={[Layout.fullSize, Layout.rowCenter, imageStyle]}>
                                <Text style={[styles.textStyle, textStyle]}>{!_.isNil(firstName) ? firstName.charAt(0) : ''}</Text>
                                <Text style={[styles.textStyle, textStyle]}>{!_.isNil(lastName) ? lastName.charAt(0) : ''}</Text>
                            </View>
                        </View>
                    )
                )
            }
            {
                isShowDot && (
                    <View style={[styles.dotStyle, dotStyle]} />
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
    width: Responsive.height(46),
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        backgroundColor: '#BABCD9',
        height: '100%',
        width: '100%',
    },
    textStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: Responsive.font(16),
        lineHeight: Responsive.width(22),
        color: '#5D5FEF'
    },
    dotStyle: {
        width: Responsive.height(12),
        height: Responsive.height(12),
        borderRadius: Responsive.height(6),
        borderColor: '#fff',
        backgroundColor: '#1EB852',
        borderWidth: 1,
        position: 'absolute',
        right: 0,
        bottom: 0
    }
});