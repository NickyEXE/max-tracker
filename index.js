function myMap() {
  const chicago = { lat: 41.7886, lng: -87.5987 };
  const cairo = { lat: 30.0444, lng: 31.2357 };

  const startTime = Date.parse("06 May 2022 05:00:00");
  const endTime = Date.parse("06 May 2022 07:00:00");
  const time = Date.now();
  const t = (time - startTime) / (endTime - time);
  const currentLat = t * cairo.lat + (1 - t) * chicago.lat;
  const currentLng = t * cairo.lng + (1 - t) * chicago.lng;

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
