javascript: (() => {function center_scale_to_bounds(center_lat, center_lon, scale, units) {
    const per_degree_lat = {feet: 365228, meters:111321};
    var unit_per_degree_lat = per_degree_lat[units];
    var unit_per_degree_lon = Math.cos((Math.PI/180)*center_lat)*unit_per_degree_lat;
    var degree_range_lat = scale/unit_per_degree_lat;
    var degree_range_lon = scale/unit_per_degree_lon;
    var lower_lat = center_lat - (degree_range_lat/2);
    var upper_lat = center_lat + (degree_range_lat/2);
    var left_lon = center_lon - (degree_range_lon/2);
    var right_lon = center_lon + (degree_range_lon/2);
    var bounds = {lower_lat: lower_lat, upper_lat: upper_lat, left_lon: left_lon, right_lon: right_lon};
    return bounds;
  }
  
  const field_maps_link = window.location.href;
  
  var item_id_start_i = field_maps_link.indexOf("itemID") + 7;
  var item_id_end_i = field_maps_link.indexOf("&", item_id_start_i);
  var item_id = field_maps_link.substring(item_id_start_i, item_id_end_i);
  
  
  var lat_start_i = field_maps_link.indexOf("center=", item_id_end_i) + 7;
  var char_after_lat = ",";
  try {
    var lat_end_i = field_maps_link.indexOf(char_after_lat, lat_start_i);
  } catch(e) {
    var char_after_lat = "%";
  }
  
  var lat_end_i = field_maps_link.indexOf(char_after_lat, lat_start_i);
  var latitude = parseFloat(field_maps_link.substring(lat_start_i, lat_end_i));
  
  
  var long_start_i = field_maps_link.indexOf("-", lat_end_i);
  var long_end_i = field_maps_link.indexOf("&", long_start_i);
  var longitude = parseFloat(field_maps_link.substring(long_start_i, long_end_i));
  
  
  var scale_start_i = field_maps_link.indexOf("scale=", long_end_i) + 6;
  var scale = parseFloat(field_maps_link.substring(scale_start_i));
  
  
  var bounds = center_scale_to_bounds(latitude, longitude, scale, "feet");
  var lower_lat = bounds["lower_lat"];
  var upper_lat = bounds["upper_lat"];
  var left_lon = bounds["left_lon"];
  var right_lon = bounds["right_lon"];
  
  var web_link_base = "https://webadaptorhost.domain.com/webadaptorname/home/webmap/viewer.html?webmap=";
  var new_link = `${web_link_base}${item_id}&extent=${left_lon.toPrecision(6)},${lower_lat.toPrecision(6)},${right_lon.toPrecision(6)},${upper_lat.toPrecision(6)}`;
  
  location.assign(new_link);})();
