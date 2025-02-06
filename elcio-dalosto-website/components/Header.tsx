import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header() {
  const dados = {
    name: "Elcio Augusto Dalosto",
    nickname: "",
    age: "37 anos",
    height: "172cm",
    weight: "63Kg",
    stance: "Goofy - (pé direito na frente - pé esquerdo na remada)",
    modality: "street/park",
    started: "2002 - 22 anos de skate",
    region: ["BR - ", "RS - ", "Taquara"],
    level: "Amateur non-competitive",
    injuries: "left foot",
  };

  const manobras = ["ollie", "flip", "heelflip", "varial flip", "360 flip", "half cab flip"];

  return (
    <View style={styles.header}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={require("@/assets/images/icon-user-profile.svg")}
        />
        <View style={styles.textInfo}>
          <Text>{dados.name}</Text>
          <Text>{dados.nickname}</Text>
          <Text>
            IDADE: <b>{dados.age}</b>
          </Text>
          <Text>
            REGIÃO: <b>{dados.region}</b>
          </Text>
          <Text>
            BASE: <b>{dados.stance}</b>
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.configButton}>
        <Text style={styles.configText}>⚙</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  textInfo: {
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nickname: {
    fontSize: 16,
    color: "gray",
  },
  age: {
    fontSize: 16,
    color: "gray",
  },
  configButton: {
    padding: 10,
  },
  configText: {
    fontSize: 24,
  },
  sections: {
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  mediaSection: {
    marginBottom: 20,
  },
  mediaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mediaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  mediaThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
});
