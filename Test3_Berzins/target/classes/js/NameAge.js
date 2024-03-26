$(document).ready(function(){
    var humans = [];

    $("#saveButton").click(function(){
        var name = $("#nameInput").val();
        var age = parseInt($("#ageInput").val());
        if(name && age) {
            humans.push({name: name, age: age});
            alert("Human saved successfully.");
            $("#nameInput, #ageInput").val("");
        } else {
            alert("Please fill in both name and age fields.");
        }
    });

    $("#showAllButton").click(function(){
        $("#registeredList").empty();
        humans.forEach(function(human){
            $("#registeredList").append("<li>" + human.name + ", " + human.age + " years old</li>");
        });
    });

    $("#sortByNameButton").click(function(){
        humans.sort(function(a, b){
            return a.name.localeCompare(b.name);
        });
        $("#showAllButton").click();
    });

    $("#sortByAgeButton").click(function(){
        humans.sort(function(a, b){
            return a.age - b.age;
        });
        $("#showAllButton").click();
    });

    $("#filterSelect").change(function(){
        var filterValue = $(this).val();
        $("#registeredList").empty();
        if(filterValue === "18plus") {
            humans.filter(function(human){
                return human.age >= 18;
            }).forEach(function(filteredHuman){
                $("#registeredList").append("<li>" + filteredHuman.name + ", " + filteredHuman.age + " years old</li>");
            });
        } else if(filterValue === "under18") {
            humans.filter(function(human){
                return human.age < 18;
            }).forEach(function(filteredHuman){
                $("#registeredList").append("<li>" + filteredHuman.name + ", " + filteredHuman.age + " years old</li>");
            });
        } else {
            $("#showAllButton").click();
        }
    });
});