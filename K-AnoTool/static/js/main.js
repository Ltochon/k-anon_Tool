function* generateid(){
    let i = 0;
    while(true){
      i++;
      yield i;
    } 
  }
var gen = generateid();
function ischecked(evt){
    var visible = "";
    if(document.getElementById(evt.currentTarget.myParam).checked){
        visible = "visible"
        cmpt_check++;
    }
    else{
        visible = "hidden"
        cmpt_check--;
    }
    document.getElementById("l3_"+ evt.currentTarget.myParam).style.visibility = visible;
    document.getElementById("selecttype_"+ evt.currentTarget.myParam).style.visibility = visible;
    document.getElementById("hiera_"+ evt.currentTarget.myParam).style.visibility = visible;
}
headers = document.getElementsByClassName('checkbox');
var cmpt_check = 0;
var tab_headers = [];
for(i = 0; i < headers.length; i++){
    tab_headers.push(headers[i].id)
}

for (let i = 0; i < tab_headers.length; i++) {
    obj = document.getElementById(tab_headers[i]);
    obj.addEventListener("click", ischecked, false);
    obj.myParam = tab_headers[i]
    document.getElementById(tab_headers[i]).style.visibility = "visible";
}

function gettype(evt){
    localStorage.setItem("weight_" + evt.id.split("selecttype_")[1],evt.value);
}

function next(){
    current_sol++;
    i = 0;
    var table = document.getElementById('table');
    while(i < 50){
        j = 0;
        arr = all_df_split[current_sol].split('[')[5+i].replace("],","").split(",")
        for(elem in arr){
            table.rows[1+i].cells[j].innerHTML = arr[elem].replace('"','').replace('"','');
            j++;
        }
        i++;
    }
    document.getElementById("comb").innerHTML = '(' + all_comb[current_sol] + ')'
    document.getElementById("suppr").innerHTML = all_suppr[current_sol] + ' %'
    document.getElementById("cost").innerHTML = all_cost[current_sol]
    document.getElementById("ano").innerHTML = 'This dataset is ' + all_ano[current_sol] + '-anonyme'
    document.getElementById("infosol").innerHTML = (current_sol+1).toString()
    if(current_sol+1 == all_comb.length){
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("nexttxt").style.visibility = "hidden";
    }
    if(current_sol > 0){
        document.getElementById("previous").style.visibility = "visible";
        document.getElementById("previoustxt").style.visibility = "visible";
    }
}

function previous(){
    current_sol--;
    i = 0;
    var table = document.getElementById('table');
    while(i < 50){
        j = 0;
        arr = all_df_split[current_sol].split('[')[5+i].replace("],","").split(",")
        for(elem in arr){
            table.rows[1+i].cells[j].innerHTML = arr[elem].replace('"','').replace('"','');
            j++;
        }
        i++;
    }
    document.getElementById("infosol").innerHTML = (current_sol+1).toString()
    document.getElementById("comb").innerHTML = '(' + all_comb[current_sol] + ')'
    document.getElementById("suppr").innerHTML = all_suppr[current_sol] + ' %'
    document.getElementById("cost").innerHTML = all_cost[current_sol]
    document.getElementById("ano").innerHTML = 'This dataset is ' + all_ano[current_sol] + '-anonyme'
    if(current_sol == 0){
        document.getElementById("previous").style.visibility = "hidden";
        document.getElementById("previoustxt").style.visibility = "hidden";
    }
    if(current_sol < all_comb.length){
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("nexttxt").style.visibility = "visible";
    }
    
}
var current_sol = 0
all_df_split = all_df.split(", ")
document.getElementById("previous").style.visibility = "hidden";
document.getElementById("previoustxt").style.visibility = "hidden";

function gotohiera(clicked_id){
    localStorage.setItem("qid",clicked_id);
    document.location.href = "http://127.0.0.1:5000/generalization/";
}

function checkb(evt){
    if(!evt.checked){
        document.getElementById("hiddenactions").hidden = true;
    }
}


