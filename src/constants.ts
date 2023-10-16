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
    //The image that I have for Makers space is not good, I will get a
    //better one. until then we will use the image of Creative studio
    default:
      return null;
  }
};
