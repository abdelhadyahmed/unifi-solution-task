const getLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        return { latitude: latitude, longitude: longitude };
      },
      (error) => {
        console.error("Error:", error.message);
      }
    );
  } else {
    console.log("Geolocation is not supported by your browser.");
    return { latitude: "", longitude: "" };
  }
};

export default getLocation;
