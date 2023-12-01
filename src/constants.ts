import { format } from "date-fns-tz";

export const getVenueImages = (id: string) => {
  switch (id) {
    case "1":
      return require("../assets/venue-images/1.png");
    case "2":
      return require("../assets/venue-images/2.png");
    case "3":
      return require("../assets/venue-images/3.png");
    case "4":
      return require("../assets/venue-images/4.png");
    case "5":
      return require("../assets/venue-images/5.png");
    case "6":
      return require("../assets/venue-images/6.png");
    case "7":
      return require("../assets/venue-images/7.png");
    case "8":
      return require("../assets/venue-images/8.png");
    case "9":
      return require("../assets/venue-images/9.png");
    case "10":
      return require("../assets/venue-images/10.png");
    case "11":
      return require("../assets/venue-images/7.png");
    default:
      return null;
  }
};

export const getEventHeaderImages = (id: string) => {
  switch (id) {
    case "1":
      return require("../assets/event-headers/1.png");
    case "2":
      return require("../assets/event-headers/2.png");
    case "3":
      return require("../assets/event-headers/3.png");
    case "4":
      return require("../assets/event-headers/4.png");
    case "5":
      return require("../assets/event-headers/5.png");
    case "6":
      return require("../assets/event-headers/6.png");
    case "7":
      return require("../assets/event-headers/7.png");
    case "8":
      return require("../assets/event-headers/8.png");
    case "9":
      return require("../assets/event-headers/9.png");
    case "10":
      return require("../assets/event-headers/10.png");
    case "11":
      return require("../assets/event-headers/11.png");
    default:
      return null;
  }
};

export const getVenueLogos = (id: string) => {
  switch (id) {
    case "1":
      return require("../assets/venue-logos/1.png");
    case "2":
      return require("../assets/venue-logos/2.png");
    case "3":
      return require("../assets/venue-logos/3.png");
    case "4":
      return require("../assets/venue-logos/4.png");
    case "5":
      return require("../assets/venue-logos/5.png");
    case "6":
      return require("../assets/venue-logos/6.png");
    case "7":
      return require("../assets/venue-logos/7.png");
    case "8":
      return require("../assets/venue-logos/8.png");
    case "9":
      return require("../assets/venue-logos/9.png");
    case "10":
      return require("../assets/venue-logos/10.png");
    case "11":
      return require("../assets/venue-logos/11.png");
    default:
      return null;
  }
};

export const getFormattedDate = (
  unformattedDateTime1: string,
  unformattedDateTime2: string
) => {
  //getting name of the day
  const dayName = format(new Date(unformattedDateTime1), "EEEE");
  //split date and time
  const strings1 = unformattedDateTime1.split("T");
  const unformattedDate1 = strings1[0];
  const unformattedTime1 = strings1[1].split("Z")[0];

  const strings2 = unformattedDateTime2.split("T");
  const unformattedTime2 = strings2[1].split("Z")[0];

  //format date
  const dateValues = unformattedDate1.split("-");
  const year = dateValues[0].slice(2);
  const month = dateValues[1];
  const day = dateValues[2];
  const dateFormatted = day + "." + month + "." + year;

  //formate time
  const startTimeFormatted = unformattedTime1.slice(undefined, 5);
  const endTimeFormatted = unformattedTime2.slice(undefined, 5);

  //final format
  const finalFormat =
    dayName +
    " " +
    dateFormatted +
    " " +
    startTimeFormatted +
    " - " +
    endTimeFormatted;

  return finalFormat;
};

export const getVenueName = (id: string) => {
  switch (id) {
    case "1":
      return "LEGO Arena";
    case "2":
      return "Chef's Corner";
    case "3":
      return "The Heart";
    case "4":
      return "LEGO Gym";
    case "5":
      return "Club House";
    case "6":
      return "Cinema";
    case "7":
      return "Creative Studio";
    case "8":
      return "Music Room";
    case "9":
      return "Fireplace Lounge";
    case "10":
      return "Health + Wellbeing Center";
    case "11":
      return "Maker Space";
    default:
      return "Maker Space";
  }
};

export const allVenuesByNameAndId = [
  { label: "All venues", value: "0" },
  { label: "LEGO Arena", value: "1" },
  { label: "Chefs Corner", value: "2" },
  { label: "The Heart", value: "3" },
  { label: "LEGO Gym", value: "4" },
  { label: "Club House", value: "5" },
  { label: "Cinema", value: "6" },
  { label: "Creative Studio", value: "7" },
  { label: "Music Room", value: "8" },
  { label: "Fireplace Lounge", value: "9" },
  { label: "Health + Wellbeing Center", value: "10" },
  { label: "Maker Space", value: "11" },
];

export const formatDateForEvent = (date: Date, time: Date) => {
  // Extract year, month, and day components from the date object
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Extract hour and minute components from the time object
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return new Date(year, month, day, hours, minutes);
};

export const getHomestayLogos = (name: string) => {
  switch (name) {
    case "Room":
      return require("../assets/homestay/bed.png");
    case "Kitchen":
      return require("../assets/homestay/kitchen.png");
    case "Laundry room":
      return require("../assets/homestay/washing_machine.png");
    case "Vending machine":
      return require("../assets/homestay/vending_matchine.png");
    case "Activities":
      return require("../assets/homestay/balloon-bold.png");
    default:
      return null;
  }
};
