import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import backgroundImage from '../../grupou_assets/grafismos/grafismo_backgroud.png'

export default function Grupos() {
    return (
        <View style={styles.container}>
            <Image source={backgroundImage} style={styles.backImage}></Image>
            <Text>Grupos</Text>
            <View>
                <View>
                    <View>
                        <Text>Gestão do Desing</Text>
                        <Text>AV1</Text>
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text>
                                Ver mais
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>

                    </View>
                    <View>
                        <Text>Tarefas concluidas</Text>
                        <View>
                            <View></View>
                            <Text>78%</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    backImage:{
        position:'absolute',
        backgroundColor:'#555ffe'
    }
})