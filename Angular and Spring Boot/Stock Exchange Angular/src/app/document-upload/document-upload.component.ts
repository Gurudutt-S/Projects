import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockPriceService } from '../services/stock-price.service';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  file:File;
  isError:boolean=false;
  errorMessage:string="";
  constructor(private uploadService:StockPriceService) { }

  ngOnInit() {

    bsCustomFileInput.init();

   
  }
  onFileChange(e){
    this.file=e.target.files[0];
  }

  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stocksSheet",this.file,this.file.name);
    this.uploadService.uploadStockSheet(uploadSheetData).subscribe(
      data=>{
        console.log("Uploaded");
      }
    );
    
  }


}
