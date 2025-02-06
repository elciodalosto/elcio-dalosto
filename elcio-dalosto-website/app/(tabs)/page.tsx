import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sports() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ESPORTES DISPONÍVEIS</Text>
      <Text style={styles.title}>Bem vindo ao Perfil do Esporte</Text>
      <Text>
        Aqui você encontra os perfis dos seus atletas, lutadores ou
        praticantes da sua arte favorita
      </Text>
      <Text>Não é necessário ser praticante ativo para se cadastrar</Text>
      <Text>
        Você também pode pré-cadastrar o perfil de um atleta conhecido, que
        ainda não possua registros, e nós faremos o contato para a validação
        de permissão de exibição do perfil com o próprio dono
      </Text>
      
      <Pressable onPress={() => navigation.navigate('sport')}>
        <Text>SELECIONAR ESPORTE</Text>
      </Pressable>

      <View>
        <Pressable onPress={() => navigation.navigate('skateboard')}>
          <Text>Skateboarding</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('rollerblade')}>
          <Text>Rollerblading</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('yoga')}>
          <Text>Yoga</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('bmx')}>
          <Text>BMX</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
