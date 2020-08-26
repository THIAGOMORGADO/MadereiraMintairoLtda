import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#e0bb87",
  },
  HomeScreen: {
    flex: 1,
  },
  menuTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgMenu: {
    width: 100,
    height: 100,
  },
  bordas1: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  bordas2: {
    flex: 2,

    justifyContent: "center",
  },
  textArea: {
    textAlign: "center",
  },
  bordas3: {
    flex: 1,
    justifyContent: "center",
  },
  imgr: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  estiloMenu: {
    flex: 1,
    backgroundColor: "#e0bb87",
    opacity: 0.5,
  },
  AvatarArea: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  AvatarImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});

export default styles;
