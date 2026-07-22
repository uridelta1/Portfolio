require('dotenv').config()
const app=require('./src/app')
const ConnectDB=require('./src/config/db')


const PORT=process.env.PORT || 3000

ConnectDB()

app.listen(PORT,()=>{
    console.log(`server is running on : http://localhost:${PORT}`);
    
})