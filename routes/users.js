module.exports = (app) => {

    app.get('/users',  (req, res) => {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            users:[{
    
                name: 'Guilherme Verrange',
                email: 'verrangeguilherme@gmail.com',
                id: 1
            }]
    
        }));
    });
    
    
    app.post('/users', (req, res) =>{
    
       
        res.json(req.body);
    
    });

}