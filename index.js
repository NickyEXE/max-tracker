function myMap() {
  const chicago = { lat: 41.7886, lng: -87.5987 };
  const cairo = { lat: 30.0444, lng: 31.2357 };

  const startTime = Date.parse("06 May 2022 00:04:00");
  const endTime = Date.parse("08 May 2022 00:17:00");
  const totalTime = endTime - startTime;
  const time = Date.now();
  const latDifference = cairo.lat - chicago.lat;
  const lngDifference = cairo.lng - chicago.lng;
  const currentLat =
    (latDifference * (time - startTime)) / totalTime + cairo.lat;
  const currentLng =
    (lngDifference * (time - startTime)) / totalTime + cairo.lat;

  var mapProp = {
    center: new google.maps.LatLng(currentLat, currentLng),
    zoom: 8,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var cairoMarker = new google.maps.Marker({
    position: cairo,
    icon: "green-light.png",
  });
  cairoMarker.setMap(map);

  var chicagoMarker = new google.maps.Marker({
    position: chicago,
    icon: "finish.png",
  });
  chicagoMarker.setMap(map);

  var max = new google.maps.Marker({
    position: { lat: currentLat, lng: currentLng },
    icon: "max.png",
  });
  max.setMap(map);
}
