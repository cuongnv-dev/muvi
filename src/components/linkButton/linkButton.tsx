import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '../text/text';
import {spacing, color} from '../../themes';
import {View} from 'react-native';
import {Button} from '../button/button';

interface LinkButtonProps {
  title: string;
  link?: any;
  preset?: 'extra' | 'default';
  extraLabel?: string;
  onPress?: () => void;
}

export const LinkButton = ({
  title,
  link,
  preset = 'default',
  extraLabel,
  onPress,
}: LinkButtonProps) => {
  const navigation = useNavigation();
  if (preset === 'default') {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={link ? () => navigation.navigate(link) : onPress}>
        <Text style={styles.label} text={title} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.extraButtonContainer}>
      <Text>{extraLabel}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Text style={styles.label} text={title} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing[2],
    width: 150,
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  label: {
    marginLeft: 4,
    color: color.primary,
  },
  extraButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[5],
    flexDirection: 'row',
  },
});
