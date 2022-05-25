import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {  ScrollView } from 'react-native-web';


export default function HasilPencarian() {

  let index = 0;

  const Lokasi_Keberangkatan = [
    { key: index++, label: 'Jakarta' },
    { key: index++, label: 'Lampung' },
    { key: index++, label: 'Bukittinggi' },
    { key: index++, label: 'Surabaya' },
  ];

  const Lokasi_Tujuan = [
    { key: index++, label: 'Denpasar' },
    { key: index++, label: 'Makassar' },
    { key: index++, label: 'Aceh' },
    { key: index++, label: 'Papua' },
  ];

  const Tanggal_Keberangkatan = [
    { key: index++, label: 'Selasa, 25 Januari 2022' },
    { key: index++, label: 'Selasa, 25 Januari 2022' },
    { key: index++, label: 'Rabu, 26 Januari 2022' },
    { key: index++, label: 'Rabu, 26 Januari 2022' },
    { key: index++, label: 'Kamis, 27 Januari 2022' },
  ];

  const Cari = () => {
    navigation.navigate('rincian', {
      Lokasi_Keberangkatan: this.state.Lokasi_Keberangkatan,
      Lokasi_Tujuan: this.state.Lokasi_Tujuan,
      Tanggal_Keberangkatan: this.state.Tanggal_Keberangkatan
    });
  }



  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'colum' }}>
        <View style={{ backgroundColor: '#72876B', borderBottomEndRadius: 15, borderBottomStartRadius: 15, paddingBottom: "10%" }}>

          <View style={{ flexDirection: "row", margin: "5%" }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image
                source={require('./assets/menu.png')}
                style={{ height: 40, width: 40 }}>
              </Image>
            </TouchableOpacity>

            <View style={{ flex: 7 }}>
              <Text style={{
                fontWeight: 700,
                fontSize: "170%",
                marginLeft: "8%",
                color: "white",
                justifyContent: "center",
                textAlign: "center"
              }}>
                Hiling.id
              </Text>
            </View>

            <TouchableOpacity style={{ flex: 1, marginLeft: "5%" }}>
              <Image
                source={require('./assets/account.png')}
                style={{ height: 40, width: 40 }}>
              </Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, padding: "5%" }}>
            <Text style={styles.text_h4}>
              Hasil Pencarian Penerbangan
            </Text>
            <Text style={styles.text_h4}>
              Hasil Pencarian Penerbangan
            </Text>
          </View>

        </View>

        <ScrollView>
          <View style={{ margin: "5%", marginBottom: "69%", padding: "5%", backgroundColor: "white", borderRadius: 10 }}>

          </View>



        </ScrollView>



        <View style={{
          backgroundColor: "#586853",
          padding: "3%",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={styles.text_h4}> Copyright Sekar Alit Istiqomah-119140126 </Text>
        </View>

      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_h3: {
    fontWeight: 700,
    fontSize: "100%",
    color: "black",
    margin: "3%"
  },
  text_h4: {
    textAlign: "center",
    color: "white",
    fontSize: "100%",
    fontWeight: 500
  },
  text_input: {
    flex: 1,
    height: "90%",
    marginLeft: "3%",
    marginRight: "3%",
    marginVertical: "1%",
    padding: "2%",
    borderWidth: 1,
    borderRadius: 7,
    fontSize: "90%"
  }
});
