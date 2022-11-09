import {Region} from "./Region";
import {Projet} from "./Projet";
import {Tache} from "./Tache";
import {colsup} from "./colsup";
import {User} from "./User";
import {Etat} from "./Etat";

export class Nvtache {
 id:number;
 demandeur:string;
 datereception:Date;
 user:User;
 commentaire:string;
 etat:Etat;
 region:Region;
 projet:Projet;
 nomTache:Tache;
  columnsSuplimentaires:colsup[];
  nom:string;




}
