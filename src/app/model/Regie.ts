import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";

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
  etat:string;
  user:User;
  commentaire:string;
  region:Region;
  projet:Projet;
}
