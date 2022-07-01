import {Region} from "./Region";
import {Projet} from "./Projet";

export class Vtl{
  id:number;
  demandeur:string;
  datereception:Date;
  nom:string;
  nbal:number;
  pm:string;
  modelisation:string;
  apd:string;
  pds:string;
  doe:string;
  etatsite:string;
  charge:string;
  commentaire:string;
  region:Region;
  projet:Projet;
}
