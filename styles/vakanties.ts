import { StyleSheet } from 'react-native';

export const getStyles = (isLandscape: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingTop: isLandscape ? 20 : 60,
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
    flexDirection: isLandscape ? "row" : "column",
    flexWrap: isLandscape ? "wrap" : "nowrap",
    justifyContent: isLandscape ? "space-around" :"space-between",
  },
  holidayItem: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 10,
    marginLeft: isLandscape ? 5 : 20,
    marginRight: isLandscape ? 5 : 20,
    // marginRight: 20,
    padding: isLandscape ? 0 : 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#999",
  },
  holidayItemTitle: {
    fontSize: isLandscape ? 16 : 24,
    fontWeight: "bold",
  },
  holidayText: {
    fontSize: isLandscape ? 16 : 20,
    color: "#333",
  }
});