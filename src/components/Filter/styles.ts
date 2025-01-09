import { StyleSheet } from "react-native";
import { theme } from "@/theme";
const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 6,
  },
  text: {
    color: colors.White,
    fontSize: 16,
    fontFamily: fontFamily.medium  
  },
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: colors.White
  }
});