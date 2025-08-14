import React, { useState } from 'react';
import { FlatList, StatusBar, View, TouchableOpacity, Alert, SafeAreaView, Text } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { CardProduct } from './components/CardProduct';
import { ModalCart } from './components/ModalCart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    const products: Product[] = [
        { id: 1, name: 'Tarjeta Gráfica NVIDIA GeForce RTX 4090', price: 1599.99, stock: 5, pathImage: 'https://m.media-amazon.com/images/I/711vU2IrEuL._AC_SL1500_.jpg' },
        { id: 2, name: 'Procesador Intel Core i9-13900K', price: 599.99, stock: 10, pathImage: 'https://www.compugamer.com.ec/gamer/110-home_default/pci913900k4090.jpg' },
        { id: 3, name: 'Memoria RAM Corsair Vengeance 32GB', price: 149.99, stock: 20, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_853427-MLA54380438504_032023-O.webp' },
        { id: 4, name: 'SSD Samsung 980 Pro 2TB', price: 179.99, stock: 15, pathImage: 'https://http2.mlstatic.com/D_Q_NP_759391-MLA47572090286_092021-O.webp' },
        { id: 5, name: 'Monitor Alienware AW3423DW 34"', price: 899.99, stock: 8, pathImage: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/monitor-alienware-aw3423dw-pdp-hero.psd?qlt=95&fit=constrain,1&hei=3470&wid=5000&fmt=jpg' },
        { id: 6, name: 'Teclado Mecánico Razer BlackWidow V4 Pro', price: 229.99, stock: 12, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_888395-MLU74523092241_022024-O.webp' },
        { id: 7, name: 'Ratón Logitech G502 HERO', price: 49.99, stock: 30, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVcWZzM-b48nqn6JjAa4T4DHP_MHL_A9kmA&s'},
    { id: 8, name: 'Auriculares HyperX Cloud II', price: 99.99, stock: 25, pathImage: 'https://universe.com.ec/wp-content/uploads/2023/10/AUDIFONOS-HyperX-Cloud-II-Gaming-4P5M0AA.jpg' },
    { id: 9, name: 'Fuente de Poder EVGA Supernova 1000 P6', price: 189.99, stock: 7, pathImage: 'https://m.media-amazon.com/images/I/71IHSNnVZBL._UF894,1000_QL80_.jpg' },
    { id: 10, name: 'Placa Base ASUS ROG Maximus Z790 Hero', price: 599.99, stock: 6, pathImage: 'https://dlcdnwebimgs.asus.com/gain/A3777166-EF70-4D33-915B-EC65CF77CAE5/w717/h525' },
    { id: 11, name: 'Disipador CPU Noctua NH-D15', price: 109.99, stock: 18, pathImage: 'https://m.media-amazon.com/images/I/91t48GBv8TL._SL1500_.jpg' },
    { id: 12, name: 'Caja para PC NZXT H7 Flow', price: 129.99, stock: 11, pathImage: 'https://m.media-amazon.com/images/I/61CTe9lywcL.jpg' },
    { id: 13, name: 'Tarjeta de Sonido Creative Sound Blaster AE-9', price: 349.99, stock: 4, pathImage: 'https://d287ku8w5owj51.cloudfront.net/images/products/hero/sound-blaster-ae-9/hero.png?width=750' },
    { id: 14, name: 'Webcam Logitech C920S Pro HD', price: 69.99, stock: 22, pathImage: 'https://www.artefacta.com/media/catalog/product/1/2/127727.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1040&width=1040&canvas=1040:1040' },
    { id: 15, name: 'Micrófono de Condensador Blue Yeti X', price: 169.99, stock: 9, pathImage: 'https://japon.vtexassets.com/arquivos/ids/167139/Microfono-Profesional-Logitech-Blue-Yeti-X.jpg?v=638681504497530000' },
    { id: 16, name: 'Silla Gamer Secretlab Titan EVO 2022', price: 549.99, stock: 3, pathImage: 'https://images.secretlab.co/turntable/tr:n-w_450/R22PU-Classic_02.jpg' },
    { id: 17, name: 'Impresora 3D Creality Ender 3 S1 Pro', price: 429.99, stock: 5, pathImage: 'https://m.media-amazon.com/images/I/41lQcszGeqL._UF894,1000_QL80_.jpg' },
    { id: 18, name: 'Hub USB-C Anker PowerExpand 8-in-1', price: 59.99, stock: 40, pathImage: 'https://i5.walmartimages.com/seo/Anker-USB-C-Hub-PowerExpand-8-in-1-Adapter-Dual-4K-HDMI-100W-Power-Delivery-1-Gbps-Ethernet-2-3-0-Data-Ports-SD-microSD-Card-Reader-MacBook-Pro-XPS-M_ef291c80-20a5-4aaf-b09c-40f922c98a5d.89e9c7ca939c13f6b38a3e1c249b5b13.jpeg' },
    { id: 19, name: 'Cable HDMI 2.1 UGREEN 8K', price: 29.99, stock: 50, pathImage: 'https://http2.mlstatic.com/D_Q_NP_727313-MLA81180014188_122024-O.webp' },
    { id: 20, name: 'Altavoces Logitech Z407', price: 79.99, stock: 14, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3Bi3gdJ03sUnEix05t6IXD7UgIuo67lnnQ&s' },
    { id: 21, name: 'Lector de Tarjetas SD UGREEN', price: 15.99, stock: 60, pathImage: 'https://m.media-amazon.com/images/I/6155TeibrLL._AC_SL1500_.jpg' },
    { id: 22, name: 'Soporte para Monitor de Escritorio', price: 39.99, stock: 25, pathImage: 'https://www.steren.com.ec/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/20042da3f/soporte-de-escritorio-para-monitores-de-hasta-32.jpg' }
];

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [cart, setCart] = useState<Cart[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);

    const updateStock = (item: Product, quantity: number) => {
        // Para buscar si el producto ya existe en el carrito
        const productExist = cart.find(cartItem => cartItem.id === item.id);

        let newCart: Cart[];

        if (productExist) {
            // si el producto ya existe actualiza la cantidad y el total
            newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    const newQuantity = cartItem.quantity + quantity;
                    if (newQuantity > item.stock) {
                        // verifica que no supere el stock disponibl3
                        Alert.alert('¡Stock insuficiente!', `Solo hay ${item.stock} unidades disponibles de ${item.name}.`);
                        return cartItem;
                    }
                    return {
                        ...cartItem,
                        quantity: newQuantity,
                        total: item.price * newQuantity
                    };
                }
                return cartItem;
            });
        } else {
            //Si el producto no existe lo agrega como un nuevo item en el carrito
            if (quantity > item.stock) {
                //verifica el stock antes de agregar al carrito
                Alert.alert('¡Stock insuficiente!', `Solo hay ${item.stock} unidades disponibles de ${item.name}.`);
                return;
            }
            newCart = [...cart, {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: quantity,
                total: item.price * quantity
            }];
        }

        setCart(newCart);

      // actualiza el contador del carrito con la cantidad total de ítems

        const newCount = newCart.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCount);
    };

    const resetCart = () => {
        // Al presionar el botón de comprar reinicia el carrito el contador y cierra el modal

        setCart([]);
        setCartCount(0);
        setModalVisible(false);
        Alert.alert('Éxito', '¡La compra se ha realizado con éxito!');
    };

    return (
        <>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
                <View style={styles.header}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TitleComponent title='Productos' />
                    </View>
                    {/*logica para desabilitar el carrito cuando este vacio */}
                    <TouchableOpacity
                        onPress={cart.length > 0 ? () => setModalVisible(!modalVisible) : () => Alert.alert('Carrito Vacío', 'Agrega productos al carrito para continuar.')}
                        style={{
                            opacity: cart.length > 0 ? 1 : 0.5,
                        }}
                        disabled={cart.length === 0}
                    >
                        <View style={styles.containerIconCart}>
                            <Icon name='shopping-cart' size={40} color={SECONDARY_COLOR} />
                            {cartCount > 0 && (
                                <View style={styles.textIconCart}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{cartCount}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardProduct item={item} updateStock={updateStock} />
                    )}
                    numColumns={2}
                    contentContainerStyle={styles.gridContainer}
                />
            </SafeAreaView>
            <ModalCart
                visible={modalVisible}
                setShowModal={() => setModalVisible(!modalVisible)}
                cart={cart}
                resetCart={resetCart}
            />
        </>
    );
};