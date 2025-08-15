import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Modal, Text, View, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../../commons/constants';
import { ButtonComponent } from '../../../components/ButtonComponent';

interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[];
    resetCart: () => void;
}

export const ModalCart = ({ visible, setShowModal, cart, resetCart }: Props) => {
    const { width } = useWindowDimensions();

    const totalPay = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.total;
        });
        return total.toFixed(2);
    };

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.90
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='close' size={30} color={PRIMARY_COLOR} onPress={setShowModal} />
                        </View>
                    </View>
                    {/* muestra el contenido del carrito si hay productos*/}
                    {cart.length > 0 ? (
                        <>
                            <FlatList
                                data={cart}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.itemCart}>
                                        <Text style={{ ...styles.titleItem, width: '40%' }}>{item.name}</Text>
                                        <Text style={styles.priceItem}>x{item.quantity}</Text>
                                        <Text style={{ ...styles.priceItem, width: '30%' }}>${item.total.toFixed(2)}</Text>
                                    </View>
                                )}
                            />
                            <View style={styles.footerModal}>
                                <Text style={styles.totalText}>Total: ${totalPay()}</Text>
                                {/* el boton llama a la funcion resetCart para vaciar el carrito y cerrar el modal*/}
                                <ButtonComponent
                                    textButton="Comprar"
                                    handleLogin={resetCart}
                                />
                            </View>
                        </>
                    ) : (
                        // mensaje para cuando el carrito esta vacio
                        <View style={styles.emptyCartContainer}>
                            <Text style={styles.emptyCartText}>El carrito esta vacio.</Text>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};
