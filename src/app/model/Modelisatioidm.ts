import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

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
  user:User;
  commentaire:string;
  etat:Etat;
  commune:string;
  region:Region;
  projet:Projet;
  nom:string;

}
