function ShowSelected()
{
  /* Para obtener el valor */
  let cod = document.getElementById("visualizationMode").value;

  // Para el despliegue local
  // if (cod === 'D') {
  //   window.location.href = "/calendar-by-day.html";
  // } else {
  //   window.location.href = "/index.html";
  // }

  // Para el despliegue en github pages
  if (cod === 'D') {
    window.location.href = "/calendario/calendar-by-day.html";
  } else {
    window.location.href = "/calendario/index.html";
  }
}