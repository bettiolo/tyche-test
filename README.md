# Test Description

In horse racing, race distances are measured in furlongs. A furlong is simply an eighth of a mile (220 yards). Distances
can be broken up into sixteenths of a mile—a half-furlong—and even yards as well. (For example, some races are contested
at 1 1/8 miles or a mile and seventy yards.) Around the world, distances can range from as short as two furlongs
(a quarter mile) to three, even four miles.

In our case, we have a feed provider that gives us the race distance always in yards, but we want to show them to the
visitor in miles, furlongs and yards according to the following rules:

If the distance is less than 3 furlongs, then it should be displayed as yards
(e.g. 400 yards)
If the distance is less than a mile, then it should be displayed as furlongs
(e.g. 3 furlongs 40 yards, 4 furlongs, 6.5 furlongs)
If the distance is more than a mile, then it should be displayed as miles and fractions of mile
(e.g. 1 mile, 1 1/8 mile, 1 1/2 mile, 1 mile 330 yards).

These fractions should be reduced using its gcd as seen in the examples.

# Notes

1 furlong = 1/8 mile = 0.125 miles = 220 yards
1/2 furlong = 1/16 mile = 0.0625 miles = 110 yards
1 1/8 miles = 1.125 miles = 1 mile and 70 yards ?
1 mile = 1760 yards
2 furlongs = 1/4 mile = 0.25 miles