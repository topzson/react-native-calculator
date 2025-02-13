import { Text, View, StyleSheet, StatusBar, SafeAreaView ,TouchableOpacity, Dimensions} from "react-native";

export default function Index() {
  
  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>0</Text>
        <View style={{ flexDirection: "row" }}>
        <TouchableOpacity  style={styles.button}>
      <Text style={styles.text}>text test</Text>
    </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );

  
}
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  },
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  }
});