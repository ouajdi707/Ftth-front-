import {Region} from "./Region";
import {Projet} from "./Projet";

export class Gc{
  id:number
  demandeur:string;
  adressegc:string;
  nbrpoteaux:number;
  reel:number;
  action:string;
  charge:string;
  datereception:Date;
  etat:string;
  region:Region;
  commentaire:string;
  projet:Projet;
}
