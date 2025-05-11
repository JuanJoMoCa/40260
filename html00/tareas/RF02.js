import * as RF0202 from './RF02-02.js';

const loadButton = document.getElementById('loadButton');

loadButton.addEventListener('click', () => {
    loadXMLDoc();
  });

const loadXMLDoc = async () => {
      try {
        const response = await fetch('cd_catalog.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        const cds = xmlDoc.getElementsByTagName("CD");
        RF0202.myFunction(cds);
        document.getElementById("error").textContent = "";
      } catch (error) {
        console.error('Error loading XML:', error);
        document.getElementById("error").textContent = "No se pudo cargar el archivo XML.";
      }
    };