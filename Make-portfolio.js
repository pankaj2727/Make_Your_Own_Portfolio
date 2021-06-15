function hide1(){
    document.getElementById("id01").style.display="none";
}
function hide2(){
    document.getElementById("id02").style.display="none";
}
function hide3(){
    document.getElementById("btn").style.display="none";
}
function hide4(){
    document.getElementById("domainSkillBtn").style.display="none";
}
function hide5(){
    document.getElementById("technicalSkillBtn" ).style.display="none";
}
function hide6(){
    document.getElementById("softSkillsBtn").style.display="none";
}
function hide7(){
    document.getElementById("LanguageBtn").style.display="none";
}
function hide8(){
    document.getElementById("id05").style.display="none";
}
function hide9(){
    document.getElementById("id03").style.display="none";
}
function hide10(){
    document.getElementById("btnforname").style.display="none";
}
function hide11(){
    document.getElementById("btnforabout").style.display="none";
}
function hide12(){
    document.getElementById("btnforcontact").style.display="none";
}

function show1(){
    document.getElementById("id03").style.display="block";
}
function show2(){
    document.getElementById("id01").style.display="block";
}
function show3(){
    document.getElementById("id02").style.display="block";
}
function show4(){
    document.getElementById("id05").style.display="block";
}





function showName() {  
    var persoName = document.getElementById("nameInput").value;
    var designation =  document.getElementById("designationInput").value;

   
    document.getElementById('name').innerHTML="<h1>" +persoName + "</h1>";  

    document.getElementById('designation').innerHTML="<h1> (" + designation + ")</h1>";  
} 

function showAbout() {  
    var about = document.getElementById("aboutuser").value;
   
     document.getElementById('userAbout').innerHTML= about ;  
} 

var i =1;

var count=0;
var a=0;
function hideProjectBtton(){
     
    if(count==0){
        document.getElementById('p1').style.display="block";
        
     }
     if(count==1){
        document.getElementById('p1').style.display="none";
        document.getElementById('p2').style.display="block";
        document.getElementById('prev').style.display="block";
        document.getElementById('next').style.display="block";
        
     }
     if(count==2){
        document.getElementById('p2').style.display="none";
        document.getElementById('p3').style.display="block";
        
     }
     count++;
     a++;
    if(count==3){
     document.getElementById('btn').style.display="none";
    }
    
}

function pre(){
   
    if(a==2){
        document.getElementById('p2').style.display="none";
        document.getElementById('p1').style.display="block";
        a--;
       
    }
    if(a==3){
        document.getElementById('p3').style.display="none";
        document.getElementById('p2').style.display="block";
        a--
    }
    
}
function next(){
   
   
    if(a==2){
        
        document.getElementById('p2').style.display="none";
        document.getElementById('p3').style.display="block";
        a++;
    }
    if(a==1){
        
        document.getElementById('p1').style.display="none";
        document.getElementById('p2').style.display="block";
        a++;
       
    }
    
}

var count1=0;
function projectInfo(){

    var projectName= document.getElementById("userProjectName").value;
    var skillGained= document.getElementById("userskillgained").value;
    var aboutProject= document.getElementById("description").value;
    var projectLink= document.getElementById("userprojectlink").value;
    
     if(count1==0){
         document.getElementById("p1Heading").innerHTML=projectName; 
         document.getElementById("p1Skills").innerHTML="<h3 style='display:inline';> Skill Gain: </h3>"+skillGained; 
         document.getElementById("p1about").innerHTML=aboutProject; 
         document.getElementById("p1link").innerHTML=projectLink; 
         
        }
        else if(count1==1){
            document.getElementById("p2Heading").innerHTML=projectName; 
            document.getElementById("p2Skills").innerHTML="<h3 style='display:inline';> Skill Gain: </h3>"+skillGained; 
            document.getElementById("p2about").innerHTML=aboutProject; 
            document.getElementById("p2link").innerHTML=projectLink; 
            
        }
        else if(count1==2){
            document.getElementById("p3Heading").innerHTML=projectName; 
            document.getElementById("p3Skills").innerHTML="<h3 style='display:inline';> Skill Gain: </h3>"+skillGained; 
            document.getElementById("p3about").innerHTML=aboutProject; 
            document.getElementById("p3link").innerHTML=projectLink; 
            
        }  
        
     count1++;   
}

var j ='A';
  function addSkillColumn1(){
    var input= document.createElement('input');
      input.id=j;
      input.innerHTML="HI I AM LODU";
      input.className="skillColumn";
      j++;
      document.getElementById('domainSkills').append(input);
  } 

    var k ='A';
      function addSkillColumn2(){
      var input= document.createElement('input');
        input.id=k;
        input.innerHTML="HI I AM LODU";
        input.className="skillColumn";
        k++;
        document.getElementById('technicalSkills').append(input);
    }  
    
    var l ='A';
    function addSkillColumn3(){
        var input= document.createElement('input');
          input.id=l;
          input.innerHTML="HI I AM LODU";
          input.className="skillColumn";
          l++;
          document.getElementById('softSkills').append(input);
      }     
    
    var m ='A';
    function addSkillColumn4(){
    var input= document.createElement('input');
      input.id=m;
      input.innerHTML="HI I AM LODU";
      input.className="skillColumn";
      m++;
      document.getElementById('Languages').append(input);
  } 

  function showContact() {  
    var number = document.getElementById("userPhone").value;
    var email=  document.getElementById("userEmail").value;
    var git= document.getElementById("userGit").value;
    var address= document.getElementById("userAddress").value;

   
    document.getElementById('phone').innerHTML=number;  

    document.getElementById('email').innerHTML=email;  

    document.getElementById('github').innerHTML=git; 

    document.getElementById('address').innerHTML=address; 
} 