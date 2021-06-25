import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Icon } from "react-native-elements";
import moment from "moment";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import { Value } from "react-native-reanimated";
import { TEAMCITY } from "ci-info";

const AddEvents = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("datetime");
    console.log(date);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View
        style={{
          backgroundColor: "#4366A3",
          paddingHorizontal: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            Kembali
          </Text>
        </TouchableOpacity>

        <Icon name="rowing" />
        <Text style={styles.text}>Tambah Jadwal</Text>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <View>
          <View>
            <TextInput placeholder="Nama Acara" style={styles.input} />
          </View>
          <View>
            <Text style={styles.pickText}>Dari</Text>
            <View style={styles.pickDateTime}>
              <View style={styles.pickDate}>
                <TouchableOpacity onPress={showDatepicker}>
                  <Text>{moment(date).format("DD MMMM YYYY")}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pickTime}>
                <TouchableOpacity onPress={showTimepicker}>
                  <Text>{moment(date).format("h:mm:ss")}</Text>
                </TouchableOpacity>
              </View>
              {show && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.pickText}>Sampai</Text>
            <View style={styles.pickDateTime}>
              <TouchableOpacity
                onPress={showDatepicker}
                style={styles.pickDate}
              >
                <Text>{moment(date).format("DD MMMM YYYY")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={showTimepicker}
                style={styles.pickTime}
              >
                <Text>{moment(date).format("h:mm:ss")}</Text>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
        </View>
        <View>
          <TextInput
            placeholder="Hasil Rapat..."
            style={styles.input}
            numberOfLines={3}
            multiline={true}
          />
        </View>
        <View>
          <TextInput
            placeholder="Masukan nama Bidang... "
            style={styles.input}
          />
        </View>
        <View>
          <TextInput placeholder="Jumlah hadir..." style={styles.input} />
        </View>
        <View>
          <TextInput placeholder="Jumlah Tidak hadir..." style={styles.input} />
        </View>
        <TouchableOpacity style={styles.btnSave}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            SIMPAN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonClose: {},
  text: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
    marginTop: 30,
    marginBottom: 18,
  },
  pickDateTime: {
    flexDirection: "row",
    // alignSelf: "",
    justifyContent: "space-between",
  },
  pickDate: {
    padding: 10,
    width: "70%",
    borderRadius: 10,
    backgroundColor: "#E1E1E1",
  },
  pickTime: {
    padding: 10,
    width: "25%",
    borderRadius: 10,
    backgroundColor: "#E1E1E1",
  },
  input: {
    padding: 10,
    // borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#E1E1E1",
    fontSize: 17,
  },
  btnSave: {
    alignSelf: "flex-end",
    backgroundColor: "#8299C0",
    padding: 15,
    borderRadius: 50,
    paddingHorizontal: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
  },
  pickText: {
    color: "#4366A3",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 5,
    marginTop: 7,
  },
});
