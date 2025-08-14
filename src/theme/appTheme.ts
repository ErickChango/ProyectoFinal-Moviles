import { StyleSheet } from "react-native";
import { ACCENT_COLOR, BORDER_COLOR, DIVIDER_COLOR, FOOTER_NOTE_COLOR, FOOTER_TEXT_COLOR, INPUT_BACKGROUND, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, TEXT_COLOR_DARK, TEXT_COLOR_LIGHT } from "../commons/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: PRIMARY_COLOR,
    },
    backgroundGradient: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: PRIMARY_COLOR,
        opacity: 0.8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: SECONDARY_COLOR,
    },
    link: {
        marginTop: 24,
        alignItems: 'center',
    },
    linkText: {
        color: ACCENT_COLOR,
        fontSize: 14,
        fontWeight: '500',
    },
    footerText: {
        textAlign: 'center',
        color: FOOTER_TEXT_COLOR,
        fontSize: 14,
    },
    footerNote: {
        textAlign: 'center',
        color: FOOTER_NOTE_COLOR,
        fontSize: 13,
        marginTop: 8,
        lineHeight: 18,
        letterSpacing: 0.1,
        fontStyle: 'italic',
    },
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textDescription: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        paddingVertical: 10
    },
    textRedirect: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: TERTIARY_COLOR,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
        shadowColor: TERTIARY_COLOR,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: TEXT_COLOR_DARK,
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: INPUT_BACKGROUND,
        fontSize: 16,
        color: TEXT_COLOR_LIGHT,
    },
    passwordContainer: {
        position: 'relative',
        justifyContent: 'center',
        marginBottom: 16,
    },
    passwordIcon: {
        position: 'absolute',
        right: 15,
        top: 13,
    },
    containerForm: {
        marginVertical: 10
    },
    iconForm: {
        position: 'absolute',
        bottom: 15,
        right: 10
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
        paddingTop: 30,
        position: 'relative',
    },
    containerIconCart: {
        position: 'relative',
        marginRight: 10,
    },
    textIconCart: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        minWidth: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        paddingHorizontal: 5,
    },
    homeContainer: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
    },
    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        padding: 20,
        margin: 15,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    imageModal: {
        width: 160,
        height: 160
    },
    containerImageM: {
        alignItems: 'center'
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 18,
    },
    buttonAddCart: {
        backgroundColor: TERTIARY_COLOR,
        marginTop: 15,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    buttonAddCartText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#873424',
        textAlign: 'center'
    },
    footerModal: {
        marginTop: 10,
    },
    emptyCartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    emptyCartText: {
        fontSize: 16,
        color: PRIMARY_COLOR,
    },
    headerItemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    headerItemText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'gray',
    },
    itemCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    itemName: {
        flex: 2,
        fontSize: 16,
    },
    itemPrice: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
    },
    itemQuantity: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
    },
    itemTotal: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    totalContainer: {
        alignItems: 'flex-end',
        marginTop: 10,
        paddingRight: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    buyButton: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    buyButtonText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 30,
        borderRadius: 60,
    },
    divider: {
        height: 1,
        backgroundColor: DIVIDER_COLOR,
        marginVertical: 24,
    },
    titleItem: {
        fontWeight: 'bold',
        fontSize: 14,
        color: PRIMARY_COLOR,
    },
    priceItem: {
        fontSize: 14,
        color: '#555',
        textAlign: 'right'
    },
    gridContainer: {
        paddingHorizontal: 10,
    },
    cardContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 220,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    cardContent: {
        padding: 18,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: ACCENT_COLOR,
        marginBottom: 10,
    },
    cardButton: {
        backgroundColor: TERTIARY_COLOR,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardButtonText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 1,
    },
});