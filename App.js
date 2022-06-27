import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import BookCount from "./components/BookCount";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor: "#e9e9e9",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>Book Keeper</Text>
        </View>
        <View style={{ flex: 1 }} />

        <TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 70,
            borderTopWidth: 1,
            borderTopColor: "#e9e9e9",
            flexDirection: "row",
          }}
        >
          <BookCount title="Total: " count={this.state.totalCount} />
          <BookCount title="Reading: " count={this.state.readingCount} />
          <BookCount title="Read: " count={this.state.readCount} />
        </View>

        <SafeAreaView />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#376",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
});
