////// show printed books

function showDiv(select) {
    if (select.value == 1) {
        document.getElementById('printedbooks').style.display = "block";
        document.getElementById('multi').style.display = "none";
         document.getElementById('ebook').style.display = "none";
        document.getElementById('anthology').style.display = "none";
        document.getElementById('translated').style.display = "none";
        document.getElementById('chapteredited').style.display = "none";
        }
    else if (select.value == 2) {
        document.getElementById('printedbooks').style.display = "none";
        document.getElementById('multi').style.display = "block";
         document.getElementById('ebook').style.display = "none";
        document.getElementById('anthology').style.display = "none";
        document.getElementById('translated').style.display = "none";
        document.getElementById('chapteredited').style.display = "none";
        }
    else if (select.value == 3) {
        document.getElementById('printedbooks').style.display = "none";
        document.getElementById('multi').style.display = "none";
         document.getElementById('ebook').style.display = "block";
        document.getElementById('anthology').style.display = "none";
        document.getElementById('translated').style.display = "none";
        document.getElementById('chapteredited').style.display = "none";
        }
    else if (select.value == 4) {
        document.getElementById('printedbooks').style.display = "none";
        document.getElementById('multi').style.display = "none";
         document.getElementById('ebook').style.display = "none";
        document.getElementById('anthology').style.display = "block";
        document.getElementById('translated').style.display = "none";
        document.getElementById('chapteredited').style.display = "none";
        }
    else if (select.value == 5) {
        document.getElementById('printedbooks').style.display = "none";
        document.getElementById('multi').style.display = "none";
         document.getElementById('ebook').style.display = "none";
        document.getElementById('anthology').style.display = "none";
        document.getElementById('translated').style.display = "block";
        document.getElementById('chapteredited').style.display = "none";
        }
    else if (select.value == 6) {
        document.getElementById('printedbooks').style.display = "none";
        document.getElementById('multi').style.display = "none";
         document.getElementById('ebook').style.display = "none";
        document.getElementById('anthology').style.display = "none";
        document.getElementById('translated').style.display = "none";
        document.getElementById('chapteredited').style.display = "block";
        }
    else{
        document.getElementById('printedbooks').style.display = "none";
        document.getElementById('multi').style.display = "none";
         document.getElementById('ebook').style.display = "none";
        document.getElementById('anthology').style.display = "none";
        document.getElementById('translated').style.display = "none";
        document.getElementById('chapteredited').style.display = "none";
        }
}





// add and remove printed books authours name

var inputNamesprinted = document.getElementById('authorprinted');
var addNameprinted = document.getElementById('newRowprinted');
var removeNameprinted = document.getElementById('removeRowprinted');

