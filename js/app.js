'use strict';

var FriendlyPairs = {
    outputDiv: document.querySelector('code'),

    sumOfDivisors: function( number ) {
        var sum = 1;

        for ( var i = 2; i <= number / 2; i++ ) {
            if ( number % i == 0 ) {
                sum += i;
            }
        }

        return sum;
    },

    findFriendlyPairs: function( maxNumber ) {
        var pairs = 0;
        var k;

        for ( var i = 2; i <= maxNumber; i++ ) {
            k = this.sumOfDivisors(i);
            if ( k >= 2 && k <= maxNumber ) {
                if (this.sumOfDivisors(k) == i && this.sumOfDivisors(k) != this.sumOfDivisors(i)) {
                    pairs++;
                    // console.log("i: ", i, " k: ", k);
                    this.outputDiv.innerHTML = this.outputDiv.innerHTML + "<br/> Number 1: " + i  + ", Number 2: " + k;
                }

            }
        }

        this.outputDiv.innerHTML = this.outputDiv.innerHTML + "<hr/>" + "Number of friendly pairs: " + pairs / 2;

    },

    init: function(){
        var that = this;

        document.querySelector('#findPairs').onclick = function() {
            var userInputNumber = document.querySelector('input[name="maxNumber"]').value;
            that.findFriendlyPairs( userInputNumber );
        }
    }
};

FriendlyPairs.init();