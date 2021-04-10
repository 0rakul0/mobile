import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Dash() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Questão do dia </Text>
      <Text style={styles.subtitulo}>HTML</Text>
      <Text style={styles.pergunta}>Que tipo de linguagem o HTML é?</Text>
      <View style={styles.containerPergunta}>
        <TouchableOpacity>

          <View style={styles.alternativa}>
            <Text style={styles.letraAltenativa}>A.</Text>
            <Text style={styles.textoAlternativa}>De Programação?</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.alternativa}>
            <Text style={styles.letraAltenativa}>B.</Text>
            <Text style={styles.textoAlternativa}>De Programação?</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.alternativa}>
            <Text style={styles.letraAltenativa}>C.</Text>
            <Text style={styles.textoAlternativa}>De Programação?</Text></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.alternativa}>
            <Text style={styles.letraAltenativa}>D.</Text>
            <Text style={styles.textoAlternativa}>De Programação?</Text></View>
        </TouchableOpacity>

      </View>
      <View style={styles.blocoConfirmar}>
        <Text style={styles.porcentagem}>97%</Text>
        <Text style={styles.textoPorcentagem}>dos alunos acertaram essa questão</Text>
        <View style={styles.blocoBotao}>
          <View style={styles.blocoConfirmar}>

            <TouchableOpacity style={styles.botaoConfirmar}>
              <Text style={styles.confirmar}>Confirmar</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 15,
  },
  titulo: {
    marginTop: 10,
    fontSize: 35,
  },
  subtitulo: {
    marginTop: 10,
    fontSize: 20,
  },
  pergunta: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 30,
  },
  containerPergunta: {
    marginTop: 30,
    marginBottom: 30,
  },
  alternativa: {
    marginTop: 20,
    padding: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#eeeeee',
  },
  letraAltenativa: {
    fontSize: 25,
    marginRight: 10,
  },
  textoAlternativa: {
    fontSize: 20,
  },
  blocoBotao: {
    alignItems: 'center',
    alignContent: 'center',
    width: 445,
    height: 220,
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },

  porcentagem: {
    fontSize: 50,
    color: '#40C67F'
  },
  textoPorcentagem: {
    fontSize: 27,
    color: '#40C67F'
  },
  blocoConfirmar: {
    flexDirection: 'column',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'flex-end'
  },
  botaoConfirmar: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    marginTop: 30,
    padding: 20,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#A61967'
  },
  confirmar: {
    fontSize: 20,
    color: '#fff'
  }
});