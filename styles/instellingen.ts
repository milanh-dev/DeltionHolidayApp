import { StyleSheet } from "react-native";

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
    alignItems: "flex-start",
    justifyContent: "center",
  },
  dropdown: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
    pickerWrapper: {
    width: '100%',
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 75,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
  },
  regio: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 50,
  },
});

export default styles;