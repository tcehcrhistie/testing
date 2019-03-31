import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import Styles from '../styles/main'
import { Black, Bold, Medium, Regular, Light } from '../components/StyledText';
import { Testing, Hello, CardsPadding, Space1, Space4, Space3, Space2 } from '../components/rectangles'

let header = 1
let item = ['Pack stuff', 'Essay']



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
              <Space3/>
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
              <Space3/>
              <View style={{flex: 1, flexDirection: 'row',paddingRight: 8,paddingLeft: 8, height: 68}}>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 58, paddingTop: 3}}>
                  <Medium style={{fontSize: 12, color: '#525766', opacity: .875, lineHeight: 17}}>FEB</Medium>
                  <Medium style={{fontSize: 24, color: '#525766', lineHeight: 30}}>21</Medium>
                  <Medium style={{fontSize: 12, color: '#8B8E95', lineHeight: 15}}>WED</Medium>
                </View>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 4, flex: 1, paddingLeft: 16, paddingTop:14}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Medium style={{fontSize: 16, color: '#525266'}}>Bye Toronto</Medium>
                    <View style={{width:8}}/>
                    <Regular style={{fontSize: 14, color: '#A0A1AC', paddingTop: 1.25}}>08:30-09:30</Regular>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{paddingHorizontal:8 , paddingTop: 3, backgroundColor: '#60D0BC', borderRadius: 2, height: 16}}>
                    <Medium style={{fontSize: 10, color: '#FFFFFF'}}>#travel</Medium>
                    </View>
                  </View>
                </View>
              </View>
              <Space2/>
              <View style={{flex: 1, flexDirection: 'row',paddingRight: 8,paddingLeft: 8}}>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 58, paddingTop: 10}}>
                  <Medium style={{fontSize: 24, color: '#525766', lineHeight: 30}}>22</Medium>
                  <Medium style={{fontSize: 12, color: '#8B8E95', lineHeight: 15}}>THU</Medium>
                </View>
                <View style={{flexDirection:'column', flex: 1}}>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 4, flex: 1, paddingLeft: 16, paddingTop:14, height: 68}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Medium style={{fontSize: 16, color: '#525266'}}>Seminar</Medium>
                    <View style={{width:8}}/>
                    <Regular style={{fontSize: 14, color: '#A0A1AC', paddingTop: 1.25}}>11:30-13:30</Regular>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{paddingHorizontal:8 , paddingTop: 3, backgroundColor: '#D095E5', borderRadius: 2, height: 16}}>
                    <Medium style={{fontSize: 10, color: '#FFFFFF'}}>#school</Medium>
                    </View>
                  </View>
                </View>
                <Space1/>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 4, flex: 1, paddingLeft: 16, paddingTop:14, height: 68}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Medium style={{fontSize: 16, color: '#525266'}}>Group Meeting</Medium>
                    <View style={{width:8}}/>
                    <Regular style={{fontSize: 14, color: '#A0A1AC', paddingTop: 1.25}}>11:30-13:30</Regular>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{paddingHorizontal:8 , paddingTop: 3, backgroundColor: '#7E9BE5', borderRadius: 2, height: 16}}>
                    <Medium style={{fontSize: 10, color: '#FFFFFF'}}>#work</Medium>
                    </View>
                  </View>
                </View>
                </View>
              </View>
              <Space2/>
              <View style={{flex: 1, flexDirection: 'row',paddingRight: 8,paddingLeft: 8}}>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: 58, paddingTop: 14}}>
                  <Medium style={{fontSize: 24, color: '#525766', lineHeight: 30}}>24</Medium>
                  <Medium style={{fontSize: 12, color: '#8B8E95', lineHeight: 15}}>SAT</Medium>
                </View>
                <View style={{flexDirection:'column', flex: 1}}>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 4, flex: 1, paddingLeft: 16, paddingTop:14, height: 68}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Medium style={{fontSize: 16, color: '#525266'}}>Lecture</Medium>
                    <View style={{width:8}}/>
                    <Regular style={{fontSize: 14, color: '#A0A1AC', paddingTop: 1.25}}>12:00-13:30</Regular>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{paddingHorizontal:8 , paddingTop: 3, backgroundColor: '#D095E5', borderRadius: 2, height: 16}}>
                    <Medium style={{fontSize: 10, color: '#FFFFFF'}}>#school</Medium>
                    </View>
                  </View>
                </View>
                <Space1/>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 4, flex: 1, alignItems: 'center'}}>
                    <Medium style={{fontSize: 12, color: '#8F99B2',lineHeight: 26,textAlignVertical: 'center'}}>VIEW FUTURE EVENTS</Medium>
                </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
