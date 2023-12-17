import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import globalStyles from '../App.styles.ts';
import { OnBoardingScreenProps } from '../types.ts';
import { Button, ProgressBar, Text, useTheme } from 'react-native-paper';
import { useState } from 'react';
import { OnBoardingSteps } from '../components/OnBoardingSteps.tsx';

export const OnBoarding: React.FC<OnBoardingScreenProps> = (props) => {
  const deviceWidth = Dimensions.get('window').width;
  const theme = useTheme();
  const [step, setStep] = useState(0.4);

  return (
    <View
      style={[
        globalStyles.container,
        {
          backgroundColor: theme.colors.tertiary,
          justifyContent: 'space-between',
        },
      ]}
    >
      <Button
        icon="close"
        contentStyle={{ height: 50, flexDirection: 'row-reverse' }}
        labelStyle={{
          color: globalStyles.colors.white,
          fontSize: 20,
        }}
        onPress={() => props.navigation.navigate('Nickname')}
        style={{ alignSelf: 'flex-end', marginTop: 50, marginRight: 20 }}
      >
        Cerrar
      </Button>
      <OnBoardingSteps step={step} />
      <View
        style={{
          flexDirection: 'row-reverse',
          marginBottom: 50,
          width: deviceWidth - 40,
          justifyContent: 'space-between',
        }}
      >
        <Button
          icon="arrow-right"
          mode="contained"
          contentStyle={{ height: 50, flexDirection: 'row-reverse' }}
          labelStyle={{
            color: globalStyles.colors.white,
            fontSize: 20,
          }}
          onPress={() => {
            if (step === 1) {
              props.navigation.navigate('Nickname');
            }
            setStep(step + 0.3);
          }}
          style={{
            alignSelf: 'flex-end',
            borderColor: globalStyles.colors.primary,
          }}
        >
          {step === 1 ? 'Comenzar' : 'Siguiente'}
        </Button>
        <Button
          icon="arrow-left"
          mode="outlined"
          contentStyle={{ height: 50 }}
          style={{
            display: step <= 0.4 ? 'none' : 'flex',
            borderColor: 'white',
          }}
          labelStyle={{
            color: globalStyles.colors.white,
            fontSize: 20,
          }}
          onPress={() => setStep(step - 0.3)}
        >
          Regresar
        </Button>
      </View>
      <ProgressBar
        progress={step}
        color={globalStyles.colors.primary}
        style={{
          height: 10,
          width: deviceWidth,
        }}
      />
    </View>
  );
};
