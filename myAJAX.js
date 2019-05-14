$(document).ready(function() {
  // Se espera a la carga del documento para garantizar una óptima funcionalidad
  function ajaxRequest() {
    // Función a la que hacer la llamada
    $.ajax({
      // AJAX Request
      url: "https://jsonplaceholder.typicode.com/photos/1", // URL a la que se le realiza la request
      dataType: "json", // Tipo de info a la que se accede

      success: function(data) {
        // Se crean imágenes para obtener las dimensiones de aquellas referenciadas al JSON
        let temp = new Image();
        temp.src = data.url;
        //console.log(temp.width);
        //console.log(temp.height);

        let temp_thumbnail = new Image();
        temp_thumbnail.src = data.thumbnailUrl;

        // Si alguna dimensión no logra ser obtenida se repite la llamada
        if (
          temp.width == 0 ||
          temp.height == 0 ||
          temp_thumbnail.width == 0 ||
          temp_thumbnail.width == 0
        ) {
          ajaxRequest();
        } else {
          $("#img").attr("src", data.url); // Se modifica la fuente/origen de la imagen con id #img a la de la imagen referenciada en el JSON
          $("#img").css("display", "block"); // Se muestra la imagen
          $("#img").css("width", temp.width); // Se asigna la anchura adecuada a la imagen
          $("#img").css("height", temp.height); // Se asigna la altura adecuada a la imagen

          // Se repite el procedimiento para la segunda imagen referenciada en el JSON (thumbnail)
          $("#img_thumbnail").attr("src", data.thumbnailUrl);
          $("#img_thumbnail").css("display", "block");
          $("#img_thumbnail").css("width", temp_thumbnail.width);
          $("#img_thumbnail").css("height", temp_thumbnail.height);
        }
      },

      type: "GET" // Se especifica el tipo de AJAX request
    });
  }
  $("#ajax").on("click", ajaxRequest); // Se asigna la función al botón de id #ajax con click como trigger
});

// Troubleshooting version
/*$(document).ready(function() {
  function ajaxRequest() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos/1",
      dataType: "json",

      success: function(data) {
        let temp = new Image();
        temp.src = data.url;
        console.log(temp.width);
        console.log(temp.height);

        let temp_thumbnail = new Image();
        temp_thumbnail.src = data.thumbnailUrl;

        if (
          (temp.width == 0 || temp.height == 0) &&
          (temp_thumbnail.width == 0 || temp_thumbnail.width == 0)
        ) {
          $("p.error_ajax").text(
            "Las dimensiones de las imágenes no han podido ser obtenidas, prueba a repetir la llamada"
          );
          $("p.error_ajax").css("display", "block");
        } else {
          if (temp.width != 0 && temp.height != 0) {
            $("#img").attr("src", data.url);
            $("#img").css("display", "block");
            $("#img").css("width", temp.width);
            $("#img").css("height", temp.height);
          }

          if (temp_thumbnail.width != 0 && temp_thumbnail.height != 0) {
            $("#img_thumbnail").attr("src", data.thumbnailUrl);
            $("#img_thumbnail").css("display", "block");
            $("#img_thumbnail").css("width", temp_thumbnail.width);
            $("#img_thumbnail").css("height", temp_thumbnail.height);
          }

          if (
            temp.width == 0 ||
            temp.height == 0 ||
            temp_thumbnail.width == 0 ||
            temp_thumbnail.width == 0
          ) {
            $("p.error_ajax").text(
              "Las dimensiones de la imagen restante no han podido ser obtenidas, prueba a repetir la llamada"
            );
            $("p.error_ajax").css("display", "block");
          }
        }
      },

      type: "GET"
    });
  }
  $("#ajax").on("click", ajaxRequest);
});
*/
