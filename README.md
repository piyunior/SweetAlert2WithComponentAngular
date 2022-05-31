## Sweet Alert 2 With Components Angular


------------

Lo Primero es dejar claro, que luego de tanta documentación. Incluso en su sitio web oficial, el cual no le quiero quitar merito y puedes conseguir [acá](http://https://github.com/sweetalert2/ngx-sweetalert2 "acá"). Pude dar con una problemática que nos hemos topado la mayoría de los desarrolladores AngularJS y es incluir un componente en el modal de SweetAlert2.

Sin más que decir, empezaremos por crear un proyecto AngularJS.

   1.  `ng new angular-tour-of-heroes.`
   2. Si no ha instalado las dependencias, procedemos a instalar con `npm install`.
   3. Para instalar la libreria de SweetAlert pueden hacerlo en el enlace que dejé al principio, de igual manera se debe correr `npm install sweetalert2 @sweetalert2/ngx-sweetalert2 `. Con esto estamos instalando dos librerías e incluso, si seguiste las instrucciones deberias haber instalado en el app.module.ts la librería de Sweet Alert.

------------


El Problema que encontre con esta librería es que hay muy pocos ejemplos en los cuales guiarnos. Sobretodo, con componentes angular, de por si se sabe que el sweet alert no tolera más de un input (aunque se puede hacer alguna que otra maroma).

Básicamente es guiarnos en esta directiva que importamos, la inicializamos en el constructor `import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';`. Ella es l que va a permitir acceder a cada uno de las propiedades fisicas (HTML) del componente de Sweet Alert, en el ejemplo que deje en el repositorio, pueden notar que en **"swalTargets.content"** es donde ocurre la magia y podemos desplegar facilmente nuestro componente angularjs, no solo eso. Ademas de content, hay otras directivas con las cuales podemos explorar un mundo de posibilidades a la hora de crear nuestra interfaz.
  
