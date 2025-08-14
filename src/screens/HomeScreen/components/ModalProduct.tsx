import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Modal, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { Product } from '../HomeScreen';


interface Props {
    visible: boolean;
    setShowModal: () => void;
    item: Product;
    updateStock: (item: Product, quantity: number) => void; 
}

export const ModalProduct = ({ visible, setShowModal, item, updateStock }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState<number>(1);

    const handleUpdateStock = () => {
        if (quantity > item.stock) {
            Alert.alert('¡Error!', 'No hay suficiente stock disponible para este producto.');
        } else {
            updateStock(item, quantity); 
            setShowModal();
            setQuantity(1);
        }
    };

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.90
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>{item.name}</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='close' size={30} color={PRIMARY_COLOR} onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.containerImageM}>
                        <Image source={{ uri: item.pathImage }} style={styles.imageModal} />
                    </View>
                    <Text style={styles.textStock}>Stock Disponible: {item.stock}</Text>
                    <View style={styles.containerQuantity}>
                        <TouchableOpacity
                            style={styles.buttonQuantity}
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            <Text style={styles.buttonQuantityText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.textQuantity}>{quantity}</Text>
                        <TouchableOpacity
                            style={styles.buttonQuantity}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Text style={styles.buttonQuantityText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonAddCart} onPress={handleUpdateStock}>
                        <Text style={styles.buttonAddCartText}>AGREGAR AL CARRITO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};