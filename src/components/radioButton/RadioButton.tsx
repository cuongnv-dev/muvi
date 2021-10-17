import { color, spacing } from "@themes";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Text } from "../text/text";

interface RadioButtonProps {
  onCheck: (value: string) => void;
  label: string;
  isChecked?: boolean;
  value: string;
}

export const RadioButton = ({
  onCheck,
  label,
  isChecked = false,
  value,
}: RadioButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => onCheck(value)}>
      <View style={styles.container}>
        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: isChecked ? color.primary : color.line,
            marginRight: spacing[3],
            padding: 2,
          }}
        >
          {isChecked && (
            <View
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                backgroundColor: color.primary,
              }}
            ></View>
          )}
        </View>
        <Text text={label} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
});
