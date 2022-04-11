////// show printed books

function showDiv(select) {
    if (select.value == 1) {
        document.getElementById('journal').style.display = "block";
        document.getElementById('systematic').style.display = "none";
        document.getElementById('magazine').style.display = "none";
        }
    else if (select.value == 2) {
        document.getElementById('journal').style.display = "none";
        document.getElementById('systematic').style.display = "block";
        document.getElementById('magazine').style.display = "none";
        }
    else if (select.value == 3) {
        document.getElementById('journal').style.display = "none";
        document.getElementById('systematic').style.display = "none";
        document.getElementById('magazine').style.display = "block";
        }
    else if (select.value == 4) {
        document.getElementById('journal').style.display = "none";
        document.getElementById('systematic').style.display = "none";
        document.getElementById('magazine').style.display = "none";
        }
    else{
        document.getElementById('journal').style.display = "none";
        document.getElementById('systematic').style.display = "none";
        document.getElementById('magazine').style.display = "none";
        }
}




// add and remove printed books authours name

var inputNamesjournal = document.getElementById('authorjournal');
var addNamejournal = document.getElementById('newRowjournal');
var removeNamejournal = document.getElementById('removeRowjournal');

addNamejournal.onclick = function(){
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
    firstName.setAttribute('name', 'firstjournal[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstjournal');
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
    middleName.setAttribute('name', 'middlejournal[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middlejournal');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastjournal[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastjournal');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorjournal.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorjournal.appendChild(firstName);
    authorjournal.appendChild(middleName);
    authorjournal.appendChild(lastName);
    
}

removeNamejournal.onclick = function(){
    var input_tagsjournal = authorjournal.getElementsByTagName('input');
    if (input_tagsjournal.length > 2) {
        authorjournal.removeChild(input_tagsjournal[(input_tagsjournal.length)-1])
    }
    if (input_tagsjournal.length > 2) {
        authorjournal.removeChild(input_tagsjournal[(input_tagsjournal.length)-1])
    }
    if (input_tagsjournal.length > 2) {
        authorjournal.removeChild(input_tagsjournal[(input_tagsjournal.length)-1])
    }
}

// add and remove systematic authours name

var inputNamessystematic = document.getElementById('authorsystematic');
var addNamesystematic = document.getElementById('newRowsystematic');
var removeNamesystematic = document.getElementById('removeRowsystematic');

addNamesystematic.onclick = function(){
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
    firstName.setAttribute('name', 'firstsystematic[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstsystematic');
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
    middleName.setAttribute('name', 'middlesystematic[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middlesystematic');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastsystematic[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastsystematic');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorsystematic.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorsystematic.appendChild(firstName);
    authorsystematic.appendChild(middleName);
    authorsystematic.appendChild(lastName);
    
}

removeNamesystematic.onclick = function(){
    var input_tagssystematic = authorsystematic.getElementsByTagName('input');
    if (input_tagssystematic.length > 2) {
        authorsystematic.removeChild(input_tagssystematic[(input_tagssystematic.length)-1])
    }
    if (input_tagssystematic.length > 2) {
        authorsystematic.removeChild(input_tagssystematic[(input_tagssystematic.length)-1])
    }
    if (input_tagssystematic.length > 2) {
        authorsystematic.removeChild(input_tagssystematic[(input_tagssystematic.length)-1])
    }
}

// add and remove magazine authours name

var inputNamesmagazine = document.getElementById('authormagazine');
var addNamemagazine = document.getElementById('newRowmagazine');
var removeNamemagazine = document.getElementById('removeRowmagazine');

addNamemagazine.onclick = function(){
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
    firstName.setAttribute('name', 'firstmagazine[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'firstmagazine');
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
    middleName.setAttribute('name', 'middlemagazine[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middlemagazine');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastmagazine[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'lastmagazine');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authormagazine.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authormagazine.appendChild(firstName);
    authormagazine.appendChild(middleName);
    authormagazine.appendChild(lastName);
    
}

removeNamemagazine.onclick = function(){
    var input_tagsmagazine = authormagazine.getElementsByTagName('input');
    if (input_tagsmagazine.length > 2) {
        authormagazine.removeChild(input_tagsmagazine[(input_tagsmagazine.length)-1])
    }
    if (input_tagsmagazine.length > 2) {
        authormagazine.removeChild(input_tagsmagazine[(input_tagsmagazine.length)-1])
    }
    if (input_tagsmagazine.length > 2) {
        authormagazine.removeChild(input_tagsmagazine[(input_tagsmagazine.length)-1])
    }
}



// show result


var ref = "";

function harvardrefjournal() {
    var firstname = document.getElementsByName('firstjournal[]');
    var middlename = document.getElementsByName('middlejournal[]');
    var lastname = document.getElementsByName('lastjournal[]');
    var yearjournal = document.getElementById('yearjournal').value;
    var titlearticlejournal = document.getElementById('titlearticlejournal').value;
    var titlejournal = document.getElementById('titlejournal').value;
    var volumejournal = document.getElementById('volumejournal').value;
    var issuejournal = document.getElementById('issuejournal').value;
    var pagerefjournal = document.getElementById('pagerefjournal').value;
    var doijournal = document.getElementById('doijournal').value;
    
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
    
    if (yearjournal != "") {
        ref = ref + "(" + yearjournal + "). ";
    }
    else if (yearjournal == "") {
        ref = ref;
    }

    
    // title article
    if (titlearticlejournal != "") {
        ref = ref + titlearticlejournal + ". ";
    }
    else if (titlearticlejournal != "") {
        ref = ref;
    }
    
    // title journal
    if (titlejournal != "") {
        ref = ref + "<i>" + titlejournal + "</i>,";
    }
    else if (titlejournal != "") {
        ref = ref;
    }

        //volume
        if (volumejournal != "") {
        ref = ref + " <i>" + volumejournal + "</i>";
    }
        else if (volumejournal == "") {
        ref = ref;
    }
        
    //Supplement
        if (issuejournal != "") {
        ref = ref + "(" + issuejournal + "),";
    }
        else if (issuejournal == "") {
        ref = ref;
    }
    
    //page reference
        if (pagerefjournal != "") {
        ref = ref + " pp " + pagerefjournal + ". ";
    }
        else if (pagerefjournal == "") {
        ref = ref;
    }
    
    if (doijournal != "") {
        ref = ref + "Retrived from: <a href=" + doijournal + "</a>" + doijournal + ".";
    }
    else if (doijournal == "") {
        ref = ref;
    }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}



////// Systematic review
function harvardrefsystematic() {
    var firstname = document.getElementsByName('firstsystematic[]');
    var middlename = document.getElementsByName('middlesystematic[]');
    var lastname = document.getElementsByName('lastsystematic[]');
    var yearsystematic = document.getElementById('yearsystematic').value;
    var titlesystematic = document.getElementById('titlesystematic').value;
    var databasesystematic = document.getElementById('databasesystematic').value;
    var issuenumsystematic = document.getElementById('issuenumsystematic').value;
    var yearreview = document.getElementById('yearreview').value;
    var doisystematic = document.getElementById('doisystematic').value;
    
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
    
    if (yearsystematic != "") {
        ref = ref + "(" + yearsystematic + ") ";
    }
    else if (yearsystematic == "") {
        ref = ref;
    }

    
    // title article
    if (titlesystematic != "") {
        ref = ref + titlesystematic + ". ";
    }
    else if (titlesystematic != "") {
        ref = ref;
    }
    
    // Database NAme
    if (databasesystematic != "") {
        ref = ref + "<i>" + databasesystematic + "</i>, ";
    }
    else if (databasesystematic != "") {
        ref = ref;
    }
    
    //year review
    if (yearreview != "") {
        ref = ref + "<i>" + yearreview + "</i>";
    }
    else if (yearreview == "") {
        ref = ref;
    }
    
    //isse Number
    if (issuenumsystematic != "") {
        ref = ref + "(" + issuenumsystematic + "), ";
    }
    else if (issuenumsystematic == "") {
        ref = ref;
    }
    
    
    //doi/url
    if (doisystematic != "") {
        ref = ref + "Retrieved from: <a href=" + doisystematic + "</a>" + doisystematic + ".";
    }
    else if (doisystematic == "") {
        ref = ref;
    }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}

//magazine

function harvardrefmagazine() {
    var firstname = document.getElementsByName('firstmagazine[]');
    var middlename = document.getElementsByName('middlemagazine[]');
    var lastname = document.getElementsByName('lastmagazine[]');
    var yearmagazine = document.getElementById('yearmagazine').value;
    var monthmagazine = document.getElementById('monthmagazine').value;
    var datemagazine = document.getElementById('datemagazine').value;
    var titlearticlemagazine = document.getElementById('titlearticlemagazine').value;
    var titlemagazine = document.getElementById('titlemagazine').value;
    var Volumemagazine = document.getElementById('Volumemagazine').value;
    var issuemagazine = document.getElementById('issuemagazine').value;
    var pagerefmagazine = document.getElementById('pagerefmagazine').value;
    var doimagazine = document.getElementById('doimagazine').value;
    
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
    
    if (yearmagazine != "") {
        ref = ref + "(" + yearmagazine + ", ";
    }
    else if (yearmagazine == "") {
        ref = ref;
    }
    
    if (monthmagazine != "") {
        ref = ref + monthmagazine + " ";
    }
    else if (monthmagazine == "") {
        ref = ref;
    }
    
    if (datemagazine != "") {
        ref = ref + datemagazine + "). ";
    }
    else if (datemagazine == "") {
        ref = ref;
    }

    
    // title article
    if (titlearticlemagazine != "") {
        ref = ref + titlearticlemagazine + ". ";
    }
    else if (titlearticlemagazine != "") {
        ref = ref;
    }
    
   // title magazine
    if (titlemagazine != "") {
        ref = ref + "<i>" + titlemagazine + "</i>. ";
    }
    else if (titlemagazine != "") {
        ref = ref;
    }
    
    //volume
        if (Volumemagazine != "") {
        ref = ref + "<i>" + Volumemagazine + "</i>";
    }
        else if (Volumemagazine == "") {
        ref = ref;
    }
        
    //Supplement
        if (issuemagazine != "") {
        ref = ref + "(" + issuemagazine + "),";
    }
        else if (issuemagazine == "") {
        ref = ref;
    }
    
    //page reference
        if (pagerefmagazine != "") {
        ref = ref + " pp " + pagerefmagazine + ". ";
    }
        else if (pagerefmagazine == "") {
        ref = ref;
    }
        
    //doi//url
    if (doimagazine != "") {
        ref = ref + "Retrieved from: <a href=" + doimagazine + "</a>" + doimagazine + ".";
    }
    else if (doimagazine == "") {
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

