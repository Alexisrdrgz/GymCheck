import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Calendar

                style={styles.calendar}
                onDayPress={onDayPress}
                markingType='period'
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        selectedColor: 'white',
                        color: 'white',
                        textColor: 'black',
                    },
                    '2024-03-04': { startingDay: true, selected: true, textColor: 'white', color: 'green' },
                    '2024-04-04': { selected: true, color: 'red', endingDay: true, textColor: 'white', disabled: true },

                }}
                theme={{ calendarBackground: '#F3DFFF' }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    calendarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    calendar: {
        width: '100%',
        height: '100%',
        paddingBottom: 20, // Espacio adicional al final del calendario
    },
});

export default CalendarComponent;
