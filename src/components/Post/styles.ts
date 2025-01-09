import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

export const styles = StyleSheet.create({
  container: {
  
  },
  footer:{ 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 22
  },
  title:{
    fontSize: 14,
    color: colors.White,
    fontFamily: fontFamily.bold
  }
});