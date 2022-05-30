let entrer1 = document.querySelector("form")["Nom"];
let entrer2 = document.querySelector("form")["email"];

// disparution******************************************
let changement = document.querySelectorAll("#divQuestion2");
let nouvellep = document.getElementById("divQuestion1");
let suivantBtn = document.querySelector("#btnSuivant");

let selectquestion = document.getElementById("selectQuest");
let selectRadio = document.querySelectorAll("#repInput0");
let selectLabel = document.querySelectorAll("#labell");
let lab = document.querySelector(".lab");
// suivantBtn.style.backgroundColor = "rgb(10, 87, 10)";
// *********** Recupération Progresse Barre ************
let rebours = document.querySelector(".barre");
let Time = document.querySelector(".timeCount");
let button = document.querySelector("#buttn");
let Numbequestion = document.querySelector(".game");

let interval = 60;
let CountRebours = null;
let index = 0;

let questionG = [
  {
    question: "Javascript est un :",
    a: [
      {
        reponse1: "langage de programmation",
        reponse2: "Utne école informaique ",
        reponse3: "Un Framework",
        reponse4: "Un ORM",
      },
    ],
  },

  {
    question: "ceci est un declaration de Javascript",
    a: [
      {
        reponse1: "int number",
        reponse2: "number is integer",
        reponse3: "let number",
        reponse4: "double number",
      },
    ],
  },

  {
    question: "ceci est un declaration de Javascript",
    a: [
      {
        reponse1: "int number",
        reponse2: "number is integer",
        reponse3: "let number",
        reponse4: "double number",
      },
    ],
  },

  // {
  //   question: "ceci est un Framework de Javascript",
  //   a: [
  //     {
  //       reponse1: "Laravel",
  //       reponse2: "React",
  //       reponse3: "Pcharm",
  //       reponse4: "Spring Boot",
  //     },
  //   ],
  // },

  // {
  //   question: "ceci est une boucle utilisée uniquement en Javascript",
  //   a: [
  //     {
  //       reponse1: "for",
  //       reponse2: "while",
  //       reponse3: "do while",
  //       reponse4: "forEach",
  //     },
  //   ],
  // },

  // {
  //   question: "ceci est un extention de Javascript",
  //   a: [
  //     {
  //       reponse1: ".java",
  //       reponse2: ".jpg",
  //       reponse3: ".png",
  //       reponse4: ".js",
  //     },
  //   ],
  // },
  // {
  //   question: "Ceci est une condition ternaire",
  //   a: [
  //     {
  //       reponse1: "if(){} ",
  //       reponse2: "swicth()",
  //       reponse3: "m()? '':'' ",
  //       reponse4: "else{} ",
  //     },
  //   ],
  // },

  // {
  //   question: "Pour récupérer un élément à partir de son id on fait:",
  //   a: [
  //     {
  //       reponse1: "getElementByTagName",
  //       reponse2: "import scanner()",
  //       reponse3: "getElementById",
  //       reponse4: "aucune bonne réponse",
  //     },
  //   ],
  // },

  // {
  //   question: "Ceci est un concepte de Javascript:",
  //   a: [
  //     {
  //       reponse1: "java swing",
  //       reponse2: "java Fx",
  //       reponse3: "server",
  //       reponse4: "vanilla",
  //     },
  //   ],
  // },

  // {
  //   question: "Javascript est sensible à la casse:",
  //   a: [
  //     {
  //       reponse1: "Oui",
  //       reponse2: "Non",
  //       reponse3: "A peu près",
  //       reponse4: "absolument pas",
  //     },
  //   ],
  // },

  // {
  //   question: "comment ajouter du style avec vanilla?",
  //   a: [
  //     {
  //       reponse1: "variable.style.color",
  //       reponse2: "background-color",
  //       reponse3: "je sais pas ",
  //       reponse4: "pas de bonne reponse",
  //     },
  //   ],
  // },

  // {
  //   question: "Java script est un langage completement orienté objet?",
  //   a: [
  //     {
  //       reponse1: "Oui",
  //       reponse2: "Non",
  //       reponse3: "A peu près",
  //       reponse4: "absolument pas",
  //     },
  //   ],
  // },
  // {
  //   question: "que signifie l'acronyme DOM",
  //   a: [
  //     {
  //       reponse1: "Donnée Organistion Mondial",
  //       reponse2: "Dangé octroyer aux mamans",
  //       reponse3: "Document Object Modele",
  //       reponse4: "Rien à signaler",
  //     },
  //   ],
  // },

  // {
  //   question: "Comment declarer un tableau en javascript?",
  //   a: [
  //     {
  //       reponse1: "let tab=[]",
  //       reponse2: "int tab=[][]",
  //       reponse3: "var moi={}",
  //       reponse4: "le pays va mal",
  //     },
  //   ],
  // },

  // {
  //   question: "Ceci est un fonction",
  //   a: [
  //     {
  //       reponse1: "let myname;",
  //       reponse2: "for();",
  //       reponse3: "function(){}",
  //       reponse4: "if(){}",
  //     },
  //   ],
  // },
];

