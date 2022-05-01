import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
};



export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30, 
        marginBottom: 10,
        color: 'black'
    },
    burger:{
        width: 50,
        height: 30,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 30
    },
    menuBoton: {
        marginVertical: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-end',
        minHeight: 30
    },
    menuTexto: {
        fontSize: 20,
        color: 'black',
        textAlign: 'right'
    },
    menuIcono: {
        position: 'absolute',
        left: 0
    }


});