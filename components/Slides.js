import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView
        pagingEnabled
        horizontal
        style = {{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }

  renderSlides() {
      return this.props.data.map((item, index) => {
        return(
            <View key={item.text} style={[styles.slidesStyle, {backgroundColor: item.color}]} >
                <Text style={styles.slidesText}>{item.text}</Text>
                {this.renderLastSlides(index)}
            </View>
        );
      });
  }

  renderLastSlides(index) {
    if(index === this.props.data.length - 1) {
        return(
            <Button
                title="Onwards!"
                // raised
                buttonStyle={styles.buttonStyles}
                onPress={this.props.onSlidesComplete}
            />
        );
    }
  }

}

const styles = {
    slidesStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slidesText: {
        fontSize: 30,
        color: 'white'
    },
    buttonStyles: {
        backgroundColor: 'red',
        marginTop: 15,
    }
}

export default Slides;
