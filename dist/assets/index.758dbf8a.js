import{r as ie,e as q,l as p,b as ce,a as K,c as re,m as he,p as le,j as h,d as n,A as H,f as A,F as de,R as me,g as ue}from"./vendor.87d77799.js";const fe=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))_(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&_(d)}).observe(document,{childList:!0,subtree:!0});function f(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function _(s){if(s.ep)return;s.ep=!0;const i=f(s);fetch(s.href,i)}};fe();var o=[{continent:"Africa",month:"2021-01",new_cases:1618296},{continent:"Africa",month:"2021-02",new_cases:655358},{continent:"Africa",month:"2021-03",new_cases:640052},{continent:"Africa",month:"2021-04",new_cases:680722},{continent:"Africa",month:"2021-05",new_cases:565262},{continent:"Africa",month:"2021-06",new_cases:1328436},{continent:"Africa",month:"2021-07",new_cases:2409054},{continent:"Africa",month:"2021-08",new_cases:2162708},{continent:"Africa",month:"2021-09",new_cases:1040736},{continent:"Africa",month:"2021-10",new_cases:377250},{continent:"Africa",month:"2021-11",new_cases:270184},{continent:"Africa",month:"2021-12",new_cases:2116224},{continent:"Asia",month:"2021-01",new_cases:2397521},{continent:"Asia",month:"2021-02",new_cases:1909630},{continent:"Asia",month:"2021-03",new_cases:3484929},{continent:"Asia",month:"2021-04",new_cases:11018237},{continent:"Asia",month:"2021-05",new_cases:11739349},{continent:"Asia",month:"2021-06",new_cases:4556427},{continent:"Asia",month:"2021-07",new_cases:6189793},{continent:"Asia",month:"2021-08",new_cases:8096330},{continent:"Asia",month:"2021-09",new_cases:5715745},{continent:"Asia",month:"2021-10",new_cases:3543219},{continent:"Asia",month:"2021-11",new_cases:2741969},{continent:"Asia",month:"2021-12",new_cases:2511393},{continent:"Europe",month:"2021-01",new_cases:6650795},{continent:"Europe",month:"2021-02",new_cases:4067282},{continent:"Europe",month:"2021-03",new_cases:5575876},{continent:"Europe",month:"2021-04",new_cases:5032973},{continent:"Europe",month:"2021-05",new_cases:2381832},{continent:"Europe",month:"2021-06",new_cases:1373990},{continent:"Europe",month:"2021-07",new_cases:3545024},{continent:"Europe",month:"2021-08",new_cases:3883327},{continent:"Europe",month:"2021-09",new_cases:3710762},{continent:"Europe",month:"2021-10",new_cases:5537892},{continent:"Europe",month:"2021-11",new_cases:9310231},{continent:"Europe",month:"2021-12",new_cases:14037275},{continent:"North America",month:"2021-01",new_cases:7010873},{continent:"North America",month:"2021-02",new_cases:2858497},{continent:"North America",month:"2021-03",new_cases:2218082},{continent:"North America",month:"2021-04",new_cases:2405126},{continent:"North America",month:"2021-05",new_cases:1373062},{continent:"North America",month:"2021-06",new_cases:779747},{continent:"North America",month:"2021-07",new_cases:2080932},{continent:"North America",month:"2021-08",new_cases:5399539},{continent:"North America",month:"2021-09",new_cases:5080232},{continent:"North America",month:"2021-10",new_cases:2978447},{continent:"North America",month:"2021-11",new_cases:2816499},{continent:"North America",month:"2021-12",new_cases:6799729},{continent:"Oceania",month:"2021-01",new_cases:1757},{continent:"Oceania",month:"2021-02",new_cases:1006},{continent:"Oceania",month:"2021-03",new_cases:5889},{continent:"Oceania",month:"2021-04",new_cases:5845},{continent:"Oceania",month:"2021-05",new_cases:5721},{continent:"Oceania",month:"2021-06",new_cases:5900},{continent:"Oceania",month:"2021-07",new_cases:30899},{continent:"Oceania",month:"2021-08",new_cases:58596},{continent:"Oceania",month:"2021-09",new_cases:66795},{continent:"Oceania",month:"2021-10",new_cases:86673},{continent:"Oceania",month:"2021-11",new_cases:51842},{continent:"Oceania",month:"2021-12",new_cases:219489},{continent:"South America",month:"2021-01",new_cases:2682420},{continent:"South America",month:"2021-02",new_cases:2093284},{continent:"South America",month:"2021-03",new_cases:3189288},{continent:"South America",month:"2021-04",new_cases:3730133},{continent:"South America",month:"2021-05",new_cases:3904908},{continent:"South America",month:"2021-06",new_cases:4095661},{continent:"South America",month:"2021-07",new_cases:2617939},{continent:"South America",month:"2021-08",new_cases:1380080},{continent:"South America",month:"2021-09",new_cases:759343},{continent:"South America",month:"2021-10",new_cases:601617},{continent:"South America",month:"2021-11",new_cases:568118},{continent:"South America",month:"2021-12",new_cases:825488}];function we(){const x=[],r=["Africa","Asia","North America","South America","Europe","Oceania"],[f,_]=ie.exports.useState(r),s=["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"],i=[],d=[],k=[],S=[],N=[],C=[];for(let e=0;e<o.length;e++)o[e].continent=="Africa"&&i.push(o[e].new_cases),o[e].continent=="Asia"&&d.push(o[e].new_cases),o[e].continent=="North America"&&k.push(o[e].new_cases),o[e].continent=="South America"&&S.push(o[e].new_cases),o[e].continent=="Europe"&&N.push(o[e].new_cases),o[e].continent=="Oceania"&&C.push(o[e].new_cases),x.push(o[e].new_cases);const c=750,a=150,I=100,G=q(x),g=p().domain([0,G[1]]).range([c-a,a]),L=p().domain([0,11]).range([a,c-a]),O=ce().domain(s).range([0,c-a-a]),y={Africa:i,Asia:d,"North America":k,"South America":N,Europe:S,Oceania:C},P=K().x((e,t)=>L(t)).y(e=>g(e));var b=0;const E=[];var W="2021-";for(let e=0;e<12;e++){let t=e+1;t<10?W="2021-0":W="2021-";for(let u=0;u<o.length;u++)o[u].month==W.concat(t.toString())&&(b=b+o[u].new_cases);E.push(b),b=0}const F=p().domain([0,q(E)[1]]).range([c-a,a]),Q=K().x((e,t)=>L(t)).y(e=>F(e));var U=0,X=G[1];const M=400,w=100,m=20,T=5,l=p().domain([U,X]).range([m,M-m-m]),z=re().value(e=>e.new_cases)(o),v=p().domain([0,he(z,e=>e.length)]).range([w-m-T,m]),R=[{continent:"Africa",newCase:i.reduce((e,t)=>e+t,0)},{continent:"North America",newCase:k.reduce((e,t)=>e+t,0)},{continent:"Asia",newCase:d.reduce((e,t)=>e+t,0)},{continent:"South America",newCase:N.reduce((e,t)=>e+t,0)},{continent:"Europe",newCase:S.reduce((e,t)=>e+t,0)},{continent:"Oceania",newCase:C.reduce((e,t)=>e+t,0)}],j=20,J=10,Z=300,V=500,$=Z-2*j,Y=V-2*j,ee=o.map(e=>e.continent),ne=[0,Y],B=le().domain(ee).range(ne).padding(1),te=[0,65107259],oe=[0,$],D=p().domain(te).range(oe),ae=e=>{const t=f.map((u,se)=>se===e?!u:u);_(t)};return h("div",{className:"App",style:{margin:20},children:[n("h1",{children:"Covid-19 New Cases 2021 analysis"}),n("h2",{children:"line plots of covid-19 new cases change monthly"}),h("div",{style:{display:"flex"},children:[h("svg",{width:c+I,height:c,children:[n(H,{strokeWidth:1,left:a,scale:F}),n(A,{strokeWidth:0,top:c-a,left:a,scale:O}),n("text",{x:"-400",y:"40",transform:"rotate(-90)",fontSize:20,children:"Number of New Cases"}),n("text",{x:"-400",y:"60",transform:"rotate(-90)",fontSize:20,children:"Monthly at 2021"}),[1].map((e,t)=>n("path",{stroke:e===1?"blue":"black",fill:"none",d:Q(E)},t))]}),h("svg",{width:c+I,height:c,children:[n(H,{strokeWidth:1,left:a,scale:g}),n(A,{strokeWidth:0,top:c-a,left:a,scale:O}),n("text",{x:"-400",y:"40",transform:"rotate(-90)",fontSize:20,children:"Number of New Cases"}),n("text",{x:"-400",y:"60",transform:"rotate(-90)",fontSize:20,children:"Monthly at 2021 Based on Continent"}),r.map((e,t)=>n("path",{stroke:e==="North America"?"blue":"black",strokeWidth:e==="North America"?4:1,fill:"none",d:P(y[e])},e)),r.map((e,t)=>n("text",{fill:"black",style:{fontSize:10,fontWeight:e==="North America"?800:500},x:c-a+5,y:g(y[e][11]),children:e},`legend--${e}`))]})]}),n("p",{children:"The dataset I use is based on a monthly summary of new cases in 2021 for the continents. I wanted to examine how the number of new cases varies between continents. Therefore, I used a line graph because it is the best way to convey the change in the time series. In particular, I wanted to observe the change in new cases in North America, and since this is where I am staying now, I have color-changed the data for this continent. While the chart may be biased because the populations differ by continent, I was still able to observe a trend from this line graph. Interestingly, excluding Asia, all other continents saw an increase in new cases of Virus 19 in December at the end of the year. Potential reasons for this could be the drop in temperature, or the arrival of holidays such as Thanksgiving and Christmas."}),n("p",{children:"I also created another line chart consisting of a monthly summary of new case changes. Based on that chart, I can observe a pattern. New cases seem to decrease at the beginning of the year and then increase from March onwards. It is interesting to consider the reasons for this change. Why do the new cases in Covid-19 trend to increase again after each decrease (The growth of covid seems never-ending). If the pattern is consistent for 2022, new cases should reach a high point in January and begin to decrease in February."}),n("h1",{children:"Covid-19 New Cases 2021 Interactive Analysis"}),n("div",{children:r.map((e,t)=>(console.log(f[t]),h(de,{children:[n("input",{type:"checkbox",id:e,name:e,checked:f[t],onChange:()=>ae(t)},t),n("label",{style:{marginRight:15},children:e})]})))}),n("div",{style:{display:"flex"},children:h("svg",{width:c+I,height:c,children:[n(H,{strokeWidth:0,left:a,scale:g}),n(A,{strokeWidth:0,top:c-a,left:a,scale:O,tickValues:s}),n("text",{x:"-400",y:"40",transform:"rotate(-90)",fontSize:20,children:"Number of New Cases"}),n("text",{x:"-400",y:"60",transform:"rotate(-90)",fontSize:20,children:"Monthly at 2021"}),r.map((e,t)=>n("path",{stroke:f[t]===!1?"rgba(0,0,0,0.1)":"rgba(0,0,0,1)",fill:"none",d:P(y[e])},e)),r.map((e,t)=>n("text",{fill:"black",style:{fontSize:10},x:c-a+5,y:g(y[e][11]),children:e},`legend--${e}`))]},"a")}),n("p",{children:`The format I chose for the visualization is an interactive line chart. The color of the line can be manipulated by checking the checkbox, and the line will be displayed again when the checkbox is re-checked. I chose this type of visualization because the previous line chart with all the folds at once can be a bit overwhelming and it's hard to read the specific continental trends that really interest people. Therefore, adding interactive features helps users to select the continents they are interested in and it is easier for users to compare between specific continents. As an alternative, I considered highlighting the "North American" continent like the previous line chart, but I chose not to do so because the interactive feature already allows the user to highlight the continent of interest. I chose to reduce the color density of the line instead of making it disappear because I wanted to remind the user of the presence of other continents without disturbing the process of viewing the data. For me, I was able to take a closer look at the changes in the differences between Asia and North America. I noticed that the two biggest differences in trends occurred in May and December, as the increase and decrease in Covid new cases number were reversed between the two continents.`}),n("h2",{children:"strip plot of new cases monthly in 2021 for different continent"}),n("div",{style:{display:"flex"},children:h("svg",{height:w,width:M,children:[o.map((e,t)=>n("circle",{cx:l(e.new_cases),cy:w/2,r:5,style:{stroke:"rgba(50,50,50,.5)",fill:"none"}},t)),n(A,{strokeWidth:1,top:w-m-T,scale:l,numTicks:7})]})}),n("h2",{children:"histogram of new cases monthly in 2021 for different continent"}),n("div",{style:{display:"flex"},children:h("svg",{width:M,height:w,children:[z.map((e,t)=>n("rect",{fill:"steelblue",x:l(e.x0)+1,y:v(e.length),width:Math.max(0,l(e.x1)-l(e.x0)-1),height:v(0)-v(e.length)},t)),z.map((e,t)=>n("text",{fill:"black",fontSize:"10",textAnchor:"middle",x:(l(e.x0)+l(e.x1))/2|0,y:v(e.length)-2,children:e.length},t)),n(A,{strokeWidth:1,top:w-m-T,scale:l,numTicks:7})]})}),n("h2",{children:"bar plot of 2021 covid-19 new cases based on continents"}),n("div",{style:{display:"flex"},children:n("svg",{width:V,height:500,margin:"100",children:h("g",{y:$,children:[R.map(e=>n("rect",{x:B(e.continent)-J/2,y:-D(e.newCase)+300,rx:2.5,width:J,height:D(e.newCase),fill:"black",stroke:"black"},e.continent)),R.map(e=>n("text",{fontSize:"10",x:B(e.continent),y:"320",textAnchor:"middle",children:e.continent},"label"+e.continent)),R.map(e=>n("text",{fontSize:"8",x:B(e.continent),y:-D(e.newCase)+290,textAnchor:"middle",children:e.newCase},"label"+e.continent)),n("line",{x1:"",y1:"300",x2:Y,y2:"300",fill:"black",stroke:"black"})]})})}),n("p",{children:"The strip plot and histogram show that when the continent is ignored, new cases tend to be less than 4 million per month. The data points in the strip plot are concentrated at slightly greater than 2 million, which is consistent with the line chart. The bar chart is interesting because I also compare it to the total population on each continent. Asia is the most populous of the continents, so it makes sense that there are more covid-19 cases. However, South America has the fifth highest population of any continent, but the highest number of covid-19 cases of any continent. This could be due to underlying reasons such as regulation, restrictions, or differences in vaccination rates."}),n("div",{})]})}me.render(n(ue.StrictMode,{children:n(we,{})}),document.getElementById("root"));