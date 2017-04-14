import { Component, OnInit } from '@angular/core';
import { Heros } from "app/heros";
import { PrenomInsee } from "app/prenominsee";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data: any;
options: any;

heros1:Heros = {id: 11, power: 45};
heros2:Heros = {id: 2, power: 25};
heros3:Heros = {id: 15, power: 35};

listeHeros:Heros[];

listeNombres:Number[];

prenomStats:PrenomInsee[];

tableauAnnees: string[];
tableauNaissances : Number[];
anneesRef:Number[];

motAnime: string;
toggle : boolean;

// ************CONSTRUCTEUR*************
constructor() {
    this.listeNombres = new Array<Number>();
    
     this.listeNombres = [1,2,3,4,5,6,7,8,9,10 ];
    
    this.listeHeros = new Array<Heros>();
    this.tableauAnnees = new Array<string>();
    this.tableauNaissances = [];
    this.anneesRef = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];

        this.listeHeros = [
      {id: 11, power: 25},
      {id: 12, power: 18},
      {id: 13, power: 44},
      {id: 14, power: 77},
      {id: 15, power: 33},
      {id: 16, power: 25},
      {id: 17, power: 74},
      {id: 18, power: 44},
      {id: 19, power: 66},
      {id: 20,power: 12}
    ];

    this.prenomStats = new Array<PrenomInsee>();
    this.prenomStats = [
      {annee: 2000, nombreNaissance: 25},
     {annee: 2002, nombreNaissance: 105},
     {annee: 2003, nombreNaissance: 50},
     {annee: 2004, nombreNaissance: 76},
     {annee: 2007, nombreNaissance: 10},
     {annee: 2009, nombreNaissance: 150}
    ];
    this.toggle = false;    
    this.motAnime = "Robert";

    }
    // ************FIN CONSTRUCTEUR*************
  

ngOnInit() {
    /*
    this.listeHeros.push(this.heros1);
    this.listeHeros.push(this.heros2);
    this.listeHeros.push(this.heros3);
    console.log(this.listeHeros.length);

    this.listeHeros.forEach(function(heros) {
        console.log(heros.id + " " + heros.power)
        
    });
    
*/      
          for(var i = 1900; i <= 2015; i++){
                
                this.tableauAnnees.push(i.toString());
                }
                    
                

  
       /*
         this.prenomStats.forEach(function(prenominsee) {

        console.log(prenominsee.annee + " " + prenominsee.nombreNaissance)
         });
   */
   
     this.data = {
            labels: this.tableauAnnees,
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                   
                    data: [0,1,2,3,4,5]
                        
                        //this.tableauNaissances
                        //this.listeHeros.entries()
                        
                        //this.listeNombres
                        //this.heros1.id
                        //this.listeHeros.forEach(function(heros) { heros.power })
                },
            ]
        },
        this.options = {
                title: {
                    display: true,
                    text: 'My Title',
                    fontSize: 16
                },
                legend: { position: 'bottom'},
                scales: {
                        xAxes: [{                       
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 55
                            }
                        }]
                    
                }
           };
            

}  // FIN ONINIT ****

/* EXEMPLE
var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
    
var newArr = [];

for(var i= 0, l = arr.length; i< l; i++){
    if(arr[i].name === "orange" ){
		newArr.push(arr[i]);
	}
}
*/


    creerTableauNaissances(){
  //var items: number[] = [];
  
        for(var i = 2000; i <= 2015; i++){
        
            this.prenomStats.forEach(function(prenominsee) {
                
                if (i == prenominsee.annee) {
                    this.tableauNaissances.push(prenominsee.nombreNaissance);
                    console.log(this.prenominsee.nombreNaissance);
                }
                else {
                    this.tableauNaissances.push(0);
                    console.log("0");
                }
                
            });
        
        }

    }

    creerTableauNaissances2():Number[] {

          this.prenomStats.forEach(function(prenominsee) {

            this.tableauNaissances.push(prenominsee.nombreNaissance)
        });
        return this.tableauNaissances;
    }


    creerTableauNaissance3():void {

        for(var i= 0; i <= 15; i++){
                var iterateur = this.anneesRef.entries();
                
              console.log(this.prenomStats[i].annee);  
        }
    }

    public changerMotAnime() {
        if(this.toggle) {
            this.motAnime = "Robert";
            this.toggle = false;
        }
        else {
            this.motAnime = "Micheline";
            this.toggle = true;
        }
        
    }



}

