import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { getRegionHolidays } from "../lib/getRegionHolidays";
import { getStyles } from "../styles/vakanties";

export default function Index() {
  const [holidays, setHolidays] = useState<any[]>([]);
  const [region, setRegion] = useState<string | null>(null);

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const styles = getStyles(isLandscape);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate());

    const dutchShortMonths = [
        'jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
        'jul', 'aug', 'sep', 'okt', 'nov', 'dec'
    ];

    const month = dutchShortMonths[date.getMonth()];

    return `${day} ${month}`;
  }

  useFocusEffect(
    useCallback(() => {
      const fetchHolidays = async () => {
        const storedRegion = await AsyncStorage.getItem('userRegion');
        setRegion(storedRegion);

        if (storedRegion) {
          const allHolidays = await getRegionHolidays(storedRegion);
          setHolidays(allHolidays || []);
        }
      };
      fetchHolidays();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Vakanties</Text>
      </View>
      <View style={styles.holidayWrapper}>
        {holidays.map((holiday, key) => (
          <View key={key} style={styles.holidayItem}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.holidayItemTitle}>{holiday.type}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.holidayText}>{formatDate(holiday.start.toString())}</Text>
              <Text style={styles.holidayText}> - </Text>
              <Text style={styles.holidayText}>{formatDate(holiday.end.toString())}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}