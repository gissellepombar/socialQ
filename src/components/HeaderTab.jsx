import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { greytext } from '../../misc/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderTab = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setActive(props.title)}>
      <Text>
        <Icon name={props.icon} size={20} color={'#FFFFFF'} />{' '}
        {props.active === props.title ? (
          <Text style={[greytext, {color: '#FFFFFF', fontWeight: 'bold'}]}>
            {props.title}
          </Text>
        ) : null}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTab;
