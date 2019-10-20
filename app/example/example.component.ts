import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//edit View encapsulation constants
//None : no encapsulation : style applied to child comp throughout app
//Native : limited encpasulation, style apply to only immediate child , no throughout app
//Emulated : complete encapsulation,  no style applied to child comp throughout app



@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  //encapsulation: ViewEncapsulation.Native //style applied to immediate child : limited encapsulation
  //encapsulation : ViewEncapsulation.None //style applied to all child components any where in the whole app : means no encapsulation
  encapsulation : ViewEncapsulation.Emulated // complete encapsulation , no styles applied to child : complete encapsulation

})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
https://stackoverflow.com/questions/35651993/diff-between-viewencapsulation-native-viewencapsulation-none-and-viewencapsulat
Note : 
If you want styles that are added to Parent applied to Child you need to set ViewEncapsulation.None in the Child component so it doesn't prevent styles to bleed in.

Emulated and Native are just two different ways to prevent styles to bleed in to and out from components. None is the only one that allows styles to cross component boundaries.
 */