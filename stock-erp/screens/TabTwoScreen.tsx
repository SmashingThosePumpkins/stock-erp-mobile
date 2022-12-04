import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empresas parceiras</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>Nando Peças</Text>
      <Image style={styles.imgEstoque} source={require('../assets/images/icon.png')}/>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}A micro-empresa individual Nando Peças se trata de um comércio de
      peças automotivas usadas, fundada em 2019, e foi a empresa que originou a ideia do projeto da Stock ERP.
      </Text>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}A empresa atua num modelo de aquisição de mercadoria conhecida como
      desmanche. O modelo funciona com a compra de automóveis usados, extração de seus componentes individuais e venda
      destes por preços mais baixos.   
      </Text>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}Herculano Nunes, dono do comércio, relatou em entrevista que o maior
      problema no trabalho se trata da gestão manual do estoque. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 10,
    marginHorizontal: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imgEstoque: {
    width: '80%',
    height: 100,
    marginBottom: 30
  }
});
