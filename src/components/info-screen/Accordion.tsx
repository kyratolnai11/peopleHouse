import React, { ReactNode, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { infoStyles } from "./StyleSheet";

interface AccordionProps {
  title: string;
  content: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={infoStyles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={infoStyles.header}>
          <Text style={infoStyles.title}>{title}</Text>
          <Text>{isExpanded ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>
      {isExpanded && <View style={infoStyles.content}>{content}</View>}
    </View>
  );
};

export default Accordion;
