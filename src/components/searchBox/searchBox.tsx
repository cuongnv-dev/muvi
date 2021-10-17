import { Feather as Icon } from '@expo/vector-icons';
import { color, radius, spacing, typography } from '@themes';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface SearchBoxProps {
  onSearchChange?: (query: string) => void;
  value?: string;
}

export const SearchBox = ({ onSearchChange, value }: SearchBoxProps) => {
  const { t } = useTranslation();
  const [isFocus, setIsFocus] = useState(false);

  const handelSearchChange = (query: string) => {
    if (!onSearchChange) return;
    onSearchChange(query);
  };

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocus ? color.primary : color.palette.shark },
      ]}
    >
      <Icon name='search' size={20} style={styles.icon} />
      <TextInput
        defaultValue={value}
        style={styles.textInput}
        onChangeText={(value) => handelSearchChange(value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        selectionColor={color.primary}
        placeholderTextColor={color.label}
        placeholder={t('label:search')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.shark,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: spacing[3],
    borderRadius: radius.m,
    borderWidth: 1,
  },
  icon: {
    color: color.palette.maskText,
    marginHorizontal: spacing[2],
  },
  textInput: {
    flex: 1,
    marginLeft: spacing[1],
    borderLeftWidth: 1,
    borderLeftColor: color.palette.maskText,
    fontSize: 15,
    paddingHorizontal: spacing[3],
    fontFamily: typography.primary,
    color: color.text,
  },
});
