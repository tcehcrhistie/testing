import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import Styles from '../styles/main'
import { Black, Bold, Medium, Regular, Light } from '../components/StyledText';
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
            //Big Header: Good Morning
            <View style={Styles.welcomeContainer}>
              <Bold style={Styles.welcome}>
                Good Morning,{'\n'}
                User!
              </Bold>
            </View>
            <View style={Styles.weatherContainer}>
              <View style={Styles.weather}>
                <Bold style={Styles.weatherText}>
                  13°C
                </Bold>
                <Medium style={Styles.smallallcaps}>
                  TORONTO
                </Medium>
              </View>
            </View>
            <Space4/>
            <View style={Styles.toDoContainer}>
              <Medium style={[Styles.smallheader, {left: 24}]}>
                MY TO DO
              </Medium>
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
                  <Medium style={Styles.viewAllHeader}>VIEW ALL (9)</Medium>
                </View>
              </View>
            </View>
            <Space4 />
            <View>
              <Medium style={[Styles.smallheader, {left: 24}]}>
                UPCOMING EVENTS
              </Medium>
              <Space25/>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 64, paddingLeft: 12}}>
                  <Medium style={{fontSize: 12, color: '#525766', opacity: .875, lineHeight: 17}}>FEB</Medium>
                  <Medium style={{fontSize: 24, color: '#525766', lineHeight: 30}}>21</Medium>
                  <Medium style={{fontSize: 12, color: '#8B8E95', lineHeight: 15}}>WED</Medium>
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
