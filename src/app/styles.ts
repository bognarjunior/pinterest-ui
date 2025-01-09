import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Black,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 64,
    height: 64
  }
});