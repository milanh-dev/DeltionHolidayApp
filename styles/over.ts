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
  imageWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#999",
    backgroundColor: "#bcbcbc",
  },
  bottom: {
    flex: isLandscape ? 0 : 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    marginBottom: 40,
  },
  name: {
    fontSize: 20,
  },
});