import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapScreen extends Component {

  state = {
    mapLoaded: false,
    region: {
      longtitude: -122,
      latitude: 37,
      longtitudeDelta: 0.04, 
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex:1, justifyContent:'center' }} >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }} >
        <MapView region={this.state.region} style={{flex: 1}} onRegionChangeComplete={this.onRegionChangeComplete}  />
      </View>
    );
  }
}

export default MapScreen;
