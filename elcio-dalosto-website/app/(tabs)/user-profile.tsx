import { Collapsible } from "@/components/Collapsible";
import Header from "@/components/Header";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function UserProfile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Sections */}
      <View style={styles.sections}>
        <Collapsible title={"Informações"} style={styles.info}>
          <Collapsible title={"Bio"} style={styles.section}>
            <TouchableOpacity style={styles.section}>
              <Text style={styles.sectionTitle}>
                A bio can include: Your name Your profession Your areas of
                expertise Your unique qualities Your values Your passions
                Contact information A website or external link Your Instagram
                verification badge, if applicable
              </Text>
            </TouchableOpacity>
          </Collapsible>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.sectionTitle}>Arsenal (Tricks)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.sectionTitle}>Media (Fotos, GIFs, Vídeos)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.sectionTitle}>Relations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.sectionTitle}>Brands Liked</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.sectionTitle}>Setup</Text>
          </TouchableOpacity>
        </Collapsible>
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
