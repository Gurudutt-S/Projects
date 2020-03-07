import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockPriceService } from '../services/stock-price.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  uploadFile: FormGroup;
  file: File;
  isError: boolean = false;
  errrorMessage: string = "";

  constructor(private formBulder: FormBuilder, private stockPriceService: StockPriceService) { }

  ngOnInit() {

    this.uploadFile = this.formBulder.group({
      file: ['']
    });
  }

  onFileChange(e) {
    console.log(e);
    this.file = e.target.files[0];
  }

  uploadData() {
    this.isError = false;
    const uploadSheetData = new FormData();
    uploadSheetData.append("stocksSheet", this.file, this.file.name);
    this.stockPriceService.uploadStockSheet(uploadSheetData).subscribe(
      data => {
        console.log("Uploaded");
        console.log(data);
      },
      error => {
        if (typeof (error.error) == "string") {
          this.isError = true;
          this.errrorMessage = error.error;
        }
      });
  }

}
