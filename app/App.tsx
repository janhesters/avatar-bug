import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

interface Restaurant {
  address: string;
  hasMenu?: boolean;
  itemClassifications: string[];
  licenses: string[];
  name: string;
  restaurantInfos: string[];
  subCategories: string[];
  uuid: string;
}

const restaurants: Restaurant[] = [
  {
    address: "address-abc",
    hasMenu: false,
    itemClassifications: ["itemClassification-abc", "itemClassification-def"],
    licenses: ["license-abc", "license-def"],
    name: "Test Restaurant",
    restaurantInfos: ["restaurantInfo-abc", "restaurantInfo-def"],
    subCategories: ["subCategory-abc", "subCategory-def"],
    uuid: "restaurant-abc"
  },
  {
    address: "address-def",
    hasMenu: true,
    itemClassifications: ["itemClassification-def", "itemClassification-ghi"],
    licenses: ["license-def", "license-ghi"],
    name: "Test Restaurant",
    restaurantInfos: ["restaurantInfo-def", "restaurantInfo-ghi"],
    subCategories: [],
    uuid: "restaurant-def"
  }
];

export class App extends Component {
  keyExtractor = (restaurant: Restaurant) => restaurant.uuid;

  renderItem = ({ item }: { item: Restaurant }) => (
    <ListItem
      title={item.name}
      bottomDivider={true}
      rightAvatar={{
        onPress: () => {
          // TODO: Navigate to the restaurant on the map.
        },
        size: "small",
        source: require("./assets/icons/splashIcon.png")
      }}
    />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={restaurants}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
