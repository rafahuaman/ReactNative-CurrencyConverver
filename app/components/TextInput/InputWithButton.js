import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const underlayColor = color('#fff').darken(0.1);

const InputWithButton = (props) => {
  const { onPress, buttonText, editable } = props;

  const containerStyle = [styles.container];
  if (editable === false) {
    containerStyle.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyle}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
