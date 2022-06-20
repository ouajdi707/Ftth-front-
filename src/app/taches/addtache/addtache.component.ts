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
  regions:Region[]
  region =new Region();
  nvtache:Nvtache[];
  nvtaches=new Nvtache();

  constructor(private fb:FormBuilder,private toast: ToastrService,private regionService: RegionService,private nvtacheService:NvtacheService) { }


  ngOnInit(): void {
    this.getNvtache()
    this.getAllRegion()
  }
  getNvtache(){
    this.nvtacheService.Get_Nvtache().subscribe(data=>{
        console.table(data)
        this.nvtache=data;
      },
      error => {
        console.log(error)
      })
  }
  getAllRegion(){
    this.regionService.getAll().subscribe(data=>this.regions=data);

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
  save(nvtaches:Nvtache) {
    nvtaches.region=this.region
    this.nvtacheService.addTache(nvtaches).subscribe(res => {
        this.toast.success("done")

      },
      error => this.toast.error('some things wrong')
    )
    this.OnSubmit()
    this.getNvtache()
  }
}
