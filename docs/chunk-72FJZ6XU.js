import{a as S,b as M,c as k,d as y,h as E}from"./chunk-Z2E3UT73.js";import{Ma as t,Na as n,Pa as l,Ta as i,V as d,Va as u,Wa as f,Xa as _,Ya as P,_a as C,fb as N,gb as h,ra as r,wa as b}from"./chunk-6MBD2OZG.js";var p=200,c=class g{lastPage=p;pageNumber=b(1);currentPageNumber=h({source:this.pageNumber,computation:(o,a)=>a&&(o<1||o>p)?a.value:o});percentageOfCompletion=N(()=>`${(this.currentPageNumber()*1*100/p).toFixed(2)}%`);changePageNumber(o){this.pageNumber.update(a=>Math.max(1,Math.min(p,a+o)))}static \u0275fac=function(a){return new(a||g)};static \u0275cmp=d({type:g,selectors:[["app-pagination"]],standalone:!0,features:[C],decls:20,vars:4,consts:[[3,"click"],["type","number",3,"ngModelChange","ngModel"]],template:function(a,e){a&1&&(t(0,"h2"),i(1,"Update the shorthand version of the linked signal"),n(),t(2,"div")(3,"button",0),l("click",function(){return e.pageNumber.set(1)}),i(4,"First"),n(),t(5,"button",0),l("click",function(){return e.changePageNumber(-1)}),i(6,"Prev"),n(),t(7,"button",0),l("click",function(){return e.changePageNumber(1)}),i(8,"Next"),n(),t(9,"button",0),l("click",function(){return e.pageNumber.set(e.lastPage)}),i(10,"Last"),n(),t(11,"p"),i(12,"Go to: "),t(13,"input",1),P("ngModelChange",function(s){return _(e.pageNumber,s)||(e.pageNumber=s),s}),n()()(),t(14,"p"),i(15),n(),t(16,"p"),i(17),n(),t(18,"p"),i(19),n()),a&2&&(r(13),f("ngModel",e.pageNumber),r(2),u("Page Number: ",e.pageNumber(),""),r(2),u("Current Page Number ",e.currentPageNumber(),""),r(2),u("Percentage of completion: ",e.percentageOfCompletion(),""))},dependencies:[E,S,y,M,k],styles:["div[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0})};export{c as default};
