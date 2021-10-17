import { color, spacing } from '@themes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Text } from '../text/text';

interface ListHeaderProps {
  title: string;
  showMore?: boolean;
  onShowMorePress?: () => void;
}

export const ListHeader = ({
  title,
  showMore,
  onShowMorePress,
}: ListHeaderProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text preset='medium' text={title} style={styles.title} />
      {showMore && (
        <TouchableWithoutFeedback>
          <View style={styles.viewMoreButton}>
            <Text
              preset='medium'
              style={styles.viewMoreText}
              text={t('label:seeAll')}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[4],
    paddingHorizontal: spacing[4],
  },
  title: {
    fontSize: 15,
  },
  viewMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 14,
    alignItems: 'center',
    paddingRight: 5,
    color: color.dim,
  },
});
