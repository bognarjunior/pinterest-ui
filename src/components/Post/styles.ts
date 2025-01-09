import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  footer:{ 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12
  },
  image: {
    borderRadius: 22
  },
  title:{
    fontSize: 14,
    color: colors.White,
    fontFamily: fontFamily.bold
  }
});