import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NovaDisciplina() {
    const [backGB, setBackGB] = useState(false);
    return (
        <View style={styles.containerNovaDisciplina}>
            <View style={styles.blocoTextoND}>
                <Text style={styles.TituloND}>Entrar em nova disciplina</Text>
                <Text style={styles.subTituloND}>Peça ao professor o código da disciplina para poder entrar</Text>
                <Text style={styles.codigoND}>Código da disciplina</Text>
                <TextInput style={styles.inputCodigoND}></TextInput>
            </View>
            <View style={styles.blocoRodapeND}>
                <View style={styles.blocoButaoND}>
                    <TouchableOpacity>
                        <View style={styles.outlineNDsem}>
                            <Text style={styles.textBotaoCom}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.outlineNDcom}>
                            <Text style={styles.textBotaoSem}>Confirmar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerNovaDisciplina: {
        flex: 1,
        padding: 15,
        marginTop: 20,
    },
    blocoTextoND: {
        flex:0.5,
        marginTop: 35,
    },
    TituloND: {
        fontSize: 32,
    },
    subTituloND: {
        marginTop: 20,
        fontSize: 20,
        color: '#999'
    },
    codigoND: {
        marginTop: 30,
        fontSize: 20,
        color: '#999'
    },
    inputCodigoND: {
        fontSize: 20,
        color: '#999',
        borderColor: '#999',
        borderRadius: 7,
        borderWidth: 1,
        height: 70,
        marginTop: 10,
        padding: 15,
    },
    blocoRodapeND: {
        flex: 0.5,
        justifyContent: 'flex-end'
    },
    blocoButaoND: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 5,

    },
    outlineNDsem: {
        backgroundColor: '#fff',
        fontSize: 20,
        color: '#999',
        borderColor: '#ae1b73',
        borderRadius: 7,
        borderWidth: 1,
        width: 220,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 30,
    },
    outlineNDcom: {
        backgroundColor: '#ae1b73',
        fontSize: 20,
        color: '#999',
        borderColor: '#999',
        borderRadius: 7,
        borderWidth: 1,
        width: 220,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 30,
    },
    textBotaoCom: {
        color: '#ae1b73'
    },
    textBotaoSem: {
        color: '#fff'
    }
})