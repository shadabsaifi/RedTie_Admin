import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare let paypal: any;
declare var $:any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  paypalForm:FormGroup
  addScript: boolean = false;
  paypalLoad: boolean = true;
  finalAmount: number = 1;
  tokenData:any={};
  purchaseLink: string;
  address: any;
  tokenDetail: any;
  tokenList: any;
  tokenprice: any;
  tokenaddress: any;
  tokennumber: string ='';
  tokendecimal:number;
  quantity: any;
  authentication: any;
  constructor(private fb:FormBuilder) {
    
    this.paypalForm = this.fb.group({
      currency:['INR', Validators.required],
      amount:['', Validators.required]
    })
  }

  ngOnInit() {

    // this.authentication = JSON.parse(localStorage.credential)
    // this.address = this.authentication.address;
    this.tokenlistApi();
  }

  purchaseApi(data){
    this.tokenData = {
      'currency':"USD",
          'price':Number(data.amount),
          'tokenName':data.kit
      } 
    //  console.log("TokenData==> ",JSON.stringify(this.tokenData));
     $(`#tokenPurchase`).modal(`show`);
      this.paypal(); 
  }
  /*******************Purchase Api************/
  /*******************PayPal************/
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ATEXGJ_v9mkOv_nP1sTrkU5zD4COyLYAHfkPviuO9v6qyiU1GaNmMUEHy4luLDgaUNpbhXmy03GUIlSu',
     production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.paypalForm.value.amount, currency: this.paypalForm.value.currency} }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        $(`#tokenPurchase`).modal(`hide`);
        this.tokenpurchaseApi(data);
       })
    }
  };
  
  paypal(): void {
    
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    // console.log("paypal");
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
  scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
    // scripttagElement.src = this.purchaseLink;
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
  /*******************PayPal************/
  /**************Succesfully Token Purchase Api********************/
  tokenpurchaseApi(detail){
    var tokendetail = {
      "tokenName":this.tokenData.tokenName,
      "userWalletAddress":this.address,
      "amount":this.tokenData.price,
      "paymentToken":detail.paymentToken,
      "orderId":detail.orderID,
      "paymentId":detail.paymentID,
      "payerId":detail.payerID,
      "tokenAddress":this.tokenaddress,
      "numberofToken":this.tokennumber
      }
        
  // console.log("Payment Detail==> ",JSON.stringify(tokendetail));
  }
  /********************Token List Api****************/
  tokenlistApi(){
       var tokenData = {
          "tokenName": ''
          }
  }
  /*******************No of Token Calculation***************/
  public onAmount(event){
    // console.log('amount',event.target.value);
    var num =event.target.value/(this.tokenprice/this.quantity);
    this.tokennumber = num.toFixed(this.tokendecimal);
    // console.log("No of Token==> ",this.tokennumber);
  }
  public onChange(amt,event): void { 
    // console.log('event will give you full breif of action',amt) // event will give you full breif of action
   var newVal = event.target.value;
    // console.log("Amount==>> "+amt.amount);
    for(var i = 0; i<this.tokenList.length;i++){
      // console.log(newVal);
      // console.log(this.tokenList[i].tokenName);
      if( newVal == this.tokenList[i].tokenName){
        // console.log("PRice",this.tokenList[i]);
        this.tokenprice = this.tokenList[i].tokenPrice;
        this.tokenaddress = this.tokenList[i].contractAddress;
        this.tokendecimal = this.tokenList[i].tokenDecimal;
        this.quantity = this.tokenList[i].quantity;
        // console.log("Price==> ",this.tokenprice);
        // console.log("tokendecimal=> ",this.tokendecimal);
      }
    }
    var num = amt.amount/(this.tokenprice/this.quantity);
    this.tokennumber = num.toFixed(4);
    // console.log("No of Token==> ",this.tokennumber);
  }

}
