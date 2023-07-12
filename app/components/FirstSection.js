import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { fetchBrands, fetchSectors } from "../api/ApiCalls";
import { Image } from "react-native";

function FirstSection() {
  const [sectors, setSectors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isSelected, setIsSelected] = useState("All");
  const allItem = { value: "", label: "All" };
  const sectorsDataWithAll = [allItem, ...sectors];

  useEffect(() => {
    const fetchData = async () => {
      const sectorsData = await fetchSectors();
      const brandsData = await fetchBrands();

      setSectors(sectorsData);
      setBrands(brandsData);
    };

    fetchData();
  }, []);

  async function selectCategoryHandler(label, value) {
    setIsSelected(label);
    const brandsData = await fetchBrands(value);
    setBrands(brandsData);
  }
  return (
    <>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Top brands in retail</Text>
          <TouchableOpacity>
            <Text style={styles.viewButton}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={sectorsDataWithAll}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.slide,
                isSelected === item.label && styles.selectedCategory,
              ]}
              onPress={() => selectCategoryHandler(item.label, item.value)}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          horizontal
          data={brands}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.brandContainer}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.brandThumbnail}
              />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 18,
    fontFamily: "inter-bold",
  },
  slide: {
    marginRight: 25,
  },
  viewButton: {
    fontSize: 14,
    fontFamily: "inter-regular",
    color: "#072040",
  },
  selectedCategory: {
    flex: 1,
    backgroundColor: "#3EBDAC",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderRadius: 5,
  },
  brandContainer: {
    marginRight: 10,
    marginTop: 17,
  },
  brandThumbnail: {
    flex: 1,
    width: 75,
    height: 75,
    borderRadius: 20,
  },
});

export default FirstSection;
