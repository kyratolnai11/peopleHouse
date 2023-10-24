import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { sharedStyles } from "../../../utils/SharedStyles";
import Colors from "../../../utils/theme";

type ShowMoreProp = {
  text: string;
};

const ShowMore: React.FC<ShowMoreProp> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let textToShow;

  if (text.length > 250) {
    textToShow = isExpanded ? text : text.slice(0, 200) + "... ";
  } else {
    textToShow = text;
  }

  const handleExpandText = () => {
    setIsExpanded(true);
  };

  const handleCloseText = () => {
    setIsExpanded(false);
  };
  return (
    <View>
      <Text style={[sharedStyles.text, { marginBottom: 30 }]}>
        {textToShow}
        {!isExpanded && text.length > 250 && (
          <TouchableOpacity onPress={handleExpandText}>
            <Text style={styles.showMoreText}>Show more</Text>
          </TouchableOpacity>
        )}
        {isExpanded && text.length > 250 && (
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
