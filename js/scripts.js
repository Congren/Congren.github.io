$(document).ready(function(){ 
    $( "select" ).change(function() {
        if ($("#selectView").val() == "sample") {
            profArea.css('display','none')
            discArea.css('display','none')
            contentArea.css('display','none')
        } 
        if ($("#selectView").val() == "professional") {
            profArea.css('display','block')
            discArea.css('display','none')
            contentArea.css('display','none')
        }
        if ($("#selectView").val() == "disciplinary") {
            profArea.css('display','none')
            discArea.css('display','block')
            contentArea.css('display','none')
        }
        if ($("#selectView").val() == "content") {
            profArea.css('display','none')
            discArea.css('display','none')
            contentArea.css('display','block')
        }
    })
     $("body").on('click', "#CLB1", function(){
        profArea.css('display','block')
        discArea.css('display','none')
        contentArea.css('display','none')
        $(window).scrollTop($('#prof-area').offset().top)
    });
    $("body").on('click', "#CLB2", function(){
        profArea.css('display','none')
        discArea.css('display','block')
        contentArea.css('display','none')
        $(window).scrollTop($('#disc-area').offset().top)
    });           
    $("body").on('click', "#CLB3", function(){
        profArea.css('display','none')
        discArea.css('display','none')
        contentArea.css('display','block')
        $(window).scrollTop($('#content-area').offset().top)
    });
    $("body").on('click', "#profcore1", function(){
        $("#profcoredrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore2", function(){
        $("#profcoredrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore3", function(){
        $("#profcoredrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore4", function(){
        $("#profcoredrop4").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore5", function(){
        $("#profcoredrop5").slideToggle(100,"linear");
    });
    
    
    // onclick professional core mobile table
    $("body").on('click', "#profcore1m", function(){
        $("#profcoredrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore2m", function(){
        $("#profcoredrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore3m", function(){
        $("#profcoredrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore4m", function(){
        $("#profcoredrop4m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profcore5m", function(){
        $("#profcoredrop5m").slideToggle(100,"linear");
    });

    
    // onclick professional elective desktop table
    $("body").on('click', "#profelec1", function(){
        $("#profelecdrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#profelec2", function(){
        $("#profelecdrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#profelec3", function(){
        $("#profelecdrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#profelec4", function(){
        $("#profelecdrop4").slideToggle(100,"linear");
    });
    
    
    // onclick professional elective mobile table
    $("body").on('click', "#profelec1m", function(){
        $("#profelecdrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profelec2m", function(){
        $("#profelecdrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profelec3m", function(){
        $("#profelecdrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#profelec4m", function(){
        $("#profelecdrop4m").slideToggle(100,"linear");
    });


    // onclick disciplinary professional desktop table
    $("body").on('click', "#disprof1", function(){
        $("#disprofdrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#disprof2", function(){
        $("#disprofdrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#disprof3", function(){
        $("#disprofdrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#disprof4", function(){
        $("#disprofdrop4").slideToggle(100,"linear");
    });
    
    
    // onclick disciplinary professional mobile table
    $("body").on('click', "#disprof1m", function(){
        $("#disprofdrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disprof2m", function(){
        $("#disprofdrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disprof3m", function(){
        $("#disprofdrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disprof4m", function(){
        $("#disprofdrop4m").slideToggle(100,"linear");
    });
        
    
    // onclick disciplinary quantitative desktop table
    $("body").on('click', "#disquan1", function(){
        $("#disquandrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#disquan2", function(){
        $("#disquandrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#disquan3", function(){
        $("#disquandrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#disquan4", function(){
        $("#disquandrop4").slideToggle(100,"linear");
    });
    
    
    // onclick disciplinary quantitative mobile table
    $("body").on('click', "#disquan1m", function(){
        $("#disquandrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disquan2m", function(){
        $("#disquandrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disquan3m", function(){
        $("#disquandrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disquan4m", function(){
        $("#disquandrop4m").slideToggle(100,"linear");
    });
    
    
    // onclick disciplinary organizations desktop table
    $("body").on('click', "#disorg1", function(){
        $("#disorgdrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#disorg2", function(){
        $("#disorgdrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#disorg3", function(){
        $("#disorgdrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#disorg4", function(){
        $("#disorgdrop4").slideToggle(100,"linear");
    });
    
    
    // onclick disciplinary organizations mobile table
    $("body").on('click', "#disorg1m", function(){
        $("#disorgdrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disorg2m", function(){
        $("#disorgdrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disorg3m", function(){
        $("#disorgdrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#disorg4m", function(){
        $("#disorgdrop4m").slideToggle(100,"linear");
    });

    
    // onclick content area business desktop table
    $("body").on('click', "#conbus1", function(){
        $("#conbusdrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#conbus2", function(){
        $("#conbusdrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#conbus3", function(){
        $("#conbusdrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#conbus4", function(){
        $("#conbusdrop4").slideToggle(100,"linear");
    });
    
    
    // onclick content area business mobile table
    $("body").on('click', "#conbus1m", function(){
        $("#conbusdrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#conbus2m", function(){
        $("#conbusdrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#conbus3m", function(){
        $("#conbusdrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#conbus4m", function(){
        $("#conbusdrop4m").slideToggle(100,"linear");
    });
    
    
    // onclick content area computing desktop table
    $("body").on('click', "#concomput1", function(){
        $("#concomputdrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#concomput2", function(){
        $("#concomputdrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#concomput3", function(){
        $("#concomputdrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#concomput4", function(){
        $("#concomputdrop4").slideToggle(100,"linear");
    });
    
    
    // onclick content area computing mobile table
    $("body").on('click', "#concomput1m", function(){
        $("#concomputdrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#concomput2m", function(){
        $("#concomputdrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#concomput3m", function(){
        $("#concomputdrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#concomput4m", function(){
        $("#concomputdrop4m").slideToggle(100,"linear");
    });
    
    
    // onclick content area social desktop table
    $("body").on('click', "#consoc1", function(){
        $("#consocdrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#consoc2", function(){
        $("#consocdrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#consoc3", function(){
        $("#consocdrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#consoc4", function(){
        $("#consocdrop4").slideToggle(100,"linear");
    });
    
    
    // onclick content area social mobile table
    $("body").on('click', "#consoc1m", function(){
        $("#consocdrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#consoc2m", function(){
        $("#consocdrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#consoc3m", function(){
        $("#consocdrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#consoc4m", function(){
        $("#consocdrop4m").slideToggle(100,"linear");
    });
    
    
    // onclick content area quantitative desktop table
    $("body").on('click', "#conquan1", function(){
        $("#conquandrop1").slideToggle(100,"linear");
    });
    $("body").on('click', "#conquan2", function(){
        $("#conquandrop2").slideToggle(100,"linear");
    });
    $("body").on('click', "#conquan3", function(){
        $("#conquandrop3").slideToggle(100,"linear");
    });
    $("body").on('click', "#conquan4",function(){
        $("#conquandrop4").slideToggle(100,"linear");
    });
    
    
    // onclick content area quantitative mobile table
    $("body").on('click', "#conquan1m", function(){
        $("#conquandrop1m").slideToggle(100,"linear");
    });
    $("body").on('click', "#conquan2m", function(){
        $("#conquandrop2m").slideToggle(100,"linear");
    });
    $("body").on('click', "#conquan3m", function(){
        $("#conquandrop3m").slideToggle(100,"linear");
    });
    $("body").on('click', "#conquan4m",function(){
        $("#conquandrop4m").slideToggle(100,"linear");
    });
    $('.blocking').css('height','100%').height($('.headerimg').height());
    var fixmeTop = 700;       // get initial position of the element

//    $(window).scroll(function() {           
//        var currentScroll = $(window).scrollTop();// assign scroll event listener
//        $("body").on('click', "#disciplinaryBtn", function(){
//            if (currentScroll >= 700) { 
//                $(window).scrollTop($('#disc-area').offset().top)
//            }
//        });
//        $("body").on('click', "#contentBtn", function(){
//            if (currentScroll >= 700) { 
//                $(window).scrollTop($('#content-area').offset().top)
//            }
//        });
//        $("body").on('click', "#professionalBtn", function(){
//            if (currentScroll >= 700) { 
//                $(window).scrollTop($('#prof-area').offset().top)
//            }
//        });
//         // get current position
//
//        if (currentScroll >= fixmeTop) {     
//            $('#contentBtn').css({                      // scroll to that element or below it
//                marginLeft: "66.65%"
//            });
//            $('#disciplinaryBtn').css({                      // scroll to that element or below it
//                marginLeft: "33.325%"
//            });// apply position: fixed if you
//            $('#professionalBtn, #contentBtn, #disciplinaryBtn').css({                      // scroll to that element or below it
//                position: 'fixed',
//                top: '0',
//            });
//            
//            $('#professionalBtn, #contentBtn, #disciplinaryBtn').css({                      // scroll to that element or below it
//                position: 'fixed',
//                top: '0',
//            });
//            $("#info").css({
//                paddingTop:"50px"
//            })
////            
//        } else {                                   // apply position: static
//            $('#professionalBtn, #contentBtn, #disciplinaryBtn').css({                      // if you scroll above it
//                marginLeft:"0",
//                float:"left",
//                width:"33.32%",// if you scroll above it
//                position: 'static'
//            });
//            $("#info").css({
//                paddingTop:"0"
//            })
//        }
//
//    });
});

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("professionalElec");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("tr");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[1];
        y = rows[i + 1].getElementsByTagName("td")[1];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
        }
        }
        if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        }
    }
}

//function filterTable() {
//    var input, filter, table, tr, td, i;
//    input = document.getElementById("myInput");
//    filter = input.value.toUpperCase();
//    table = document.getElementById("professionalElec");
//    tr = table.getElementsByTagName("tr");
//    for (i = 0; i < tr.length; i++) {
//        td = tr[i].getElementsByTagName("td")[3];
//        if (td) {
//        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//            tr[i].style.display = "";
//        } else {
//            tr[i].style.display = "none";
//        }
//        }       
//    }
//}

function filterProf() {
    var input, filter, tables, tr, td, j, i;
    input = document.getElementById("profInput");
    filter = input.value.toUpperCase();
    tables = document.getElementsByTagName("table");
    for (j = 0; j < tables.length; j++) {
        tr = tables[j].getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }       
        }
    }
}
function filterCont() {
    var input, filter, tables, tr, td, j, i;
    input = document.getElementById("contInput");
    filter = input.value.toUpperCase();
    tables = document.getElementsByTagName("table");
    for (j = 0; j < tables.length; j++) {
        tr = tables[j].getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }       
        }
    }
}
function filterDisc() {
    var input, filter, tables, tr, td, j, i;
    input = document.getElementById("discInput");
    filter = input.value.toUpperCase();
    tables = document.getElementsByTagName("table");
    for (j = 0; j < tables.length; j++) {
        tr = tables[j].getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }       
        }
    }
}

