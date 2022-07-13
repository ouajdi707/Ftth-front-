import {Region} from "./Region";
import {Projet} from "./Projet";
import {Tache} from "./Tache";

export class Nvtache {
 id:number;
 demandeur:string;
 datereception:Date;
 charge:string;
 commentaire:string;
 etat:string;
 region:Region;
 projet:Projet;
 nomTache:Tache;



}
