function ShowSelected()
{
  /* Para obtener el valor */
  let cod = document.getElementById("visualizationMode").value;

  if (cod === 'D') {
    window.location.href = "/calendar-by-day.html";
  } else {
    window.location.href = "/index.html";
  }
}