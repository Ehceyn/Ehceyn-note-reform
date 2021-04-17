import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
 
  }
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: "Montserrat", sans-serif;
}
body {
  padding-left: 0 ;
  background: radial-gradient(630px circle at 540px 0px, ${({ theme }) => theme.radialGradient1} 50%, transparent 50.2%),
     radial-gradient(630px circle at 980px 0px, ${({ theme }) => theme.radialGradient2} 50%, transparent 50.2%),
     radial-gradient(150px circle at 800px 500px, rgba(204, 204, 204, 0.20) 50%, transparent 50.6%) ,
     radial-gradient(200px circle at 300px 500px, rgba(204, 204, 204, 0.20) 50%, transparent 50.5%) ,
     radial-gradient(150px circle at 1100px 800px, rgba(204, 204, 204, 0.25) 50%, transparent 50.6%) ,
     radial-gradient(200px circle at 600px 800px, rgba(204, 204, 204, 0.25) 50%, transparent 50.5%) 
     
    ;
  background-repeat: no-repeat;
     background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;

}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f13493;
  width: 100%;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

header h1 {
  color: #fff;
  font-family: "McLaren", cursive;
  font-weight: 200;
}

#burger-icon{
  width:25px;
  height:25px;
  color:white;
}
.form-icons{
  width:20px;
  height:20px;
  color: ${({ theme }) => theme.formbtncolor};
  font-weight:bold;
  margin-right:30px;
  transition: all 0.50s linear;
  // background:white;
}


#searchdiv {
  display: flex;
  justify-content: space-between;
  width: 458px;
  margin-right: 420px;
}

#search {
  width: 330px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-left: -60px;
  padding-left: 14px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 19px;
  transition: 0.5s all linear;
  background: ${({ theme }) => theme.searchBg};
  border: 0.2px solid rgba(241, 52, 147, 0.24);

}

#search::placeholder {
  padding-left: 14px;
  color: rgba(190, 188, 189, 0.63);
  letter-spacing: 2px;
  font-weight: lighter;
  font-style: italic;
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
}

#search:focus {
  outline: none;
  border: 0.5px solid rgb(244, 219, 19);
  border-radius: 5px;
  transition: 300ms all ease-in;

}

#search:focus::placeholder {
  opacity:0;
}

#search+button {
  width: 70px;
  height: 40px;
  border: 2.5px solid rgba(241, 52, 147, 0.575);
  border-radius: 5px;
  margin-right: 105px;
  font-family: 'McLaren', sans-serif;
  background: ${({ theme }) => theme.searchBg};
  color: ${({ theme }) => theme.formbtncolor};
  transition: 0.5s all linear;
}

#side-navbar{
  position:relative;
}
#side-navbar section{
  position:fixed;
  background:blue;
  padding-left:10px;
  height: 100%;
  width:70px;
  // padding:10px 10px 10px 22px;
  // overflow-x:hidden;
}
#side-navbar section:hover{
  background:rgb(0,0,255);
  width:175px;

}
#side-navbar section div{
  display:flex;
  justify-content:center;
  align-items:center;
  height:57px;
  width:57px;
  background:green;
  padding:10px ;
  border-radius:50%;
  box-shadow:0.1px 0 1.5px green;

}
#side-navbar section div:hover{
  width:175px;
  border-radius:0 50% 50% 0;

}
.side-icons{
   width:27px;
  background:red;
  height:27px;
}

#confirm-box{
  display: flex;
  background: rgba(128, 128, 128, 0.555);
  position: fixed;
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #ce0e6e;
  z-index: 1;
  transition: 3000ms all ease-in-out;
}
#confirm-box>div {
  background: black;
  height: 160px;
  padding: 10px;
}
#confirm-box>div>div{
  margin-bottom: 40px;
}
#confirm-box>div>div h1 {
  font-family: 'Montserrat', serif;
  margin-bottom: 5px;
}
#confirm-box>div>div p{
  font-family: 'Montserrat', sans-serif;
  color: grey;
}
#confirm-box>div>div+div {
  text-align: right;
}
#confirm-box>div>div+div button {
  margin: 5px;
}
footer,#clear-all-btn {
  position: absolute;
  clear: both;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

