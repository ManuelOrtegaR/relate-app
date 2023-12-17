import React from 'react';
import { View } from 'react-native';
import { Button, Portal, Text, useTheme } from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { AccountScreenProps } from '../types.ts';
import { useGoogleAuth } from '../firebase/google.provider.ts';
import { useUserStore } from '../store/userStore.ts';
import { ConfirmModal } from '../components/ConfirmModal.tsx';

export const Account: React.FC<AccountScreenProps> = (props) => {
  const theme = useTheme();
  props.navigation.setOptions({
    headerTitle: `Mi cuenta`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });
  const [visible, setVisible] = React.useState(false);
  const [isLogout, setIsLogout] = React.useState(true);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const { googleSignOut } = useGoogleAuth();
  const { onLogin, onLogout, data } = useUserStore();

  const onConfirmLogout = async () => {
    console.log('confirmed logout');
    await googleSignOut();
    onLogout();
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  const onConfirmDelete = () => {
    console.log('confirmed delete');
  };

  const logoutSettings = {
    title: 'Cerrar sesión',
    message: '¿Está seguro que desea cerrar la sesión?',
    onConfirm: onConfirmLogout,
  };

  const deleteSettings = {
    title: 'Eliminar cuenta',
    message: '¿Está seguro que desea eliminar su cuenta?',
    onConfirm: onConfirmDelete,
  };

  const modalSettings = {
    title: isLogout ? logoutSettings.title : deleteSettings.title,
    message: isLogout ? logoutSettings.message : deleteSettings.message,
    onConfirm: isLogout ? logoutSettings.onConfirm : deleteSettings.onConfirm,
  };

  return (
    <View style={{ padding: 20 }}>
      <Portal>
        <ConfirmModal
          title={modalSettings.title}
          message={modalSettings.message}
          visible={visible}
          onConfirm={modalSettings.onConfirm}
          hideModal={hideModal}
        />
      </Portal>
      <Button
        icon="logout"
        mode="contained"
        loading={false}
        contentStyle={{ height: 50 }}
        labelStyle={{ fontSize: 20 }}
        style={{ marginBottom: 20 }}
        onPress={() => {
          setIsLogout(true);
          showModal();
        }}
      >
        Cerrar sesión
      </Button>
      <Button
        icon="close"
        mode="contained"
        loading={false}
        contentStyle={{ height: 50 }}
        labelStyle={{ fontSize: 20 }}
        style={{ marginBottom: 20, backgroundColor: theme.colors.tertiary }}
        onPress={() => {
          setIsLogout(false);
          showModal();
        }}
      >
        Eliminar cuenta
      </Button>
    </View>
  );
};
