import { JSX } from 'react';
import { TextInput, View } from 'react-native';
import { CustomTextInputProps } from './textInput.types';

const CustomTextInput = (props: CustomTextInputProps): JSX.Element => {
  return (
    <View
      className={`mx-4 mb-5 mt-4 h-12 flex-row items-center rounded-xl border-[1px] border-neutral-200 bg-neutral-50 px-3 ${props.className}`}>
      {props.icon}
      <TextInput className="w-[95%]" />
    </View>
  );
};

export default CustomTextInput;
