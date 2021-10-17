import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text as ReactNativeText } from 'react-native';
import { presets } from './text.presets';
import { TextProps } from './text.props';
// import { translate } from "../../i18n"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const {
    preset = 'default',
    text,
    tx,
    children,
    style: styleOverride,
    ...rest
  } = props;
  const { t } = useTranslation();

  const style = presets[preset] || presets.default;
  const styles = [style, styleOverride];
  const i18nText = tx && t(tx);
  const content = i18nText || text || children;

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
}
