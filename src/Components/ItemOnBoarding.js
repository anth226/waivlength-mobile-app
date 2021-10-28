import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'

const { width } = Dimensions.get('window');

const ItemOnBoarding = ({ flex, width, mode }) => {
  const { Layout, Images } = useTheme()
  const [sliderState, setSliderState] = useState({ currentPage: 0 });


  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <View style={[styles.container, { width, flex }]}>
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
      >
        <View style={{ width, height: width }}>
          <Image style={Layout.fullSize} source={Images.onBoarding} resizeMode={mode} />
          <View style={styles.textWrapper}>
            <Text style={styles.header}>Join The daily chalanges</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
        </View>
        <View style={{ width, height: width }}>
          <Image style={Layout.fullSize} source={Images.onBoarding} resizeMode={mode} />
          <View style={styles.textWrapper}>
            <Text style={styles.header}>Join The daily chalanges</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
        </View>
        <View style={{ width, height: width }}>
          <Image style={Layout.fullSize} source={Images.onBoarding} resizeMode={mode} />
          <View style={styles.textWrapper}>
            <Text style={styles.header}>Join The daily chalanges</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
        </View>
        <View style={{ width, height: width }}>
          <Image style={Layout.fullSize} source={Images.onBoarding} resizeMode={mode} />
          <View style={styles.textWrapper}>
            <Text style={styles.header}>Join The daily chalanges</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
        </View>
        <View style={{ width, height: width }}>
          <Image style={Layout.fullSize} source={Images.onBoarding} resizeMode={mode} />
          <View style={styles.textWrapper}>
            <Text style={styles.header}>Join The daily chalanges</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(5).keys()).map((key, index) => (
          <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
        ))}
      </View>
    </View>
  )
}

ItemOnBoarding.propTypes = {
  flex: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

ItemOnBoarding.defaultProps = {
  flex: 1,
  mode: 'contain',
  width: width,
}

export default ItemOnBoarding


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    marginHorizontal: 50
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 56
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#5D5FEF',
    marginLeft: 8,
  },
});