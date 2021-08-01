// TAREA 1 , INTELIGENCIA ARTIFICIAL 1 - SEGUNDO SEMESTRE 2021
//ROLANDO GIOVANNI MARROQUIN GONZALEZ - 200312642

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "GO TO B";
    else if (location=="B") return "GO TO A";
}

function test(states){
    statesCount(states); //se incrementan los contadores de estados
    printStates(); //se imprimen los estados en pantalla
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | State A: ").concat(states[1]).concat(" | State B: ").concat(states[2]).concat(" | Action: ").concat(action_result);
       if (action_result == "CLEAN"){
         if (location == "A") states[1] = "CLEAN";
          else if (location == "B") states[2] = "CLEAN";
       }
       else if (action_result == "GO TO B") states[0] = "B";
       else if (action_result == "GO TO A") states[0] = "A";

    if(estado4>2 && estado5>2) dirtyAgain(states); //se ensucian nuevamente las habitaciones A o B

  var timer = setTimeout(function(){ test(states); }, 1000);

  //Si los contadores de cada estado acumulan por lo menos 2 visitas, se detiene la ejecucion del programa
  if(estado1>=2 && estado2>=2 && estado3>=2 && estado4>=2 && estado5>=2 && estado6>=2 && estado7>=2 && estado8>=2){
    clearTimeout(timer);
    document.getElementById("log").innerHTML+="<br><h3>FINALIZADO!</h3> ";
    document.getElementById("logStates").innerHTML+="<br><h4>FINALIZADO!</h4> ";
  } 
  
 
}

//Funcion para imprimir el valor del contador de cada estado del agente
function printStates(){
    document.getElementById("logStates").innerHTML="";
    document.getElementById("logStates").innerHTML+="<br>Estado 1: ".concat(estado1);
    document.getElementById("logStates").innerHTML+="<br>Estado 2: ".concat(estado2);
    document.getElementById("logStates").innerHTML+="<br>Estado 3: ".concat(estado3);
    document.getElementById("logStates").innerHTML+="<br>Estado 4: ".concat(estado4);
    document.getElementById("logStates").innerHTML+="<br>Estado 5: ".concat(estado5);
    document.getElementById("logStates").innerHTML+="<br>Estado 6: ".concat(estado6);
    document.getElementById("logStates").innerHTML+="<br>Estado 7: ".concat(estado7);
    document.getElementById("logStates").innerHTML+="<br>Estado 8: ".concat(estado8);
    //document.getElementById("logStates").innerHTML+="<br>ALEATORIO : ".concat(aleatorio);
}    

//Funcion para incrementar los contadores de cada estado del agente
function statesCount(states){
    if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="DIRTY" ) estado1++;
    else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="DIRTY" ) estado2++;
    else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="DIRTY" ) estado3++;
    else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="CLEAN" ) estado4++;
    else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="CLEAN" ) estado5++;
    else if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="CLEAN" ) estado6++;
    else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="CLEAN" ) estado7++;
    else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="DIRTY" ) estado8++;
}    

//Funcion para ensuciar aleatoriamente una habitacion (A, B o Ambas)
function dirtyAgain(states){
    
     aleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //numero aleatario entre 1 y 3
     //1 ensuciar A
    //2 ensuciar B
    //3 ensuciar A y B

     switch(aleatorio){
         case 1:states[1]="DIRTY";
             break;
         case 2: states[2]="DIRTY";
             break;
        case 3: //states[1]="DIRTY"; states[2]="DIRTY";
            break;
     }

return aleatorio;
}

var estado1 =0;
var estado2 =0;
var estado3 =0;
var estado4 =0;
var estado5 =0;
var estado6 =0;
var estado7 =0;
var estado8 =0;
var aleatorio = 0;

var states = ["A","DIRTY","DIRTY"];
test(states);