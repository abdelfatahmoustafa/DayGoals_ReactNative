import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function GoalItem({
  item,
  index,
  handleRemove,
}: {
  item: string;
  index: number;
  handleRemove: (index: number) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.goalText} numberOfLines={2}>
        {item}
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.deleteButton,
          { opacity: pressed ? 0.7 : 1 },
        ]}
        android_ripple={{ color: "#f3f0ff", borderless: true }}
        onPress={() => handleRemove(index)}
      >
        <AntDesign name="delete" size={20} color="#e36361ff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginVertical: 6,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#6c5ce7",
  },
  goalText: {
    flex: 1,
    fontSize: 16,
    color: "#2d3436",
    marginRight: 12,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f3f0ff",
  },
});
