import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Black
  },
  text:  {
    fontSize: 22,
    color: colors.White,
    fontFamily: fontFamily.bold
  }
});