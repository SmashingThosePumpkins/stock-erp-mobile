import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock ERP</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>O que é o Stock ERP?</Text>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}O Stock ERP é um conjunto de softwares realizados como trabalho de conclusão de curso
      de alunos do curso Articulado Médio-Superior de Desenvolvimento de Sistemas pela ETEC Monsenhor Antônio Magliano de Garça. </Text>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}Atualmente, existem dois softwares principais do projeto, uma aplicação web
      desenvolvida em Express, que se trata do sistema de gestão de estoque principal, e este aplicativo complementar informacional.</Text>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}O software de gestão de estoque Stock ERP começou a ser desenvolvido em junho 
      de 2022, após uma troca de tema inspirada por uma empresa local. O maior problema de dita empresa é que, pelo fato de ser um comércio,
      era difícil se ter um controle do movimento de mercadoria.</Text>
      <Text style={styles.paragraph}>{'\t'}{'\t'}{'\t'}{'\t'}A proposta principal do projeto, que irá continuar sendo desenvolvido até 2024,
      é criar uma maneira uniforme, prática e customizável de realizar o controle de estoque para comércios de todos os tamanhos.</Text>
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
});
