<?php

  header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Allow: GET, POST, OPTIONS, PUT, DELETE");

  require('BD.php');


  $conexion = conexion();
  $idProfesor= 1;
  $query = mysqli_query($conexion, "SELECT * FROM  profesores where idProfesor = idProf");


  $datos=[];
  while ($resultado = mysqli_fetch_assoc($query))
  {
    $datos[] = $resultado;
  }

  $json = json_encode($datos);

  echo $json;
?>
