import * as React from "react";
import {
  Button,
  View,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./src/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

function CustomHeader({ title, navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#E0bb87"} barStyle="dark-content" />
      <View style={styles.bordas1}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image
            style={styles.img}
            source={require("./src/img/many.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bordas2}>
        <Text style={styles.textArea}>{title}</Text>
      </View>
      <View style={styles.bordas3}>
        <Image
          style={styles.imgr}
          source={require("./src/img/do-utilizador.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <CustomHeader title="Home" navigation={navigation} />
      <View style={styles.menuTop}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <CustomHeader title="Profile" />
      <View style={styles.menuTop}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
function CustomDrawarContent(props) {
  return (
    <SafeAreaView style={styles.estiloMenu}>
      <View style={styles.AvatarArea}>
        <Image
          source={require("./src/img/do-utilizador.png")}
          style={styles.AvatarImg}
        />
      </View>
      <ScrollView>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => CustomDrawarContent(props)}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="profile" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
