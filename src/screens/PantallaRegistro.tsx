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
}

export const RegisterScreen = () => {
    const navigation = useNavigation();

    const [formRegister, setFormRegister] = useState<FormRegister>({
        Name: '',
        email: '',
        phone: '',
        password: '',
    });

    const changeForm = (property: keyof FormRegister, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleRegister = (): void => {
        if (formRegister.Name === '' || formRegister.email === '' || formRegister.phone === '' || formRegister.password === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
            return;
        } 
        if (formRegister.Name.length < 3) {
            Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres.');
            return;
        }

        if (!validateEmail(formRegister.email)) {
            Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
            return;
        }
          
        if (formRegister.phone.length !== 10 || isNaN(Number(formRegister.phone))) {
            Alert.alert('Error', 'El teléfono debe ser un número de 10 dígitos.');
            return;
        }

       
        if (formRegister.password.length < 6) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
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
            
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={styles.link} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                <Text style={styles.footerText}>¿Ya tienes cuenta? <Text style={styles.linkText}>Inicia sesión</Text></Text>
            </TouchableOpacity>
        </View>
    );
};