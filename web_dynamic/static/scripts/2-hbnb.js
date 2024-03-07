$(document).ready(function() {
    // Realizar la solicitud a la URL
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
      // Verificar si el estado de la respuesta es "OK"
      if (data.status === "OK") {
        // Agregar la clase "available" al elemento <div> con ID "api_status"
        $('#api_status').addClass('available');
      } else {
        // Eliminar la clase "available" del elemento <div> con ID "api_status"
        $('#api_status').removeClass('available');
      }
    });
  });
  