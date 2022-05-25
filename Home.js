import * as React from 'react';
import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import { ImageBackground, ScrollView, TextInput } from 'react-native-web';
import ModalSelector from 'react-native-modal-selector';


export default function Home({navigation}) {

  const [Keberangkatan, onChangeKeberangkatan] = react.useState();
  let index = 0;
  const data = [
    { key: index++, label: 'Jakarta' },
    { key: index++, label: 'Denpasar' },
    { key: index++, label: 'Surabaya' },
    { key: index++, label: 'Lampung' }
  ];
  return (
    <View style={styles.container}>

      <ImageBackground source={require('./assets/backcover.jpg')}
        resizeMode="cover" style={{ flex: 1 }}>

        <View style={{ flexDirection: 'colum' }}>

          <View style={{
            flexDirection: "row",
            margin: "5%"
          }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image
                source={require('./assets/menu.png')}
                style={{ height: 40, width: 40 }}>
              </Image>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, marginLeft: "77%" }}>
              <Image
                source={require('./assets/account.png')}
                style={{ height: 40, width: 40 }}>
              </Image>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginTop: "5%", marginBottom: "10%" }}>
            <Text style={{
              fontWeight: 700,
              fontSize: "170%",
              color: "white",
              justifyContent: "center",
              textAlign: "center"
            }}>
              Hiling.id
            </Text>
          </View>

          <View style={{ margin: "5%", marginBottom: "69%", padding: "5%", backgroundColor: "white", borderRadius: 10 }}>

            <View style={{ marginBottom: "3%", }}>
              <Text style={styles.text_h3}>
                Lokasi Keberangkatan
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require('./assets/take-off.png')}
                  style={{ width: 40, height: 40, marginLeft: "3%" }}
                >
                </Image>
                <ModalSelector style={styles.text_input}
                  data={data}
                  onChange={(option) => { onChangeKeberangkatan(option.label) }}>
                  <TextInput
                    editable={false}
                    placeholder={'Masukan Lokasi Keberangkatan'}
                    value={Keberangkatan}
                  />
                </ModalSelector>
              </View>

            </View>


            <View style={{ marginBottom: "3%", }}>
              <Text style={styles.text_h3}>
                Lokasi Tujuan
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require('./assets/land.png')}
                  style={{ width: 40, height: 40, marginLeft: "3%" }}
                >
                </Image>
                <TextInput
                  style={styles.text_input}
                  placeholder={'Masukan Lokasi Tujuan'}
                />
              </View>
            </View>



            <View style={{ marginBottom: "3%", }}>
              <Text style={styles.text_h3}>
                Tanggal Keberangkatan
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require('./assets/calendar.png')}
                  style={{ width: 38, height: 38, marginLeft: "3%" }}
                >
                </Image>
                <TextInput
                  style={styles.text_input}
                  placeholder={'Masukan Tanggal Keberangkatan'}
                />
              </View>
            </View>


            <TouchableOpacity style={{
              flex: 1,
              height: "90%",
              padding: "2%",
              margin: "5%",
              fontSize: "100%",
              backgroundColor: "#F24E1E",
              borderRadius: 10
            }}
            onPress={() => navigation.navigate("HasilPencarian")}>
              <Text style={styles.text_h4}>
                Cari
              </Text>
            </TouchableOpacity>

          </View>


          <View style={{
            backgroundColor: "#586853",
            padding: "3%",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={styles.text_h4}> Copyright Sekar Alit Istiqomah-119140126 </Text>
          </View>

        </View>


      </ImageBackground>





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81AC72',
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
