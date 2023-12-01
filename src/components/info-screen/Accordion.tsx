import React, { ReactNode, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { infoStyles } from "./InfoScreenStyleSheet";

interface AccordionProps {
  title: string;
  content: ReactNode;
  titleColor?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  titleColor,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={infoStyles.container}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={infoStyles.header}>
          {titleColor ? (
            <Text style={[infoStyles.title, { color: titleColor }]}>
              {title}
            </Text>
          ) : (
            <Text style={infoStyles.title}>{title}</Text>
          )}

          {titleColor ? (
            <Text style={{ color: titleColor }}>{isExpanded ? "-" : "+"}</Text>
          ) : (
            <Text>{isExpanded ? "-" : "+"}</Text>
          )}
        </View>
      </TouchableOpacity>
      {isExpanded && <View style={infoStyles.content}>{content}</View>}
    </View>
  );
};

export default Accordion;
