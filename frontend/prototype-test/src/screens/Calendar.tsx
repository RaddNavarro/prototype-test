import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'

const Calendar: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View>
            <Text>Calendar Page</Text>
        </View>
    )
}

export default Calendar;