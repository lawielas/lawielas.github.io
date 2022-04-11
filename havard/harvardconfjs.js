////// show printed books

function showDiv(select) {
    if (select.value == 1) {
        document.getElementById('fullconf').style.display = "block";
        document.getElementById('fullconfjournal').style.display = "none";
        document.getElementById('individualconf').style.display = "none";
        document.getElementById('individualjournal').style.display = "none";
        document.getElementById('onlineconf').style.display = "none";
        }
    else if (select.value == 2) {
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('fullconfjournal').style.display = "block";
        document.getElementById('individualconf').style.display = "none";
        document.getElementById('individualjournal').style.display = "none";
        document.getElementById('onlineconf').style.display = "none";
        }
    else if (select.value == 3) {
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('fullconfjournal').style.display = "none";
        document.getElementById('individualconf').style.display = "block";
        document.getElementById('individualjournal').style.display = "none";
        document.getElementById('onlineconf').style.display = "none";
        }
    else if (select.value == 4) {
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('fullconfjournal').style.display = "none";
        document.getElementById('individualconf').style.display = "none";
        document.getElementById('individualjournal').style.display = "block";
        document.getElementById('onlineconf').style.display = "none";
        }
    else if (select.value == 5) {
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('fullconfjournal').style.display = "none";
        document.getElementById('individualconf').style.display = "none";
        document.getElementById('individualjournal').style.display = "none";
        document.getElementById('onlineconf').style.display = "block";
        }
    else{
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('fullconfjournal').style.display = "none";
        document.getElementById('individualconf').style.display = "none";
        document.getElementById('individualjournal').style.display = "none";
        document.getElementById('onlineconf').style.display = "none";
        }
}




// add and remove Full conference proceeding authours name

var inputNamesfullconf = document.getElementById('authorfullconf');
var addNamefullconf = document.getElementById('newRowfullconf');
var removeNamefullconf = document.getElementById('removeRowfullconf');

addNamefullconf.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var firstName = document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    firstName.setAttribute('name', 'firstfullconf[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstfullconf');
    firstName.setAttribute('placeholder', 'First Name');
    firstName.setAttribute('autocomplete', 'off');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var middleName = document.createElement('input');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    middleName.setAttribute('name', 'middlefullconf[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middlefullconf');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastfullconf[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastfullconf');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorfullconf.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorfullconf.appendChild(firstName);
    authorfullconf.appendChild(middleName);
    authorfullconf.appendChild(lastName);
    
}

removeNamefullconf.onclick = function(){
    var input_tagsfullconf = authorfullconf.getElementsByTagName('input');
    if (input_tagsfullconf.length > 2) {
        authorfullconf.removeChild(input_tagsfullconf[(input_tagsfullconf.length)-1])
    }
    if (input_tagsfullconf.length > 2) {
        authorfullconf.removeChild(input_tagsfullconf[(input_tagsfullconf.length)-1])
    }
    if (input_tagsfullconf.length > 2) {
        authorfullconf.removeChild(input_tagsfullconf[(input_tagsfullconf.length)-1])
    }
}

// add and remove Indivdual conference paper authours name

var inputNamesindividualconf = document.getElementById('authorindividualconf');
var addNameindividualconf = document.getElementById('newRowindividualconf');
var removeNameindividualconf = document.getElementById('removeRowindividualconf');

addNameindividualconf.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var firstName = document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    firstName.setAttribute('name', 'firstindividualconf[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstindividualconf');
    firstName.setAttribute('placeholder', 'First Name');
    firstName.setAttribute('autocomplete', 'off');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var middleName = document.createElement('input');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    middleName.setAttribute('name', 'middleindividualconf[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middleindividualconf');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastindividualconf[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastindividualconf');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorindividualconf.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorindividualconf.appendChild(firstName);
    authorindividualconf.appendChild(middleName);
    authorindividualconf.appendChild(lastName);
    
}

