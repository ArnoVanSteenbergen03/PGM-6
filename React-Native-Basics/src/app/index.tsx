import { Ex1 } from "../components/ex1";
import { Ex2 } from "../components/ex2";
import { Ex3 } from "../components/ex3";

import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 5, backgroundColor: "#fff", marginTop: 50 }}>
      <Ex1 />
      <Ex2 />
      <Ex3 />
    </View>
  );
}
