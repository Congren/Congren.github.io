$(document).ready(function(){
    $("body").on('click', "#CLB1", function(){
        profArea.css('display','block')
        discArea.css('display','none')
        contentArea.css('display','none')
        $(window).scrollTop($('#prof-area').offset().top-20)
    });
    $("body").on('click', "#CLB2", function(){
        profArea.css('display','none')
        discArea.css('display','block')
        contentArea.css('display','none')
        $(window).scrollTop($('#disc-area').offset().top-20)
    });           
    $("body").on('click', "#CLB3", function(){
        profArea.css('display','none')
        discArea.css('display','none')
        contentArea.css('display','block')
        $(window).scrollTop($('#content-area').offset().top-20)
    });
    $("body").on('click', "#profcore1", function(){
        $("#profcoredrop1").toggle();
    });
    $("body").on('click', "#profcore2", function(){
        $("#profcoredrop2").toggle();
    });
    $("body").on('click', "#profcore3", function(){
        $("#profcoredrop3").toggle();
    });
    $("body").on('click', "#profcore4", function(){
        $("#profcoredrop4").toggle();
    });
    $("body").on('click', "#profcore5", function(){
        $("#profcoredrop5").toggle();
    });

    $("body").on('click', "#profelec1", function(){
        $("#profelecdrop1").toggle();
    });
    $("body").on('click', "#profelec2", function(){
        $("#profelecdrop2").toggle();
    });
    $("body").on('click', "#profelec3", function(){
        $("#profelecdrop3").toggle();
    });
    $("body").on('click', "#profelec4", function(){
        $("#profelecdrop4").toggle();
    });

    $("body").on('click', "#disprof1", function(){
        $("#disprofdrop1").toggle();
    });
    $("body").on('click', "#disprof2", function(){
        $("#disprofdrop2").toggle();
    });
    $("body").on('click', "#disprof3", function(){
        $("#disprofdrop4").toggle();
    });
    $("body").on('click', "#disprof4", function(){
        $("#disprofdrop4").toggle();
    });
    $("body").on('click', "#disquan1", function(){
        $("#disquandrop1").toggle();
    });
    $("body").on('click', "#disquan2", function(){
        $("#disquandrop2").toggle();
    });
    $("body").on('click', "#disquan3", function(){
        $("#disquandrop3").toggle();
    });
    $("body").on('click', "#disquan4", function(){
        $("#disquandrop4").toggle();
    });
    $("body").on('click', "#disorg1", function(){
        $("#disorgdrop1").toggle();
    });
    $("body").on('click', "#disorg2", function(){
        $("#disorgdrop2").toggle();
    });
    $("body").on('click', "#disorg3", function(){
        $("#disorgdrop3").toggle();
    });
    $("body").on('click', "#disorg4", function(){
        $("#disorgdrop4").toggle();
    });

    $("body").on('click', "#conbus1", function(){
        $("#conbusdrop1").toggle();
    });
    $("body").on('click', "#conbus2", function(){
        $("#conbusdrop2").toggle();
    });
    $("body").on('click', "#conbus3", function(){
        $("#conbusdrop3").toggle();
    });
    $("body").on('click', "#conbus4", function(){
        $("#conbusdrop4").toggle();
    });
    $("body").on('click', "#concomput1", function(){
        $("#concomputdrop1").toggle();
    });
    $("body").on('click', "#concomput2", function(){
        $("#concomputdrop2").toggle();
    });
    $("body").on('click', "#concomput3", function(){
        $("#concomputdrop3").toggle();
    });
    $("body").on('click', "#concomput4", function(){
        $("#concomputdrop4").toggle();
    });
    $("body").on('click', "#consoc1", function(){
        $("#consocdrop1").toggle();
    });
    $("body").on('click', "#consoc2", function(){
        $("#consocdrop2").toggle();
    });
    $("body").on('click', "#consoc3", function(){
        $("#consocdrop3").toggle();
    });
    $("body").on('click', "#consoc4", function(){
        $("#consocdrop4").toggle();
    });
    $("body").on('click', "#conquan1", function(){
        $("#conquandrop1").toggle();
    });
    $("body").on('click', "#conquan2", function(){
        $("#conquandrop2").toggle();
    });
    $("body").on('click', "#conquan3", function(){
        $("#conquandrop3").toggle();
    });
    $("body").on('click', "#conquan4",function(){
        $("#conquandrop4").toggle();
    });
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

function filterTable() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("professionalElec");
    tr = table.getElementsByTagName("tr");
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