removeNameindividualconf.onclick = function(){
    var input_tagsindividualconf = authorindividualconf.getElementsByTagName('input');
    if (input_tagsindividualconf.length > 2) {
        authorindividualconf.removeChild(input_tagsindividualconf[(input_tagsindividualconf.length)-1])
    }
    if (input_tagsindividualconf.length > 2) {
        authorindividualconf.removeChild(input_tagsindividualconf[(input_tagsindividualconf.length)-1])
    }
    if (input_tagsindividualconf.length > 2) {
        authorindividualconf.removeChild(input_tagsindividualconf[(input_tagsindividualconf.length)-1])
    }
}

// add and remove Indivdual conference paper published in journal authours name

var inputNamesindividualjournal = document.getElementById('authorindividualjournal');
var addNameindividualjournal = document.getElementById('newRowindividualjournal');
var removeNameindividualjournal = document.getElementById('removeRowindividualjournal');

addNameindividualjournal.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var firstName = document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    firstName.setAttribute('name', 'firstindividualjournal[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstindividualjournal');
    firstName.setAttribute('placeholder', 'First Name');
    firstName.setAttribute('autocomplete', 'off');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var middleName = document.createElement('input');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    middleName.setAttribute('name', 'middleindividualjournal[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middleindividualjournal');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastindividualjournal[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastindividualjournal');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorindividualjournal.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorindividualjournal.appendChild(firstName);
    authorindividualjournal.appendChild(middleName);
    authorindividualjournal.appendChild(lastName);
    
}

removeNameindividualjournal.onclick = function(){
    var input_tagsindividualjournal = authorindividualjournal.getElementsByTagName('input');
    if (input_tagsindividualjournal.length > 2) {
        authorindividualjournal.removeChild(input_tagsindividualjournal[(input_tagsindividualjournal.length)-1])
    }
    if (input_tagsindividualjournal.length > 2) {
        authorindividualjournal.removeChild(input_tagsindividualjournal[(input_tagsindividualjournal.length)-1])
    }
    if (input_tagsindividualjournal.length > 2) {
        authorindividualjournal.removeChild(input_tagsindividualjournal[(input_tagsindividualjournal.length)-1])
    }
}

// add and remove Paper from conference proceeding published online authours name

var inputNamesonlineconf = document.getElementById('authoronlineconf');
var addNameonlineconf = document.getElementById('newRowonlineconf');
var removeNameonlineconf = document.getElementById('removeRowonlineconf');

addNameonlineconf.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var firstName = document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    firstName.setAttribute('name', 'firstonlineconf[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstonlineconf');
    firstName.setAttribute('placeholder', 'First Name');
    firstName.setAttribute('autocomplete', 'off');
    
//    var column = document.createElement('div');
//    column.setAttribute('class', 'col');
//    
//    var mb = document.createElement('div');
//    mb.setAttribute('class', 'mb-3');
    
    var middleName = document.createElement('input');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    middleName.setAttribute('name', 'middleonlineconf[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middleonlineconf');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastonlineconf[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastonlineconf');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authoronlineconf.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authoronlineconf.appendChild(firstName);
    authoronlineconf.appendChild(middleName);
    authoronlineconf.appendChild(lastName);
    
}

removeNameonlineconf.onclick = function(){
    var input_tagsonlineconf = authoronlineconf.getElementsByTagName('input');
    if (input_tagsonlineconf.length > 2) {
        authoronlineconf.removeChild(input_tagsonlineconf[(input_tagsonlineconf.length)-1])
    }
    if (input_tagsonlineconf.length > 2) {
        authoronlineconf.removeChild(input_tagsonlineconf[(input_tagsonlineconf.length)-1])
    }
    if (input_tagsonlineconf.length > 2) {
        authoronlineconf.removeChild(input_tagsonlineconf[(input_tagsonlineconf.length)-1])
    }
}



// show result


var ref = "";

