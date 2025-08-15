import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { INPUT_BACKGROUND } from '../commons/constants';


interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string) => void;
    property: string;
    isPassword?: boolean;
}

export const InputComponent = ({ placeholder, keyboardType, changeForm, property, isPassword = false }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => changeForm(property, value)}
            secureTextEntry={isPassword}
            style={styles.inputText}
        />
    )
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_BACKGROUND,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 7
    }
})