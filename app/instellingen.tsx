import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, useWindowDimensions, View } from "react-native";
import { getRegion } from '../lib/getProvinceByLocation';
import { getStyles } from '../styles/instellingen';

export default function Index() {
  const [region, setRegion] = useState<string | null>(null);
  const [deviceRegion, setDeviceRegion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>('Gebruik locatie');

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const styles = getStyles(isLandscape);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const regioName = await getRegion();
        setDeviceRegion(regioName);

        if (selectedOption === 'Gebruik locatie') {
          setRegion(regioName);
        }
      } catch (err: any) {
        setError(err.message || 'Er is een fout opgetreden');
      } finally {
        setLoading(false);
      }
    };

    fetchRegion();
  }, []);

  const handleSelectionChange = async (value: string) => {
    setSelectedOption(value);

    if (value === 'Gebruik locatie') {
      if (deviceRegion) {
        await AsyncStorage.setItem('userRegion', deviceRegion);
        setError(null);
      } else {
        setError('Locatie kon niet worden bepaald.');
      }
    } else {
      await AsyncStorage.setItem('userRegion', value);
      setError(null);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Instellingen</Text>
      </View>

      <View style={styles.dropdownWrapper}>
        <View style={[styles.centered, styles.dropdown]}>
        <Text style={styles.regio}>Regio</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedOption}
              onValueChange={handleSelectionChange}
              style={styles.picker}
            >
              <Picker.Item label="Gebruik locatie" value="Gebruik locatie" />
              <Picker.Item label="Noord" value="Noord" />
              <Picker.Item label="Midden" value="Midden" />
              <Picker.Item label="Zuid" value="Zuid" />
            </Picker>
          </View>
        {loading && <ActivityIndicator size="small" style={{ marginTop: 10 }} />}
        {error && <Text style={styles.errorText}>Fout: {error}</Text>}
        </View>
      </View>
      
    </View>
  );
}