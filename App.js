import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View
        style={{
          height: 70,
          borderBottomWidth: 3.5,
          borderBottomColor: "#484",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>My New Books</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          height: 70,
          borderTopWidth: 3.5,
          borderTopColor: "#484",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "25" }}> Total: </Text>
          <Text>0</Text>
        </View>

        <View
          style={{
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "25" }}> Reading: </Text>
          <Text>0</Text>
        </View>

        <View
          style={{
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: "25" }}> Read: </Text>
          <Text>0</Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
