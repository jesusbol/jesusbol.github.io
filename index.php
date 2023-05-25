<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los datos del formulario
  $clientName = $_POST['client_name'];
  $date = $_POST['date'];
  $phone = $_POST['phone'];
  $tower = $_POST['tower'];
  $apartment = $_POST['apartment'];
  $contractType = $_POST['contract_type'];
  $subtotal = $_POST['subtotal'];
  $iva = $_POST['iva'];
  $total = $_POST['total'];

  // Guardar los datos en una base de datos o realizar cualquier otra operación necesaria

  // Redireccionar a otra página o mostrar un mensaje de éxito
  echo 'Cotización guardada correctamente';
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>

