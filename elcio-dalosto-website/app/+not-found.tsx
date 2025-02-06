import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '404 - You have just been drawn with the unlucky number. Welcome to Nothing Realm!' }} />
      
      <ThemedView style={styles.container}>
        
        <ThemedText type="title">There is nothing here for you... this is the place where nothing happens until you select another path to navigate... you may picture it like that spiritual place called limbo, oblivion or 'umbral' for some religious people...</ThemedText>
        
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Click or Tap here to be raptured to that enlightened place called <b>Home</b></ThemedText>
        </Link>
      
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
