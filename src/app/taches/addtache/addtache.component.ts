import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Region} from "../../model/Region";
import {Creationidm} from "../../model/Creationidm";
import {Nvtache} from "../../model/Nvtache";
import {ToastrService} from "ngx-toastr";
import {RegionService} from "../../services/region.service";
import {NvtacheService} from "../../services/nvtache.service";

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrls: ['./addtache.component.css']
})
export class AddtacheComponent implements OnInit {
addForm=this.fb.group({
  nomTache:['',Validators.required],

  nomChamp:this.fb.array([
    this.fb.control('')
  ])
});
step:any =1;
  aaaa: any;


  constructor(private fb:FormBuilder,private toast: ToastrService) { }


  ngOnInit(): void {

  }



  OnSubmit() {
    this.step=this.step+1;
  }
  get nomChamp(){
    return this.addForm.get('nomChamp') as FormArray
  }
  addNomChamp(){
    this.nomChamp.push(this.fb.control(''));
  }
  deleteNomChamp(index:number){
    this.nomChamp.removeAt(index)
    this.nomChamp.markAsDirty();
  }

  Onprevious() {
    this.step=1;
  }

}
