const express = require("express");
const router = express.Router();

// const faker = require("faker");

// let db = require("./db");

// db.criarDB("minhaBaseDados");

//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'
router.use(express.static('public'));



//************* Exemplode Rotas ************* 

/*

http://localhost:3030/css
http://localhost:3030/images
http://localhost:3030/index.html

/ = http://localhost:3030/
/about = http://localhost:3030/about
/curriculo =  http://localhost:3030/cadastro

*/
router.get('/',(req,res)=>{ //callback - funcao que trata dado evento GET
    res.render('pages/home');
});

router.get('/about',(req,res)=>{ //callback - funcao que trata dado evento  GET

    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{ //callback - funcao que trata dado evento  GET
    let users = [
        {name:"Wellington W. F. Sarmento",address:"Rua Dom Jeronimo, 666",email:"wwagner@virtual.ufc.br",age:46,height:1.70,vote:true},{name:"PAtricia S. Paula",address:"Rua Dom Jeronimo, 666",email:"patricia@virtual.ufc.br",age:46,height:1.70,vote:true},{name:"Henrique Sérgio L. Pequeno",address:"Rua do Henrique, 666",email:"henrique@virtual.ufc.br",age:46,height:1.70,vote:true}];
    res.render('pages/cadastro',{users}); //a funcao render pode receber um paametro na forma de objeto literal
});

router.post('/cadastro/remove',(req,res)=>{
    let usuario={name: "wellington", email: "wwagner@virtual.ufc.br"};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuario);
    console.log(result);
    //res.render('pages/insert',{result});
});



router.get('/cadastro/insert',(req,res)=>{
    let usuario={name: "wellington", email: "wwagner@virtual.ufc.br"};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuario);
    console.log(result);
    //res.render('pages/insert',{result});
});

router.get('/cadastro/list',(req,res)=>{

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;