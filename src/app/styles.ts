import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Black,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12
  },
  content:{
    flex: 1,
    width: "100%",
  },
  image: {
    width: 64,
    height: 64
  },
  boxes: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    gap: 12
  },
  box: {
    width: "100%",
    backgroundColor: colors.Gray[600],
    borderRadius: 16
  },
  column:{
    flex: 1,
    gap: 12
  },
  filters: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    marginBottom: 12
  }
});