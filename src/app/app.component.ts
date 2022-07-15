import { Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import BaseData from '../server/public/data/sample.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  baseData:any;
  chosenAction = '';
  itemsList = [];
  isClicked = [true, false, false];
  selectedBtn = 'list';
  searchtext: any;
  backUpData = [];
  constructor(private appService : AppService){
    
  }

  ngOnInit(): void {
    this.baseData = BaseData;
    this.backUpData = this.baseData.tableInfo.data;
    console.log(this.baseData, "base datap")
  }

  ngDoCheck(){
    console.log(this.isClicked)
  }

  callAction(index, actionItem){
    console.log(index, actionItem, "check")
  }
  
  callFunction(field, index){
    console.log(field, index, "chek2")
    if(field == 'detailsHeader'){
      this.itemsList = this.baseData.tableInfo.data[index].details;
    }
  }

  btnCheck(index){
    for(var i=0; i<this.isClicked.length; i++) 
    if(this.isClicked[i]){
      this.isClicked[i] = false;
      document.getElementsByClassName('btnCss')[i].classList.remove('active')
    } 
    this.isClicked[index] = true;
  }

  globalsearch($event){
    console.log(this.searchtext, $event, "check");
    this.baseData.tableInfo.data = this.backUpData;
    if(this.searchtext !== ''){
      var obj = this.baseData.tableInfo.data.filter((info) => {
        // console.log(info.date, info.date.toLowerCase().includes(this.searchtext))
        if(info.listName.toLowerCase().includes(this.searchtext.toLowerCase()) || info.date.toLowerCase().includes(this.searchtext.toLowerCase()) || info.entities.toString().includes(this.searchtext.toLowerCase())){
          return info;
        }
      })
      this.baseData.tableInfo.data = obj;
    }
    else this.baseData.tableInfo.data = this.backUpData;
  }

}
