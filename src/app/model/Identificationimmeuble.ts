import {Region} from "./Region";
import {Projet} from "./Projet";

export class Identificationimmeuble{
  id:number;
  demandeur:string;
  datereception:Date;
  refimmo:string;
  adresse:string;
  charge:string;
  etat:string;
  commentaire:string;
  region:Region;
  projet:Projet;
}
