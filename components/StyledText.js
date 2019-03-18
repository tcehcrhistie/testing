import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

export class MonoText extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}

export class CustomText extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'league-spartan' }]} />
  }
}

export class PoppinsBold extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'poppins-bold' }]} />
  }
}

export class PoppinsSemiBold extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'poppins-semibold' }]} />
  }
}

export class ManropeEB extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'manrope-extrabold' }]} />
  }
}

export class ManropeB extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'manrope-bold' }]} />
  }
}

export class ManropeSB extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'manrope-semibold' }]} />
  }
}

export class ManropeM extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'manrope-medium' }]} />
  }
}

export class ManropeR extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'manrope-regular' }]} />
  }
}
