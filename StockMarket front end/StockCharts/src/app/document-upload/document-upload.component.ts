import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  uploadFile: FormGroup;

  constructor(private formBulder: FormBuilder) { }

  ngOnInit() {

    this.uploadFile = this.formBulder.group({
      file: ['']
    });


  }

}
