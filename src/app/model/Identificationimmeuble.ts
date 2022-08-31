import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";

export class Identificationimmeuble{
  id:number;
  demandeur:string;
  datereception:Date;
  refimmo:string;
  adresse:string;
  user:User;
  etat:string;
  commentaire:string;
  region:Region;
  projet:Projet;
}
