import { StyleSheet } from 'react-native';

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
  holidayWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  holidayItem: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#999",
  },
  holidayItemTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  holidayText: {
    fontSize: 20,
    color: "#333",
  }
});

export default styles;