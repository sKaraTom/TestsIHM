

import { Component, OnInit, Input } from "@angular/core";
import { Todos } from "app/todos";


@Component({
    selector: 'accueil-child',
    templateUrl: './accueil-child.component.html'
})
export class AccueilChildComponent implements OnInit {
        
     @Input() nom :string;
     @Input() tableauNaissances : Number[];
     @Input() tableauAnnees: string[];
     @Input() tableauTodos : Todos[];
    //chart
    data: any;
    options: any;

    

    constructor() {
    this.tableauAnnees = new Array<string>();
    this.tableauNaissances = new Array<Number>();
    this.tableauTodos = [];
     console.log("child : " + this.tableauTodos.length);
    }


ngOnInit(): void {
    
   

    //this.nom = "Boris";
    /*
       for(var i = 1900; i <= 2015; i++){
                
                this.tableauAnnees.push(i.toString());
                }
                    
      */          

  
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
                   
                    data: this.tableauNaissances
                        
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
                        
            



        }





}
