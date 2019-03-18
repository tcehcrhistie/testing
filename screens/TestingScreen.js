import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import Styles from '../styles/main'
import { CustomText, PoppinsBold, PoppinsSemiBold, ManropeEB, ManropeB, ManropeSB, ManropeM, ManropeR } from '../components/StyledText';
import { Testing, Hello, CardsPadding, Space1, Space4, Space25 } from '../components/rectangles'

let header = 1
let item = ['Pack stuff', 'Essay' ]



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
};

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
          <View>
            <View style={Styles.welcomeContainer}>
              <ManropeEB style={Styles.welcome}>
                Good Morning,{'\n'}
                User!
              </ManropeEB>
            </View>
            <View style={Styles.weatherContainer}>
              <View style={Styles.weather}>
                <ManropeEB style={Styles.weatherText}>
                  13°C
                </ManropeEB>
                <ManropeEB style={Styles.smallallcaps}>
                  TORONTO
                </ManropeEB>
              </View>
            </View>
            <Space4/>
            <View style={Styles.toDoContainer}>
              <ManropeEB style={[Styles.smallheader, {left: 24}]}>
                MY TO DO
              </ManropeEB>
              <Space25/>
              <Hello style={Styles.green}>
                <Text style={Styles.header}>{item[0]}</Text>
              </Hello>
              <Space1 />
              <Hello style={Styles.pink}>
                <Text style={Styles.header}>{item[1]}</Text>
              </Hello>
              <Space1/>
              <View style={Styles.cardsPadding}>
                <View style={Styles.viewAll}>
                  <ManropeEB style={Styles.viewAllHeader}>VIEW ALL (9)</ManropeEB>
                </View>
              </View>
            </View>
            <Space4 />
            <View>
              <ManropeEB style={[Styles.smallheader, {left: 24}]}>
                UPCOMING EVENTS
              </ManropeEB>
              <Space25/>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'column', alignItems: 'center', width: 64, paddingLeft: 12}}>
                <ManropeB style={{fontSize: 12, color: '#6E737E', lineHeight: 17}}>FEB</ManropeB>
                <ManropeB style={{fontSize: 24, color: '#525766', lineHeight: 30}}>21</ManropeB>
                <ManropeB style={{fontSize: 12, color: '#8B8E95', lineHeight: 15}}>WED</ManropeB>
              </View>
              <Text>Testing</Text>
              <Text>Testing again</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
