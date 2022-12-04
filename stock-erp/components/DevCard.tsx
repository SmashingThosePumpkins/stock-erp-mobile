import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Text, View } from '../components/Themed';

export default function EditScreenInfo({ imagePath, nome, funcao, email }: { 
    imagePath: ImageSourcePropType 
    nome: string,
    funcao: string,
    email: string
}) {
    return (
        <View style={styles.outerContainer}>
            <Image
                style={styles.imagemDev}
                source={imagePath}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.name}>
                    {nome}
                </Text>
                <Text>
                    {funcao}
                </Text>
                <Text>
                    {email}
                </Text>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    outerContainer: {
        marginBottom:30,
        flexDirection: 'row',
        width: '85%'
    },
    innerContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold',
    },
    imagemDev: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginRight: 15,
    }
});
