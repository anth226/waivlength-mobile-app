import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native'
import _ from 'lodash';
import { useTheme } from '@/Hooks'
import Responsive from 'react-native-lightweight-responsive';
import { Avatar } from '@/Components'

const AvatarGroup = ({ height, containerStyle, onPress }) => {
    const { Layout, Images } = useTheme()

    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={onPress}>
            <View style={[Layout.row, { height, alignItems: 'center' }]}>
                <View style={{ height, width: height * 2.5 }}>
                    <Avatar
                        isShowDot={false}
                        imageWrapperStyle={[styles.avatar, { height, width: height, position: 'absolute', top: 0, left: 0 }]}
                        imageStyle={styles.avatarImage}
                        url={'https://picsum.photos/200/200'}
                        firstName={"A"}
                        lastName={"A"} />
                    <Avatar
                        isShowDot={false}
                        imageWrapperStyle={[styles.avatar, { height, width: height, position: 'absolute', top: 0, left: Responsive.height(height/2) }]}
                        imageStyle={styles.avatarImage}
                        url={'https://picsum.photos/200/200'}
                        firstName={"B"}
                        lastName={"B"} />
                    <Avatar
                        isShowDot={false}
                        imageWrapperStyle={[styles.avatar, { height, width: height, position: 'absolute', top: 0, left: Responsive.height(height) }]}
                        imageStyle={styles.avatarImage}
                        url={'https://picsum.photos/200/200'}
                        firstName={"B"}
                        lastName={"B"} />
                    <Avatar
                        isShowDot={false}
                        imageWrapperStyle={[styles.avatar, { height, width: height, position: 'absolute', top: 0, left: Responsive.height(height + height/2) }]}
                        imageStyle={styles.avatarImage}
                        url={'https://picsum.photos/200/200'}
                        firstName={"B"}
                        lastName={"B"} />
                    <Avatar
                        isShowDot={false}
                        imageWrapperStyle={[styles.avatar, { height, width: height, position: 'absolute', top: 0, left: Responsive.height(height * 2) }]}
                        imageStyle={[styles.avatarImage, { backgroundColor: '#f8f8f8' }]}
                        textStyle={styles.textCountStyle}
                        isText={true}
                        firstName={"50+"}
                        lastName={""} />
                </View>
                <Text style={[styles.textCountStyle, { marginLeft: Responsive.width(2 * height/3) }]}>Members</Text>
            </View>
        </TouchableOpacity>
    )
}

AvatarGroup.propTypes = {
    height: PropTypes.number
}

AvatarGroup.defaultProps = {
    height: Responsive.height(46)
}

export default AvatarGroup

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
    },
    avatar: {
        width: Responsive.height(32),
        height: Responsive.height(32),
        borderRadius: Responsive.height(16),
        borderWidth: 0,
        borderColor: '#C665F0',
        backgroundColor: '#fff'
    },
    avatarImage: {
        width: Responsive.height(28),
        height: Responsive.height(28),
        borderRadius: Responsive.height(15),
        backgroundColor: '#BBBEDD',
    },
    textCountStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: Responsive.font(12),
        lineHeight: Responsive.width(18),
        color: '#000000'
    },
});