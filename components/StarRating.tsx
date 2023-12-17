import { View } from 'react-native';
import { Icon } from 'react-native-paper';

interface Props {
  rating: number;
}

export const StarRating = ({ rating }: Props) => {
  return (
    <View style={{ flex: 0, flexDirection: 'row' }}>
      <Icon source="star" size={20} color="yellow" />
      <Icon source="star" size={20} color="yellow" />
      <Icon source="star" size={20} color="yellow" />
      <Icon source="star-outline" size={20} color="yellow" />
      <Icon source="star-outline" size={20} color="yellow" />
    </View>
  );
};
