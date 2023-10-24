import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { sharedStyles } from "../../../utils/SharedStyles";
import Colors from "../../../utils/theme";

type ShowMoreProp = {
  text: string;
};

const ShowMore: React.FC<ShowMoreProp> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const textToShow = isExpanded ? text : text.slice(0, 200) + "... ";

  const handleExpandText = () => {
    setIsExpanded(true);
  };

  const handleCloseText = () => {
    setIsExpanded(false);
  };
  return (
    <View>
      <Text style={[sharedStyles.text]}>
        {textToShow}
        {!isExpanded && (
          <TouchableOpacity onPress={handleExpandText}>
            <Text style={styles.showMoreText}>Show more</Text>
          </TouchableOpacity>
        )}
        {isExpanded && (
          <TouchableOpacity onPress={handleCloseText}>
            <Text style={styles.showMoreText}>Show less</Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  showMoreText: {
    fontSize: 18,
    color: Colors.light.textPrimary,
    fontWeight: "bold",
  },
});

export default ShowMore;
