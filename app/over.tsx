import { Image, Text, View, useWindowDimensions } from "react-native";
import { getStyles } from "../styles/over";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const styles = getStyles(isLandscape);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Over</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={ require('../assets/images/portrait.png') }
          style={styles.image}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.name}>&copy; 2025 Milan Haaijer</Text>
      </View>
    </View>
  );
}