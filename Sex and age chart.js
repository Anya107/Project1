
 <script src="https://d3js.org/d3.v3.min.js"></script>

            <svg width="400" height="300">

              <rect id="bar1" x="50" y="50" width="20" height="102" fill="steelblue"> </rect>
              <rect id="bar2" x="70" y="50" width="20" height="102" fill="red"> </rect>
              <rect id="bar3" x="95" y="50" width="20" height="102" fill="steelblue"> </rect>
              <rect id="bar4" x="115" y="50" width="20" height="102" fill="red"> </rect>
              <rect id="bar5" x="140" y="50" width="20" height="102" fill="steelblue"> </rect>
              <rect id="bar6" x="160" y="50" width="20" height="102" fill="red"> </rect>
              <rect id="bar7" x="185" y="50" width="20" height="102" fill="steelblue"> </rect>
              <rect id="bar8" x="205" y="50" width="20" height="102" fill="red"> </rect>
              <rect id="bar9" x="230" y="50" width="20" height="102" fill="steelblue"> </rect>
              <rect id="bar10" x="250" y="50" width="20" height="102" fill="red"> </rect>
              <rect id="bar11" x="275" y="50" width="20" height="102" fill="steelblue"> </rect>
              <rect id="bar12" x="295" y="50" width="20" height="102" fill="red"> </rect>

              <line x1="40" x2="350" y1="152" y2="152" stroke="black"> </line>
              <line x1="40" x2="40" y1="50" y2="152" stroke="black"> </line>

              <text x="50" y="170" style="font-size: 15px"> 0-10 </text>
              <text x="95" y="170" style="font-size: 15px"> 11-20 </text>
              <text x="140" y="170" style="font-size: 15px"> 21-40 </text>
              <text x="185" y="170" style="font-size: 15px"> 41-60 </text>
              <text x="230" y="170" style="font-size: 15px"> 61-80 </text>
              <text x="275" y="170" style="font-size: 15px"> 80+ </text>

<script>
              function myFunction () {
                console.log("sex and age");
              }

              var age = [ 65, 78, 29, 19, 34, 24, 22, 35, 46, 45, 88, 86];

              d3.select('svg').selectAll('rect').data(age).attr('height', function(d) {
                return d;
              })
              .attr('y', function(d) {
                return 102 - d + 50;
              })


              /*  var SexData = [
                      {AgeRange:'0-10', Sex:{Male:65, Female:78}},
                      {AgeRange:'11-20', Sex:{Male:29, Female:19}},
                      {AgeRange:'21-40', Sex:{Male:34, Female:24}},
                      {AgeRange:'41-60', Sex:{Male:22, Female:35}},
                      {AgeRange:'61-80', Sex:{Male:46, Female:45}},
                      {AgeRange:'80+', Sex:{Male:88, Female:86}},
            */

              </script>
