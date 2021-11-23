import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

var Bubblegum = {
  "bubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class StoryCard extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async loadFonts() {
    await font.loadAsync(Bubblegum);
    this.setState({
      fontLoaded: true,
    });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.storyCard}>
            <Image
              source={require("../assets/story_image_4.png")}
              style={styles.storyImg}
            />
            <Text style={styles.title}>{this.props.story.title}</Text>
            <Text style={styles.author}>{this.props.story.author}</Text>
            <Text style={styles.description}>
              {this.props.story.description}
            </Text>
            <View style={styles.likes}>
              <Ionicons
                name={"heart"}
                size={RFValue(25)}
                color={"white"}
                style={styles.icons}
              />
              <Text style={styles.likesTxt}>12K</Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  storyCard: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#2f345d",
  },
  storyImg: {
    height: RFValue(200),
    width: "95%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    color: "white",
    fontFamily: "bubbleGum-Sans",
    fontSize: 25,
  },
  author: {
    color: "white",
    fontFamily: "bubbleGum-Sans",
    fontSize: 20,
  },
  description: {
    color: "white",
    fontFamily: "bubbleGum-Sans",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  likesTxt: {
    color: "white",
    fontFamily: "bubbleGum-Sans",
    fontSize: 15,
  },
  likes: {
    backgroundColor: "#eb3948",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderRadius: 25,
  },
});
