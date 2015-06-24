'use strict';

var Solution = function () {

};

Solution.prototype = {

  MILE_TO_YARDS : 8 * 220,
  FURLONG_TO_YARDS : 220,
  FRACTIONS : [ 3/4, 1/2, 1/4, 1/8 ],

  format : function (distanceInYards) {
    this._distanceInYards = distanceInYards;
    this._remainingYards = distanceInYards;

    var miles = this.subtractMiles();
    var furlongs = this.subtractFurlongs();
    var yards = this._remainingYards;

    return this.formatUnits(miles, furlongs, yards);
  },

  subtractMiles : function () {
    // If the distance is less than a mile, then it should be displayed as furlongs
    if (this._distanceInYards < this.MILE_TO_YARDS) {
      return 0;
    }

    var miles = this.subtractUnit(this.MILE_TO_YARDS);
    miles += this.subtractFraction(this.MILE_TO_YARDS);
    return miles;
  },
  subtractFurlongs : function () {
    // If the distance is less than 3 furlongs, then it should be displayed as yards
    if (this._distanceInYards < (this.FURLONG_TO_YARDS * 3)) {
      return 0;
    }
    // If the distance is more than a mile, then it should be displayed as miles and fractions of mile
    if (this._distanceInYards >= this.MILE_TO_YARDS) {
      return 0;
    }

    var furlongs = this.subtractUnit(this.FURLONG_TO_YARDS);
    furlongs += this.subtractFraction(this.FURLONG_TO_YARDS);
    return furlongs;
  },

  subtractUnit : function (unitInYards) {
    var units = Math.floor(this._remainingYards / unitInYards);
    this._remainingYards -=  units * unitInYards;
    return units;
  },
  subtractFraction : function (unitInYards) {
    for (var i = 0; i < this.FRACTIONS.length; i++) {
      var fraction = this.FRACTIONS[i];
      if (this._remainingYards === unitInYards * fraction) {
        this._remainingYards -= fraction * unitInYards;
        return fraction;
      }
    }
    return 0;
  },

  formatUnits : function (miles, furlongs, yards) {
    var parts = [];
    if (miles) {
      parts.push(this.formatMiles(miles));
    }
    if (furlongs) {
      parts.push(this.formatFurlongs(furlongs));
    }
    if (yards) {
      parts.push(this.formatYards(yards));
    }
    return parts.join(' ');
  },
  formatMiles : function (miles) {
    var fraction = miles % 1;
    var fractionText = '';
    switch(fraction) {
      case 3/4:
        fractionText = ' 3/4';
        break;
      case 1/2:
        fractionText = ' 1/2';
        break;
      case 1/4:
        fractionText = ' 1/4';
        break;
      case 1/8:
        fractionText = ' 1/8';
        break;
    }
    return parseInt(miles)
      + fractionText + ' '
      + this.pluralize('mile', miles);
  },
  formatFurlongs : function (furlongs) {
    return furlongs + ' ' + this.pluralize('furlong', furlongs);
  },
  formatYards : function (yards) {
    return yards + ' ' + this.pluralize('yard', yards);
  },
  pluralize : function (unit, value) {
    if (value >= 2) {
      return unit + 's';
    }
    return unit;
  }

};

// module.exports = Solution;

var solution = new Solution();

console.log(solution.format(1), '1 yard');
console.log(solution.format(220), '220 yards');
console.log(solution.format(659), '659 yards');
console.log(solution.format((220 * 3) - 1), '659 yards');
console.log(solution.format((220 * 3)), '3 furlongs');
console.log(solution.format((220 * 3) + 40), '3 furlongs 40 yards');
console.log(solution.format(1320), '6 furlongs');
console.log(solution.format(1430), '6.5 furlongs');
console.log(solution.format(1340), '6 furlongs 20 yards');
console.log(solution.format(1760), '1 mile');
console.log(solution.format(1980), '1 1/8 mile');
console.log(solution.format(2090), '1 mile 330 yards');
console.log(solution.format(1760 + (1760 * (3/4))), '1 3/4 mile');
console.log(solution.format(1760 + (1760 * (1/2))), '1 1/2 mile');
console.log(solution.format(1760 + (1760 * (1/4))), '1 1/4 mile');
console.log(solution.format(1760 + (1760 * (1/8))), '1 1/8 mile');
console.log(solution.format((220 * 4) + (220 * (3/4))), '4.75 furlongs');
console.log(solution.format((220 * 4) + (220 * (1/2))), '4.5 furlongs');
console.log(solution.format((220 * 4) + (220 * (1/4))), '4.25 furlongs');
console.log(solution.format(1760 + (1760 * (1/2)) + 1), '??? 1 1/2 mile 1 yard');
console.log(solution.format((220 * 4) + (220 * (1/2)) + 1), '??? 4.5 furlongs 1 yard');