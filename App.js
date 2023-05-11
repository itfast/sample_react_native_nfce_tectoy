import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  NativeModules,
  ToastAndroid,
} from 'react-native';

import aguia from './assets/itfast.png';
import tectoy from './assets/tecToy.png';

export default function App() {
  const { It4rModule } = NativeModules;

  // https://itfast.com.br/site/help/#t=NFCE%2FaCFAbrir_NFCe.htm&rhsearch=aCFAbrir_NFCe&rhhlterm=aCFAbrir_NFCe&rhsyns=%20
  const abrirCupom = async () => {
    const ret = await It4rModule.aCFAbrir_NFCe(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    if (ret === 1) {
      ToastAndroid.show('SUCESSO ABRIR CUPOM!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('ERRO ABRIR CUPOM!', ToastAndroid.SHORT);
    }
  };

  // https://itfast.com.br/site/help/#t=NFCE%2FaCFVenderCompleto_NFCe.htm&rhsearch=aCFVenderCompleto_NFCE&rhhlterm=aCFVenderCompleto_NFCE&rhsyns=%20
  const venderItem = async () => {
    const ret = await It4rModule.aCFVenderCompleto_NFCE(
      '17.50',
      '1.00',
      '8.00',
      'D$',
      '0.00',
      '0001',
      '21050010',
      '5102',
      'UN',
      'GUARANA 2L de teste com txt quebra linha abcd1234567909876543321',
      'CEST=2300100;cEAN=123456789012;cEANTrib=123456789012;'
    );
    if (ret === 1) {
      ToastAndroid.show('SUCESSO VENDER ITEM!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('ERRO VENDER ITEM!', ToastAndroid.SHORT);
    }
  };

  // https://itfast.com.br/site/help/#t=NFCE%2FaCFTotalizar_NFCe.htm&rhsearch=aCFTotalizar_NFCe&rhhlterm=aCFTotalizar_NFCe&rhsyns=%20
  const totalizarCupom = async () => {
    const ret = await It4rModule.aCFTotalizar_NFCe('D$', '0.00');
    if (ret === 1) {
      ToastAndroid.show('SUCESSO TOTALIZAR CUPOM!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('ERRO TOTALIZAR CUPOM!', ToastAndroid.SHORT);
    }
  };

  // https://itfast.com.br/site/help/#t=NFCE%2FaCFEfetuarPagamento_NFCe.htm&rhsearch=aCFEfetuarPagamento_NFCe&rhhlterm=aCFEfetuarPagamento_NFCe&rhsyns=%20
  const pagarCupom = async () => {
    const ret = await It4rModule.aCFEfetuarPagamento_NFCe('Dinheiro', '100.00');
    if (ret === 1) {
      ToastAndroid.show('SUCESSO PAGAR CUPOM!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('ERRO PAGAR CUPOM!', ToastAndroid.SHORT);
    }
  };

  // https://itfast.com.br/site/help/#t=NFCE%2FtCFEncerrar_NFCe.htm&rhsearch=tCFEncerrar_NFCe&rhhlterm=tCFEncerrar_NFCe&rhsyns=%20
  const encerrarCupom = async () => {
    const ret = await It4rModule.tCFEncerrar_NFCe('Obrigado! Volte Sempre!!!');
    if (ret === 0) {
      ToastAndroid.show('SUCESSO ENCERRAR CUPOM!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('RETORNO DO ENCERRAMENTO' + ret, ToastAndroid.SHORT);
    }
  };

  // https://itfast.com.br/site/help/#t=NFCE%2FtCFCancelar_NFCe.htm&rhsearch=tCFCancelar_NFCe&rhhlterm=tCFCancelar_NFCe&rhsyns=%20
  const cancelarCupom = async () => {
    const ret = await It4rModule.tCFCancelar_NFCe('', '', '', '', '');
    if (ret === 0) {
      ToastAndroid.show('SUCESSO CANCELAR CUPOM!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('RETORNO DO CANCELAR' + ret, ToastAndroid.SHORT);
    }
  };

  return (
    <>
      <View
        style={[
          styles.container,
          { flexDirection: 'column', backgroundColor: '#c1c1c1' },
        ]}
      >
        <View
          style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
        >
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
            }}
          >
            <View style={styles.viewBtn}>
              <Pressable
                color='#841584'
                onPress={abrirCupom}
                style={styles.button}
              >
                <Text style={styles.text}>ABRIR CUPOM</Text>
              </Pressable>
              <Pressable
                color='#841584'
                onPress={venderItem}
                style={styles.button}
              >
                <Text style={styles.text}>VENDER ITEM</Text>
              </Pressable>
              <Pressable
                color='#841584'
                onPress={totalizarCupom}
                style={styles.button}
              >
                <Text style={styles.text}>TOTALIZAR</Text>
              </Pressable>
              <Pressable
                color='#841584'
                onPress={pagarCupom}
                style={styles.button}
              >
                <Text style={styles.text}>PAGAR</Text>
              </Pressable>
              <Pressable
                color='#841584'
                onPress={encerrarCupom}
                style={styles.button}
              >
                <Text style={styles.text}>ENCERRAR</Text>
              </Pressable>
              <Pressable
                color='#841584'
                onPress={cancelarCupom}
                style={styles.button}
              >
                <Text style={styles.text}>CANCELAR</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1 }}>
               <Image
                style={{ maxWidth: 600, maxHeight: 200, resizeMode: 'stretch' }}
                source={tectoy}
              />
              <Image
                style={{ maxWidth: 500, maxHeight: 200, resizeMode: 'stretch' }}
                source={aguia}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200,
    margin: 10,
    backgroundColor: '#841584',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  viewBtn: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
});
