import React, { useState } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR, TEXT_COLOR_LIGHT } from '../commons/constants';

interface FormRegister {
    Name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export const RegisterScreen = () => {
    const navigation = useNavigation();

    const [formRegister, setFormRegister] = useState<FormRegister>({
        Name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const changeForm = (property: keyof FormRegister, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
    }

    const handleRegister = (): void => {
        if (formRegister.Name === '' || formRegister.email === '' || formRegister.phone === '' || formRegister.password === '' || formRegister.confirmPassword === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
            return;
        }

        if (formRegister.password !== formRegister.confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }

        console.log('Usuario registrado:', formRegister);
        Alert.alert('Éxito', '¡Registro exitoso!.');

        navigation.dispatch(CommonActions.navigate({ name: 'Login' }));
    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <Text style={styles.title}>Regístrate aquí</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                placeholderTextColor={TEXT_COLOR_LIGHT}
                onChangeText={(value) => changeForm('Name', value)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor={TEXT_COLOR_LIGHT}
                keyboardType="email-address"
                onChangeText={(value) => changeForm('email', value)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                placeholderTextColor={TEXT_COLOR_LIGHT}
                keyboardType="phone-pad"
                onChangeText={(value) => changeForm('phone', value)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor={TEXT_COLOR_LIGHT}
                secureTextEntry={true}
                onChangeText={(value) => changeForm('password', value)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor={TEXT_COLOR_LIGHT}
                secureTextEntry={true}
                onChangeText={(value) => changeForm('confirmPassword', value)}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.link} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                <Text style={styles.footerText}>¿Ya tienes cuenta? <Text style={styles.linkText}>Inicia sesión</Text></Text>
            </TouchableOpacity>
        </View>
    );
};
