import React, { useState } from 'react';
import { StatusBar, Text, View, Alert, TouchableOpacity, TextInput, Image } from 'react-native';
import { styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ACCENT_COLOR, PRIMARY_COLOR, TEXT_COLOR_LIGHT } from '../commons/constants';

interface FormLogin {
    username: string;
    password: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

const users: User[] = [
    { id: 1, name: 'Erick Chango', username: 'Daxe', password: '123456' },
    { id: 2, name: 'Anthony Ruiz', username: 'Ruiz', password: '654321' }
];

export const LoginScreen = () => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const navigation = useNavigation();

    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    }

    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.username && user.password == formLogin.password);
        return existUser;
    }

    const handleLogin = (): void => {
        if (formLogin.username == '' || formLogin.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }

        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        }
        
        console.log(formLogin);

        navigation.dispatch(
            CommonActions.navigate({
                name: 'HomeScreen',
            })
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <Text style={styles.title}>Iniciar Sesión</Text>

            <Image
                source={{ uri: 'https://img.freepik.com/vector-premium/ilustracion-vectorial-plana-administrador_1033579-56472.jpg' }}
                style={styles.logo}
            />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Usuario'
                    placeholderTextColor={TEXT_COLOR_LIGHT}
                    keyboardType='default'
                    onChangeText={(value) => changeForm('username', value)}
                />
            
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Contraseña'
                        placeholderTextColor={TEXT_COLOR_LIGHT}
                        keyboardType='default'
                        onChangeText={(value) => changeForm('password', value)}
                        secureTextEntry={hiddenPassword}
                    />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        size={24}
                        color={ACCENT_COLOR}
                        style={styles.passwordIcon}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                <Text style={styles.linkText}>No tienes una cuenta? Regístrate ahora</Text>
            </TouchableOpacity>
        </View>
    )
}
