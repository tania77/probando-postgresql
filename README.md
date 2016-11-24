#Práctica: LocalStrategy y base de datos

## Descripción

El servidor proveído por el plugin (sea iaaso heroku) deberá autenticar al lector del libro usando LocalStrategy 
y una base de datos en la que se guarda la información acerca de los usuarios.
En este caso la base de datos utilizada es SQLITE,que es una biblioteca escrita en leguaje C que implementa 
un Sistema de gestión de bases de datos transaccionales SQL auto-contenido, sin servidor y sin configuración. El código de 
SQLite es de dominio público y libre para cualquier uso, ya sea comercial o privado.



## Pasos a ejecutar 

**1. Instala nuestro paquete de forma global**

```npm install -g gitbook-start-elt```


**2. Ejecuta el binario para el render del template**
	
Tienes la opción de crear el repositorio o la opción de no crearlo:
	
	
**Crear repositorio**
* Si quieres que te cree un repositorio en Github tienes que poner la opción --repo
	
   ```gitbook-start --dir Carpeta --repo```

Cuando ejecutes el paso anterior si no es la primera vez que lo haces te pedirá el usuario y 
		contraseña de github.Si introduces los datos correctamente te pedirá que introduzcas el nombre que quieres ponerle al repo,
		Ahora se desplegará el libro en github:
				
