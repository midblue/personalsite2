function success(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  map.setView([latitude, longitude], 16, {
    pan: { animate: true },
    zoom: { animate: true },
  })
  marker.setLatLng([latitude, longitude])

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
}

function error(e) {
  console.error('Unable to retrieve your location', e)
}

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0,
}

if (!navigator.geolocation) {
  console.error('Geolocation unsupported')
} else {
  console.log('Locating...')
  navigator.geolocation.watchPosition(success, error, options)
}

// Provide your access token
L.mapbox.accessToken =
  'pk.eyJ1IjoibWlkYmx1ZSIsImEiOiJmNWJlNzhkOThjNmVjMmRkMWNhZmJkZmY0OWI5YjZjNyJ9.T-Mn0TJBSXOsUZ_5fpL2qg'
// Create a map in the div #map
const map = L.mapbox.map('map', 'mapbox.streets')
const marker = L.marker([0, 0]).addTo(map)
