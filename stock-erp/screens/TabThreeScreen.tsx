import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import DevCard from '../components/DevCard';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}Abaixo está o time de desenvolvedores do projeto do Stock ERP. Em caso de dúvidas, reclamações, feedback ou assistência,
        sinta-se livre para contatar um dos membros do time.
      </Text>
      <DevCard imagePath={require('../assets/images/joao.png')} nome="João Pedro da Silva Rodrigues" funcao='Documentação' email='joao.rodrigues292@etec.sp.gov.br'></DevCard>
      <DevCard imagePath={require('../assets/images/pablo.png')} nome="Pablo Antonio Garcia Silva Junior" funcao='Desenvolvedor full-stack' email='pablo.silva194@etec.sp.gov.br'></DevCard>
      <DevCard imagePath={require('../assets/images/matheus.png')} nome="Matheus Sanches Rodrigues" funcao='Design e planejamento' email='matheus.rodrigues225@etec.sp.gov.br'></DevCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 30,
    marginHorizontal: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
