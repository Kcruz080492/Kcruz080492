//sintasis de fetch
/*fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Eror:', error))*/

/*Get Traer datos (Ejemplo)
Post: Enviar datos 
Put: Actualiza datos 
Delete: Borrar datos*/

/*Aplicación API Publica: OpenWeatherMap
https://home.openweathermap.org/api_keys*/

document.getElementById('btnConsultar').addEventListener('click', obtenerClima);

function obtenerClima(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=San Miguel,SV&units=metric&lang=es&appid=e3e61da1f4a11ae3ab831a83370f7dc5';

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        document.getElementById('descripcion').textContent = `Descripción: ${data.weather[0].description}`;
        document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}°C`;
        document.getElementById('humedad').textContent = `Humedad: ${data.main.humidity}%`;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
    
    }
