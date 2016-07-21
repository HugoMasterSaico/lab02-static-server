// Manejadores de rutas virtuales
 var fechaDeNacimiento = new Date(1981,10,22,1,45);
 module.exports = {
     "/edad/Hugo-Velazquez" : function(req, res){
         res.writeHead(200,{
             "Content-Type" : "application/json"
         });
         // Calculo la edad
         var hoy = new Date();
         var age = 
         Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
         // Armando el json
         var objetoRespuesta = {
             "edad" : age
         };
         var jsonResponse = 
         JSON.stringify(objetoRespuesta);
         // Envio la respuesta al cliente
         res.end(jsonResponse); 
},
      " / Getfortune " :  function (req,res) 
      {
          // Se obtiene El Mensaje de la suerte
          var fortunePaper = {
              " Mensaje "  : 
              " La honestidad es  un  regalo muy caro , no lo esperes de gente barata "
 };
          // Se CONFIGURACIÓN el Encabezado de Respuesta
          // HTTP
          Res . WriteHead ( 200 , {
              " Content-Type "  :  " application / json "
 });
          // Parseando una cadena el objetoRespuesta
          // De Respuesta
         var jsonResponse =  JSON . Stringify (fortunePaper);
          // Respondemos el Objeto
          Res . Extremo (jsonResponse);
 }
}; 