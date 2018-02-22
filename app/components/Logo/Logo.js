import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./images/background.png')}
      style={styles.containerImage}
      resizeMode="contain"
    >
      <Image resizeMode="contain" source={require('./images/logo.png')} style={styles.logo} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
