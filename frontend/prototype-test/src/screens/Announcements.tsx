import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from "react-native-calendars";
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const Announcements: React.FC<Props> = ({ navigation }) => {



    const jpcsLogo = require("../database/images/jpcsLogo.jpg");
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleDayPress = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
    };

    return (
        <DismissKeyboard>
            <View>
                <ScrollView>
                <View style={styles.announcements_img_container}>
                    <Image source={jpcsLogo} style={styles.jpcsImg} />
                </View>
                <View>
                    <View>
                        <TextInput style={styles.announcement_InputTxt} placeholder=" Add a Title..." editable></TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.announcement_InputTxt_multiline} placeholder=" Add Event Description..." editable multiline={true} numberOfLines={5} maxLength={50}></TextInput>
                    </View>
                    <View style={styles.announcements_inner_container}>
                        <TextInput style={styles.announcement_InputTxt_Points} placeholder=" Enter Points" editable></TextInput>
                        <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                            <View style={styles.announcements_icons_container}>
                                <TouchableOpacity style={styles.announcements_icons}>
                                    <Ionicons name="image-outline" size={20} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.announcements_icons}>
                                    <Ionicons name="albums-outline" size={20} />
                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ borderBottomWidth: 1, marginHorizontal: 20, padding: 3, borderBottomColor: '#BCB2B5' }}>
                    </View> */}
                    <View style={styles.announcements_setDate}>
                        <Ionicons name="calendar-clear-outline" size={20} />
                        <View style={{ marginLeft: 10 }}>
                            <Text>Set Date & Time</Text>
                        </View>
                    </View>
                    <View style={{ padding: 50 }}>
                        <Calendar
                            // Initially selected date (optional)
                            current={selectedDate || new Date().toISOString().split('T')[0]}
                            onDayPress={handleDayPress}
                            markedDates={{
                                [selectedDate || '']: {
                                    selected: true,
                                    selectedColor: '#086E3D',
                                    selectedTextColor: 'white',
                                },
                            }}
                            monthFormat={'MMMM yyyy'}
                        />
                    </View>
                    <View style={styles.announcements_postEvent}>
                        <TouchableOpacity style={styles.announcements_postEventBtn}>
                            <Text style={styles.announcements_postEventTxt}>POST EVENT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        </DismissKeyboard>

    )
}

export default Announcements;
//tangina nyo maam ang nigga nyo grabi
//ambobo nung mga kagrupo ko gago
//specially ako
//-radian
//npm install react-native-calendars