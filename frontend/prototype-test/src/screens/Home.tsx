import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'

const Home: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View>
            <Text>Home Page</Text>
        </View>
    )
}

export default Home;