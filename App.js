import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BookCount from "./components/BookCount";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [visible, setVisible] = useState(false);

  showAddNewBook = () => {
    setVisible(true);
  };

  hideAddNewBook = () => {
    setVisible(false);
  };

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

      <View style={{ flex: 1 }}>
        {visible && (
          <View style={{ height: 50, flexDirection: "row" }}>
            <TextInput
              style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
              placeholder="Enter Book Name"
              placeholderTextColor="black"
            />

            <TouchableOpacity>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#484",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-checkmark" color="white" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideAddNewBook}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-close" color="white" size={40} />
              </View>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          onPress={showAddNewBook}
          style={{ position: "absolute", bottom: 20, right: 20 }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#484",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
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
