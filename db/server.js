const server = require('json-server');

const path = require('path');

const aux = server.create();

const router = server.router(
    path.join(__dirname,'db.json')
);

const middleware = server.defaults();

aux.use(middleware);
aux.use(router);

aux.listen(3000, ()=>{
    console.log("Ligado");
});