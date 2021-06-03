var names_of_people = [];

//Function Submit Below
function submit()
{
var GuestName = document.getElementById("guest_name").value;
names_of_people.push(GuestName);

console.log(GuestName);

console.log(names_of_people);
var length_of_name = names_of_people.length;
console.log(length_of_name);
document.getElementById("display_name").innerHTML= names_of_people.toString();
}

//Function Show Below
function show()
{
    var k= names_of_people.join ("<br>");
    console.log(names_of_people);
    document.getElementById("show names").innerHTML = k.toString();
    document.getElementById("sort button").style.display = "block";
}


//Function Sort Below

function sort()
{
    names_of_people.sort();
    var k= names_of_people.join ("<br>");
    console.log(names_of_people);

    document.getElementById("sorted_names").innerHTML = k.toString();
}


//Function Search Below

function Search()
{
    var search = document.getElementById("find name").value;
    var found = 0;
    var j;

    for (j = 0; j < names_of_people.length; j++)
    {
        if (search ==names_of_people[j]){
            found=found + 1;
        }
    }
    document.getElementById("searched output").innerHTML="name found " + found + " time/s";
    console.log("found name " + found + " time/s");
}

