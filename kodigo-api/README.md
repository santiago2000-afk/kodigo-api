# kodigo-app

## Introducción

**kodigo-app** es una aplicación simple desarrollada con React que utiliza Firebase como backend para autenticación y almacenamiento de datos. Este proyecto es ideal para quienes desean aprender a integrar Firebase en aplicaciones React modernas.

## Requisitos previos

- Node.js >= 18.x
- npm >= 9.x
- Cuenta en Firebase

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/kodigo-app.git
    cd kodigo-app
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Configuración

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/) y obtén la configuración de tu app.

2. Crea un archivo `firebase.js` en la raíz del proyecto y agrega tus credenciales de Firebase:
    ```
    REACT_APP_FIREBASE_API_KEY=tu_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=tu_app_id
    ```

3. Inicia la aplicación:
    ```bash
    npm start
    ```

## Uso

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Integración con Firebase

Para interactuar con Firebase, utiliza el SDK oficial de Firebase en tus componentes React. Ejemplo de autenticación:

```js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Usuario autenticado
  })
  .catch(error => {
    // Manejo de errores
  });
```

## Buenas prácticas

- Mantén tus credenciales en el archivo `firebase.js`.
- Usa control de versiones para tus dependencias (`package-lock.json`).

## Recursos adicionales

- [Documentación oficial de React](https://react.dev/)
- [Documentación oficial de Firebase](https://firebase.google.com/docs)
- [Guía de integración de Firebase con React](https://firebase.google.com/docs/web/setup)
