import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');
const sunsetIcon = require('./img/sunset.png');
const sunriseIcon = require('./img/sunrise.png');
const humidityIcon = require('./img/humidity.png');
const pressureIcon = require('./img/pressure.png');
const grassIcon = require('./img/grass.png');
const sunnyIcon = require('./img/sunny.png');
export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=943c0b7f1e2fac29d8f80a7169c4283b&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed

      }
    });
  }
  );

}
render() {
  return (
  <View style={styles.containerMain}>
    <View style={styles.box2}>

        <Text style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15,fontSize: 20 }}> Enter The City Name </Text>
        <TextInput
              style={{ textAlign: 'center', height: 40, width: 150, color: 'black', padding: 9, backgroundColor : 'white'}}
            placeholder=" Enter The City Name "
            onChangeText={(city) => this.setState({ city })}
          />

          <Button
            onPress={() => this.getWeather()}
            title="Search"
            color="black"

            accessibilityLabel="Klik untuk melihat cuaca"
          />

    </View>

    <View style={styles.box4}>
    <View style={styles.button}>
    <View style={styles.iconContainer}>
      <Image source={sunnyIcon} style={styles.icon} />
   </View>
      <Text> Sunny : { this.state.forecast.main} </Text>
    </View>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
        <Image source={tempIcon} style={styles.icon} />
     </View>
        <Text> Temp : { this.state.forecast.temp} </Text>
      </View>
    </View>
    <View style={styles.box4}>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={mainIcon} style={styles.icon} />
   </View>
      <Text> Descrip : { this.state.forecast.description} </Text>
    </View>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={sunriseIcon} style={styles.icon} />
   </View>
      <Text> Sunrise : { this.state.forecast.sunrise} </Text>
    </View>
    </View>
    <View style={styles.box4}>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={sunsetIcon} style={styles.icon} />
   </View>
      <Text> Sunset : { this.state.forecast.sunset} </Text>
    </View>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={pressureIcon} style={styles.icon} />
   </View>
      <Text> Pressure : { this.state.forecast.pressure} </Text>
    </View>
    </View>
    <View style={styles.box4}>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={humidityIcon} style={styles.icon} />
   </View>
      <Text> Humidity : { this.state.forecast.humidity} </Text>
    </View>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={levelIcon} style={styles.icon} />
   </View>
      <Text> Sea Level : { this.state.forecast.sea_level} </Text>
    </View>
    </View>
    <View style={styles.box4}>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={grassIcon} style={styles.icon} />
   </View>
      <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
    </View>
      <View style={styles.button}>
      <View style={styles.iconContainer}>
      <Image source={windIcon} style={styles.icon} />
   </View>
      <Text> Wind Speed : { this.state.forecast.speed} </Text>
    </View>
    </View>
  </View>
  );
}
}
const styles = StyleSheet.create({
containerMain: {
  backgroundColor: '#FFA500',
  flex: 1,
  flexDirection: 'column'
},
box1: {
  flex: 0.7,
  backgroundColor: '#20B2AA',
},
box2: {
  flex: 0.4,
  backgroundColor: '#FF4500',
  marginLeft: 10,
  marginRight: 10,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
},
box3: {
  flex: 0.5,
  backgroundColor: '#00FA9A',
  //marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row'
},
box4: {
  flex: 0.3,
  backgroundColor: '#00FA9A',
  //marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row'
},
box5: {
  flex: 0.7,
  backgroundColor: '#1565C0',
  margin: 10
},
button: {
  width: 140,
  height: 40,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'white',
  flexDirection: 'row'
},
iconContainer: {
  alignItems: 'center',
  backgroundColor: '#feb401',
  borderColor: '#feaf12',
  //borderRadius: 15,
  borderWidth: 1,
  justifyContent: 'center',
  height: 60,
  width: 40,
},
icon: {
  tintColor: '#fff',
  height: 40,
  width: 40,
}
});
