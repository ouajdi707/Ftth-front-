import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

export class Identificationimmeuble{
  id:number;
  demandeur:string;
  datereception:Date;
  refimmo:string;
  adresse:string;
  user:User;
  etat:Etat;
  commentaire:string;
  region:Region;
  projet:Projet;
  nom:string;

}
