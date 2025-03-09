import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'

const Announcements: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View>
            <Text>Announcements Page</Text>
        </View>
    )
}

export default Announcements;