import {Component, OnInit} from '@angular/core';
import {GcService} from "../../../services/gc.service";
import {PrimeNGConfig} from "primeng/api";
import {ToastrService} from "ngx-toastr";
import {Gc} from "../../../model/gc";
import {RegionService} from "../../../services/region.service";
import {Region} from "../../../model/Region";
import * as XLSX from 'xlsx';
import Swal from "sweetalert2";


@Component({
  selector: 'app-gcdisplay',
  templateUrl: './gcdisplay.component.html',
  styleUrls: ['./gcdisplay.component.css']
})

export class GcdisplayComponent implements OnInit {
  regions:Region[]
  region =new Region();
  gc: Gc[];
  productDialog: boolean;
  submitted: boolean;
  gcs = new Gc();


  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }


  constructor(private toast: ToastrService,
              private gcService: GcService, private regionService: RegionService,  private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.getgc();
    this.getAllRegion();
    this.primengConfig.ripple = true;


  }

  tb = {
    fontSize: 12
  }
  NewDialog = false;

  getgc() {

    this.gcService.Get_Gc()
      .subscribe(data => {
          console.table(data)
          this.gc = data;

        },
        error => {
          console.log(error)
        })
  }

  Ondeletegc(id: number) {
    Swal.fire({
      title: 'Etes-vous sur?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {

        //let confirm = window.confirm('do you want to delete this GC')
        if (result.value) {
          this.gcService.Remove_Gc(id).subscribe(data => {
              console.table(data)

              this.ngOnInit()

              this.toast.success('gc supprimé avec succés ');

            },
            error => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              console.log(error)
            })

        }



    })
  }

  openDialog(gc: Gc) {
    this.gcs = gc;
    this.productDialog = true;
  }
getAllRegion(){
this.regionService.getAll().subscribe(data=>this.regions=data);
}
  editgc(gc: any) {

    this.gcService.update_Gc(gc.id, gc).subscribe(data => {

        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))
  }


  openNew() {
   this.gcs =new Gc();
    this.NewDialog = true;

  }

  save(gcs: Gc) {
    gcs.region = this.region
    this.gcService.Add_Gc(gcs).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }
  fileName = 'ExcelSheet.xlsx';
  Onexportexcel() {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