**Ejemplo de uso:**
				
				
![](https://4.bp.blogspot.com/-tZyZ4yGuI9A/WCxV2cB2ktI/AAAAAAAAAAg/I2tzZnB7FL4Nld6OQRs2NYG-SRwa9kIuwCLcB/s1600/repo.PNG)
				
Una vez que se te creado el repo ya puedes trabajar en él,ya no tendrás que poner más el 
			usuario y contraseña gracias a que se te generó un token para evitar que cada vez que quieras 
				crear un repo te pida tus credenciales.
				El token que se genera se guarda en el ./gitbook-start/config.json un lugar seguro para que no pueda acceder nadie
				que no seas tu.	
				
La siguiente función es la que se utiliza para guardar el token que se obtiene
```javascript
    auth().then(function (resolve, reject) {
					fs.mkdirSync(directorioHome + '/.gitbook-start');
					var pac = directorioHome + '/.gitbook-start/';
					fs.writeFile(pac + 'config.json', JSON.stringify(json), function (err) {
						if (err) throw err;
						else resolviendo(console.log("guardando el json correctamente.."));

					});
				});
```

**No Crear repositorio**
* Si no quieres que se te cree el repositorio en Github simplemente ejecuta la siguiente opción
		
     ```gitbook-start --dir Carpeta``` !!Si no ejecutas el --dir se creará una carpeta con tu nombre de usuario



**3. Entra en la carpeta**

 ```cd Carpeta```


## PLUGINS

**1. Instala el plugin forma global**

```npm install -g PLUGIN```

**2. Ejecuta el plugin que desees, asegúrate de estar dentro de la carpeta**


```gitbook-start -d PLUGIN``` !! También puedes usar la opción --deploy

* Te pedirá un token, puedes generarlo ejecutando ```heroku auth:token``` o bien usar uno ya generado.
* Se te solicitará el nombre que tendrá tu aplicación en Heroku.
* Te preguntará si deseas pedir autentificación para que sólo los usuarios de tu organización puedan leer el libro.
    * Tienes diferentes opciones:
        * Si quieres que solo los usuarios de la organización puedan acceder al libro 
          tendras que poner la opción 's' o 'S' o simplemente darle a enter
        * Si quieres que cualquiera pueda acceder al libro,tendrás que poner la opción 
          'n' o 'N'

**3. Generando aplicación**


* Cambiar en el archivo datos.json los datos de las Oauth Aplications que aparece por los tuyos
Crea una Outh Aplications en [github](https://github.com/settings/developers)


![](https://1.bp.blogspot.com/-l3uBl8431vo/WDMCXGpKJZI/AAAAAAAAAA4/FlJIQMQNj9wF7eg0hdYh5i0P_UszFIVQACLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A13%253A11.PNG)

* En la parte superior aparece en boton registrar aplicación



![](https://4.bp.blogspot.com/-e4-KkIrqeWQ/WDMCXWfAStI/AAAAAAAAAA0/NeUq3iL5Ap8ee8rrN8innO7MRqMEUROvgCLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A13%253A38.PNg)

* Te aparecerá lo siguiente



![](https://1.bp.blogspot.com/-c9gMk1SAt0U/WDMCXgTEYUI/AAAAAAAAABA/RSnAEhPdYkkpqNHwuATB-AEnvLPt5EURgCLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A13%253A50.PNG)

* A continuación se muestra un ejemplo de que datos poner en la aplicación,en este caso está horientada a 
utilizar heroku



![](https://1.bp.blogspot.com/-gCNY7ygJ6ho/WDMCXkAN_II/AAAAAAAAAA8/J_qmtz5d9H8At_y_Zna235Vx8xDGluNSQCLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A16%253A12.PNg)

* Una vez creada te aparecerán los datos correspondientes a la aplicación de desarrollo


![](https://4.bp.blogspot.com/-a_3vEmXyy3k/WDMEMOrUvGI/AAAAAAAAABM/PMAMRcW7uC45uLsWiH6nFQ9hJLIpG9mHQCLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A26%253A38.PNG)

* Ahora genera un [token](https://github.com/settings/tokens) en Github



![](https://3.bp.blogspot.com/-g2l7yvBSuAw/WDMFIk1h4OI/AAAAAAAAABU/bUmkmOWrfDwdfZG3quY41ovGrHhnyInkwCLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A30%253A32.PNG)

* Para acabar este paso sustituye esos datos en el archivo datos.json por los que vienen por defecto



![](https://1.bp.blogspot.com/-RJNNaRjFT2M/WDMCXKkjZ6I/AAAAAAAAAAw/ApjKtMSo5UQrs3XnzC45DIwUdyFRVAckwCLcB/s1600/Captura%2Bde%2Bpantalla%2Bde%2B2016-11-21%2B14%253A09%253A50.PNG)

**4. Ejecuta el gulp creado**

```gulp deploy-heroku```



## Corrección 

En el archivo /bin/octonode.js utilizamos la función ghme.info para obtener el email y nombre del usuario
y guardarlo en el pck.json

```javascript

    ghme.info((err, data, headers) => {
    	pck.email = data.email;
    	pck.author = data.name;
    }
    
```

### Ejemplo del package.json con el nombre del usuario e email 
 A continuación se muestra de como quedaría el package.json del usuario una vez obtenido los datos de email 
y el nombre del usuario de la función ghme.info() sería el siguiente:

  ``` 
     "email": "alu0100785265@ull.edu.es",
     "author": "José Lucas"
     
  ```

## Explicación

Cunado se ejecuta el gitbook-start -d PLUGIN se te lanzará el initialize del módulo,
el initialize crea una tarea en el gulp para realizar el deploy. Además de guardarte el paquete
elegido en el package.json.

## Opciones

    gitbook-start [OPTIONS]
        --dir nombre_del_directorio a crear gitbook-start --dir miDirectorio
        -a autor del libro a crear node gitbook-star -a AutorDelLibro
        -e email del autor del libro node gitbook-star -e eric.ramos.suarez@gmail.com
        -r repositorio github contra el que se va a trabajar -r nameRepo
        -v muestra la version del paquete gitbook-start -v
        -h muestra ayuda sobre las opciones disponibles
        --repo opción que te permite crear un repositorio en GitHub


## Enlaces interesantes 
 
* [NPM](https://www.npmjs.com/package/gitbook-start-elt)
* [Repositorio de la práctica](https://github.com/ULL-ESIT-SYTW-1617/practica-localstrategy-y-base-de-datos-ericlucastania)
* [Descripción de la tarea campus](https://crguezl.github.io/ull-esit-1617/practicas/practicapassportlocalsequelize.html)
* [PLUGIN HEROKU](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-ericlucastania.git)
* [NPM PLUGIN HEROKU](https://www.npmjs.com/package/gitbook-start-plugin-heroku-ericlucastania)
* [PLUGIN IAAS](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-ericlucastania.git)
* [NPM PLUGIN IAAS](https://www.npmjs.com/package/gitbook-start-plugin-heroku-ericlucastania)



## Componentes del grupo de trabajo

* [Eric Ramos](https://github.com/alu0100786330)
* [Lucas Ruiz](https://github.com/alu0100785265)
* [Tania González](https://github.com/tania77)


