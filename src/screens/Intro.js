import * as React from 'react';
import {
  Text, 
  View,
  Image,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

export default class Intro extends React.Component {

  
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          
          carouselItems: [
          {   
              image: 'https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg',
          },
          {
              image: 'https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg',
          },
          {
              image: 'https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg',
          },
          {
              image: 'https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg',
          },
          {
              image: 'https://pbs.twimg.com/media/D-Z5oJVW4AEwa8d.jpg',
          },
        ]
      }
    }

    _renderItem({item,index}){
      
        return (
          <View style={{
              width: ITEM_WIDTH,
           }}>
            <Image style={{
              marginTop: 10,
              height: 350,
              borderRadius: 8
           }} source={{uri: item.image}}/>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#cba826'}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
                <Carousel
                  layout={"stack"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
