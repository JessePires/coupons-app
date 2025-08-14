import { JSX } from 'react';
import { TextInput, View } from 'react-native';

const CustomTextInput = (): JSX.Element => {
  return (
    <View>
      <TextInput className="mx-4 mb-5 mt-4 h-12 w-[70%] rounded-xl border-[1px] border-neutral-200 bg-neutral-50" />
    </View>
  );
};

export default CustomTextInput;
