import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  I18nManager,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import arTranslation from "../config/languages/arTranslation";
import enTranslation from "../config/languages/enTranslation";
import Screen from "./Screen";

const translations = {
  en: enTranslation,
  ar: arTranslation,
};

function ProfileComponents(props) {
  const languageOptions = [
    { label: translations.en.enLanguage, value: "en" },
    { label: translations.ar.arLanguage, value: "ar" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0].value
  );
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    if (value === "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  };

  useEffect(() => {
    if (selectedLanguage === "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={[
            styles.profileContainer,
            selectedLanguage === "ar" && { flexDirection: "row-reverse" },
          ]}
        >
          <Image source={require("../assets/images/profile.png")} />
          <Text style={styles.name}>{translations[selectedLanguage].name}</Text>
        </View>
        <TouchableOpacity style={styles.shareContainer}>
          <Text style={styles.share}>
            {translations[selectedLanguage].shareApp}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.languageContainer,
            selectedLanguage === "ar" && { flexDirection: "row-reverse" },
          ]}
        >
          <Text style={styles.share}>
            {translations[selectedLanguage].changeLanguage}
          </Text>
          <DropDownPicker
            open={open}
            value={selectedLanguage}
            items={languageOptions.map((option) => ({
              label: option.label,
              value: option.value,
            }))}
            setOpen={setOpen}
            setValue={setSelectedLanguage}
            onValueChange={handleLanguageChange}
            style={styles.menuContainer}
            textStyle={styles.menuText}
            containerStyle={{
              alignSelf: "baseline",
              width: 120,
            }}
            placeholder="Choose language"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  profileContainer: {
    flexDirection: "row",
  },
  name: {
    fontSize: 21,
    fontFamily: "inter-regular",

    marginHorizontal: 30,
  },
  shareContainer: {
    marginTop: 40,
  },
  share: {
    fontSize: 18,
    fontFamily: "inter-regular",
  },
  languageContainer: {
    flexDirection: "row",
    marginTop: 14.7,
    justifyContent: "space-between",
  },
  menuText: {
    fontSize: 18,
    fontFamily: "inter-medium",
  },
  menuContainer: {
    width: 120,
    marginHorizontal: -10,
    marginVertical: -12,
    borderWidth: 0,
  },
});

export default ProfileComponents;
