# Project: 'Custom calculator'

## Task: [link](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

## Deploy [link](https://kelzerock.github.io/custom-calculator/)

How run project:

- to build project in development mode run ```npm run build:dev```
- to build project in production mode run ```npm run build:prod```
- to run devserver use command ```npm start```
- to run tests use command ```npm run test```
  
### Project structure
<pre>
├── public  // template for index.html
├── src
│   ├── app  // main application class
│   ├── command // command and special modifined command for application
│   ├── components // FunctionUI - for created button
│   ├── const // data for buttons
│   ├── display // display class
│   ├── operations // object with various math operation
│   ├── operator // operator class
│   ├── __test__ // test use Jest
│   └── utils // utils for the project
└── webpack-configuration // utils for webpack configuration
</pre>
