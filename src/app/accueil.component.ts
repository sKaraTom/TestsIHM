



import { Component, OnInit } from "@angular/core";
import { AccueilService } from "app/accueil.service";
import { Todos } from "app/todos";
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@angular/http";
import { NgSemanticModule } from 'ng-semantic';

@Component({
    templateUrl: './accueil.component.html',
    providers: [AccueilService]
})
export class AccueilComponent implements OnInit {
        
        nom:string;
        tableauNaissances : Number[];
        tableauAnnees: string[];

        tableauTodos : Todos[];


         constructor(private route: ActivatedRoute,
					private router: Router,
					private http:Http, 
                    private accueilService:AccueilService) {
                
                this.accueilService.getTodos()
								.subscribe(res => {this.tableauTodos = res;
                                console.log(this.tableauTodos.length);
                                });

                this.tableauAnnees = new Array<string>();
                this.tableauNaissances = new Array<Number>();
        }



        ngOnInit(): void {
            
            this.nom = "Boris";

             for(var i = 0; i <= 15; i++){
                
                this.tableauNaissances.push(i);
                }
             
             //this.tableauNaissances = [200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215];

             for(var i = 1900; i <= 2015; i++){
                
                this.tableauAnnees.push(i.toString());
            }
            /*
            this.tableauTodos.forEach(todos => {
                console.log (todos.title)
            });
            */
            

        }


        public changerNom():void {
            if (this.nom == "Boris") {
            this.nom = "Chantal";
            }
            else {
                this.nom = "Boris";
            }
        }


}
