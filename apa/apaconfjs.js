////// show printed books

function showDiv(select) {
    if (select.value == 1) {
        document.getElementById('fullconf').style.display = "block";
        document.getElementById('printconf').style.display = "none";
        document.getElementById('onlineconf').style.display = "none";
        }
    else if (select.value == 2) {
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('printconf').style.display = "block";
        document.getElementById('onlineconf').style.display = "none";
        }
    else if (select.value == 3) {
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('printconf').style.display = "none";
        document.getElementById('onlineconf').style.display = "block";
        }
    else{
        document.getElementById('fullconf').style.display = "none";
        document.getElementById('printconf').style.display = "none";
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

// add and remove Conference paper in print proceeding authours name

var inputNamesprintconf = document.getElementById('authorprintconf');
var addNameprintconf = document.getElementById('newRowprintconf');
var removeNameprintconf = document.getElementById('removeRowprintconf');

addNameprintconf.onclick = function(){
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
        
    
    
    authorprintconf.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorprintconf.appendChild(firstName);
    authorprintconf.appendChild(middleName);
    authorprintconf.appendChild(lastName);
    
}

removeNameprintconf.onclick = function(){
    var input_tagsprintconf = authorprintconf.getElementsByTagName('input');
    if (input_tagsprintconf.length > 2) {
        authorprintconf.removeChild(input_tagsprintconf[(input_tagsprintconf.length)-1])
    }
    if (input_tagsprintconf.length > 2) {
        authorprintconf.removeChild(input_tagsprintconf[(input_tagsprintconf.length)-1])
    }
    if (input_tagsprintconf.length > 2) {
        authorprintconf.removeChild(input_tagsprintconf[(input_tagsprintconf.length)-1])
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
    var datefullconf = document.getElementById('datefullconf').value;
    var placeofpublicationfullconf = document.getElementById('placeofpublicationfullconf').value;
    var publisherfullconf = document.getElementById('publisherfullconf').value;
    var doifullconf = document.getElementById('doifullconf').value;
    
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
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
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
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
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
        ref = ref + "(" + yearfullconf + "). ";
    }
    else if (yearfullconf == "") {
        ref = ref;
    }

    
    // title conference
    if (titlefullconf != "") {
        ref = ref + "<i>" + titlefullconf + "</i>, ";
    }
    else if (titlefullconf != "") {
        ref = ref;
    }

        //locationfullconf
        if (locationfullconf != "") {
        ref = ref + "<i>" + locationfullconf + "</i>, ";
    }
        else if (locationfullconf == "") {
        ref = ref;
    }
        
    //datefullconf
        if (datefullconf != "") {
        ref = ref + datefullconf + ". ";
    }
        else if (datefullconf == "") {
        ref = ref;
    }
    
    //place of publication/publisher
        if (placeofpublicationfullconf != "" && publisherfullconf != ""){
            ref = ref + placeofpublicationfullconf + ": " + publisherfullconf + ".";
        }
        else if (placeofpublicationfullconf == "" && publisherfullconf == ""){
            ref = ref;
        }
    
    //doi/url
    if (doifullconf != "") {
        ref = ref + " Retrieved from: <a href=" + doifullconf + "</a>" + doifullconf + ".";
    }
    else if (doifullconf == "") {
        ref = ref;
    }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}




//Conference paper in print proceeding

function harvardrefprintconf() {
    var firstname = document.getElementsByName('firstprintconf[]');
    var middlename = document.getElementsByName('middleprintconf[]');
    var lastname = document.getElementsByName('lastprintconf[]');
    var yearprintconf = document.getElementById('yearprintconf').value;
    var monthprintconf = document.getElementById('monthprintconf').value;
    var dateprintconf = document.getElementById('dateprintconf').value;
    var titlepaperprintconf = document.getElementById('titlepaperprintconf').value;
    var editorprintconf = document.getElementById('editorprintconf').value;
     var titleproceedprintconf = document.getElementById('titleproceedprintconf').value;
    var titleprintconf = document.getElementById('titleprintconf').value;
    var locationprintconf = document.getElementById('locationprintconf').value;
    var placeofpublicationprintconf = document.getElementById('placeofpublicationprintconf').value;
    var publisherprintconf = document.getElementById('publisherprintconf').value;
    var pagerefprintconf = document.getElementById('pagerefprintconf').value;
    
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
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
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
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
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
    
    if (yearprintconf != "") {
        ref = ref + "(" + yearprintconf + ", ";
    }
    else if (yearprintconf == "") {
        ref = ref;
    }
    
    if (monthprintconf != "") {
        ref = ref + monthprintconf + " ";
    }
    else if (monthprintconf == "") {
        ref = ref;
    }
    
    if (dateprintconf != "") {
        ref = ref + dateprintconf + "). ";
    }
    else if (dateprintconf == "") {
        ref = ref;
    }

    
    // title article
    if (titlepaperprintconf != "") {
        ref = ref + titlepaperprintconf + ". ";
    }
    else if (titlepaperprintconf != "") {
        ref = ref;
    }
    
    ref = ref + "In ";
    
    // deitor
    if (editorprintconf != "") {
        ref = ref + editorprintconf + ". ";
    }
    else if (editorprintconf != "") {
        ref = ref;
    }
    
   // title confernece
    if (titleproceedprintconf != "") {
        ref = ref + "<i>" + titleproceedprintconf + "</i>. ";
    }
    else if (titleproceedprintconf != "") {
        ref = ref;
    }
    
    ref = ref + "Paper presented at ";
    
    // titleprintconf
    if (titleprintconf != "") {
        ref = ref + titleprintconf + ", ";
    }
    else if (titleprintconf != "") {
        ref = ref;
    }
    
    //locarion
        if (locationprintconf != "") {
        ref = ref + " " + locationprintconf + ", ";
    }
        else if (locationprintconf == "") {
        ref = ref;
    }
    
    //page reference
        if (pagerefprintconf != "") {
        ref = ref + "pp. " + pagerefprintconf + ". ";
    }
        else if (pagerefprintconf == "") {
        ref = ref;
    }
    
    //place of publication/publisher
        if (placeofpublicationprintconf != "" && publisherprintconf != ""){
            ref = ref + placeofpublicationprintconf + ": " + publisherprintconf + ".";
        }
        else if (placeofpublicationprintconf == "" && publisherprintconf == ""){
            ref = ref;
        }
    
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}


//#Conference paper from the internet

function harvardrefonlineconf() {
    var firstname = document.getElementsByName('firstonlineconf[]');
    var middlename = document.getElementsByName('middleonlineconf[]');
    var lastname = document.getElementsByName('lastonlineconf[]');
    var yearonlineconf = document.getElementById('yearonlineconf').value;
    var titlepaperonlineconf = document.getElementById('titlepaperonlineconf').value;
    var titleonlineconf = document.getElementById('titleonlineconf').value;
    var locationonlineconf = document.getElementById('locationonlineconf').value;
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
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != ""){
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() ;
        }
            
        else if (fim.value == "" && sem.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + ". & " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". " ;
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
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value == "" && sem.value != "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fim.value == "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fim.value != "" && sem.value != "" && thm.value == "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fim.value != "" && sem.value == "" && thm.value != "") {
            ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase()  + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fim.value == "" && sem.value != "" && thm.value != "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fim.value == "" && sem.value == "" && thm.value == "") {
           ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + fil.value.charAt(0).toUpperCase() + fil.value.slice(1) + ", " + fif.value.charAt(0).toUpperCase() + ". " + fim.value.charAt(0).toUpperCase() + "., " + sel.value.charAt(0).toUpperCase() + sel.value.slice(1) + ", " + sef.value.charAt(0).toUpperCase() + ". " + sem.value.charAt(0).toUpperCase() + ". & " + thl.value.charAt(0).toUpperCase() + thl.value.slice(1) + ", " + thf.value.charAt(0).toUpperCase() + ". " + thm.value.charAt(0).toUpperCase() + ". " ;
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
        ref = ref + "(" + yearonlineconf + "). ";
    }
    else if (yearonlineconf == "") {
        ref = ref;
    }

    
    // title article
    if (titlepaperonlineconf != "") {
        ref = ref + "<i>" + titlepaperonlineconf + "</i>. ";
    }
    else if (titlepaperonlineconf != "") {
        ref = ref;
    }
    
    ref = ref + "Paper presented at ";
    
   // title confernece
    if (titleonlineconf != "") {
        ref = ref + titleonlineconf + ", ";
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
    
    //doi/url
    if (doionlineconf != "") {
        ref = ref + "Retrieved from: <a href=" + doionlineconf + "</a>" + doionlineconf + ".";
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