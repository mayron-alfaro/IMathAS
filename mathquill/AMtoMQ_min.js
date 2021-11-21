var AMtoMQ=function(){var i,A,c,g,s=".",x=0,m=1,y=2,$=3,h=4,w=5,f=6,b=7,d=8,_=9,v=10,t={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:m},e={input:"root",tag:"mroot",output:"root",tex:null,ttype:y},u={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:y},p={input:"/",tag:"mfrac",output:"/",tex:null,ttype:$},n={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:y},l={input:"_",tag:"msub",output:"_",tex:null,ttype:$},a={input:"^",tag:"msup",output:"^",tex:null,ttype:$},o={input:"text",tag:"mtext",output:"text",tex:null,ttype:v},r={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:v},q={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:v},O=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:x},{input:"beta",tag:"mi",output:"β",tex:null,ttype:x},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:x},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:x},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:x},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:x},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:x},{input:"eta",tag:"mi",output:"η",tex:null,ttype:x},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:x},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:x},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:x},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:x},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:x},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:x},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:x},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:x},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:x},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:x},{input:"phi",tag:"mi",output:"φ",tex:null,ttype:x},{input:"varphi",tag:"mi",output:"ϕ",tex:null,ttype:x},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:x},{input:"pi",tag:"mi",output:"π",tex:null,ttype:x},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:x},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:x},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:x},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:x},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:x},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:x},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:x},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:x},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:x},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:x},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:x},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:x},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:x},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:x},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:x},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:x},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:b},{input:"^^",tag:"mo",output:"∧",tex:"wedge",ttype:x},{input:"vv",tag:"mo",output:"∨",tex:"vee",ttype:x},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:x},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:x},{input:"U",tag:"mo",output:"∪",tex:"cup",ttype:x},{input:"xx",tex:"times",ttype:x},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:x},{input:"lt",tag:"mo",output:"<",tex:null,ttype:x},{input:"gt",tag:"mo",output:">",tex:null,ttype:x},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:x},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:x},{input:"gt=",tag:"mo",output:"≥",tex:"geq",ttype:x},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:x},{input:"geq",tag:"mo",output:"≥",tex:null,ttype:x},{input:"in",tag:"mo",output:"∈",tex:null,ttype:x},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:x},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:x},{input:"(",tag:"mo",output:"(",tex:null,ttype:h},{input:")",tag:"mo",output:")",tex:null,ttype:w},{input:"[",tag:"mo",output:"[",tex:null,ttype:h},{input:"]",tag:"mo",output:"]",tex:null,ttype:w},{input:"{",tag:"mo",output:"{",tex:"{",ttype:h,notexcopy:!0},{input:"}",tag:"mo",output:"}",tex:"}",ttype:w,notexcopy:!0},{input:"|",tag:"mo",output:"|",tex:null,ttype:_},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:h},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:w},{input:"<<",tag:"mo",output:"〈",tex:"langle",ttype:h},{input:">>",tag:"mo",output:"〉",tex:"rangle",ttype:w},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:h,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:w,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:x},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:x},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:x},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:x},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:x},{input:"->",tag:"mo",output:"→",tex:"to",ttype:x},{input:"=>",tag:"mo",output:"⇒",tex:"implies",ttype:x},{input:"<=>",tag:"mo",output:"⇔",tex:"iff",ttype:x},{input:"RR",tag:"mo",output:"ℝ",tex:"mathbb{R}",ttype:x,notexcopy:!0},{input:"f",tag:"mi",output:"f",tex:null,ttype:m,func:!0,val:!0},{input:"degree",tag:"mo",tex:null,ttype:x},{input:"degrees",output:"degree",ttype:d},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:m,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:m,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:m,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:m,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:m,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:m,func:!0},{input:"arcsec",tag:"mo",output:"arcsec",tex:null,ttype:m,func:!0},{input:"arccsc",tag:"mo",output:"arccsc",tex:null,ttype:m,func:!0},{input:"arccot",tag:"mo",output:"arccot",tex:null,ttype:m,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:m,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:m,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:m,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:m,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:m,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:m,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:m,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:m,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:m,func:!0},{input:"log",tag:"mo",output:"log",tex:null,ttype:m,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:m,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:m},{input:"Sin",tag:"mo",output:"sin",tex:null,ttype:m,func:!0},{input:"Cos",tag:"mo",output:"cos",tex:null,ttype:m,func:!0},{input:"Tan",tag:"mo",output:"tan",tex:null,ttype:m,func:!0},{input:"Arcsin",tag:"mo",output:"arcsin",tex:null,ttype:m,func:!0},{input:"Arccos",tag:"mo",output:"arccos",tex:null,ttype:m,func:!0},{input:"Arctan",tag:"mo",output:"arctan",tex:null,ttype:m,func:!0},{input:"Sinh",tag:"mo",output:"sinh",tex:null,ttype:m,func:!0},{input:"Sosh",tag:"mo",output:"cosh",tex:null,ttype:m,func:!0},{input:"Tanh",tag:"mo",output:"tanh",tex:null,ttype:m,func:!0},{input:"Cot",tag:"mo",output:"cot",tex:null,ttype:m,func:!0},{input:"Sec",tag:"mo",output:"sec",tex:null,ttype:m,func:!0},{input:"Csc",tag:"mo",output:"csc",tex:null,ttype:m,func:!0},{input:"Log",tag:"mo",output:"log",tex:null,ttype:m,func:!0},{input:"Ln",tag:"mo",output:"ln",tex:null,ttype:m,func:!0},{input:"Abs",tag:"mo",output:"abs",tex:null,ttype:m,func:!0},t,e,u,p,n,l,a,{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:m},{input:"hat",tag:"mover",output:"^",tex:null,ttype:m,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:m,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:m,acc:!0},o,r,q];function R(t,e){return t.input>e.input?1:-1}function S(t,e){var u,p;for(u="\\"==t.charAt(e)&&"\\"!=t.charAt(e+1)&&" "!=t.charAt(e+1)?t.slice(e+1):t.slice(e),p=0;p<u.length&&u.charCodeAt(p)<=32;p+=1);return u.slice(p)}function z(t,e,u){var p,n,l;if(0==u){for(u=-1,p=t.length;u+1<p;)t[n=u+p>>1]<e?u=n:p=n;return p}for(l=u;l<t.length&&t[l]<e;l++);return l}function D(t){var e,u,p,n,l,a=0,o="",r=!0;for(n=1;n<=t.length&&r;n++)u=t.slice(0,n),(a=z(i,u,a))<i.length&&t.slice(0,i[a].length)==i[a]&&(n=(o=i[e=a]).length),r=a<i.length&&t.slice(0,i[a].length)>=i[a];if(c=g,""!=o)return g=O[e].ttype,O[e];for(g=x,a=1,u=t.slice(0,1),l=!0;"0"<=u&&u<="9"&&a<=t.length;)u=t.slice(a,a+1),a++;if(u==s&&"0"<=(u=t.slice(a,a+1))&&u<="9")for(l=!1,a++;"0"<=u&&u<="9"&&a<=t.length;)u=t.slice(a,a+1),a++;return p=l&&1<a||2<a?(u=t.slice(0,a-1),"mn"):(a=2,((u=t.slice(0,1))<"A"||"Z"<u)&&(u<"a"||"z"<u)?"mo":"mi"),"-"==u&&" "!==t.charAt(1)&&c==$?(g=$,{input:u,tag:p,output:u,ttype:m,func:!0,val:!0}):{input:u,tag:p,output:u,ttype:x,val:!0}}function E(t){var e,u;return"{"==t.charAt(0)&&"}"==t.charAt(t.length-1)&&(u=0,"\\left"==(e=t.substr(1,5))?"("==(e=t.charAt(6))||"["==e||"{"==e?u=7:"\\lbrace"==(e=t.substr(6,7))&&(u=13):"("!=(e=t.charAt(1))&&"["!=e||(u=2),0<u&&("\\right)}"==(e=t.substr(t.length-8))||"\\right]}"==e||"\\right.}"==e?t=(t="{"+t.substr(u)).substr(0,t.length-8)+"}":"\\rbrace}"==e&&(t=(t="{"+t.substr(u)).substr(0,t.length-14)+"}"))),t}function N(t){return"boolean"==typeof t.val&&t.val?pre="":pre="\\",null==t.tex?pre+t.input:pre+t.tex}function Z(t){return null==t.tex?t.input:"\\"+t.tex}function C(t){var e,u,p,n,l,a,o,r="";if(null==(e=D(t=S(t,0)))||e.ttype==w&&0<A)return[null,t];switch(e.ttype==d&&(e=D(t=e.output+S(t,e.input.length))),e.ttype){case b:case x:return t=S(t,e.input.length),"\\"==(l=N(e)).charAt(0)||"mo"==e.tag?[l,t]:["{"+l+"}",t];case h:return A++,u=M(t=S(t,e.input.length),!0),A--,u[0].match(/bmatrix/)?[u[0].substring(0,u[0].length-7),u[1]]:("\\right"==u[a=0].substr(0,6)&&(")"==(n=u[0].charAt(6))||"]"==n||"}"==n?a=6:"."==n?a=7:"\\rbrace"==(n=u[0].substr(6,7))&&(a=13)),[0<a?(u[0]=u[0].substr(a),"boolean"==typeof e.invisible&&e.invisible?"{"+u[0]+"}":"{"+Z(e)+u[0]+"}"):"boolean"==typeof e.invisible&&e.invisible?"{"+u[0]+"}":"{\\left"+Z(e)+u[0]+"}",u[1]]);case v:return e!=q&&(t=S(t,e.input.length)),-1==(p="{"==t.charAt(0)?t.indexOf("}"):"("==t.charAt(0)?t.indexOf(")"):"["==t.charAt(0)?t.indexOf("]"):e==q?t.slice(1).indexOf('"')+1:0)&&(p=t.length),[r+="\\text{"+(n=t.slice(1,p))+"}",t=S(t,p+1)];case m:return null==(u=C(t=S(t,e.input.length)))[0]?["{"+N(e)+"}",t]:"boolean"==typeof e.func&&e.func?"^"==(n=t.charAt(0))||"_"==n||"/"==n||"|"==n||","==n||1==e.input.length&&e.input.match(/\w/)&&"("!=n?["{"+N(e)+"}",t]:["{"+N(e)+"{"+u[0]+"}}",u[1]]:(u[0]=E(u[0]),"sqrt"==e.input?["\\sqrt{"+u[0]+"}",u[1]]:"abs"==e.input?["\\left|{"+u[0]+"}\\right|",u[1]]:"cancel"==e.input?["\\cancel{"+u[0]+"}",u[1]]:void 0!==e.rewriteleftright?["{\\left"+e.rewriteleftright[0]+u[0]+"\\right"+e.rewriteleftright[1]+"}",u[1]]:"boolean"==typeof e.acc&&e.acc?[N(e)+"{"+u[0]+"}",u[1]]:["{"+N(e)+"{"+u[0]+"}}",u[1]]);case y:return null==(u=C(t=S(t,e.input.length)))[0]?["{"+N(e)+"}",t]:(u[0]=E(u[0]),null==(o=C(u[1]))[0]?["{"+N(e)+"}",t]:(o[0]=E(o[0]),[r="color"==e.input?"{\\color{"+u[0].replace(/[\{\}]/g,"")+"}"+o[0]+"}":"root"==e.input?"{\\sqrt["+u[0]+"]{"+o[0]+"}}":"{"+N(e)+"{"+u[0]+"}{"+o[0]+"}}",o[1]]));case $:return t=S(t,e.input.length),[e.output,t];case f:return t=S(t,e.input.length),["{\\quad\\text{"+e.input+"}\\quad}",t];case _:return A++,u=M(t=S(t,e.input.length),!1),A--,n="","|"==(n=u[0].charAt(u[0].length-1))?["{\\left|"+u[0]+"}",u[1]]:["{\\mid}",t];default:return t=S(t,e.input.length),["{"+N(e)+"}",t]}}function L(t){var e,u,p,n,l,a;return u=D(t=S(t,0)),n=(l=C(t))[0],(e=D(t=l[1])).ttype==$&&"/"!=e.input&&(null==(l=C(t=S(t,e.input.length)))[0]?l[0]="{}":l[0]=E(l[0]),t=l[1],"_"==e.input?"^"==(p=D(t)).input?((a=C(t=S(t,p.input.length)))[0]=E(a[0]),t=a[1],n="{"+n,n+="_{"+l[0]+"}",n+="^{"+a[0]+"}",n+="}"):n+="_{"+l[0]+"}":n=n+"^{"+l[0]+"}",void 0!==u.func&&u.func&&(p=D(t)).ttype!=$&&p.ttype!=w&&(n="{"+n+(l=L(t))[0]+"}",t=l[1])),[n,t]}function M(t,e){for(var u,p,n,l,a,o,r,i,c,g,s,x,m,y,h,f,b,d="",v=!1;p=(n=L(t=S(t,0)))[0],(u=D(t=n[1])).ttype==$&&"/"==u.input?(null==(n=L(t=S(t,u.input.length)))[0]?n[0]="{}":n[0]=E(n[0]),t=n[1],p="\\frac{"+(p=E(p))+"}",d+=p+="{"+n[0]+"}",u=D(t)):null!=p&&(d+=p),(u.ttype!=w&&(u.ttype!=_||e)||0==A)&&null!=u&&""!=u.output;);if(u.ttype==w||u.ttype==_){if(2<(a=d.length)&&"{"==d.charAt(0)&&0<d.indexOf(",")&&(")"==(o=d.charAt(a-2))||"]"==o)&&("("==(r=d.charAt(6))&&")"==o&&"}"!=u.output||"["==r&&"]"==o)){for(i="\\begin{bmatrix}",(c=new Array).push(0),g=!0,(x=[])[s=0]=[0],y=m=0,l=1;l<a-1;l++)d.charAt(l)==r&&s++,d.charAt(l)==o&&0==--s&&","==d.charAt(l+2)&&"{"==d.charAt(l+3)&&(c.push(l+2),x[m=l+2]=[l+2]),"["!=d.charAt(l)&&"("!=d.charAt(l)&&"{"!=d.charAt(l)||y++,"]"!=d.charAt(l)&&")"!=d.charAt(l)&&"}"!=d.charAt(l)||y--,","==d.charAt(l)&&1==y&&x[m].push(l);if(c.push(a),h=-1,0==s&&0<c.length)for(l=0;l<c.length-1;l++){if(0<l&&(i+="\\\\"),0==l)if(1==x[c[l]].length)f=[d.substr(c[l]+7,c[l+1]-c[l]-15)];else{for(f=[d.substring(c[l]+7,x[c[l]][1])],b=2;b<x[c[l]].length;b++)f.push(d.substring(x[c[l]][b-1]+1,x[c[l]][b]));f.push(d.substring(x[c[l]][x[c[l]].length-1]+1,c[l+1]-8))}else if(1==x[c[l]].length)f=[d.substr(c[l]+8,c[l+1]-c[l]-16)];else{for(f=[d.substring(c[l]+8,x[c[l]][1])],b=2;b<x[c[l]].length;b++)f.push(d.substring(x[c[l]][b-1]+1,x[c[l]][b]));f.push(d.substring(x[c[l]][x[c[l]].length-1]+1,c[l+1]-8))}0<h&&f.length!=h?g=!1:-1==h&&(h=f.length),i+=f.join("&")}i+="\\end{bmatrix}",g&&(d=i)}t=S(t,u.input.length),v=("boolean"==typeof u.invisible&&u.invisible||(d+=p="\\right"+Z(u)),!0)}return 0<A&&!v&&(d+="\\right)"),[d,t]}return i=[],function(){var t,e=[];for(t=0;t<O.length;t++)!O[t].tex||"boolean"==typeof O[t].notexcopy&&O[t].notexcopy||(e[e.length]={input:O[t].tex,tag:O[t].tag,output:O[t].output,ttype:O[t].ttype,acc:O[t].acc||!1});for((O=O.concat(e)).sort(R),t=0;t<O.length;t++)i[t]=O[t].input}(),function(t){return A=0,null==(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/(&nbsp;|\u00a0|&#160;|{::})/g,"")).replace(/<([^<].*?,.*?[^>])>/g,"<<$1>>")).replace(/&gt;/g,">")).replace(/&lt;/g,"<")).replace(/\s*\bor\b\s*/g,'" or "')).replace(/all\s+real\s+numbers/g,'"all real numbers"')).replace(/(\)|\])\s*u\s*(\(|\[)/g,"$1U$2")).replace(/\bDNE\b/gi,'"DNE"')).match(/\S/)?"":M(t.replace(/^\s+/g,""),!1)[0]}}();function MQtoAM(t,e){var u,p,n,l,a,o;if(t=(t=t.replace(/\\:/g," ")).replace(/\\operatorname{(\w+)}/g," $1"),e)t=t.replace(/\\Re/g,"RR");else{for(;-1!=(o=t.lastIndexOf("\\left|"));)t=-1!=(p=t.indexOf("\\right|",o+1))?(n=t.substring(0,o).match(/(arcsinh|arccosh|arctanh|arcsech|arccsch|arccoth|arcsin|arccos|arctan|arcsec|arccsc|arccot|sinh|cosh|tanh|sech|csch|coth|ln|log|exp|sin|cos|tan|sec|csc|cot)(\^\d+)?$/),(t=t.substring(0,p)+")"+(n?")":"")+t.substring(p+7)).substring(0,o)+(n?"(":"")+"abs("+t.substring(o+6)):t.substring(0,o)+"|"+t.substring(o+6);t=(t=(t=(t=(t=t.replace(/\\text{\s*or\s*}/g," or ")).replace(/\\text{all\s+real\s+numbers}/g,"all real numbers")).replace(/\\text{DNE}/g,"DNE")).replace(/\\varnothing/g,"DNE")).replace(/\\Re/g,"all real numbers")}for(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\\begin{.?matrix}(.*?)\\end{.?matrix}/g,function(t,e){return"[("+e.replace(/\\\\/g,"),(").replace(/&/g,",")+")]"})).replace(/\\le(?=(\b|\d))/g,"<=")).replace(/\\ge(?=(\b|\d))/g,">=")).replace(/\\ne(?=(\b|\d))/g,"!=")).replace(/\\pm/g,"+-")).replace(/\\approx/g,"~~")).replace(/(\\arrow|\\rightarrow)/g,"rarr")).replace(/\\cup/g,"U").replace(/\\sim/g,"~")).replace(/\\vee/g,"vv").replace(/\\wedge/g,"^^")).replace(/\\Rightarrow/g,"=>").replace(/\\Leftrightarrow/g,"<=>")).replace(/\\times/g,"xx")).replace(/\\left\\{/g,"lbrace").replace(/\\right\\}/g,"rbrace")).replace(/\\left/g,"")).replace(/\\right/g,"")).replace(/\\langle/g,"<<")).replace(/\\rangle/g,">>")).replace(/\\cdot/g,"*")).replace(/\\infty/g,"oo")).replace(/\\nthroot/g,"root")).replace(/\\mid/g,"|")).replace(/\\/g,"")).replace(/sqrt\[(.*?)\]/g,"root($1)")).replace(/(\d)frac/g,"$1 frac");-1!=(o=t.indexOf("frac{"));){for(u=1,l=o+5;0<u&&l<t.length-1;)l++,"{"==(a=t.charAt(l))?u++:"}"==a&&u--;t=0==u?t.substring(0,o)+"("+t.substring(o+5,l)+")/"+t.substring(l+1):t.substring(0,o)+t.substring(o+4)}return(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/_(\w)(\w)/g,"_$1 $2")).replace(/(\^|_)([+\-])([^\^])/g,"$1$2 $3")).replace(/\^(\w)(\w)/g,"^$1 $2")).replace(/_{([\d\.]+)}\^/g,"_$1^")).replace(/_{([\d\.]+)}([^\^])/g,"_$1 $2")).replace(/_{([\d\.]+)}$/g,"_$1")).replace(/_{(\w+)}$/g,"_($1)")).replace(/{/g,"(").replace(/}/g,")")).replace(/lbrace/g,"{").replace(/rbrace/g,"}")).replace(/\(([\d\.]+)\)\/\(([\d\.]+)\)/g,"$1/$2 ")).replace(/\/\(([\d\.]+)\)/g,"/$1")).replace(/\(([\d\.]+)\)\//g,"$1/")).replace(/\/\(([\a-zA-Z])\)/g,"/$1")).replace(/\(([\a-zA-Z])\)\//g,"$1/")).replace(/\^\((-?[\d\.]+)\)(\d)/g,"^$1 $2")).replace(/\^\(-1\)/g,"^-1")).replace(/\^\((-?[\d\.]+)\)/g,"^$1")).replace(/\/\(([\a-zA-Z])\^([\d\.]+)\)/g,"/$1^$2 ")).replace(/\(([\a-zA-Z])\^([\d\.]+)\)\//g,"$1^$2/")).replace(/\+\-/g,"+ -")).replace(/text\(([^)]*)\)/g,"$1")).replace(/\(\s*(\w)/g,"($1").replace(/(\w)\s*\)/g,"$1)")).replace(/^\s+|\s+$/g,"")}
