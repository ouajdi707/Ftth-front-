import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

export class Fsc {
  id:number;
  demandeur:string;
  ref:string;
  tache:string;
  user:User;
  commentaire:string;
  datereception:Date;
  region:Region;
  projet:Projet;
  nom:string;
  etat:Etat;

}
