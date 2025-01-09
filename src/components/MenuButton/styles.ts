import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: colors.White,
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginTop: 10
  },
  icon: {
    padding: 24,
    backgroundColor: colors.Gray[700],
    borderRadius: 22
  }
});