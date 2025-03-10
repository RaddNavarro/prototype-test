import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
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
      {selectedDate && (
        <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default CalendarPage;