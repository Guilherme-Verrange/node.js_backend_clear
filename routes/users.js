let neDB = require("nedb");

let db = new neDB({
  filename: "users.db",
  autoload: true,
});

module.exports = (app) => {
  app.get("/users", (req, res) => {

    db.find({}).sort({name:1}).exec((err, users)=>{ // Filtra o usuário 

      if(err){
        console.log(`error: ${err}`);
        res.status(400).json({ //Verificação caso ocorre um erro ele ser exibido na tela
          error:err
        })
      }else{

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          users //Faz um get e imprimi os usuários
        });
      }
    });
  });

  app.post("/users", (req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        console.log(`error: ${err}`);
        res.status(400).json({
          error: err,
        });
      } else {
        res.status(200).json(user);
      }
    });
  });
};
