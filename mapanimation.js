const busStops = [
    [-84.309, 33.759],
    [-84.392, 33.759],
    [-84.390, 33.761],
    [-84.388, 33.756],
    [-84.389, 33.759],
    [-84.385, 33.756],
    [-84.382, 33.759],
    [-84.387, 33.760],
    [-84.379, 33.754],
    [-84.382, 33.759],
  ];

  

  mapboxgl.accessToken = 'pk.eyJ1IjoiYW11cnRoeTI4IiwiYSI6ImNsMG14bDJ5YzBqa24zYnAyZ2xoYzJoeWcifQ.oOzPrsm_sJp-VkEWQWEYeQ';
  
 
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-84.385, 33.759],
    zoom: 13,
  });
  
  
  var marker= new mapboxgl.Marker()
   .setLngLat([busStops[0][0],busStops[0][1]])
   .addTo(map)
  
 
  let counter= 0;
  function move() {
    setTimeout(() =>{
        if(counter>=busStops.length){
          return;
        }
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 1000)
    }