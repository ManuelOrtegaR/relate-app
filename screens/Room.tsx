import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import globalStyles from '../App.styles.ts';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import {
  Button,
  Icon,
  IconButton,
  TextInput,
  useTheme,
  Text,
} from 'react-native-paper';
import { RoomScreenProps } from '../navigation/types.ts';
import { useRoom } from '../domain/useRoom.ts';
import { RoomAvatars } from '../components/RoomAvatars.tsx';
import { createMessage } from '../api/chat/index.ts';
import { useChat } from '../domain/useChat.ts';
import { ChatList } from '../components/ChatList.tsx';

export const Room: React.FC<RoomScreenProps> = (props) => {
  const theme = useTheme();
  props.navigation.setOptions({
    headerTitle: `ID #${props.route.params.roomId}`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white, fontSize: 22 },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });
  const { character, roomId } = props.route.params;
  const { room, error, isLoading } = useRoom(roomId);
  const {
    data,
    error: chatError,
    isLoading: chatIsLoading,
  } = useChat(room?.chat.id || '');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (message.trim() === '') {
      return;
    }
    const data = {
      content: message,
      chatId: room?.chat.id,
    };
    const response = await createMessage(data);
    setMessage('');
  };

  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/background-chat-icon.png')}
        style={[globalStyles.backgroundImage, { width: 400 }]}
      />
      {isLoading && <Text>Loading...</Text>}
      {room && (
        <>
          <View
            style={{
              flex: 0,
              alignItems: 'center',
              marginBottom: 30,
              marginTop: 30,
              flexDirection: 'row',
              gap: 50,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                alignContent: 'center',
              }}
            >
              <Text
                style={[
                  globalStyles.title,
                  {
                    fontSize: 20,
                    fontWeight: '800',
                    color: globalStyles.colors.white,
                    marginRight: 10,
                  },
                ]}
              >
                {room.litGenre.genre}
              </Text>
              <Image
                source={{ uri: room?.location.picture }}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                alignContent: 'center',
              }}
            >
              <Text
                style={[
                  globalStyles.title,
                  {
                    fontSize: 20,
                    fontWeight: '800',
                    color: globalStyles.colors.white,
                    marginRight: 10,
                  },
                ]}
              >
                {room ? room.language.language : 'Loading...'}
              </Text>
              <Image
                source={
                  room!.language.language === 'Spanish'
                    ? require('../public/images/spain-flag.png')
                    : room!.language.language === 'English'
                      ? require('../public/images/great-britain.png')
                      : require('../public/images/france.png')
                }
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              gap: 10,
              width: '90%',
              justifyContent: 'center',
              marginBottom: 30,
            }}
          >
            {room.charactersInRoom.map((character) => (
              <View style={{ alignItems: 'center' }}>
                <RoomAvatars
                  eyeUrl={character.eyeUrl}
                  faceUrl={character.faceUrl}
                  hairUrl={character.hairUrl}
                  mouthUrl={character.mouthUrl}
                  noseUrl={character.noseUrl}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: globalStyles.colors.white,
                  }}
                >
                  {character.name}
                </Text>
              </View>
            ))}
          </View>
          {data && <ChatList messages={data.messages} />}
          <TextInput
            mode="flat"
            placeholder="Mensaje..."
            value={message}
            onChangeText={(text) => setMessage(text)}
            right={<TextInput.Icon icon="send" onPress={sendMessage} />}
            style={{
              backgroundColor: globalStyles.colors.white,
              width: '90%',
              marginBottom: 30,
              marginTop: 20,
            }}
          />
          {/* <Button
        mode="contained"
        icon="thumb-up"
        contentStyle={{ height: 40, flexDirection: 'row-reverse' }}
        labelStyle={{ fontSize: 20 }}
        style={{
          marginBottom: 30,
          marginTop: 20,
          marginRight: 30,
          alignSelf: 'flex-end',
        }}
        onPress={() => {}}
      >
        Reaccionar
      </Button> */}
        </>
      )}
    </View>
  );
};
