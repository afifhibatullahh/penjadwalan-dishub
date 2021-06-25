import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Agenda, Calendar, LocaleConfig } from "react-native-calendars";
import ActionButton from "react-native-action-button";

LocaleConfig.locales["in"] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  monthNamesShort: [
    "jan",
    "feb",
    "mar",
    "apr",
    "mei",
    "jun",
    "jul",
    "aug",
    "sep",
    "okt",
    "nov",
    "des",
  ],
  dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
  dayNamesShort: [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ],
};

LocaleConfig.defaultLocale = "in";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const Menu = ({ navigation }) => {
  const [selected, setSelected] = useState(new Date().getDate());
  const [items, setItems] = useState({});
  const [hari, setHari] = useState();

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });

      setItems(newItems);
    }, 1000);
  };

  const Separator = () => {
    return <View style={styles.seperator} />;
  };

  // const onDayPress = (day) => {
  //   setSelected(day.dateString);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Calendar
        // current={"2021-06-21"}
        monthFormat={"yyyy MMMM"}
        onDayPress={(day) => {
          setSelected(day.dateString);
          console.log("selected day", day);
          setHari(day);
        }}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            // disableTouchEvent: true,
            selectedColor: "#678DCF",
          },
        }}
        enableSwipeMonths={true}
        style={styles.calendar}
      />
      <ScrollView>
        <View style={styles.box}>
          {/* //isi content */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 40,
              marginHorizontal: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "700" }}>
              Rabu
            </Text>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "700" }}>
              13
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            {/* isi content */}
            <View style={styles.boxx}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <View style={styles.text}>
                    <Text>Hari :</Text>
                    <Text>Rabu</Text>
                  </View>
                  <View style={styles.text}>
                    <Text>Jam :</Text>
                    <Text>09:00 - 10:00 WIB</Text>
                  </View>
                  <View style={styles.text}>
                    <Text>Bidang :</Text>
                    <Text>Transportasi</Text>
                  </View>
                  <View style={styles.text}>
                    <Text>Pembahasan :</Text>
                    <Text>loremmmmmm</Text>
                  </View>
                  <View style={styles.text}>
                    <Text>Kesimpulan :</Text>
                    <Text>loremmmmmm</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={18} />
                </TouchableOpacity>
              </View>
            </View>
            <Separator />
            <View style={styles.boxx}>
              <View style={styles.text}>
                <Text>Hari :</Text>
                <Text>Rabu</Text>
              </View>
              <View style={styles.text}>
                <Text>Jam :</Text>
                <Text>09:00 - 10:00 WIB</Text>
              </View>
              <View style={styles.text}>
                <Text>Bidang :</Text>
                <Text>Transportasi</Text>
              </View>
              <View style={styles.text}>
                <Text>Pembahasan :</Text>
                <Text>loremmmmmm</Text>
              </View>
              <View>
                <Text>Kesimpulan :</Text>
                <View style={{ marginLeft: 10 }}>
                  <Text>1. Hasil Rapat: 123</Text>
                  <Text>2. Jumlah Anggota Rapat: 123</Text>
                  <Text>3. Jumlah Hadir: 70</Text>
                  <Text>3. Jumlah Tidak Hadir: 53</Text>
                </View>
              </View>
            </View>
            <View style={styles.boxx}>
              <View style={styles.text}>
                <Text>Hari :</Text>
                <Text>Rabu</Text>
              </View>
              <View style={styles.text}>
                <Text>Jam :</Text>
                <Text>09:00 - 10:00 WIB</Text>
              </View>
              <View style={styles.text}>
                <Text>Bidang :</Text>
                <Text>Transportasi</Text>
              </View>
              <View style={styles.text}>
                <Text>Pembahasan :</Text>
                <Text>loremmmmmm</Text>
              </View>
              <View>
                <Text>Kesimpulan :</Text>
                <View style={{ marginLeft: 10 }}>
                  <Text>1. Hasil Rapat: 123</Text>
                  <Text>2. Jumlah Anggota Rapat: 123</Text>
                  <Text>3. Jumlah Hadir: 70</Text>
                  <Text>3. Jumlah Tidak Hadir: 53</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      {/* <Agenda /> */}
      <ActionButton
        buttonColor="#393185"
        onPress={() => {
          navigation.navigate("AddEvents");
        }}
        size={70}
        hideShadow={false}
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#678DCF",
  },
  calendar: {
    borderBottomWidth: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
  },
  box: {
    // alignItems: "center",
    // justifyContent: "space-between",
    // width: 420,
    // borderWidth: 1,
    flexDirection: "row",
  },
  boxx: {
    // borderWidth: 1,
    backgroundColor: "white",
    marginVertical: 10,
    padding: 25,
    paddingRight: 20,
    borderRadius: 15,
    width: "110%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    // justifyContent: "space-between",
    // flexDirection: "row",
  },
  text: {
    flexDirection: "row",
    marginTop: 5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
  },
  seperator: {
    width: "110%",
    height: 1,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 1,
  },
});
