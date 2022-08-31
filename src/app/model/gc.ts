import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";

export class Gc{
  id:number
  demandeur:string;
  adressegc:string;
  nbrpoteaux:number;
  reel:number;
  action:string;
  user:User;
  datereception:Date;
  etat:string;
  region:Region;
  commentaire:string;
  projet:Projet;
}