addNameprinted.onclick = function(){
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
    firstName.setAttribute('name', 'firstprinted[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'first');
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
    middleName.setAttribute('name', 'middleprinted[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middle');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastprinted[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'last');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorprinted.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorprinted.appendChild(firstName);
    authorprinted.appendChild(middleName);
    authorprinted.appendChild(lastName);
    
}

removeNameprinted.onclick = function(){
    var input_tagsprinted = authorprinted.getElementsByTagName('input');
    if (input_tagsprinted.length > 2) {
        authorprinted.removeChild(input_tagsprinted[(input_tagsprinted.length)-1])
    }
    if (input_tagsprinted.length > 2) {
        authorprinted.removeChild(input_tagsprinted[(input_tagsprinted.length)-1])
    }
    if (input_tagsprinted.length > 2) {
        authorprinted.removeChild(input_tagsprinted[(input_tagsprinted.length)-1])
    }
}

// add and remove multi authours name

var inputNamesmulti = document.getElementById('authormulti');
var addNamemulti = document.getElementById('newRowmulti');
var removeNamemulti = document.getElementById('removeRowmulti');

addNamemulti.onclick = function(){
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
    firstName.setAttribute('name', 'firstreprint[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'first');
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
    middleName.setAttribute('name', 'middlereprint[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middle');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastreprint[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'last');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authormulti.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authormulti.appendChild(firstName);
    authormulti.appendChild(middleName);
    authormulti.appendChild(lastName);
    
}

removeNamemulti.onclick = function(){
    var input_tagsmulti = authormulti.getElementsByTagName('input');
    if (input_tagsmulti.length > 2) {
        authormulti.removeChild(input_tagsmulti[(input_tagsmulti.length)-1])
    }
    if (input_tagsmulti.length > 2) {
        authormulti.removeChild(input_tagsmulti[(input_tagsmulti.length)-1])
    }
    if (input_tagsmulti.length > 2) {
        authormulti.removeChild(input_tagsmulti[(input_tagsmulti.length)-1])
    }
}

// add and remove ebook authours name

var inputNamesebook = document.getElementById('authorebook');
var addNameebook = document.getElementById('newRowebook');
var removeNameebook = document.getElementById('removeRowebook');

addNameebook.onclick = function(){
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
    firstName.setAttribute('name', 'firstebook[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'first');
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
    middleName.setAttribute('name', 'middleebook[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middle');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastebook[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'last');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorebook.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorebook.appendChild(firstName);
    authorebook.appendChild(middleName);
    authorebook.appendChild(lastName);
    
}

removeNameebook.onclick = function(){
    var input_tagsebook = authorebook.getElementsByTagName('input');
    if (input_tagsebook.length > 2) {
        authorebook.removeChild(input_tagsebook[(input_tagsebook.length)-1])
    }
    if (input_tagsebook.length > 2) {
        authorebook.removeChild(input_tagsebook[(input_tagsebook.length)-1])
    }
    if (input_tagsebook.length > 2) {
        authorebook.removeChild(input_tagsebook[(input_tagsebook.length)-1])
    }
}

// add and remove anthology authours name

var inputNamesanthology = document.getElementById('authoranthology');
var addNameanthology = document.getElementById('newRowanthology');
var removeNameanthology = document.getElementById('removeRowanthology');

addNameanthology.onclick = function(){
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
    firstName.setAttribute('name', 'firstaudio[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'first');
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
    middleName.setAttribute('name', 'middleaudio[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middle');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastaudio[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'last');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authoranthology.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authoranthology.appendChild(firstName);
    authoranthology.appendChild(middleName);
    authoranthology.appendChild(lastName);
    
}

removeNameanthology.onclick = function(){
    var input_tagsanthology = authoranthology.getElementsByTagName('input');
    if (input_tagsanthology.length > 2) {
        authoranthology.removeChild(input_tagsanthology[(input_tagsanthology.length)-1])
    }
    if (input_tagsanthology.length > 2) {
        authoranthology.removeChild(input_tagsanthology[(input_tagsanthology.length)-1])
    }
    if (input_tagsanthology.length > 2) {
        authoranthology.removeChild(input_tagsanthology[(input_tagsanthology.length)-1])
    }
}

// add and remove translated authours name

var inputNamestranslated = document.getElementById('authortranslated');
var addNametranslated = document.getElementById('newRowtranslated');
var removeNametranslated = document.getElementById('removeRowtranslated');

addNametranslated.onclick = function(){
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
    firstName.setAttribute('name', 'firstancient[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'first');
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
    middleName.setAttribute('name', 'middleancient[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middle');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastancient[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'last');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authortranslated.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authortranslated.appendChild(firstName);
    authortranslated.appendChild(middleName);
    authortranslated.appendChild(lastName);
    
}

removeNametranslated.onclick = function(){
    var input_tagstranslated = authortranslated.getElementsByTagName('input');
    if (input_tagstranslated.length > 2) {
        authortranslated.removeChild(input_tagstranslated[(input_tagstranslated.length)-1])
    }
    if (input_tagstranslated.length > 2) {
        authortranslated.removeChild(input_tagstranslated[(input_tagstranslated.length)-1])
    }
    if (input_tagstranslated.length > 2) {
        authortranslated.removeChild(input_tagstranslated[(input_tagstranslated.length)-1])
    }
}


// add and remove authorchapter authours name

var inputNameschapter = document.getElementById('authorchapter');
var addNamechapter = document.getElementById('newRowchapter');
var removeNamechapter = document.getElementById('removeRowchapter');

addNamechapter.onclick = function(){
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
    firstName.setAttribute('name', 'firstchapter[]');
    firstName.setAttribute('class', 'form-control');
    firstName.setAttribute('id', 'first');
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
    middleName.setAttribute('name', 'middlechapter[]');
    middleName.setAttribute('class', 'form-control');
    middleName.setAttribute('id', 'middle');
    middleName.setAttribute('placeholder', 'Middle Name');
    middleName.setAttribute('type', 'text');
    middleName.setAttribute('autocomplete', 'off');
    
    
    var lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('style', 'width:31.25%;margin:0px 12px 15px 12px');
    lastName.setAttribute('name', 'lastchapter[]');
    lastName.setAttribute('class', 'form-control');
    lastName.setAttribute('id', 'last');
    lastName.setAttribute('placeholder', 'Last Name');
    lastName.setAttribute('autocomplete', 'off');
        
    
    
    authorchapter.appendChild(row);
//    author.appendChild(column);
//    author.appendChild(mb);
    authorchapter.appendChild(firstName);
    authorchapter.appendChild(middleName);
    authorchapter.appendChild(lastName);
    
}

removeNamechapter.onclick = function(){
    var input_tagschapter = authorchapter.getElementsByTagName('input');
    if (input_tagschapter.length > 2) {
        authorchapter.removeChild(input_tagschapter[(input_tagschapter.length)-1])
    }
    if (input_tagschapter.length > 2) {
        authorchapter.removeChild(input_tagschapter[(input_tagschapter.length)-1])
    }
    if (input_tagschapter.length > 2) {
        authorchapter.removeChild(input_tagschapter[(input_tagschapter.length)-1])
    }
}


// show result


var ref = "";

function harvardrefprinted() {
    var firstnameprinted = document.getElementsByName('firstprinted[]');
    var middlenameprinted = document.getElementsByName('middleprinted[]');
    var lastnameprinted = document.getElementsByName('lastprinted[]');
    var yearprinted = document.getElementById('yearprinted').value;
    var titleprinted = document.getElementById('titleprinted').value;
    var editionprinted = document.getElementById('editionprinted').value;
    var placeofpublicationprinted = document.getElementById('placeofpublicationprinted').value;
    var publisherprinted = document.getElementById('publisherprinted').value;
    
    //the authors name
    
    //one name
    
    if (firstnameprinted.length == 1){
        var fprinted = firstnameprinted[0];
        var mprinted = middlenameprinted[0];
        var lprinted = lastnameprinted[0];
        if (mprinted.value == ""){
            ref = ref + lprinted.value.charAt(0).toUpperCase() + lprinted.value.slice(1) + ", " + fprinted.value.charAt(0).toUpperCase() + ". ";
        }
        else {
            ref = ref + lprinted.value.charAt(0).toUpperCase() + lprinted.value.slice(1) + ", " + fprinted.value.charAt(0).toUpperCase() + ". " + mprinted.value.charAt(0).toUpperCase() + ".";
        }
    }
    //two names
    else if (firstnameprinted.length == 2){
        var fifprinted = firstnameprinted[0];
        var fimprinted = middlenameprinted[0];
        var filprinted = lastnameprinted[0];
        var sefprintedprinted = firstnameprinted[1];
        var semprinted = middlenameprinted[1];
        var selprinted = lastnameprinted[1];
        
        if (fimprinted.value != "" && semprinted.value == ""){
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". " + fimprinted.value.charAt(0).toUpperCase() + ". & " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprintedprinted.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fimprinted.value == "" && semprinted.value != ""){
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". & " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". " + semprinted.value.charAt(0).toUpperCase() ;
        }
            
        else if (fimprinted.value == "" && semprinted.value == "") {
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". & " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprintedprinted.value.charAt(0).toUpperCase() + ". ";
                 }
        else {
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". " + fimprinted.value.charAt(0).toUpperCase() + ". & " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". " + semprinted.value.charAt(0).toUpperCase() + ". " ;
        }
        
        
        
    }
    //three names
    else if (firstnameprinted.length == 3){
        var fifprinted = firstnameprinted[0];
        var fimprinted = middlenameprinted[0];
        var filprinted = lastnameprinted[0];
        var sefprinted = firstnameprinted[1];
        var semprinted = middlenameprinted[1];
        var selprinted = lastnameprinted[1];
        var thfprinted = firstnameprinted[2];
        var thmprinted = middlenameprinted[2];
        var thlprinted = lastnameprinted[2];
        
        if (fimprinted.value != "" && semprinted.value == "" && thmprinted.value == ""){
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". " + fimprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fimprinted.value == "" && semprinted.value != "" && thmprinted.value == "") {
           ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". " + semprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". " ; 
        }
        else if (fimprinted.value == "" && semprinted.value == "" && thmprinted.value != "") {
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". " + thmprinted.value.charAt(0).toUpperCase() + ". " ;
        }
        
        else if (fimprinted.value != "" && semprinted.value != "" && thmprinted.value == "") {
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". " + fimprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". " + semprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". ";
        }
        else if (fimprintedprinted.value != "" && semprinted.value == "" && thmprinted.value != "") {
            ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". " + fimprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase()  + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". " + thmprinted.value.charAt(0).toUpperCase() + ". " ;
        }
        else if (fimprinted.value == "" && semprinted.value != "" && thmprinted.value != "") {
           ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". " + semprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". " + thmprinted.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        else if (fimprinted.value == "" && semprinted.value == "" && thmprinted.value == "") {
           ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". " ; 
        }
        
        
        else {
        ref = ref + filprinted.value.charAt(0).toUpperCase() + filprinted.value.slice(1) + ", " + fifprinted.value.charAt(0).toUpperCase() + ". " + fimprinted.value.charAt(0).toUpperCase() + "., " + selprinted.value.charAt(0).toUpperCase() + selprinted.value.slice(1) + ", " + sefprinted.value.charAt(0).toUpperCase() + ". " + semprintedprinted.value.charAt(0).toUpperCase() + ". & " + thlprinted.value.charAt(0).toUpperCase() + thlprinted.value.slice(1) + ", " + thfprinted.value.charAt(0).toUpperCase() + ". " + thmprinted.value.charAt(0).toUpperCase() + ". " ;
        }
    }
    //more than three names
    else {
        var fprinted = firstnameprinted[0];
        var mprinted = middlenameprinted[0];
        var lprinted = lastnameprinted[0];
        
        if(mprinted.value == ""){
            ref = ref + lprinted.value.charAt(0).toUpperCase() + lprinted.value.slice(1) + ", " + fprinted.value.charAt(0).toUpperCase() + ". " + " <i>et al.</i>";
            
        }
        else {
            ref = ref + lprinted.value.charAt(0).toUpperCase() + lprinted.value.slice(1) + ", " + fprinted.value.charAt(0).toUpperCase() + ". " + mprinted.value.charAt(0).toUpperCase() + "." + " <i>et al.</i>";
        }
    }
    
    
//    for (var i = 0; i < firstname.length; i++){
//        var a = firstname[i];
//        var b = middlename[i];
//        var c = lastname[i];
//        ref = ref + c.value.charAt(0).toUpperCase() + c.value.slice(1) + ", " + a.value.charAt(0).toUpperCase() + ". " + b.value.charAt(0).toUpperCase() + "., ";
//    } 
    
    
    //### Year of publication
    
    if (yearprinted != "") {
        ref = ref + "(" + yearprinted + ") ";
    }
    else if (yearprinted == "") {
        ref = ref;
    }

    
    // title
    if (titleprinted != "") {
        ref = ref + "<i>" + titleprinted + "</i>. ";
    }
    else if (titleprinted != "") {
        ref = ref;
    }
    
    //edition
    if (editionprinted != "") {
        if (editionprinted == "1") {
            ref = ref + "(" + editionprinted + "st ed.). ";
        }
        else if (editionprinted == "2") {
            ref = ref + "(" + editionprinted + "nd ed.). ";
        }
        else if (editionprinted == "3") {
            ref = ref + "(" + editionprinted + "rd ed.). ";
        }
        else {
            ref = ref + "(" + editionprinted + "th ed.). ";
        }
    }
        else if (editionprinted == "") {
        ref = ref;
    }
        
    
    //place of publication/publisher
        if (placeofpublicationprinted != "" && publisherprinted != ""){
            ref = ref + placeofpublicationprinted + ": " + publisherprinted + ". ";
        }
        else if (placeofpublicationprinted == "" && publisherprinted == ""){
            ref = ref;
        }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
    
}



////// multi volume
function harvardrefmulti() {
    var firstname = document.getElementsByName('firstmulti[]');
    var middlename = document.getElementsByName('middlemulti[]');
    var lastname = document.getElementsByName('lastmulti[]');
    var yearmulti = document.getElementById('yearmulti').value;
    var titlemulti = document.getElementById('titlemulti').value;
    var volumesmulti = document.getElementById('volumesmulti').value;
    var placeofpublicationmulti = document.getElementById('placeofpublicationmulti').value;
    var publishermulti = document.getElementById('publishermulti').value;
    
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
    
    
    //### Year of publication
    
    if (yearmulti != "") {
        ref = ref + "(" + yearmulti + "). ";
    }
    else if (yearmulti == "") {
        ref = ref;
    }

    
    // titlemulti
    if (titlemulti != "") {
        ref = ref + "<i>" + titlemulti + "</i>. ";
    }
    else if (titlemulti != "") {
        ref = ref;
    }
    
    
        if (volumesmulti != "") {
            ref = ref + "(" + volumesmulti + " vols). ";
        }
        else if (volumesmulti == "") {
            ref = ref;
        }
        
    
    //place of publication/publisher
        if (placeofpublicationmulti != "" && publishermulti != ""){
            ref = ref + placeofpublicationmulti + ": " + publishermulti + ".";
        }
        else if (placeofpublicationmulti == "" && publishermulti == ""){
            ref = ref;
        }
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}

//ebooks

function harvardrefebook() {
    var firstname = document.getElementsByName('firstebook[]');
    var middlename = document.getElementsByName('middleebook[]');
    var lastname = document.getElementsByName('lastebook[]');
    var yearebook = document.getElementById('yearebook').value;
    var titleebook = document.getElementById('titleebook').value;
    var doiebook = document.getElementById('doiebook').value;
    
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
    
    if (yearebook != "") {
        ref = ref + "(" + yearebook + "). ";
    }
    else if (yearebook == "") {
        ref = ref;
    }

    
    // title
    if (titleebook != "") {
        ref = ref + "<i>" + titleebook + "</i>. ";
    }
    else if (titleebook != "") {
        ref = ref;
    }
    
    
        if (doiebook != "") {
            ref = ref + "Retrieved from <a href=" + doiebook + "</a>" + doiebook + ".";
        }
        else if (doiebook == "") {
            ref = ref;
        }
    
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}


//anthology
function harvardrefanthology() {
    var firstname = document.getElementsByName('firstanthology[]');
    var middlename = document.getElementsByName('middleanthology[]');
    var lastname = document.getElementsByName('lastanthology[]');
    var yearanthology = document.getElementById('yearanthology').value;
    var titleanthology = document.getElementById('titleanthology').value;
    var placeofpublicationanthology = document.getElementById('placeofpublicationanthology').value;
    var publisheranthology = document.getElementById('publisheranthology').value;
    var urlanthology = document.getElementById('urlanthology').value;
    
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
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + " <i>et al.</i> ";
            
        }
        else {
            ref = ref + l.value.charAt(0).toUpperCase() + l.value.slice(1) + ", " + f.value.charAt(0).toUpperCase() + ". " + m.value.charAt(0).toUpperCase() + "." + " <i>et al.</i> ";
        }
    }
    
    
//    for (var i = 0; i < firstname.length; i++){
//        var a = firstname[i];
//        var b = middlename[i];
//        var c = lastname[i];
//        ref = ref + c.value.charAt(0).toUpperCase() + c.value.slice(1) + ", " + a.value.charAt(0).toUpperCase() + ". " + b.value.charAt(0).toUpperCase() + "., ";
//    } 
    
    
    ref = ref + "(Ed.). "
    
    
    //### Year of publication
    
    if (yearanthology != "") {
        ref = ref + "(" + yearanthology + "). ";
    }
    else if (yearanthology == "") {
        ref = ref;
    }

    
    // title
    if (titleanthology != "") {
        ref = ref + "<i>" + titleanthology + "</i>. ";
    }
    else if (titleanthology != "") {
        ref = ref;
    }
    
    //place of publication/publisher
        if (placeofpublicationanthology != "" && publisheranthology != ""){
            ref = ref + placeofpublicationanthology + ": " + publisheranthology + ".";
        }
        else if (placeofpublicationanthology == "" && publisheranthology == ""){
            ref = ref;
        }
    
        //urlaudio
        if (urlanthology != "") {
        ref = ref + "Retrieved from: <a href=" + urlanthology + "</a>. " + urlanthology + ". ";
    }
        else if (urlanthology == "") {
        ref = ref;
    }
    
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}




function harvardreftranslated() {
    var firstname = document.getElementsByName('firsttranslated[]');
    var middlename = document.getElementsByName('middletranslated[]');
    var lastname = document.getElementsByName('lasttranslated[]');
    var yeartranslated = document.getElementById('yeartranslated').value;
    var titletranslated = document.getElementById('titletranslated').value;
    var nametranslated = document.getElementById('nametranslated').value;
    var placeofpublicationtranslated = document.getElementById('placeofpublicationtranslated').value;
    var publishertranslated = document.getElementById('publishertranslated').value;
    
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
    
    if (yeartranslated != "") {
        ref = ref + "(" + yeartranslated + "). ";
    }
    else if (yeartranslated == "") {
        ref = ref;
    }

    
    // title
    if (titletranslated != "") {
        ref = ref + "<i>" + titletranslated + "</i>. ";
    }
    else if (titletranslated != "") {
        ref = ref;
    }
    
    //nametranslated
        if (nametranslated != "") {
        ref = ref + "(" + nametranslated + ", Trans.). ";
    }
        else if (nametranslated == "") {
        ref = ref;
    }
    
        
        
    
    //place of publication/publisher
        if (placeofpublicationtranslated != "" && publishertranslated != ""){
            ref = ref + placeofpublicationtranslated + ": " + publishertranslated + ".";
        }
        else if (placeofpublicationtranslated == "" && publishertranslated == ""){
            ref = ref;
        }
    
    
    document.getElementById("havardoutput").innerHTML = ref;
    document.getElementById('displayref').style.display = "block";
}


function harvardrefchapter() {
    var firstname = document.getElementsByName('firstchapter[]');
    var middlename = document.getElementsByName('middlechapter[]');
    var lastname = document.getElementsByName('lastchapter[]');
    var yearchapter = document.getElementById('yearchapter').value;
    var titlechapter = document.getElementById('titlechapter').value;
    var editorchapter = document.getElementById('editorchapter').value;
    var titlebook = document.getElementById('titlebook').value;
    var pagenumberchapter = document.getElementById('pagenumberchapter').value;
    var placeofpublicationchapter = document.getElementById('placeofpublicationchapter').value;
    var publisherchapter = document.getElementById('publisherchapter').value;
    
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
    
    if (yearchapter != "") {
        ref = ref + "(" + yearchapter + "). ";
    }
    else if (yearchapter == "") {
        ref = ref;
    }
    
    // titlechapter
    if (titlechapter != "") {
        ref = ref + titlechapter + ". In ";
    }
    else if (titlechapter != "") {
        ref = ref;
    }
    
    // editorchapter
    if (editorchapter != "") {
        ref = ref + editorchapter + " (Ed). ";
    }
    else if (editorchapter != "") {
        ref = ref;
    }

    
    // titlebook
    if (titlebook != "") {
        ref = ref + "<i>" + titlebook + "</i>. ";
    }
    else if (titlebook != "") {
        ref = ref;
    }
    
    
        if (pagenumberchapter != "") {
            ref = ref + "(pp. " + pagenumberchapter + ").";
        }
        else if (pagenumberchapter == "") {
            ref = ref;
        }
        
    
    //place of publication/publisher
        if (placeofpublicationchapter != "" && publisherchapter != ""){
            ref = ref + placeofpublicationchapter + ": " + publisherchapter + ".";
        }
        else if (placeofpublicationchapter == "" && publisherchapter == ""){
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






