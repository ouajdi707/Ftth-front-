import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

export class Gc{
  id:number
  demandeur:string;
  adressegc:string;
  nbrpoteaux:number;
  reel:number;
  action:string;
  user:User;
  datereception:Date;
  etat:Etat;
  region:Region;
  commentaire:string;
  projet:Projet;
  nom:string;

}
