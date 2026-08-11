const cors = require("cors")
require('dotenv').config()
const app=require('./src/app')
const ConnectDB=require('./src/config/db')

app.use(cors({
    origin:process.env.CLIENT_ORIGIN,
    credentials:true
}))
const PORT=process.env.PORT || 3000

ConnectDB()

app.listen(PORT,()=>{
    console.log(`server is running on : http://localhost:${PORT}`);
    
})