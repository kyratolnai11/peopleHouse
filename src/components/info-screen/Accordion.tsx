import React, { ReactNode, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface AccordionProps {
  title: string;
  content: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: "#ccc",
      margin: 10,
      padding: 10,
      borderRadius: 5,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 350,
      paddingBottom: isExpanded ? 15 : 0,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    content: {
      marginTop: 10,

    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text>{isExpanded ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>
      {isExpanded && <View style={styles.content}>{content}</View>}
    </View>
  );
};

export default Accordion;
