import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const { colors, fontFamily } = theme;

const styles = StyleSheet.create({
  container: {
    
  },
  content: {
    height: 300,
    width: "100%",
    backgroundColor: colors.White,
  },
  title:{
    fontSize: 18,
    fontFamily: fontFamily.medium
  }
});