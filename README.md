# Mean-demo FE.

Before ruuning the application make sure that the [backend server](https://github.com/imdadul/mean-demo-BE) is already running.

If yes, now let's start the front-end application.

Open cmd or bash run these commands,

```
git clone https://github.com/imdadul/mean-demo-FE.git 
cd mean-demo-FE
npm install
npm start
```

http://localhost:8080   .........Gooo!
 

In case you want to change the backend endpoint, goto <code>modules/common/constants/config.js</code> & change <code>BASE_URL</code>


<h3>Folder structure</h3>

```

├──moduels
│   └── common 
│       └──constants
│       └──directives
│       └──services
│       └── common.module.js
│   └── dashboard 
│       └──controllers
│       └──directives
│       └──services
│       └──styles
│       └──views
│       └── dashboard.module.js
│   └── layout 
│       └──controllers
│       └──styles
│       └──views
│       └── layout.module.js
│   └── login 
│       └──controllers
│       └──services
│       └──styles
│       └──views
│       └── login.module.js
│   └── signup 
│       └──constants
│       └──directives
│       └──services
│       └──styles
│       └──views
│       └── signup.module.js
├──app.js
├──index.html
├──package.json
├──README.md
    
```
