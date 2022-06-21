import React from "react";
import { View, Text } from "react-native";

function BookCount(props) {
  return (
    <View
      style={{
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>{props.title}</Text>
      <Text>{props.count}</Text>
    </View>
  );
}

export default BookCount;
