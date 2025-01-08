import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Gray[800]
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  title:{
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.White,
    flex: 1,
    textAlign: "center",
    marginRight: 24
  },
  header: {
    flexDirection: "row",
  },
  close: {
    color: colors.White
  }
});