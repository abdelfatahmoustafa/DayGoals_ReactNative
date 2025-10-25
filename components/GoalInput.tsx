import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  Image,
} from "react-native";

export default function GoalInput({
  onAddGoal,
  visible = false,
  onClose,
}: {
  onAddGoal?: (goal: string) => void;
  visible?: boolean;
  onClose?: () => void;
}) {
  const [enterGoal, setEnterGoal] = useState<string>("");

  function goalInputHandler(text: string) {
    setEnterGoal(text);
  }

  const addGoalHandler = () => {
    const trimmed = enterGoal.trim();
    if (trimmed.length === 0) return;

    if (onAddGoal) {
      onAddGoal(trimmed);
    } else {
      console.log("New goal:", trimmed);
    }

    setEnterGoal("");

    if (onClose) onClose();
  };

  return (
    <Modal visible={!!visible} animationType="slide" transparent={true}>
      <View style={styles.inputCard}>
        <Image style={styles.img} source={require("../assets/goals.jpg")} />
        <TextInput
          style={styles.textInput}
          placeholder="What's your goal for today?"
          placeholderTextColor="#adb5bd"
          onChangeText={goalInputHandler}
          value={enterGoal}
          returnKeyType="done"
          onSubmitEditing={addGoalHandler}
        />
        <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
          <Text style={styles.addButtonText}>Add Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClose}
          style={[
            styles.addButton,
            { backgroundColor: "#f3f0ff", marginBottom: 20 },
          ]}
        >
          <Text style={[styles.addButtonText, { color: "#6c5ce7" }]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    color: "#2d3436",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#6c5ce7",
  },
  inputCard: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    marginTop: "auto",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#6c5ce7",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#6c5ce7",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  img:{
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
    resizeMode: 'cover',
  }
});
