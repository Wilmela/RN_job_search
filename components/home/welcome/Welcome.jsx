import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { SIZES, icons } from "../../../constants";

const Welcome = ({ searchTerm, setSearchTerm, handlePress }) => {
  const jobTypes = ["Full-time", "Part-time", "Contractor"];

  const [activeJobType, setActiveJobType] = useState("Full-time");
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mela</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            placeholder="Search for a job"
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>

        <TouchableOpacity onPress={handlePress}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
