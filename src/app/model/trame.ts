import {Region} from "./Region";
import {Projet} from "./Projet";
import {User} from "./User";

export class Trame{
  id:number;
  demandeur:string;
  datereception:Date;
  num:number;
  ext:string;
  libellevoie:string;
  typevoie:string;
  nomvoie:string;
  codepostal:number;
  ville:string;
  insee:number;
  user:User;
  commentaire:string;
  region:Region;
  projet:Projet;
  nom:string;


}
