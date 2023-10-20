import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { Card } from "react-native-paper";
import { Event } from "../../API";
import { getEventHeaderImages } from "../../constants";
import { sharedStyles } from "../../../utils/SharedStyles";
import { eventStyles } from "./EventStyles";
import CustomButton from "./CustomButton.tsx";

type EventCardProps = {
    event: Event;
};

export const getFormattedDate = (unformattedDateTime: string) => {
    //split date and time
    const strings = unformattedDateTime.split('T');
    const unformattedDate = strings[0];
    const unformattedTime = strings[1].split('Z')[0];

    //format date
    const dateValues = unformattedDate.split('-');
    const year = dateValues[0].slice(2);
    const month = dateValues[1];
    const day = dateValues[2];
    const dateFormatted = day + "." + month + "." + year;

    //formate time
    const timeFormatted = unformattedTime.slice(undefined,5);

    //final format
    const finalFormat = dateFormatted + "    " + timeFormatted;
    
    return finalFormat
}

const EventCard: React.FC<EventCardProps> = ({ event: event }) => {
    const venueID = event.venueId;
    const description = event.title;
    const brief = event.brief;
    const dateTime = getFormattedDate(event.datetime);
    const imageFile = getEventHeaderImages(venueID);

    const handleOpenURL = () => {
        console.log("Cards pressed");
        //This is where we will navigate to the individual venue page
    };

    return (
        <SafeAreaView style={eventStyles.container}>
            <View style={eventStyles.container}>
                <TouchableOpacity onPress={handleOpenURL}>
                    <Card>
                        <Image source={imageFile} style={eventStyles.image} />
                        <View style={eventStyles.textContainer}>
                            <Text style={sharedStyles.secondaryTitle}>
                                {description}
                            </Text>
                            <Text style={[sharedStyles.text, eventStyles.text]}>
                                {brief}
                            </Text>
                            <Text style={eventStyles.dateTimeText}>
                                {dateTime}
                            </Text>
                            <CustomButton name="Sign-up" />
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default EventCard;
