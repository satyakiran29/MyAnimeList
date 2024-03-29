//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app = angular.module("formvalid", ["ui.bootstrap", "ui.utils"]);
app.controller("validationCtrl", function ($scope) {
  $scope.data = [
   ["Zom100", " Dark, Action ", "0.0/5.0","02/12","Watching","Series"],


["Boruto", "Action, Adventure,", "0.0/5.0","128/296","Watching","Series"],

["Sword Art Online S01", "Action, Adventure, Sci-fi,", "0.0/5.0","19/25","On Hold","Series"], 

["My Senpai is Annoying ", " Funny, ", "4.5/5.0","12/12","Completed","Series"],
["My Star S01", " Dark, ", "4.5/5.0","11/11","Completed","Series"],

["Darling in the franxx S01", " Sci-fi, ", "4.8/5.0","24/24","Completed","Series"],


["Demon Slayer S03", "Action, Adventure, ", "4.0/5.0","11/11","Completed","Series"],

 

  
["Suzume no Tojimari", "Action, Adventure, Sci-fi,", "3.9/5.0","01/01","Completed","Movie"], 
  
["Erased", "Mystery, Psychological, Supernatural,", "4.9/5.0","12/12","Completed","Series"],

     ["Attack on Titan S01", "Action, Adventure,", "0.0/5.0","Null","Planing to Watch","Series"], 
     ["Naruto: Shippuuden", "Action, Adventure, Comedy", "4.0/5.0","500/500","Completed","Series"], 
     ["Naruto", "Action, Adventure, Comedy", "4.5/5.0","220/220","Completed","Series"], 
     ["Another", "Horror", "4.8/5.0","12/12","Completed","Series"], 
 ["Parasyte -The Maxim", "Horror", "4.0/5.0","24/24","Completed","Series"], 
     ["Bubble", "Scifi", "4.1/5.0","01/01","Completed","Movie"], 
     ["Chainsaw Man", "Action, Fantasy", "4.0/5.0","12/12","Completed","Series"], 
     ["Death Note", "Psychogical,Supernatural ", "4.0/5.0","37/37","Completed","Series"], 
["Spy Family S01 Part1", "Action, Comedy", "4.8/5.0","12/12","Completed","Series"], 

["Spy Family S01 Part2", "Action, Comedy", "4.8/5.0","13/13","Completed","Series"], 

["My Dress Up Darling S01", "Romance", "4.9/5.0","12/12","Completed","Series"], 

["Komi Can't Communicate S01", "Romance", "4.6/5.0","12/12","Completed","Series"], 

["Komi Can't Communicate S02", "Romance", "4.1/5.0","12/12","Completed","Series"], 

["My Stepmom's Daughter Is My Ex S01", "Romance", "4.1/5.0","12/12","Completed","Series"], 


["Lookism S01", "Action,Drama, Supernatural", "4.1/5.0","12/12","Completed","Series"], 

     ["Hello World", "Scifi,Romance", "4.1/5.0","01/01","Completed","Movie"], 
["Weathering with You", "Scifi,Romance", "4.1/5.0","01/01","Completed","Movie"], 
     ["Jujutsu Kaisen", "Action, Fantasy", "4.7/5.0","24/24","Completed","Series"],         
     ["A Silent Voice", "Romance", "4.1/5.0","01/01","Completed","Movie"], 
     ["A Whisker Away", "Romance", "5.0/5.0","01/01","Completed","Movie"], 
   ["Jujutsu Kaisen 0", "Action, Fantasy", "4.1/5.0","01/01","Completed","Movie"], 
        ["Your Name", "Romance", "4.4/5.0","01/01","Completed","Movie"], 

  ["I Want eat Your pancreas", "Romance", "4.4/5.0","01/01","Completed","Movie"], 
    ["Demon Slayer S01", "Action, Fantasy", "4.7/5.0","26/26","Completed","Series"], 
     ["Demon Slayer S02", "Action, Fantasy", "4.7/5.0","11/11","Completed","Series"], 
      ["Demon Slayer Movie:Mugan Train", "Action, Fantasy", "5.0/5.0","01/01","Completed","Movie"],
    
      ];

  $scope.dataTableOpt = {
    //custom datatable options
    // or load data through ajax call also
    aLengthMenu: [
      [10, 25, 50, 75, -1],
      [10, 25, 50, 75, "All"]
    ]
  };
});
