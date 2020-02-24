import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IpoService } from '../services/ipo.service';
import { Router } from '@angular/router';
import { Ipo } from '../models/ipo';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  updateIpo: FormGroup;

  constructor(private formBuilder: FormBuilder, private ipoService: IpoService, private router: Router) { }

  ngOnInit() {

    this.updateIpo = this.formBuilder.group({
      id: [''],
      companyName: [''],
      stockExchange: [''],
      pricePerShare: [''],
      noOfShares: [''],
      openDate: [''],
      remarks: ['']
    });

    const id = localStorage.getItem('ipoId');
    if (+id > 0) {
      this.ipoService.getIpoById(id).subscribe(ipo => {
        this.updateIpo.patchValue(ipo);
      });
    }

  }

  updateTheIpo(ipo: Ipo) {
    this.ipoService.UpdateIpoInfo(this.updateIpo.value).subscribe(u => {
      this.router.navigate(['manage-ipo'])
    });
  }

}