footer p {
  color: #ccc;
}
#note-container{
  padding-left: 150px;
   background: radial-gradient(630px circle at 580px 0px, rgba(204, 204, 204, 0.562) 50%, transparent 50.2%),
   radial-gradient(630px circle at 930px 0px, rgba(241, 52, 147, 0.596) 50%, transparent 50.2%),
   radial-gradient(150px circle at 800px 400px, rgba(204, 204, 204, 0.20) 50%, transparent 50.6%),
   radial-gradient(200px circle at 300px 400px, rgba(204, 204, 204, 0.20) 50%, transparent 50.5%),
   radial-gradient(150px circle at 1100px 700px, rgba(204, 204, 204, 0.25) 50%, transparent 50.6%),
   radial-gradient(200px circle at 600px 700px, rgba(204, 204, 204, 0.25) 50%, transparent 50.5%);
   background-repeat: no-repeat;
   background: white;
   width: 100%;
   
}
.note {
  background-color: ${({ theme }) => theme.body};
  border-radius: 7px;
  /* box-shadow: 0 2px 5px #ccc; */
  border: 1px solid #ccc;
  padding: 10px;
  width: 240px;
  margin: 32px;
  float: left;
  transition:0.5s all linear;
}
.note:hover{
  box-shadow: ${({ theme }) => theme.boxShadow};
}
.note h1 {
  font-size: 1.1em;
  margin-bottom: 6px;
    color: ${({ theme }) => theme.text};
  transition:0.5s all linear;

}
.note p {
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
    color: ${({ theme }) => theme.text};
  transition:0.5s all linear;

}

.note button,
#confirm-box>div>div+div button {
  position: relative;
  float: right;
  margin-right: 10px;
  color: ${({ theme }) => theme.btncolor};
  border: none;
  width: 70px;
  height: 36px;
  cursor: pointer;
  outline: none;
  transition: 0.5s all linear;
  background-color: ${({ theme }) => theme.btnbg};

}
#confirm-box>div>div+div #yes{
  background-color: #f13493;
  color: white;
}

#clear-all-btn{
  margin-bottom: 30px;
}
#clear-all-btn button{
   background-color: ${({ theme }) => theme.btnbg};
   color: ${({ theme }) => theme.formbtncolor};
   border: none;
   width: 100px;
   height: 36px;
   cursor: pointer;
   outline: none;
   transition: 200ms all ease-in;
  
} 

.note button:hover{
  background-color: rgb(224, 222, 222);
  color: rgb(255, 52, 147);
}

form, #confirm-box>div{
  position: relative;
  width: 628px;
  margin: 30px auto 25px auto;
  background: ${({ theme }) => theme.body};
  padding: 15px 15px 4px 15px;
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.50s linear;
  z-index:1;
}
#form-buttons{
  display:flex;
  justify-content:space-between;
  align-items:center;
  height: 40px;
  width: 100%;
  padding-left:-1px;
  transition: all 0.50s linear;
  // background-color: #fff;
  margin-bottom: 0;
   position: relative;
  transition: all 0.50s linear;
}

#form-buttons div{
  display:flex;
  position: relative;

}

#form-buttons span{
  position:relative;
  cursor:pointer;
  transition:0.5s all linear;
}

#form-buttons span::after{
  transition:inherit;

}

#form-buttons span:hover::after{
  content:'';
  border-radius:50%;
  background-color: ${({ theme }) => theme.btnbg};
  width:15px;
  height:15px;
  padding:10px;
  margin:1px;
  position: absolute;
  right:21.5px;
  top:-8px;
  z-index:-5;
}

#form-buttons #form-btn{
  display:inline;
  
}

form input,
form textarea {
  width: 100%;
  border: none;
  padding: 10px;
  outline: none;
  font-size: 1.2em;
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  resize: none;
  background: ${({ theme }) => theme.body};
  transition: all 0.50s linear;

}
form textarea {
  padding-bottom: 0;
}

#form-btn button {
  // position: relative;
  right: 78px;
  bottom: -18px;
  float: right;
  font-size: 0.9rem;
  font-weight: bold;
  background: ${({ theme }) => theme.formbtnbg};
  color: ${({ theme }) => theme.formbtncolor};
  border: none;
   padding: 10px;
  border-radius: 7px;
  margin: 5px;
  width: 70px;
  height: 36px;
  cursor: pointer;
  outline: none;
  transition: 200ms all ease-in;
}
form-btn button+button{
  width: 50px;
}

#form-btn button:hover{
 
  background-color: ${({ theme }) => theme.btnbg};

}
form button:disabled {
  background: #746f63;

}
.option-box{
  background:${({ theme }) => theme.body};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: 0.5s all linear;
  width:200px;
  z-index:-2;
}

.white{
  background: white;
}
  `
