//a basic Express server that listens on a port (e.g., 3000) and 
// logs a message to the console on startup.
import express from 'express'
import axios from 'axios'

const app = express()

const port = 3000

//new GET route at the path /api/fun-fact.
app.get('/api/fun-fact', async (req,res) => {
    try{
        //axios get request
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        

        const factText = response.data.text;

        res.json({
            fact: factText,
        })

        console.log(fact)
 
    }catch(error){

         res.status(500).json({ 
            message:' could not fetch fun fact'

          });
    }
});


app.listen(port,() => {
    console.log("Listening to port", +port)
})