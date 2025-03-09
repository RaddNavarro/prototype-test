import { Button, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
const LogIn: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View style={styles.container}>
            <Text>LogIn Page</Text>
            <Button title="Log in" onPress={() => navigation.navigate('HomeScreenNavigator')} ></Button>
        </View>
    )
}

export default LogIn;