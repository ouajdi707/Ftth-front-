import {Region} from "./Region";
import {Projet} from "./Projet";

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
  charge:string;
  commentaire:string;
  region:Region;
  projet:Projet;
}
