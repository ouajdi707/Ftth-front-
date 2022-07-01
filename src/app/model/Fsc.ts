import {Region} from "./Region";
import {Projet} from "./Projet";

export class Fsc {
  id:number;
  demandeur:string;
  ref:string;
  tache:string;
  charge:string;
  commentaire:string;
  datereception:Date;
  region:Region;
  projet:Projet;
}
