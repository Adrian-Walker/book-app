import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BookCount from "./components/BookCount";

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);

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
        <BookCount title="Total:" count={totalCount} />
        <BookCount title="Reading:" count={readingCount} />
        <BookCount title="Read:" count={readCount} />
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
