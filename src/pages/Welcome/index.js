import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleFirstLine}>O melhor aplicativo de receitas</Text>
          <Text style={styles.titleSecondLine}>e delivery vegano.</Text>
        </View>
      </View>
      <Image
        source={require('../../assets/garota.png')}
        style={[styles.garotaImage, { width: 500, height: 500 }]}
      />
      <View style={styles.containerForm}>
        <View style={styles.buttonContainer}>
          {/* Novo botão do Facebook */}
          <TouchableOpacity onPress={() => console.log("Facebook button pressed")} style={[styles.facebookButton, styles.buttonStyle]}>
            <Image source={require('../../assets/Logo_Facebook.png')} style={styles.facebookIcon} />
            <Text style={[styles.buttonText, { color: '#75ACFC' }]}>Facebook</Text>
          </TouchableOpacity>

          {/* Novo botão do Google */}
          <TouchableOpacity onPress={() => console.log("Google button pressed")} style={[styles.googleButton, styles.buttonStyle]}>
            <Image source={require('../../assets/Logo_Google.png')} style={styles.googleIcon} />
            <Text style={[styles.buttonText, { color: '#E03B3F' }]}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.emailButton}>
          <Image source={require('../../assets/icemail.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Continue com o Email</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.TextStyle}>
            Ao continuar, você concorda com os termos de Serviço {"\n"}
            e Políticas de Privacidade do Moo Vegan.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 47,
    marginBottom: 2,
  },
  buttonStyle: {
    display: 'flex',
    width: 151,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: 'flex-end',
    gap: 10,
  },
  googleButton: {
    backgroundColor: 'transparent',
    borderColor: '#E03B3F',
    height: 46,
  },
  facebookButton: {
    backgroundColor: 'transparent',
    borderColor: '#75ACFC',
    height: 46,
  },
  googleIcon: {
    width: 15,
    height: 15,
    marginRight: -5,
    marginBottom: 3,
  },
  facebookIcon: {
    width: 15,
    height: 15,
    marginRight: -4,
    marginBottom: 3,
  },
  emailButton: {
    backgroundColor: '#3CA388',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3CA388',
    width: 318,
    height: 46,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#F9F9F9',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
  },
  buttonIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginBottom: 2,
    flexShrink: 0,
  },
  titleContainer: {
    marginTop: 10,
  },
  titleFirstLine: {
    color: '#6B6B6B',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 5,
    marginHorizontal: 20,
  },
  titleSecondLine: {
    color: '#6B6B6B',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 0,
    marginHorizontal: 20,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  TextStyle: {
    color: '#6B6B6B',
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
    width: 318,
  },
  logo: {
    width: 150,
    height: 70,
    flexShrink: 0,
  },
  garotaImage: {
    alignSelf: 'center',
    marginTop: -60,
  },
});
