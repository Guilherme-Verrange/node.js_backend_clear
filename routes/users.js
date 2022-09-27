let neDB = require("nedb");

let db = new neDB({
  filename: "users.db",
  autoload: true,
});

module.exports = (app) => {

  let  route = app.route('/users');

  route.get((req, res) => {

    db.find({}).sort({name:1}).exec((err, users)=>{ // Filtra o usuário pelo name de forma ordenada

      if(err){
        app.utils.error.send(err, req, res,); //Chama o método utils/error caso ocorra um erro
      }else{

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          users //Faz um get e imprimi os usuários
        });
      }
    });
  });

  route.post((req, res) => { 
    db.insert(req.body, (err, user) => {
      if (err) {
        app.utils.error.send(err, req, res,); //Chama o método utils/error caso ocorra um erro
      } else {
        res.status(200).json(user);
      }
    });
  });

  let routeId = app.route('/users/:id');

  routeId.get((req, res) => {

    db.findOne({_id:req.params.id}).exec((err, user) => { // FindOne busca apenas uma informação especifica

      if (err) {
        app.utils.error.send(err, req, res,); //Chama o método utils/error caso ocorra um erro
      }else{
        res.status(200).json(user); // Retorna oa dados do usuário.
      }

    });

  });

  routeId.put((req, res) => {

    db.update({_id:req.params.id}, req.body, err => {

      if (err) {
        app.utils.error.send(err, req, res,); //Chama o método utils/error caso ocorra um erro
      }else{
        res.status(200).json(Object.assign(req.params, req.body)); // Retorna oa dados do usuário e mescla dois objets pra exibir id e info.
      }

    });

  });

  routeId.delete((req, res) => {

    db.remove({_id:req.params.id}, req.body, err => { 

      if (err) {
        app.utils.error.send(err, req, res,); //Chama o método utils/error caso ocorra um erro
      }else{
        res.status(200).json(req.params); // Retorna oa dados do usuário e mescla dois objets pra exibir id e info.
      }

    });

  });


  





};
