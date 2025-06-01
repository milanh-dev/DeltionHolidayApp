import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";
import { getNearestHoliday } from '../lib/getNearestHoliday';
import styles from '../styles/index';

export default function Index() {
  const [region, setRegion] = useState<string | null>(null);
  const [holidayName, setHolidayName] = useState<string | null>(null);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [holidayImage, setHolidayImage] = useState<string | null>(null);

  const holidayImages: { [key: string]: any } = {
    zomervakantie: require('../assets/images/holidays/zomervakantie.jpg'),
    kerstvakantie: require('../assets/images/holidays/kerstvakantie.jpg'),
    meivakantie: require('../assets/images/holidays/meivakantie.jpg'),
    herfstvakantie: require('../assets/images/holidays/herfstvakantie.jpg'),
    voorjaarsvakantie: require('../assets/images/holidays/voorjaarsvakantie.jpg'),

    default: require('../assets/images/holidays/default.jpg'),
  };

  useFocusEffect(
    useCallback(() => {
      const loadRegion = async () => {
        const storedRegion = await AsyncStorage.getItem('userRegion');
        setRegion(storedRegion);

        const nearestHoliday = getNearestHoliday(storedRegion);
        console.warn(nearestHoliday?.imageKey);
        if (nearestHoliday !== null) {
          setHolidayName(nearestHoliday.type);
          setDaysRemaining(nearestHoliday.daysRemaining);
          setHolidayImage(nearestHoliday.imageKey);
        }
      };

      loadRegion();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.daysTextWrapper}>
          <View style={styles.daysRow}>
            <Text style={styles.bigNumber}>{daysRemaining}</Text>
            <Text style={styles.smallLabel}>dagen</Text>
          </View>
          <Text style={styles.subText}>tot de {holidayName?.toLowerCase()}</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={
              holidayImage
                ? holidayImages[holidayImage] || holidayImages['default']
                : holidayImages['default']
            }
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.regionText}>
          {region ? `Regio: ${region}` : 'Regio wordt geladen...'}
        </Text>
      </View>
    </View>
  );
}