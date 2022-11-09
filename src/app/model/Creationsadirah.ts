import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";
import {Etat} from "./Etat";

export class Creationsadirah {
  id :number;
  demandeur:string;
  daterec:Date;
  pm:string;
  pav:string;
  poche:string;
  etatsadirah:string;
  etat:Etat;

  user:User;
  commentaire:string;
  region:Region;
  projet:Projet;
  nom:string;






}
