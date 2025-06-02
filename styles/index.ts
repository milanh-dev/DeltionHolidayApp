import { StyleSheet } from "react-native";

export const getStyles = (isLandscape : boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
  },
  content: {
    flex: 1,
    flexDirection: isLandscape ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    display: isLandscape ? 'none' : 'flex',
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
    marginRight: isLandscape ? 20 : 0,
  },
  daysRow: {
    flexDirection: isLandscape ? 'column' : 'row',
    alignItems: isLandscape ? 'center' : 'flex-end',
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