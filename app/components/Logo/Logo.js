import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends React.Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardWillShow);
    this.keyboardHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardWillHide);
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            style={[StyleSheet.absoluteFill, containerImageStyle]}
            source={require('./images/background.png')}
            resizeMode="contain"
          />

          <Animated.Image
            resizeMode="contain"
            source={require('./images/logo.png')}
            style={imageStyle}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
