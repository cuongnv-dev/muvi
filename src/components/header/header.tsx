import { Feather as Icon } from "@expo/vector-icons";
import { color } from "@themes";
import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../text/text";
import { HeaderProps } from "./header.props";

const TITLE: TextStyle = { textAlign: "center", fontSize: 16 };
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" };
const LEFT: ViewStyle = { width: 50 };
const RIGHT: ViewStyle = { width: 50 };

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    titleStyle,
  } = props;

  return (
    <View style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftPress}>
          <View style={styles.iconButton}>
            <Icon name="chevron-left" color={color.text} size={30} />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={LEFT} />
      )}

      <View style={TITLE_MIDDLE}>
        <Text preset="bold" style={[TITLE, titleStyle]} text={headerText} />
      </View>
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress}>
          <Text>
            <Icon name="arrow-left" color="red" />
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
  },
  iconButton: {
    width: 40,
    height: 40,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
