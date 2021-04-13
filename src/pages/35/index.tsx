import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'

import rostoMau from '../../grupou_assets/icones/faces_avaliacao/icone_face_1.png';
import rostoTriste from '../../grupou_assets/icones/faces_avaliacao/icone_face_2.png';
import rostoNormal from '../../grupou_assets/icones/faces_avaliacao/icone_face_3.png';
import rostoAlegre from '../../grupou_assets/icones/faces_avaliacao/icone_face_4.png';
import rostoFeliz from '../../grupou_assets/icones/faces_avaliacao/icone_face_5.png';

import avatar from '../../grupou_assets/icones/icone_perfil.png'

export default function Avaliacao() {
    const [skills] = useState(
        ['Empatia', 'Liderança']
    );
    const [skillSelecionada, setSkillSelecionada] = useState([])
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>AV1 - Gestão do Design </Text>
            <Text style={styles.subtitulo}>Avaliação 360º</Text>
            <Text style={styles.pergunta}>Qual foi a sua satisfação com a atividade?</Text>
            <View style={styles.rostinhos}>
                <Image source={rostoMau} style={styles.imagem} />
                <Image source={rostoTriste} style={styles.imagem} />
                <Image source={rostoNormal} style={styles.imagem} />
                <Image source={rostoAlegre} style={styles.imagem} />
                <Image source={rostoFeliz} style={styles.imagem} />
            </View>
            <Text style={styles.pergunta}>Qual foi a sua satisfação com os membros da equipe?</Text>

            <View style={styles.containerImagem}>
                <View style={styles.avatarNome}>
                    <Image source={avatar} style={styles.avatar} />
                    <Text style={styles.nome}>NomeUser</Text>
                </View>
                <View style={styles.rostinhos}>
                    <Image source={rostoMau} style={styles.imagem} />
                    <Image source={rostoTriste} style={styles.imagem} />
                    <Image source={rostoNormal} style={styles.imagem} />
                    <Image source={rostoAlegre} style={styles.imagem} />
                    <Image source={rostoFeliz} style={styles.imagem} />
                </View>
                <Text style={styles.selecaodeskill}>Selecione 3 soft skills dessa pessoa</Text>
                <View style={styles.containerPiker}>
                <Picker
                    selectedValue={skillSelecionada}
                    onValueChange={(itemValue) => setSkillSelecionada(itemValue)
                    }>
                    {
                        skills.map(sk => {
                            return <Picker.Item label={sk} value={sk} />
                        })
                    }
                </Picker>
                <View>
                </View>
                </View>
            </View>
            <View style={styles.containerImagem}>
                <View style={styles.avatarNome}>
                    <Image source={avatar} style={styles.avatar} />
                    <Text style={styles.nome}>NomeUser</Text>
                </View>
                <View style={styles.rostinhos}>
                    <Image source={rostoMau} style={styles.imagem} />
                    <Image source={rostoTriste} style={styles.imagem} />
                    <Image source={rostoNormal} style={styles.imagem} />
                    <Image source={rostoAlegre} style={styles.imagem} />
                    <Image source={rostoFeliz} style={styles.imagem} />
                </View>
                <Text style={styles.selecaodeskill}>Selecione 3 soft skills dessa pessoa</Text>
                    <View style={styles.containerPiker}>
                <Picker
                    selectedValue={skillSelecionada}
                    onValueChange={(itemValue) => setSkillSelecionada(itemValue)
                    }>
                    {
                        skills.map(sk => {
                            return <Picker.Item label={sk} value={sk} />
                        })
                    }
                </Picker>
                <View>
                </View>
                </View>
            </View>
            <View style={styles.blocoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar}>
                    <Text style={styles.confirmar}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 15,
    },
    titulo: {
        marginTop: 10,
        fontSize: 30,
    },
    subtitulo: {
        marginTop: 10,
        fontSize: 17,
    },
    pergunta: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 25,
    },
    containerImagem: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom:15,
        borderColor: '#ccc',
    },
    rostinhos: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem: {
        height: 60,
        width: 60,
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: '#aaa'
    },
    avatarNome: {
        alignContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        margin: 10,
    },
    nome: {
        fontSize: 20,
    },
    selecaodeskill: {
        marginTop: 10,
        fontSize: 20,
    },
    containerPiker:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc'
    },
    blocoConfirmar: {
        flexDirection: 'column',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    botaoConfirmar: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        marginTop: 30,
        padding: 20,
        height: 80,
        borderRadius: 5,
        backgroundColor: '#A61967'
    },
    confirmar: {
        fontSize: 20,
        color: '#fff'
    }
});