function calculateTotal() {
    // Obtener los valores de los campos de entrada
    var floorLeveling = parseFloat(document.getElementById('floor_leveling').value) || 0;
    var ceramicTiles = parseFloat(document.getElementById('ceramic_tiles').value) || 0;
    var masonry = parseFloat(document.getElementById('masonry').value) || 0;
    var plastering = parseFloat(document.getElementById('plastering').value) || 0;
    var painting = parseFloat(document.getElementById('painting').value) || 0;
    var electricalWork = parseFloat(document.getElementById('electrical_work').value) || 0;
    var drywall = parseFloat(document.getElementById('drywall').value) || 0;
    var glassDivisions = parseFloat(document.getElementById('glass_divisions').value) || 0;
  
    // Calcular el subtotal, el IVA y el total
    var subtotal = floorLeveling + ceramicTiles + masonry + plastering + painting + electricalWork + drywall + glassDivisions;
    var iva = subtotal * 0.12;
    var total = subtotal + iva;
  
    // Actualizar los campos de subtotal, IVA y total en el formulario
    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('iva').value = iva.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
  }
  
  var quotationForm = document.getElementById('quotation-form');
  quotationForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    var clientName = quotationForm.elements['client_name'].value;
    var date = quotationForm.elements['date'].value;
    var phone = quotationForm.elements['phone'].value;
    var tower = quotationForm.elements['tower'].value;
    var apartment = quotationForm.elements['apartment'].value;
    var contractType = quotationForm.elements['contract_type'].value;
    var subtotal = quotationForm.elements['subtotal'].value;
    var iva = quotationForm.elements['iva'].value;
    var total = quotationForm.elements['total'].value;
  
    // Crear el documento PDF
    var doc = new jsPDF();
  
    // Agregar el contenido al PDF
    doc.text(`Nombre del cliente: ${clientName}`, 10, 10);
    doc.text(`Fecha: ${date}`, 10, 20);
    doc.text(`Teléfono: ${phone}`, 10, 30);
    doc.text(`Torre: ${tower}`, 10, 40);
    doc.text(`Apartamento: ${apartment}`, 10, 50);
    doc.text(`Tipo de contratación: ${contractType}`, 10, 60);
    doc.text(`Subtotal: ${subtotal}`, 10, 70);
    doc.text(`IVA: ${iva}`, 10, 80);
    doc.text(`Total: ${total}`, 10, 90);
  
    // Guardar el PDF
    doc.save('cotizacion.pdf');
  
    alert('Cotización guardada y descargada correctamente');
  });
  
  var newAccountingButton = document.querySelector('.new-accounting');
  newAccountingButton.addEventListener('click', function() {
    // Restablecer el formulario actual
    quotationForm.reset();
  
    alert('Se ha creado una nueva hoja de contabilidad con éxito');
  });
  function downloadAsPDF() {
    // Obtener los datos del formulario
    var clientName = quotationForm.elements['client_name'].value;
    var date = quotationForm.elements['date'].value;
    var phone = quotationForm.elements['phone'].value;
    var tower = quotationForm.elements['tower'].value;
    var apartment = quotationForm.elements['apartment'].value;
    var contractType = quotationForm.elements['contract_type'].value;
    var subtotal = quotationForm.elements['subtotal'].value;
    var iva = quotationForm.elements['iva'].value;
    var total = quotationForm.elements['total'].value;
  
    // Crear el documento PDF
    var doc = new jsPDF();
  
    // Agregar el contenido al PDF
    doc.text(`Nombre del cliente: ${clientName}`, 10, 10);
    doc.text(`Fecha: ${date}`, 10, 20);
    doc.text(`Teléfono: ${phone}`, 10, 30);
    doc.text(`Torre: ${tower}`, 10, 40);
    doc.text(`Apartamento: ${apartment}`, 10, 50);
    doc.text(`Tipo de contratación: ${contractType}`, 10, 60);
    doc.text(`Subtotal: ${subtotal}`, 10, 70);
    doc.text(`IVA: ${iva}`, 10, 80);
    doc.text(`Total: ${total}`, 10, 90);
  
    // Guardar el PDF
    doc.save('cotizacion.pdf');
  
    alert('Cotización guardada y descargada correctamente');
  }
  