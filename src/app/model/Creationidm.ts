import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

export class Creationidm {
  id:number;
  demandeur:string;
  datereception:Date;
  adresse:string;
  idra:string;
  idm:string;
  nlr:number;
  ville:string;
  codepostal:number;
  codeinsee:number;
  user:User;
  commentaire:string;
  region:Region;
  projet:Projet;
  nom:string;
  etat:Etat;





}
