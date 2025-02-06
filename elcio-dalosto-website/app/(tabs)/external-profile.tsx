import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  const dados = {
    name: "Elcio Augusto Dalosto",
    age: "37 anos",
    height: "172cm",
    weight: "63Kg",
    stance: "Goofy - right foot in front",
    modality: "street/park",
    started: "2002 - 22 anos de skate",
    region: ["BR-", "RS-", "Taquara"],
    level: "Amateur non-competitive",
    injuries: "left foot",
  };
  const manobras = [
    "OLLIE",
    "FLIP",
    "HEEL FLIP",
    "360 FLIP",
    "FAKIE FS 180",
    "FAKIE BS 180",
    "FAKIE BS 360 - (CABALERIAL / FULL CAB)",
    "FAKIE FS 360",
  ];
  const tricks = manobras.map((manobra) => "\n" + "- " + manobra);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Titulo</ThemedText>
      </ThemedView>
      <ThemedText>SOBRE O SKATISTA</ThemedText>
      /* transformar em mapeamento com laço */
      <Collapsible title="INFORMAÇÕES PESSOAIS">
        <ThemedText type="defaultSemiBold">NOME: {dados.name}</ThemedText>
        <ThemedText type="defaultSemiBold">IDADE: {dados.age}</ThemedText>
        <ThemedText type="defaultSemiBold">ALTURA: {dados.height}</ThemedText>
        <ThemedText type="defaultSemiBold">PESO: {dados.weight}</ThemedText>
        <ThemedText type="defaultSemiBold">BASE: {dados.stance}</ThemedText>
        <ThemedText type="defaultSemiBold">
          MODALIDADE: {dados.modality}
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          INÍCIO NO SKATE: {dados.started}
        </ThemedText>
        <ThemedText type="defaultSemiBold">REGIÃO: {dados.region}</ThemedText>
        <ThemedText type="defaultSemiBold">NÍVEL: {dados.level}</ThemedText>
        <ThemedText type="defaultSemiBold">LESÕES: {dados.injuries}</ThemedText>
      </Collapsible>
      <Collapsible title="ARSENAL DE MANOBRAS">
        {/* <ThemedText type="defaultSemiBold">{tricks}</ThemedText> */}
        <ThemedText type="defaultSemiBold">: {tricks}</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
