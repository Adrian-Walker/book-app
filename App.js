import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BookCount from "./components/BookCount";
import { Ionicons } from "@expo/vector-icons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
    };
  }

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />

        {/* Header */}

        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderBottomColor: "grey",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>Book Keeper</Text>
        </View>

        {/* Text Input */}
        <View style={{ flex: 1 }}>
          {this.isAddNewBookVisible && (
            <View style={{ height: 50, flexDirection: "row" }}>
              <TextInput
                style={{ flex: 1, backgroundColor: "#ececec", paddingLeft: 5 }}
                placeholder="Enter Book Title"
                placeholderTextColor="grey"
              />

              {/* Check Button */}

              <TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "green",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="ios-checkmark" color="white" size={40} />
                </View>
              </TouchableOpacity>

              {/* Close Button */}

              <TouchableOpacity>
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

          {/* Plus Button */}
          <TouchableOpacity
            onPress={this.showAddNewBook}
            style={{ position: "absolute", bottom: 20, right: 20 }}
          >
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
              <Text style={{ color: "white", fontSize: 40 }}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 70,
            borderTopWidth: 0.5,
            borderTopColor: "grey",
            flexDirection: "row",
          }}
        >
          {/* Total Count */}
          <BookCount title="Total" count={this.state.totalCount} />

          {/* Reading Count */}
          <BookCount title="Reading" count={this.state.readingCount} />

          {/* Read Count */}
          <BookCount title="Read" count={this.state.readCount} />
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

export default App;
