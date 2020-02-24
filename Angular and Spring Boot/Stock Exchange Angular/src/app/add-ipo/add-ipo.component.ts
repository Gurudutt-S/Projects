import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IpoService } from '../services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  addIpo: FormGroup;

  constructor(private formBulder: FormBuilder, private ipoService: IpoService, private router: Router) { }

  ngOnInit() {

    this.addIpo = this.formBulder.group({
      id: [''],
      companyName: [''],
      stockExchange: [''],
      pricePerShare: [''],
      noOfShares: [''],
      openDate: [''],
      remarks: ['']
    });

  }

  saveIpo() {
    this.ipoService.saveNewIpo(this.addIpo.value).subscribe(data => {
      console.log(data);
      console.log('User inserted succesfully');
      alert("Data inserted succesfully")
      this.router.navigate(['manage-ipo'])
    }, (err) => {
      console.log('ERRRR:' + JSON.stringify(err));
    })

  }

}
