import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

export class MonoText extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}

export class Black extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'now-black' }]} />
  }
}

export class Bold extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'now-bold' }]} />
  }
}

export class Medium extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'now-medium' }]} />
  }
}

export class Regular extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'now-regular' }]} />
  }
}

export class Light extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'now-light' }]} />
  }
}
