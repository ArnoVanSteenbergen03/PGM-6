import { View, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";

function Ex2() {
  const arr = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "blueberry",
    "watermelon",
    "mango",
    "pineapple",
    "peach",
  ];

  const [interval, setIntervalValue] = useState("1000");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalMs = parseInt(interval);
    if (isNaN(intervalMs) || intervalMs <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, intervalMs);

    return () => {
      clearInterval(timer);
    };
  }, [interval, arr.length]);

  return (
    <View style={{ flex: 5, backgroundColor: "#fff", marginTop: 50 }}>
      <Text style={{ fontWeight: "bold" }}>Ex 2:</Text>

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="Enter interval in ms"
        value={interval}
        onChangeText={setIntervalValue}
        keyboardType="numeric"
      />

      <Text>Current item: {arr[currentIndex]}</Text>
      <Text>Items in array: {arr.length}</Text>
    </View>
  );
}

export { Ex2 };
