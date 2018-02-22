import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
});

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);
