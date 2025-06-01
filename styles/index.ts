import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    padding: 10,
    alignItems: 'center',
  },
  regionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
    imageWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 320,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#999",
    backgroundColor: "#bcbcbc",
  },
  daysTextWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  daysRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bigNumber: {
    fontSize: 100,
    fontWeight: 'bold',
    marginRight: 5,
  },
  smallLabel: {
    fontSize: 80,
    marginBottom: 6,
  },
  subText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;