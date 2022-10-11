fetch(src="http://127.0.0.1:5500//archivos.json").then((response) => response.json()).
then ((archivos) => {const nombresDePasajeros = archivos.
    map((archivos) => archivos.nombre);
    console.log(nombresDePasajeros);
});
