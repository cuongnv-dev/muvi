import { color, radius, spacing } from '@themes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from '../text/text';

const BACK_DROP: ViewStyle = {
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  opacity: 0.6,
};
const MODAL_WRAPPER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
const MODAL_CONTAINER: ViewStyle = {
  borderRadius: radius.m,
  // height: 150,
  width: '80%',
  backgroundColor: color.background,
  paddingHorizontal: spacing[5],
  paddingTop: spacing[6],
  paddingBottom: spacing[5],
  alignItems: 'center',
};

const BUTTON_ROW: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: spacing[5],
};

const CANCEL_BUTTON: ViewStyle = {
  marginRight: spacing[4],
  backgroundColor: color.palette.gray,
  paddingHorizontal: spacing[5],
  paddingVertical: 10,
  borderRadius: radius.m,
};

const CONFIRM_BUTTON: ViewStyle = {
  marginRight: spacing[4],
  backgroundColor: color.primary,
  paddingHorizontal: spacing[5],
  paddingVertical: 10,
  borderRadius: radius.m,
};

interface DialogProps {
  title: string;
  desc: string;
  visible: boolean;
  preset: 'confirm' | 'noti';
  confirmLabel?: string;
  onCancelPress: () => void;
  onConfirmPress?: () => void;
}

export const Dialog = ({
  visible,
  confirmLabel,
  onCancelPress,
  onConfirmPress,
  title,
  desc,
  preset,
}: DialogProps) => {
  const label = confirmLabel || 'button:confirm';
  const { t } = useTranslation();
  return (
    <Modal transparent visible={visible}>
      <View style={[StyleSheet.absoluteFill, BACK_DROP]}></View>
      <View style={MODAL_WRAPPER} pointerEvents='box-none'>
        <View style={MODAL_CONTAINER}>
          <Text text={title} preset='bold' />
          <Text
            text={desc}
            style={{ marginTop: spacing[2], textAlign: 'center' }}
          />
          <View style={BUTTON_ROW}>
            <TouchableOpacity onPress={onCancelPress} style={CANCEL_BUTTON}>
              <Text text={t('button:cancel')} preset='medium' />
            </TouchableOpacity>
            {preset === 'confirm' && (
              <TouchableOpacity onPress={onConfirmPress} style={CONFIRM_BUTTON}>
                <Text text={label} preset='medium' style={{ color: 'white' }} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
