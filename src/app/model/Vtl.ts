import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";

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
  user:User;
  commentaire:string;
  region:Region;
  projet:Projet;
}
