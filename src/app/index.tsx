import { View, Text } from "react-native";
import React from "react";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
    </View>
  );
};

export default Index;
