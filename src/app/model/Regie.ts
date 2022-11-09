import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

export class Regie{
  id:number
  demandeur:string;
  datereception:Date;
  pm:string;
  site:string;
  idra:string;
  idm:string;
  tache:string;
  duree:string;
  etat:Etat;
  user:User;
  commentaire:string;
  region:Region;
  projet:Projet;
  nom:string;


}
