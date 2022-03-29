import {Region} from "./Region";

export class Trame{
  id:number;
  demandeur:string;
  datereception:Date;
  num:number;
  ext:string;
  libellevoie:string;
  typevoie:string;
  nomvoie:string;
  codepostale:number;
  ville:string;
  insee:number;
  charge:string;
  commentaire:string;
  region:Region;

}
