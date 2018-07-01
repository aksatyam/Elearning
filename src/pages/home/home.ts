import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public CardList:any=[]; 

  constructor(public navCtrl: NavController) {
    this.CardListCall();
  }

  CardListCall(){
    this.CardList=[
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    },
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    },
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    },
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    },
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    },
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    },
                    {
                      textStart:'U1',
                      textStartBackgroumdColor:'red',
                      unitName:'Unit 1 Handwritten',
                      iconName:'ios-share',
                      authorIcon:'ios-person',
                      author:'A K Satyam',
                      uploadDateIcon:'md-calendar',
                      uploadedDate:new Date().toISOString(),
                      views:356,
                      fileSize:'35.00 MB'
                    }
                  ]
  }

}
