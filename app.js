const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const port =5000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null,'./uploads');
    },
    filename: function (req, file, cb) {
      return cb(null,`${Date.now()}-${file.originalname}`)
    }
  })

  const upload = multer({storage});



app.get('/',(req,res)=>{
    return res.render("homepage");
})

app.post('/upload',upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/');
})

app.listen(port,()=>{
    console.log(`server is running at port:${port}`);
})