import{a as S,b as F,c as M,h as k}from"./chunk-Z2E3UT73.js";import{Ma as t,Na as n,Pa as d,Ta as o,V as f,Va as l,Wa as p,Xa as c,Ya as m,_a as v,fb as h,gb as _,ra as r,wa as g}from"./chunk-6MBD2OZG.js";var y=class C{country=g("United States of America");favoriteCountry=_(()=>this.country());reversedFavoriteCountry=h(()=>this.favoriteCountry().split("").toReversed().join(""));changeCountry(){this.country.set("Canada"),this.favoriteCountry.update(u=>u.toUpperCase())}static \u0275fac=function(a){return new(a||C)};static \u0275cmp=f({type:C,selectors:[["app-favorite-country"]],standalone:!0,features:[v],decls:18,vars:5,consts:[[3,"ngModelChange","ngModel"],[3,"click"]],template:function(a,e){a&1&&(t(0,"h2"),o(1,"Update the shorthand version of the linked signal. Set and update the signal"),n(),t(2,"p"),o(3,"Update country: "),t(4,"input",0),m("ngModelChange",function(i){return c(e.country,i)||(e.country=i),i}),n()(),t(5,"p"),o(6,"Update favorite country: "),t(7,"input",0),m("ngModelChange",function(i){return c(e.favoriteCountry,i)||(e.favoriteCountry=i),i}),n()(),t(8,"button",1),d("click",function(){return e.country.set("United States of America")}),o(9,"Reset"),n(),t(10,"button",1),d("click",function(){return e.changeCountry()}),o(11,"Update source and linked signal"),n(),t(12,"p"),o(13),n(),t(14,"p"),o(15),n(),t(16,"p"),o(17),n()),a&2&&(r(4),p("ngModel",e.country),r(3),p("ngModel",e.favoriteCountry),r(6),l("Country: ",e.country(),""),r(2),l("Favorite Country: ",e.favoriteCountry(),""),r(2),l("Reversed Country: ",e.reversedFavoriteCountry(),""))},dependencies:[k,S,F,M],encapsulation:2,changeDetection:0})};export{y as default};