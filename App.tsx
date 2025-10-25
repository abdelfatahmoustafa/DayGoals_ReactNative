import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listGoal, setListGoal] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  function handleAddGoal(goal: string) {
    const trimmed = goal.trim();
    if (trimmed.length === 0) return;
    setListGoal((current) => [trimmed, ...current]);
  }

  function handleRemove(index: number) {
    setListGoal((current) => current.filter((_, i) => i !== index));
  }
  function openModal() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Day Goals</Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >
          <TouchableOpacity style={styles.addNewButton} onPress={openModal}>
            <Text style={styles.addNewButtonText}>Add New Goal</Text>
          </TouchableOpacity>
          <GoalInput
            onAddGoal={handleAddGoal}
            visible={modalVisible}
            onClose={closeModal}
          />

          <FlatList
            data={listGoal}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
              <GoalItem item={item} index={index} handleRemove={handleRemove} />
            )}
          />
          <Text style={styles.hint}>Long press a goal to remove it</Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f2f6ff",
  },
  header: {
    height: 120,
    backgroundColor: "#6c5ce7",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  listContainer: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  goalCard: {
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },

  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#4dabf7",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
  },
  hint: {
    textAlign: "center",
    color: "#8a8a8a",
    marginTop: 8,
    fontSize: 12,
  },
  addNewButton: {
    backgroundColor: "#b4adedff",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#6c5ce7",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    marginTop: -30,
  },
  addNewButtonText: {
    color: "#6c5ce7",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
