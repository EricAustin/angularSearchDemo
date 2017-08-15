var app = angular.module('searchDemoApp', []);

app.controller('characterController', function () {

    var self = this;

    self.characters = [
        {
            name: "Big Bird",
            color: "yellow",
            characteristic: "tall"
        },
        {
            name: "Barkley",
            color: "multi-colored",
            characteristic: "shaggy"
        },
        {
            name: "Bert",
            color: "yellow",
            characteristic: "grumpy"
        },
        {
            name: "Cookie Monster",
            color: "Blue",
            characteristic: "infatuated with cookies"
        },
        {
            name: "Count von count",
            color: "greyish purple",
            characteristic: "nocturnal"
        },
        {
            name: "Elmo",
            color: "red",
            characteristic: "playful"
        },
        {
            name: "Ernie",
            color: "yellow",
            characteristic: "annoying"
        },
        {
            name: "Guy Smiley",
            color: "orange",
            characteristic: "enthusiastic"
        },
        {
            name: "Kermit",
            color: "green",
            characteristic: "froggy"
        },
        {
            name: "Oscar",
            color: "green",
            characteristic: "grouchy"
        },
        {
            name: "Aloysius Snuffleupagus",
            color: "maroon",
            characteristic: "shy"
        },
        {
            name: "Telly",
            color: "fuschia",
            characteristic: "anxious"
        }

    ]

    self.newCharacter = {};

    self.createCharacter = function () {
        console.log(self.newCharacter);
        self.characters.push(angular.copy(self.newCharacter));
    };
});