//
//
//
//
// disparution******************************************
let contenaire = (document.querySelector("#divQuestion3").style.display =
  "none");

//
//

//Les évenément

button.addEventListener("click", (e) => {
  e.preventDefault();

  let premInput = entrer1.value;
  let premInput2 = entrer2.value;

  // Declare the variable for progress Barre
  if (premInput == "" && premInput2 == "") {
    alert("le remplissage de deux champs est obligatoire");
  } else if (premInput == "") {
    alert("Veuillez renseigner le Nom");
  } else if (premInput2 == "") {
    alert("Veuillez renseigner l'email");
  } else {
    changement[0].classList.add("hidden");
    let contenaire = (document.getElementById("divQuestion3").style.display =
      "block");

    questionSuivant();
    CoutTime();
    findSelected();
  }
});

// ***************Fonction progresse Barre**********************
let gamov = document.querySelector(".game");

function CoutTime() {
  clearInterval(CountRebours);
  let montemps = interval;
  CountRebours = setInterval(() => {
    montemps--;

    let progressWidth = (montemps / 60) * 100;

    console.log(montemps);
    rebours.style.width = progressWidth + "%";
    Time.textContent = montemps;
    if (montemps == 0) {
      clearInterval(CountRebours);
      suivantBtn.click();
    }
  }, 100);
}

// *************** Fin progresse Barre **********************
let myradio = document.querySelectorAll('input[name="chek"]');
let resultat;
let findSelected = () => {
  let selected = document.querySelectorAll('input[name="chek"]:checked').value;
  resultat = `la valeur selectionnée est ${selected}`;
};

myradio.forEach((buttnradio) => {
  buttnradio.addEventListener("click", findSelected);
  function findSelected(params) {
    if (params) {
      let selected = document.querySelectorAll(
        'input[name="chek"]:checked'
      ).value;
      suivantBtn.style.backgroundColor = "rgb(10, 87, 10)";
      suivantBtn.disabled = false;
    }
  }
});

suivantBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (index < questionG.length) {
    questionSuivant();
    CoutTime();
  } else {
    //
  }
});

function questionSuivant() {
  // Questions suivante après un clique
  let q = index + 1;
  Numbequestion.innerHTML = "Q" + q + "/" + questionG.length;

  selectquestion.innerHTML = questionG[index].question;

  // les reponses suivantes par apport aux quewtions.
  selectLabel[0].innerHTML = questionG[index].a[0].reponse1;
  selectLabel[1].innerHTML = questionG[index].a[0].reponse2;
  selectLabel[2].innerHTML = questionG[index].a[0].reponse3;
  selectLabel[3].innerHTML = questionG[index].a[0].reponse4;

  // les reponses suivantes dans les boutons radio
  selectRadio[0].value = questionG[index].a[0].reponse1;
  selectRadio[1].value = questionG[index].a[0].reponse2;
  selectRadio[2].value = questionG[index].a[0].reponse3;
  selectRadio[3].value = questionG[index].a[0].reponse4;

  index++;
}
// selectquestion.innerHTML = questionG[0].question;

// selectLabel[0].innerHTML = questionG[0].a[0].reponse1;
// selectLabel[1].innerHTML = questionG[0].a[0].reponse2;
// selectLabel[2].innerHTML = questionG[0].a[0].reponse3;
// selectLabel[3].innerHTML = questionG[0].a[0].reponse4;
