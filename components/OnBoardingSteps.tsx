import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import globalStyles from '../App.styles.ts';

export const OnBoardingSteps = ({ step }: { step: number }) => {
  return (
    <>
      {step === 1 ? (
        <Image
          source={require('../assets/on-boarding-3.png')}
          style={{ marginTop: 100 }}
        />
      ) : step === 0.7 ? (
        <Image
          source={require('../assets/on-boarding-2.png')}
          style={{ marginTop: 100 }}
        />
      ) : (
        <Image
          source={require('../assets/on-boarding-1.png')}
          style={{ marginTop: 100 }}
        />
      )}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '60%',
        }}
      >
        {step === 1 ? (
          <Text
            variant="titleLarge"
            style={{ color: globalStyles.colors.light, fontWeight: 'bold' }}
          >
            Ninguna historia será igual,{' '}
            <Text
              variant="titleLarge"
              style={{ color: globalStyles.colors.white }}
            >
              gracias al poder de la comunidad
            </Text>
          </Text>
        ) : step === 0.7 ? (
          <Text
            variant="titleLarge"
            style={{ color: globalStyles.colors.white }}
          >
            Usando tus datos actuales con otras personas en{' '}
            <Text
              variant="titleLarge"
              style={{ color: globalStyles.colors.light, fontWeight: 'bold' }}
            >
              fábulosas historias
            </Text>
          </Text>
        ) : (
          <Text
            variant="titleLarge"
            style={{ color: globalStyles.colors.light, fontWeight: 'bold' }}
          >
            Aprende ingles conversacional{' '}
            <Text
              variant="titleLarge"
              style={{ color: globalStyles.colors.white }}
            >
              de una manera mas práctica y rápida
            </Text>
          </Text>
        )}
      </View>
    </>
  );
};
