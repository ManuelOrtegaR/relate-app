import React from 'react';
import { View } from 'react-native';
import { Button, Modal, Text, useTheme } from 'react-native-paper';
import globalStyles from '../App.styles.ts';

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
  visible: boolean;
  hideModal: () => void;
}

export const ConfirmModal = (props: Props) => {
  const theme = useTheme();
  const containerStyle = { padding: 20 };
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.hideModal}
      contentContainerStyle={containerStyle}
    >
      <View
        style={{
          backgroundColor: globalStyles.colors.white,
          borderRadius: 30,
          padding: 20,
          borderWidth: 5,
          borderColor: theme.colors.primary,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20,
            color: theme.colors.primary,
          }}
        >
          {props.title}
        </Text>
        <Text style={{ fontSize: 20, color: theme.colors.primary }}>
          {props.message}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}
        >
          <Button
            icon="close"
            mode="contained"
            contentStyle={{
              height: 50,
              backgroundColor: theme.colors.tertiary,
            }}
            labelStyle={{}}
            onPress={props.onConfirm}
          >
            Confirmar
          </Button>
          <Button
            icon="cancel"
            mode="contained"
            contentStyle={{ height: 50, backgroundColor: theme.colors.primary }}
            labelStyle={{}}
            onPress={props.hideModal}
          >
            Cancelar
          </Button>
        </View>
      </View>
    </Modal>
  );
};
