import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getRegion } from '../lib/getProvinceByLocation';

export default function Index() {
  const [region, setRegion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDetermineRegion = async () => {
    setLoading(true);
    setError(null);
    try {
      const regionName = await getRegion();
      setRegion(regionName);
    } catch (err: any) {
      setError(err.message || 'Er is een fout opgetreden');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Instellingen</Text>
      </View>

      <View style={styles.centered}>
        <TouchableOpacity style={styles.button} onPress={handleDetermineRegion}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Bepaal locatie</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="small" style={{ marginTop: 10 }} />}
        {error && <Text style={styles.errorText}>Fout: {error}</Text>}
        {region !== null && !loading && !error && (
          <Text style={styles.resultText}>Je bent in regio: {region}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingTop: 60,
    paddingBottom: 30,
  },
  top: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#1e90ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
  },
});