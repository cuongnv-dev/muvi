import { radius, spacing } from '@themes';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@components';
import { backdrop_path } from '@common';
import { Cast } from '@models';

interface CastListProps {
  casts: Cast[];
}

export const CastList = ({ casts }: CastListProps) => {
  return (
    <View style={{ paddingHorizontal: spacing[4], marginBottom: spacing[5] }}>
      {casts?.map((cast) => (
        <View
          key={String(cast.id)}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: spacing[2],
          }}
        >
          <Image
            source={{ uri: `${backdrop_path}${cast.profile_path}` }}
            style={{
              width: 50,
              height: 50,
              borderRadius: radius.m,
              marginRight: spacing[4],
            }}
          />
          <View>
            <Text text={cast.name} preset='bold' style={{ fontSize: 15 }} />
            <Text
              text={cast.character}
              preset='secondary'
              style={{ fontSize: 14 }}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
