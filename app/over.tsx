import { Image, Text, View } from "react-native";
import styles from "../styles/over";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Over</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.name}>&copy; 2025 Milan Haaijer</Text>
      </View>
    </View>
  );
}