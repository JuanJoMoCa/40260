

export function myFunction(cds){
      let table = "<tr><th>Artista</th><th>Título</th></tr>";
      Array.from(cds).forEach(cd => {
        const artist = cd.getElementsByTagName("ARTIST")[0]?.textContent || "Desconocido";
        const title = cd.getElementsByTagName("TITLE")[0]?.textContent || "Sin título";
        table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
      });
      document.getElementById("demo").innerHTML = table;
    };