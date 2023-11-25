# Namste React Ingniting our app

## 1. Process to Ignite the app

- run npm run init (You can add other information like auther, git repo ,test command , project name and all kind of stuff)

- install react and react-dom as dev depandancies using following command

  ```javascript
      npm install -D react
      npm install -D react-dom
  ```

- after that install parcel using following command

  ```javascript
  npm install -D parcel
  ```

- then run or start your app by following command

  ```javascript
  npx parcel index.html
  ```

  - You can give it a custome port using this command

    ```javascript
         npx parcel index.html --port 3000
    ```

  - you can even make it as a script to use it simply for example

    in your package.json file

    write a script like this

    ```javascript
        "scripts": {
            "dev" : "parcel src/index.html --port 3000"
        },
    ```

    in place of dev you can use any name you like and in place of 3000 you can use any port number you like but this are some industries best prectises so I have mentioned it here

    after this script you can run this script by this command

    ```javscript
     npm run dev
    ```

    there is a exception with a start word suppose if your script is something like this

    ```javascript
       "scripts": {
           "start" : "parcel src/index.html --port 3000"
       },
    ```

    then you can run it like this

    ```javscript
    npm run start
    ```

    and even like this too

    ```javscript
    npm start
    ```

    this is a execption with this.

<!-- todo 1.10  -->
