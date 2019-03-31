import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../styles/main'
import { Font } from 'expo';

export class Testing extends React.Component {
  render () {
    return (
      <View style={Styles.roundrec}/>
    )
  }
}

class CardsPadding extends React.Component {
  render () {
    return (
      <View style={Styles.cardsPadding} />
    )
  }
}

export class Hello extends React.Component {
  render () {
    const green = <View style={[Styles.round, Styles.green]} />
    const pink = <View style={[Styles.round, Styles.pink]} />

    let color
    if (this.props.isGreen) {
      color = green
    } else {
      color = pink
    }
    return (
      <View style={Styles.cardsPadding}>
        <View style={Styles.roundrec}>
          {<View style={[Styles.round, this.props.style]} />}
          <Text {...this.props} style={Styles.header} />
        </View>
      </View>
    )
  }
}

export class Space1 extends React.Component {
  render () {
    return (
      <View style={{ height: 8 }} />
    )
  }
}

export class Space2 extends React.Component {
  render () {
    return (
      <View style={{ height: 12 }} />
    )
  }
}

export class Space4 extends React.Component {
  render () {
    return (
      <View style={{ height: 32 }} />
    )
  }
}

export class Space3 extends React.Component {
  render () {
    return (
      <View style={{ height: 24 }} />
    )
  }
}
