// document.body.innerHTML=`<div style="text-align: center">
// <input type="text" id="txt" />
// <button type="button">Search</button>
// <div id="active"></div>
// <div id="recovered"></div>
// <div id="deaths"></div>
// </div>
// `

var div=document.createElement("div");
div.innerHTML = `<input type="text" id="txt" />
<button type="button" onclick="foo()">Search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo(){
    let cc= document.getElementById("txt").value;
    let res = await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
    let res1 = await res.json();
    console.log(res1);

    let index = res1.length-1;
    var active = res1[index].Active;
    console.log(active);
    document.getElementById("active").innerText=`Total Active Cases:${active}`;

    var recovered = res1[index].Recovered;
    document.getElementById("recovered").innerText=`Total Recovered Cases:${recovered}`;

    var deaths = res1[index].Deaths;
    document.getElementById("deaths").innerText=`Total Deaths Cases:${deaths}`;

}