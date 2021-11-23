import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
var Bubblegum = {
  "bubbleGum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class CreateStory extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      previewImage: "image1",
      dropdownHeight: 35,
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
      const previewImg = {
        image1: require("../assets/story_image_1.png"),
        image2: require("../assets/story_image_2.png"),
        image3: require("../assets/story_image_3.png"),
        image4: require("../assets/story_image_4.png"),
        image5: require("../assets/story_image_5.png"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safeView} />
          <View style={styles.titleContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>New Story</Text>
          </View>
          <View style={styles.form}>
            <Image
              source={previewImg[this.state.previewImage]}
              style={styles.previewImg}
            />
            <View style={{ height: this.state.dropdownHeight }}>
              <DropDownPicker
                items={[
                  { label: "Image1", value: "image1" },
                  { label: "Image2", value: "image2" },
                  { label: "Image3", value: "image3" },
                  { label: "Image4", value: "image4" },
                  { label: "Image5", value: "image5" },
                ]}
                arrowStyle={{ color: "white", fontFamily: "bubbleGum-Sans" }}
                labelStyle={{ color: "white", fontFamily: "bubbleGum-Sans" }}
                defaultValue={this.state.previewImage}
                onClose={() => {
                  this.setState({ dropdownHeight: 35 });
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight: 175 });
                }}
                style={styles.dropDownPicker}
                containerStyle={styles.dropDownContainer}
              />
            </View>
            <TextInput
              style={styles.storyTitle}
              placeholder={"Story Title"}
              onChangeText={(title) => {
                this.setState({
                  title,
                });
              }}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.storyTitle}
              placeholder={"Description"}
              onChangeText={(desciption) => {
                this.setState({
                  decription,
                });
              }}
              placeholderTextColor="white"
              multiline={true}
              numberOfLines={5}
            />
            <TextInput
              style={styles.storyTitle}
              placeholder={"Author"}
              onChangeText={(Author) => {
                this.setState({
                  Author,
                });
              }}
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.storyTitle}
              placeholder={"Story"}
              onChangeText={(story) => {
                this.setState({
                  story,
                });
              }}
              placeholderTextColor="white"
              multiline={true}
              numberOfLines={20}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#15193c",
    justifyContent: "center",
  },
  safeView: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  logo: {
    height: RFValue(30),
    width: RFValue(30),
    resizeMode: "contain",
  },
  titleContainer: {
    flex: 0.1,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 30,
    marginLeft: 30,
    fontFamily: "bubbleGum-Sans",
  },
  previewImg: {
    height: 200,
    width: "95%",
    resizeMode: "contain",
    borderRadius: 20,
    alignSelf: "center",
  },
  picker: {},
  dropDownPicker: {
    backgroundColor: "transparent",
  },
  dropDownContainer: {
    height: 35,
  },
  form: {
    flex: 0.8,
  },
  storyTitle: {
    height: 35,
    borderRadius: 25,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    fontFamily: "bubbleGum-Sans",
    marginBottom: 20,
    padding: 10,
  },
});
