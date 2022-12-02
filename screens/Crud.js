import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'


const Crud = () => {

  let deviceHeight = Dimensions.get('window').height;
  let deviceWidth = Dimensions.get('window').width;

  const [devinfo, setDevinfo] = useState([
    {
      id: '0',
      name: "Zee",
      designation: "Custom"
    },
    {
      id: '1',
      name: "Huz",
      designation: "WP"
    },
    {
      id: '2',
      name: "Waris",
      designation: "WP"
    },
    {
      id: '3',
      name: "Ashad",
      designation: "Designer"
    },
    {
      id: '4',
      name: "Duraiz",
      designation: "Designer"
    },
    {
      id: '5',
      name: "Tauqeer",
      designation: "FullStack"
    },
    {
      id: '6',
      name: "Usama",
      designation: "WP"
    },
    {
      id: '7',
      name: "Osama",
      designation: "Custom"
    },
    {
      id: '8',
      name: "Qambar",
      designation: "Custom"
    },
    {
      id: '9',
      name: "Ali",
      designation: "Internee"
    },
    {
      id: '10',
      name: "Ghulam",
      designation: "Internee"
    },
    {
      id: '11',
      name: "Muslim",
      designation: "Designer"
    },
    {
      id: '12',
      name: "Jhanzaib",
      designation: "WP"
    },
    {
      id: '13',
      name: "Raza",
      designation: "HR"
    },
    {
      id: '14',
      name: "Showzaib",
      designation: "CEO"
    }
  ]);

  const [information, setInformation] = useState({ name: "", designation: "" })
  const [id, setId] = useState(0);

  const handleChangeName = (text) => {
    setInformation({ ...information, name: text });
  }

  const handleChangeDesignation = (text) => {
    setInformation({ ...information, designation: text });
  }

  const submitInfo = () => {
    setDevinfo([
      { id: id, name: information.name, designation: information.designation },
      ...devinfo
    ]);
    setId(id + 1);
    console.log(devinfo);
    setInformation({ name: "", designation: "" })
  }

  const deleteThis = (id) => {
    const deletedInfo = devinfo.filter((information) => information.id != id);
    setDevinfo(deletedInfo);
  }

  const EditThis = (id) => {
    const EditInfo = devinfo.find((information) => information.id == id);
    setInformation({ name: EditInfo.name, designation: EditInfo.designation });
    const deletedInfo = devinfo.filter((information) => information.id != id);
    setDevinfo(deletedInfo);
  }

  return (

      <ScrollView style={{ height: deviceHeight, width: deviceWidth, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>

          <Text style={{ fontSize: 35, color: 'black', textAlign: 'center', marginBottom: 15, fontFamily: 'sans-serif', }}>Crud</Text>

          <TextInput required maxLength={10} style={{ padding: 10, borderWidth: 1, borderRadius: 4, marginBottom: 15 }}
            placeholder="Name"
            onChangeText={(text) => handleChangeName(text)}
            value={information.name}
          />

          <TextInput required maxLength={10} style={{ padding: 10, borderWidth: 1, borderRadius: 4 }}
            placeholder="Designation"
            onChangeText={(text) => handleChangeDesignation(text)}
            value={information.designation}
          />

          <TouchableOpacity onPress={() => submitInfo()}
            style={{ backgroundColor: 'black', marginTop: 15, borderRadius: 4, }}>
            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', padding: 10 }}>Submit</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'red', height: 35, alignItems: 'center' }}>
            <Text style={styles.wccfsfw}>Name</Text>
            <Text style={styles.wccfsfw}>Designation</Text>
            <Text style={styles.wccfsfw}></Text>
          </View>

          <ScrollView style={{ paddingTop: 10, paddingBottom: 10, height: '50%' }}>
            {devinfo.map((devinfo, index) => {
              if (devinfo.name == '' || devinfo.designation == '') {
                return;
              }
              else {
                return <View key={index} style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={styles.textCenterWidth}>{devinfo.name}</Text>
                  <Text style={styles.textCenterWidth}>{devinfo.designation}</Text>
                  <TouchableOpacity style={{ width: "16%" }} onPress={() => EditThis(devinfo.id)}>
                    <Text style={{ color: 'green', textAlign: 'center' }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: "16%" }} onPress={() => deleteThis(devinfo.id)}>
                    <Text style={{ color: 'red', textAlign: 'center' }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              }
            })
            }
          </ScrollView>
        </View>
      </ScrollView>

  )
}

export default Crud

const styles = StyleSheet.create({
    textCenterWidth : {
        textTransform: 'capitalize',width:"33%",textAlign:'center'
    },
    wccfsfw: {
        width:"33%",textAlign:'center',color:'white',fontSize:16,fontWeight:'bold'
    }
})