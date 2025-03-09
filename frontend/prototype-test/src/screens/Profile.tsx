import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'

const Profile: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View>
            <Text>Profile Page</Text>
           
        </View>
    )
}

export default Profile;