import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { ModalProduct } from './ModalProduct';

interface Props {
    item: Product;
    updateStock: (item: Product, quantity: number) => void;
}

export const CardProduct = ({ item, updateStock }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: item.pathImage }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() => setShowModal(!showModal)}
                >
                    <Text style={styles.cardButtonText}>
                        <Icon name='add-shopping-cart' size={14} color='white' /> AGREGAR
                    </Text>
                </TouchableOpacity>
            </View>
            <ModalProduct
                visible={showModal}
                item={item}
                setShowModal={() => setShowModal(!showModal)}
                updateStock={updateStock}
            />
        </View>
    );
};