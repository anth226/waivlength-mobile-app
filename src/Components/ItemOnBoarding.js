import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'

const { width } = Dimensions.get('window');

const ItemOnBoarding = ({ flex, width, mode }) => {
  const { Layout, Images, Fonts } = useTheme()
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
        <View style={[Layout.fill, { width, alignItems: 'center' }]}>
          <Image style={[Layout.fullWidth, { }]} source={Images.onBoarding} resizeMode={mode} />
          <View style={Layout.fill}/>
          <View style={[styles.textWrapper]}>
            <Text style={[Fonts.textCenter, styles.header]}>Join The daily chalanges</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
          <View style={Layout.fill}/>
        </View>
        <View style={[Layout.fill, { width, alignItems: 'center' }]}>
          <Image style={[Layout.fullWidth, { }]} source={Images.onBoarding2} resizeMode={mode} />
          <View style={Layout.fill}/>
          <View style={[styles.textWrapper]}>
            <Text style={[Fonts.textCenter, styles.header]}>Opportunities to win rewards</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
          <View style={Layout.fill}/>
        </View>
        <View style={[Layout.fill, { width, alignItems: 'center' }]}>
          <Image style={[Layout.fullWidth, { }]} source={Images.onBoarding3} resizeMode={mode} />
          <View style={Layout.fill}/>
          <View style={[styles.textWrapper]}>
            <Text style={[Fonts.textCenter, styles.header]}>Statastics of your growth</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
          <View style={Layout.fill}/>
        </View>
        <View style={[Layout.fill, { width, alignItems: 'center' }]}>
          <Image style={[Layout.fullWidth, { }]} source={Images.onBoarding4} resizeMode={mode} />
          <View style={Layout.fill}/>
          <View style={[styles.textWrapper]}>
            <Text style={[Fonts.textCenter, styles.header]}>Verified Articles and videos</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
          <View style={Layout.fill}/>
        </View>
        <View style={[Layout.fill, { width, alignItems: 'center' }]}>
          <Image style={[Layout.fullWidth, { }]} source={Images.onBoarding5} resizeMode={mode} />
          <View style={Layout.fill}/>
          <View style={[styles.textWrapper]}>
            <Text style={[Fonts.textCenter, styles.header]}>Earned rewards and collectibles</Text>
            <Text style={styles.paragraph}>Our systems are built to send poor quality links and articles to the</Text>
          </View>
          <View style={Layout.fill}/>
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
    marginHorizontal: 50, 
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-Medium'
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 45
  },
  paginationDots: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#5D5FEF',
    marginLeft: 8,
  },
});