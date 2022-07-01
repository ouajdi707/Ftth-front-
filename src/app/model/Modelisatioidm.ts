import {Region} from "./Region";
import {Projet} from "./Projet";

export class Modelisatioidm{
  id:number;
  idra:string;
  idm:string;
  nlr:string;
  tache:string;
  demandeur:string;
  datereception:Date;
  pm:string;
  pbo:string;
  bal:number;
  audit:string;
  charge:string;
  commentaire:string;
  etat:string;
  commune:string;
  region:Region;
  projet:Projet;
}
