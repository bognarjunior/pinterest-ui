import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Black,
    padding: 12,
    paddingTop: 52
  },
  text:  {
    fontSize: 22,
    color: colors.White,
    fontFamily: fontFamily.bold
  }
});