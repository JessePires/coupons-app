import { JSX } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SimpleCardProps } from './simpleCard.types';

const SimpleCard = (props: SimpleCardProps): JSX.Element => {
  return (
    <TouchableOpacity className="m-2 h-[85px] w-32 items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 py-2">
      {props.icon}
      <Text className="text-center text-sm font-bold">{props.name}</Text>
    </TouchableOpacity>
  );
};

export default SimpleCard;
