import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

import backgroundImage from '../../grupou_assets/grafismos/grafismo_backgroud.png'

import milton from '../../grupou_assets/img/milton.png';
import rostoTriste from '../../grupou_assets/icones/faces_avaliacao/icone_face_2.png';
import rostoNormal from '../../grupou_assets/icones/faces_avaliacao/icone_face_3.png';
import rostoAlegre from '../../grupou_assets/icones/faces_avaliacao/icone_face_4.png';
import rostoFeliz from '../../grupou_assets/icones/faces_avaliacao/icone_face_5.png';

import likendin from '../../grupou_assets/icones/logo_linkedin.png'
import instagram from '../../grupou_assets/icones/logo_instagram.png'
import facebook from '../../grupou_assets/icones/logo_facebook.png'

import dashboard from '../../grupou_assets/icones/icone_dashboard.png'
import skills from '../../grupou_assets/icones/icone_skills.png'
import perfil from '../../grupou_assets/icones/icone_perfil.png'
import disciplina from '../../grupou_assets/icones/icone_disciplinas.png'
import grupos from '../../grupou_assets/icones/icone_grupos.png'



export default function Grupos() {
    return (
        <ScrollView >
            <View style={styles.container}>
                <Image source={backgroundImage} style={styles.backImage}></Image>
                <Text style={styles.textoTitulo}>Grupos</Text>
                <View style={styles.blocoGrupo}>
                    <View style={styles.blocoTitulo}>
                        <View>
                            <Text style={styles.subTitulo}>Gestão do Desing</Text>
                            <Text style={styles.textoNota}>AV1</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.outLineBotao}>
                                <Text style={styles.textoBotao}>
                                    Ver mais
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.rostos}>
                            <Image source={milton} style={styles.imagem} />
                            <Image source={rostoTriste} style={styles.imagem} />
                            <Image source={rostoNormal} style={styles.imagem} />
                            <Image source={rostoAlegre} style={styles.imagem} />
                            <Image source={rostoFeliz} style={styles.imagem} />
                        </View>
                        <View>
                            <Text style={styles.textoTarefas}>Tarefas concluidas</Text>
                            <View style={styles.blocoExperience}>
                                <View style={styles.experience}></View>
                                <Text style={styles.textoExperience}>78%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.blocoGrupo}>
                    <View style={styles.blocoTitulo}>
                        <View>
                            <Text style={styles.subTitulo}>Gestão do Desing</Text>
                            <Text style={styles.textoNota}>AV1</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.outLineBotao}>
                                <Text style={styles.textoBotao}>
                                    Ver mais
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.rostos}>
                            <Image source={milton} style={styles.imagem} />
                            <Image source={rostoTriste} style={styles.imagem} />
                            <Image source={rostoNormal} style={styles.imagem} />
                            <Image source={rostoAlegre} style={styles.imagem} />
                            <Image source={rostoFeliz} style={styles.imagem} />
                        </View>
                        <View>
                            <Text style={styles.textoTarefas}>Tarefas concluidas</Text>
                            <View style={styles.blocoExperience}>
                                <View style={styles.experience}></View>
                                <Text style={styles.textoExperience}>78%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.blocoGrupo}>
                    <View style={styles.blocoTitulo}>
                        <View>
                            <Text style={styles.subTitulo}>Gestão do Desing</Text>
                            <Text style={styles.textoNota}>AV1</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.outLineBotao}>
                                <Text style={styles.textoBotao}>
                                    Ver mais
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.rostos}>
                            <Image source={milton} style={styles.imagem} />
                            <Image source={rostoTriste} style={styles.imagem} />
                            <Image source={rostoNormal} style={styles.imagem} />
                            <Image source={rostoAlegre} style={styles.imagem} />
                            <Image source={rostoFeliz} style={styles.imagem} />
                        </View>
                        <View>
                            <Text style={styles.textoTarefas}>Tarefas concluidas</Text>
                            <View style={styles.blocoExperience}>
                                <View style={styles.experience}></View>
                                <Text style={styles.textoExperience}>78%</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.blocoRodape}>
                    <View style={styles.rodape}>
                        <Text style={styles.textoRodape}>Contato</Text>
                        <Text style={styles.textoRodape}>grupou_contato@gmail.com</Text>
                    </View>
                    <View style={styles.blocoImagemRodape}>
                        <Image source={likendin} style={styles.imagemRede} />
                        <Image source={instagram} style={styles.imagemRede} />
                        <Image source={facebook} style={styles.imagemRede} />
                    </View>
                    <View>
                    </View>

                </View>
                <View style={styles.blocoMenuRodape}>
                    <TouchableOpacity>
                        <View style={styles.blocoImagemTexto}>
                            <Image source={dashboard} style={styles.imagemMenu} />
                            <Text style={styles.textoMenu}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocoImagemTexto}>
                            <Image source={grupos} style={styles.imagemMenu} />
                            <Text style={styles.textoMenu}>Grupos</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocoImagemTexto}>
                            <Image source={disciplina} style={styles.imagemMenu} />
                            <Text style={styles.textoMenu}>Disciplina</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocoImagemTexto}>
                            <Image source={skills} style={styles.imagemMenu} />
                            <Text style={styles.textoMenu}>Skills</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocoImagemTexto}>
                            <Image source={perfil} style={styles.imagemMenu} />
                            <Text style={styles.textoMenu}>Perfil</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    backImage: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#555ffe'
    },
    textoTitulo: {
        color: '#fff',
        marginTop: 60,
        margin: 40,
        fontSize: 40,
    },
    blocoGrupo: {
        borderRadius: 10,
        margin: 15,
        padding: 20,
        backgroundColor: '#fff'
    },
    blocoTitulo: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    subTitulo: {
        fontSize: 25,
    },
    textoNota: {
        fontSize: 18,
    },
    outLineBotao: {
        borderWidth: 1,
        borderRadius: 4,
        width: 100,
        height: 40,
        borderColor: '#f00',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        fontSize: 15,
        color: '#f00'
    },
    rostos: {
        marginTop: 20,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem: {
        borderRadius: 50,
        width: 60,
        height: 60
    },
    textoTarefas: {
        color: '#888',
        fontSize: 17,
    },
    blocoExperience: {
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    experience: {
        width: 300,
        height: 10,
        borderRadius: 7,
        backgroundColor: '#f55500'
    },
    textoExperience: {
        fontSize: 15,
        color: '#f55500',
    },
    blocoRodape: {
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#600411',
        paddingTop: 20,
    },
    rodape: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    textoRodape: {
        marginTop: 5,
        fontSize: 20,
        color: '#fff'
    },
    imagemRede: {
        width: 60,
        height: 60,
        margin: 10,
    },
    blocoImagemRodape: {
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    blocoMenuRodape: {
        position: 'relative',
        padding: 10,
        backgroundColor: '#63005f',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    blocoImagemTexto: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagemMenu: {
        width: 35,
        height: 35,
    },
    textoMenu: {
        fontSize: 13,
        color: '#ccc'
    }

})