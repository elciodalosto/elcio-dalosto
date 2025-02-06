import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MediaGrid() {
  return (
    <ScrollView>
      Media Grid
      {/* Recent Media */}
      <View style={styles.mediaSection}>
        <Text style={styles.mediaTitle}>Recentes (Vídeos)</Text>
        <View style={styles.mediaRow}>
          {/* Replace with dynamic images */}
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              style={styles.mediaThumbnail}
              source={require("@/assets/images/reshot-icon-video-camera.svg")}
            />
          ))}
        </View>
        <Text style={styles.mediaTitle}>Fotos / GIFs</Text>
        <View style={styles.mediaRow}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              style={styles.mediaThumbnail}
              source={require("@/assets/images/reshot-icon-camera-photography.svg")}
            />
          ))}
        </View>
      </View>
    </ScrollView>
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
    