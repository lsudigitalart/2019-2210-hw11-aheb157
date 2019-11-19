var animals;

var pNum = 0; // row species
var dNum = 0; //dog
var cNum = 0; // cats
var wNum = 0; //wildlife
var lNum = 0; //livestock



function preload(){

   animals = loadTable("Animal_Control_Incidents.csv");
}

function setup(){
createCanvas (920,800);
background ( 100,180,200);

// print("species = dog", animals.getRowCount());
// print("SPECIES", animals.getRowCount());

for (var i = 0; i < 2000; i++){
    pNum = int(animals.get(i, 22)) + pNum;
    if (animals.get(i,22) == "DOG"){
        dNum++ ;
    }
    if (animals.get(i,22) == "CAT"){
        cNum++ ;}

        if (animals.get(i,22) == "LIVESTOCK"){
            lNum++ ;}

            if (animals.get(i,22) == "WILDLIFE"){
                wNum++ ;}
//  print(animals.get(i, 22));

}

}

function draw (){
    
fill (255,200,100);
//dogs
rect (100,700, 100, -dNum *2);
//cats
rect (300, 700, 100, -cNum*2);
//livestock
rect (500, 700, 100, -lNum*2);
//wildlife
rect (700, 700, 100, -wNum*2);

//text
textSize(20);
fill(0);
text ("WILDLIFE",700,750);
text ("LIVESTOCK",500,750);
text ("CATS",320,750);
text ("DOGS",120,750);

textSize(30);
text (" # of Animals in Complaints to Animal Control",250,100);
text ("in a 2 year span", 400, 150);

// ration *2
rect (20,0,5,702);
rect (20,702,800,5);
rect (20,600,30,5);

rect (20,500,30,5);
rect (20,400,30,5);
rect (20,300,30,5);
rect (20,200,30,5);
rect (20,100,30,5);
rect (20,25,20,2);
rect (20,50,20,2);
rect (20,75,20,2);
rect (20,125,20,2);
rect (20,150,20,2);
rect (20,175,20,2);
rect (20,225,20,2);
rect (20,250,20,2);
rect (20,275,20,2);
rect (20,325,20,2);
rect (20,350,20,2);
rect (20,375,20,2);
rect (20,425,20,2);
rect (20,450,20,2);
rect (20,475,20,2);
rect (20,525,20,2);
rect (20,550,20,2);
rect (20,575,20,2);
rect (20,625,20,2);
rect (20,650,20,2);
rect (20,675,20,2);



text ("2",55,610);
text ("4",55,510);
text ("6",55,410);
text ("8",55,310);
text ("10",55,210);
text ("12",55,110);

text (" < 50 ",510,670);
text ("~500", 720,440);
text ("~700",320, 350);
text ("~1325",105,28);
}

//cat
//dog
//wildlife
//livestock
