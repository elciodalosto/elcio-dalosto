import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Register() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Register</ThemedText>
      <form action="submit">
      <input type="username" placeholder="usuário ex: elcio.dalosto"/>
      <input type="password" placeholder="senha"/>
      <input type="button" style={styles.links} />
        Registre-se
      </form>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  links: {
    color: "orange",
  },
});