function harvardreffullconf() {
    var firstname = document.getElementsByName('firstfullconf[]');
    var middlename = document.getElementsByName('middlefullconf[]');
    var lastname = document.getElementsByName('lastfullconf[]');
    var yearfullconf = document.getElementById('yearfullconf').value;
    var titlefullconf = document.getElementById('titlefullconf').value;
    var locationfullconf = document.getElementById('locationfullconf').value;
    var dayfullconf = document.getElementById('dayfullconf').value;
    var monthfullconf = document.getElementById('monthfullconf').value;
    var placeofpublicationfullconf = document.getElementById('placeofpublicationfullconf').value;
    var publisherfullconf = document.getElementById('publisherfullconf').value;
    
    //the authors name
    
    //one name
    
    if (firstname.length == 1){
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        if (m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". ";
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + ".";
        }
    }
    //two names
    else if (firstname.length == 2){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        
        if (fim.value != "" && sem.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
        }
        
        
        
    }
    //three names
    else if (firstname.length == 3){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        var thf = firstname[2];
        var thm = middlename[2];
        var thl = lastname[2];
        
        if (fim.value != "" && sem.value == "" && thm.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
    }
    //more than three names
    else {
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        
        if(m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + " <i>et al.</i>";
            
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + "." + " <i>et al.</i>";
        }
    }
    
    
//    for (var i = 0; i < firstname.length; i++){
//        var a = firstname[i];
//        var b = middlename[i];
//        var c = lastname[i];
//        ref = ref + c.value.charAt(0).toUpperCase() + c.value.slice(1) + ", " + a.value.charAt(0).toUpperCase() + ". " + b.value.charAt(0).toUpperCase() + "., ";
//    } 
    
    
    //### Year of publication
    
    if (yearfullconf != "") {
        ref = ref + "(" + yearfullconf + ") ";
    }
    else if (yearfullconf == "") {
        ref = ref;
    }

    
    // title conference
    if (titlefullconf != "") {
        ref = ref + "<i>" + titlefullconf + "</i>. ";
    }
    else if (titlefullconf != "") {
        ref = ref;
    }

        //locationfullconf
        if (locationfullconf != "") {
        ref = ref + locationfullconf + ", ";
    }
        else if (locationfullconf == "") {
        ref = ref;
    }
        
    //dayfullconf
        if (dayfullconf != "") {
        ref = ref + dayfullconf + " ";
    }
        else if (dayfullconf == "") {
        ref = ref;
    }
    
    
    //month
        if (monthfullconf != "") {
        ref = ref + monthfullconf + ". ";
    }
        else if (monthfullconf == "") {
        ref = ref;
    }
    
    //place of publication/publisher
        if (placeofpublicationfullconf != "" && publisherfullconf != ""){
            ref = ref + placeofpublicationfullconf + ": " + publisherfullconf + ".";
        }
        else if (placeofpublicationfullconf == "" && publisherfullconf == ""){
            ref = ref;
        }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}



////// Full conference proceeding published in journal
function harvardreffullconfjournal() {
    var titlefullconfjournal = document.getElementById('titlefullconfjournal').value;
    var yearfullconfjournal = document.getElementById('yearfullconfjournal').value;
    var titlejournalfullconf = document.getElementById('titlejournalfullconf').value;
    var volumefullconfjournal = document.getElementById('volumefullconfjournal').value;
    var supplementfullconfjournal = document.getElementById('supplementfullconfjournal').value;
    var doifullconfjournal = document.getElementById('doifullconfjournal').value;
 
    // Title of Conference
    if (titlefullconfjournal != "") {
        ref = ref + "'" + titlefullconfjournal + "' ";
    }
    else if (titlefullconfjournal != "") {
        ref = ref;
    }
    
    
    //### Year of publication
    
    if (yearfullconfjournal != "") {
        ref = ref + "(" + yearfullconfjournal + ") ";
    }
    else if (yearfullconfjournal == "") {
        ref = ref;
    }
    
    // Title of Journal
    if (titlejournalfullconf != "") {
        ref = ref + "<i>" + titlejournalfullconf + "</i>, ";
    }
    else if (titlejournalfullconf != "") {
        ref = ref;
    }
    
    //Volume
    if (volumefullconfjournal != "") {
        ref = ref + volumefullconfjournal;
    }
    else if (volumefullconfjournal == "") {
        ref = ref;
    }
    //Supplement 
    if (supplementfullconfjournal != "") {
        ref = ref + "(" + supplementfullconfjournal + "). ";
    }
    else if (supplementfullconfjournal == "") {
        ref = ref;
    }
    
    //doi/url
    if (doifullconfjournal != "") {
        ref = ref + "Available at: <a href=" + doifullconfjournal + "</a>" + doifullconfjournal + ".";
    }
    else if (doifullconfjournal == "") {
        ref = ref;
    }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}

//Individual Conference

function harvardrefindividualconf() {
    var firstname = document.getElementsByName('firstindividualconf[]');
    var middlename = document.getElementsByName('middleindividualconf[]');
    var lastname = document.getElementsByName('lastindividualconf[]');
    var yearindividualconf = document.getElementById('yearindividualconf').value;
    var titlepaperindividualconf = document.getElementById('titlepaperindividualconf').value;
    var titleindividualconf = document.getElementById('titleindividualconf').value;
    var locationindividualconf = document.getElementById('locationindividualconf').value;
    var dayindividualconf = document.getElementById('dayindividualconf').value;
    var monthindividualconf = document.getElementById('monthindividualconf').value;
    var placeofpublicationindividualconf = document.getElementById('placeofpublicationindividualconf').value;
    var publisherindividualconf = document.getElementById('publisherindividualconf').value;
    var pagerefindividualconf = document.getElementById('pagerefindividualconf').value;
    
    //the authors name
    
    //one name
    
    if (firstname.length == 1){
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        if (m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". ";
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + ".";
        }
    }
    //two names
    else if (firstname.length == 2){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        
        if (fim.value != "" && sem.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
        }
        
        
        
    }
    //three names
    else if (firstname.length == 3){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        var thf = firstname[2];
        var thm = middlename[2];
        var thl = lastname[2];
        
        if (fim.value != "" && sem.value == "" && thm.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
    }
    //more than three names
    else {
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        
        if(m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + " <i>et al.</i>";
            
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + "." + " <i>et al.</i>";
        }
    }
    
    
//    for (var i = 0; i < firstname.length; i++){
//        var a = firstname[i];
//        var b = middlename[i];
//        var c = lastname[i];
//        ref = ref + c.value.charAt(0).toUpperCase() + c.value.slice(1) + ", " + a.value.charAt(0).toUpperCase() + ". " + b.value.charAt(0).toUpperCase() + "., ";
//    } 
    
    
    //### Year of publication
    
    if (yearindividualconf != "") {
        ref = ref + "(" + yearindividualconf + ") ";
    }
    else if (yearindividualconf == "") {
        ref = ref;
    }

    
    // title article
    if (titlepaperindividualconf != "") {
        ref = ref + "'" + titlepaperindividualconf + "', ";
    }
    else if (titlepaperindividualconf != "") {
        ref = ref;
    }
    
   // title confernece
    if (titleindividualconf != "") {
        ref = ref + "<i>" + titleindividualconf + "</i>. ";
    }
    else if (titleindividualconf != "") {
        ref = ref;
    }
    
    //locarion
        if (locationindividualconf != "") {
        ref = ref + " " + locationindividualconf + ", ";
    }
        else if (locationindividualconf == "") {
        ref = ref;
    }
        
    //day
        if (dayindividualconf != "") {
        ref = ref  + dayindividualconf + " ";
    }
        else if (dayindividualconf == "") {
        ref = ref;
    }
    
    //month
        if (monthindividualconf != "") {
        ref = ref  + monthindividualconf + ". ";
    }
        else if (monthindividualconf == "") {
        ref = ref;
    }
    
    //place of publication/publisher
        if (placeofpublicationindividualconf != "" && publisherindividualconf != ""){
            ref = ref + placeofpublicationindividualconf + ": " + publisherindividualconf + ".";
        }
        else if (placeofpublicationindividualconf == "" && publisherindividualconf == ""){
            ref = ref;
        }
    
    //page reference
        if (pagerefindividualconf != "") {
        ref = ref + " pp. " + pagerefindividualconf + ". ";
    }
        else if (pagerefindividualconf == "") {
        ref = ref;
    }
    
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}

// Indivdual conference paper published in journal
function harvardrefindividualjournal() {
    var firstname = document.getElementsByName('firstindividualjournal[]');
    var middlename = document.getElementsByName('middleindividualjournal[]');
    var lastname = document.getElementsByName('lastindividualjournal[]');
    var yearindividualjournal = document.getElementById('yearindividualjournal').value;
    var titlepaperindividualjournal = document.getElementById('titlepaperindividualjournal').value;
    var titleconfindi = document.getElementById('titleconfindi').value;
    var titleindividualjournal = document.getElementById('titleindividualjournal').value;
    var volumeindividualjournal = document.getElementById('volumeindividualjournal').value;
    var supplementindividualjournal = document.getElementById('supplementindividualjournal').value;
    var pagerefindividualjournal = document.getElementById('pagerefindividualjournal').value;
    var doiindividualjournal = document.getElementById('doiindividualjournal').value;
    
    //the authors name
    
    //one name
    
    if (firstname.length == 1){
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        if (m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". ";
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + ".";
        }
    }
    //two names
    else if (firstname.length == 2){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        
        if (fim.value != "" && sem.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
        }
        
        
        
    }
    //three names
    else if (firstname.length == 3){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        var thf = firstname[2];
        var thm = middlename[2];
        var thl = lastname[2];
        
        if (fim.value != "" && sem.value == "" && thm.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
    }
    //more than three names
    else {
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        
        if(m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + " <i>et al.</i>";
            
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + "." + " <i>et al.</i>";
        }
    }
    
    
//    for (var i = 0; i < firstname.length; i++){
//        var a = firstname[i];
//        var b = middlename[i];
//        var c = lastname[i];
//        ref = ref + c.value.charAt(0).toUpperCase() + c.value.slice(1) + ", " + a.value.charAt(0).toUpperCase() + ". " + b.value.charAt(0).toUpperCase() + "., ";
//    } 
    
    
    //### Year of publication
    
    if (yearindividualjournal != "") {
        ref = ref + "(" + yearindividualjournal + ") ";
    }
    else if (yearindividualjournal == "") {
        ref = ref;
    }

    
    // title article
    if (titlepaperindividualjournal != "") {
        ref = ref + "'" + titlepaperindividualjournal + "', ";
    }
    else if (titlepaperindividualjournal != "") {
        ref = ref;
    }
    
    //title confernec
        if (titleconfindi != "") {
        ref = ref + "(from " + titleconfindi + "), ";
    }
        else if (titleconfindi == "") {
        ref = ref;
    }
    
   // title confernece
    if (titleindividualjournal != "") {
        ref = ref + "<i>" + titleindividualjournal + "</i>, ";
    }
    else if (titleindividualjournal != "") {
        ref = ref;
    }
    
     //Volume
    if (volumeindividualjournal != "") {
        ref = ref + volumeindividualjournal;
    }
    else if (volumeindividualjournal == "") {
        ref = ref;
    }
    //Supplement 
    if (supplementindividualjournal != "") {
        ref = ref + "(" + supplementindividualjournal + "), ";
    }
    else if (supplementindividualjournal == "") {
        ref = ref;
    }
    
    
    //page reference
        if (pagerefindividualjournal != "") {
        ref = ref + " pp. " + pagerefindividualjournal + ". ";
    }
        else if (pagerefindividualjournal == "") {
        ref = ref;
    }
    
    //doi/url
    if (doiindividualjournal != "") {
        ref = ref + "Available at: <a href=" + doiindividualjournal + "</a>" + doiindividualjournal + ".";
    }
    else if (doiindividualjournal == "") {
        ref = ref;
    }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}

//Online confernce

function harvardrefonlineconf() {
    var firstname = document.getElementsByName('firstonlineconf[]');
    var middlename = document.getElementsByName('middleonlineconf[]');
    var lastname = document.getElementsByName('lastonlineconf[]');
    var yearonlineconf = document.getElementById('yearonlineconf').value;
    var titlepaperonlineconf = document.getElementById('titlepaperonlineconf').value;
    var titleonlineconf = document.getElementById('titleonlineconf').value;
    var locationonlineconf = document.getElementById('locationonlineconf').value;
    var dayonlineconf = document.getElementById('dayonlineconf').value;
    var monthonlineconf = document.getElementById('monthonlineconf').value;
    var pagerefonlineconf = document.getElementById('pagerefonlineconf').value;
    var doionlineconf = document.getElementById('doionlineconf').value;
    
    //the authors name
    
    //one name
    
    if (firstname.length == 1){
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        if (m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". ";
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + ".";
        }
    }
    //two names
    else if (firstname.length == 2){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        
        if (fim.value != "" && sem.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". and " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
        }
        
        
        
    }
    //three names
    else if (firstname.length == 3){
        var fif = firstname[0];
        var fim = middlename[0];
        var fil = lastname[0];
        var sef = firstname[1];
        var sem = middlename[1];
        var sel = lastname[1];
        var thf = firstname[2];
        var thm = middlename[2];
        var thl = lastname[2];
        
        if (fim.value != "" && sem.value == "" && thm.value == ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". and " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
    }
    //more than three names
    else {
        var f = firstname[0];
        var m = middlename[0];
        var l = lastname[0];
        
        if(m.value == ""){
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + " <i>et al.</i>";
            
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + "." + " <i>et al.</i>";
        }
    }
    
    
//    for (var i = 0; i < firstname.length; i++){
//        var a = firstname[i];
//        var b = middlename[i];
//        var c = lastname[i];
//        ref = ref + c.value.charAt(0).toUpperCase() + c.value.slice(1) + ", " + a.value.charAt(0).toUpperCase() + ". " + b.value.charAt(0).toUpperCase() + "., ";
//    } 
    
    
    //### Year of publication
    
    if (yearonlineconf != "") {
        ref = ref + "(" + yearonlineconf + ") ";
    }
    else if (yearonlineconf == "") {
        ref = ref;
    }

    
    // title article
    if (titlepaperonlineconf != "") {
        ref = ref + "'" + titlepaperonlineconf + "', ";
    }
    else if (titlepaperonlineconf != "") {
        ref = ref;
    }
    
   // title confernece
    if (titleonlineconf != "") {
        ref = ref + "<i>" + titleonlineconf + "</i>, ";
    }
    else if (titleonlineconf != "") {
        ref = ref;
    }
    
    //locarion
        if (locationonlineconf != "") {
        ref = ref + locationonlineconf + ", ";
    }
        else if (locationonlineconf == "") {
        ref = ref;
    }
        
    //day
        if (dayonlineconf != "") {
        ref = ref  + dayonlineconf + " ";
    }
        else if (dayonlineconf == "") {
        ref = ref;
    }
    
    //month
        if (monthonlineconf != "") {
        ref = ref  + monthonlineconf + ". ";
    }
        else if (monthonlineconf == "") {
        ref = ref;
    }
    
    //page reference
        if (pagerefonlineconf != "") {
        ref = ref + " pp. " + pagerefonlineconf + ". ";
    }
        else if (pagerefonlineconf == "") {
        ref = ref;
    }
    
    //doi/url
    if (doionlineconf != "") {
        ref = ref + "Available at: <a href=" + doionlineconf + "</a>" + doionlineconf + ".";
    }
    else if (doionlineconf == "") {
        ref = ref;
    }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}

function copyElementText(id) {
    var copyref = document.getElementById('havardoutput').innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = copyref;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    
    document.getElementById("copyref").innerText = 'Copied';
    document.getElementById("copyref").style.backgroundColor = 'gray';
    document.getElementById("copyref").style.borderColor = 'gray';
}