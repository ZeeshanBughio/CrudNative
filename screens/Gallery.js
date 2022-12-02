import { Dimensions, StyleSheet, TouchableOpacity, View , Image, ScrollView,Text} from 'react-native'
import React from 'react'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ImagesObj = [
    {url: require('../assets/image1.jpg')},
    {url: require('../assets/image2.jpg')},
    {url: require('../assets/image3.jpg')},
    {url: require('../assets/image4.jpg')},
    {url: require('../assets/image5.jpg')},
    {url: require('../assets/image6.jpg')},
    {url: require('../assets/image7.jpg')},
    {url: require('../assets/image8.jpg')},
    {url: require('../assets/image9.jpg')},
    {url: require('../assets/image10.jpg')}
]

const ImagesComp = (props) => {
  return (
    <ScrollView vertical>
        <View style={{ display : 'flex', flexDirection: 'row' , flexWrap :'wrap'}}>
            {
                ImagesObj.map((imagess,index) => {
                return(
                <TouchableOpacity key={index} onPress={() =>
                    props.navigation.navigate('ImageGallery' , 
                    {
                        url:imagess.url
                    })} >
                        
                    <Image source={imagess.url} style={{
                        height: deviceHeight / 3,
                        width: deviceWidth / 2 - 4,
                        resizeMode: 'cover',
                        borderRadius: 10,
                        margin: 2
                    }}/>
                </TouchableOpacity>  
                )
                })
            }
        </View>
    </ScrollView>
  )
}

export default ImagesComp

const styles = StyleSheet.create({})