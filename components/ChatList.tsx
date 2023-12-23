import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface Props {
  messages: Message[];
}

interface Message {
  chatId: string;
  content: string;
  conversationId: string | null;
  createdAt: string;
  id: string;
  userId: string;
}

export const ChatList = (props: Props) => {
  const { messages } = props;
  const theme = useTheme();
  return (
    <ScrollView
      style={{ width: '100%', marginLeft: 30 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {messages.map((message) => (
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              {message.createdAt}
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              {message.content}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
