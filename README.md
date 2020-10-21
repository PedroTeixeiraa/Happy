<p align=center>
<img src="https://user-images.githubusercontent.com/54821438/96716540-8c426a00-137b-11eb-9df0-12b0384bc398.png">
</p>

## 👨‍💻 About the project
<p>This project was developed on the Next Level Week #03 event by <a href="https://rocketseat.com.br/" rel="nofollow">Rocketseat</a> 🚀 💜</p>

<p>Happy is an application that connects people to institutional care homes to make many children's day happier</p>
## 🚀 Technologies

<ul>
  <li><a href="https://nodejs.org/en/" rel="nofollow">Node.js</a></li>
  <li><a href="https://reactjs.org/" rel="nofollow">ReactJS</a></li>
  <li><a href="https://reactnative.dev/" rel="nofollow">React Native</a></li>
  <li><a href="https://www.typescriptlang.org/" rel="nofollow">TypeScript</a></li>
  <li><a href="https://expo.io/" rel="nofollow">Expo</a></li>
  <li><a href="https://expressjs.com/pt-br/" rel="nofollow">Express</a></li>
  <li><a href="https://typeorm.io/#/" rel="nofollow">TypeORM</a></li>
  <li><a href="https://github.com/jquense/yup">Yup</a></li>
  <li><a href="https://github.com/axios/axios">Axios</a></li>
  <li><a href="https://reacttraining.com/react-router/" rel="nofollow">React Router DOM</a></li>
  <li><a href="https://reactnavigation.org/" rel="nofollow">React Navigation</a></li>
</ul>

## 💻 Getting started

### Requirements
<ul>
  <li><a href="https://nodejs.org/en/" rel="nofollow">Node.js</a></li>
  <li><a href="https://classic.yarnpkg.com/" rel="nofollow">Yarn</a></li>
  <li><a href="https://expo.io/" rel="nofollow">Expo</a></li>
<ul>  
<pre>$ git clone https://github.com/PedroTeixeiraa/Happy.git <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">cd</span> Happy</pre>
<p><strong>Follow the steps below</strong></p>
  
### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd backend

# Install the dependencies
$ yarn 

# Use the script to run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started
```

### Web
<p><em>Obs.: Before to continue, be sure to have the API running</em></p>

```bash
# Starting from the project root folder, go to web folder
$ cd web

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile
<p><em>Obs.: Before to continue, be sure to have the API running</em></p>

```bash
# Starting from the project root folder, go to mobile folder
$ cd mobile

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn start
```

## 📝 License
<p>This project is licensed under the MIT License - see the <a href="https://github.com/PedroTeixeiraa/Happy/blob/main/LICENSE">LICENSE</a> file for details.</p>
<hr> </hr>
<p> Made with 💜  by Pedro Teixeira 👋 <a href="https://www.linkedin.com/in/pedro-teixeira-alves/" rel="nofollow">See my linkedin</a> </p>
