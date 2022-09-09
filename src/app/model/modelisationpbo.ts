import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";

export class Modelisationpbo{
  id:number;
  demandeur:string;
  datereception:Date;
  commune:string;
  pm:string;
  pbo:string;
  bal:number;
  tache:string;
  etat:string;
  audit:string;
  user:User;
  commentaire:string;
  emprise:string;
  region:Region;
  projet:Projet;
  nom:string;

}
