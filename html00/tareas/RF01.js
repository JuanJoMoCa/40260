import * as RF0101 from './RF01-01.js';

document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.getElementById('loadButton');
  const loadingSpinner = document.getElementById('loading');
  const errorBox = document.getElementById('error');
  const tableBody = document.getElementById('tableBody');

  loadButton.addEventListener('click', () => {
    fetchAlumnos();
  });

  function fetchAlumnos() {
    loadingSpinner.style.display = 'inline-block';
    errorBox.style.display = 'none';
    tableBody.innerHTML = '';

    fetch('alumnos.xml')
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.text();
      })
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => displayAlumnos(data))
      .catch(err => {
        errorBox.style.display = 'block';
        errorBox.textContent = `Error al cargar: ${err.message}`;
      })
      .finally(() => loadingSpinner.style.display = 'none');
  }

  function displayAlumnos(xmlDoc) {
    const alumnos = xmlDoc.getElementsByTagName("alumno");

    if (alumnos.length === 0) {
      errorBox.style.display = 'block';
      errorBox.textContent = 'No se encontraron alumnos.';
      return;
    }

    let rows = '';
    Array.from(alumnos).forEach(alumno => {
      const nombre = RF0101.getText(alumno, "nombre");
      const nacimiento = RF0101.getText(alumno, "nacimiento");
      const correo = alumno.getAttribute("correo") || '<span class="no-data">No disponible</span>';

      rows += `
        <tr>
          <td data-label="Nombre">${nombre}</td>
          <td data-label="Nacimiento">${RF0101.formatDate(nacimiento)}</td>
          <td data-label="Correo">${correo}</td>
        </tr>
      `;
    });

    tableBody.innerHTML = rows;
  }
});
