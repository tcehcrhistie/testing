/*
How to add new fonts
1. Add that new font to assets/fonts
2. Add font under Font.loadAsync in App.js
3. export class in StyledText.js
4. import classname in TestingScreen.js
*/

const green = '#95E5D7'
const pink = '#D095E5'
const headerto = '#525766'

export default {
  // Containers
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa'
  },
  welcomeContainer: {
    paddingTop: 94,
    paddingBottom: 8,
    left: 24
  },
  contentContainer: {
    paddingTop: 64,
    paddingBottom: 16
  },
  weatherContainer: {
    paddingTop: 8,
    height: 78,
    backgroundColor: '#618af2'
  },
  toDoContainer: {
    paddingBottom: 0,
  },
  cardsPadding: {
    paddingLeft: 8,
    paddingRight: 8
  },
  roundrec: {
    //paddingTop: 10,
    //paddingBottom: 48,
    paddingLeft: 16,
    borderRadius: 4,
    height: 48,
    flex: 1,
    backgroundColor: '#ffffff'
  },
  round: {
    height: 8,
    width: 8,
    top: 20,
    borderRadius: 4
  },
  green: {
    backgroundColor: green
  },
  pink: {
    backgroundColor: pink
  },
  weather: {
    left: 24
  },
  viewAll: {
    borderRadius: 4,
    height: 26,
    flex: 1,

    alignContent: 'stretch',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  // Text
  welcome: {
    fontSize: 24,
    lineHeight: 42,
    color: '#303440',
    position: 'absolute',
    letterSpacing: 1
  },
  weatherText: {
    fontSize: 24,
    lineHeight: 42,
    color: '#FFFFFF',
    position: 'absolute'
  },
  smallallcaps: {
    fontSize: 12,
    color: '#CCDAFF',
    top: 42,
    position: 'absolute',
    letterSpacing: 0.75
  },
  smallheader: {
    fontSize: 12,
    color: '#8F99B2',
    textAlignVertical: 'center',
    position: 'absolute'
  },
  viewAllHeader: {
    fontSize: 12,
    color: '#8F99B2',
    lineHeight: 27,
    textAlignVertical: 'center',
    position: 'absolute'
  },
  header: {
    fontSize: 16,
    color: headerto,
    position: 'absolute',
    top: 15,
    paddingLeft: 38,
    fontFamily: 'now-medium'
  }
}
