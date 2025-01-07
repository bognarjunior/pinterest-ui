import { theme } from "@/theme";
import { StyleSheet } from "react-native";
const { colors } = theme;

export const styles = StyleSheet.create({
  image:{
    width: 30,
    height: 30,
    borderRadius: 25
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.White
  }
});