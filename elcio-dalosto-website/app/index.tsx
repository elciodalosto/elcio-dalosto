import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "white", dark: "lightgray" }}
      headerImage={
        <Image
          source={require("@/assets/images/undraw_fatherhood_-7-i19.svg")}
          style={styles.banner}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Bem vindo a rede global do Skateboarding !
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link style={styles.links} href="/login">
          Acesse sua conta
        </Link>
      </ThemedView>
      <ThemedText>ou</ThemedText>
      <ThemedView style={styles.stepContainer}>
        
        <Link style={styles.links} href="/register">
          Registre-se
        </Link>
        <ThemedText type="defaultSemiBold">Ao registrar-se, você tem acesso a rede mundial de skatistas e passa a conhecer outros praticantes que estão espalhados pelo globo</ThemedText>
        <ThemedText type="defaultSemiBold">Também passa a ficar por dentro das manobras que estão rolando por aí, desde as clássicas até as mais recentes</ThemedText>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  banner: {
    height: 220,
    width: 300,
    bottom: 10,
    left: 100,
    position: "absolute",
  },
  links: {
    borderRadius: 7,
    backgroundColor: "royalblue",
    padding: 15,
    color: "",
    fontSize: 26,
  },
});
