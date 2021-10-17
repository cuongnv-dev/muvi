import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Text } from '../text/text';
import { useNavigation } from '@react-navigation/native';
import { color } from '@themes';
import { useTranslation } from 'react-i18next';
interface BackHeaderProps {
  title?: string;
  txTitle?: string;
}
export const BackHeader = ({ title, txTitle }: BackHeaderProps) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const headerText = txTitle ? t(txTitle) : title;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.iconButton}>
        <Icon name='arrow-left' color={color.primary} size={30} />
      </TouchableOpacity>
      <View style={styles.titleMiddle}>
        <Text preset='bold' style={styles.title} text={headerText} />
      </View>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#FEFEFE',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleMiddle: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
  },
});
