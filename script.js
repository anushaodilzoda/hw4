var q = ["What is 1 + 1?<br /><br />", "What is 2 + 2?<br /><br />", "What is 3 + 3?<br /><br />", "What is 4 + 4?<br /><br />", "What is 5 + 5?<br /><br />", "What is 6 + 6?<br /><br />", "What is 7 + 7?<br /><br />", "What is 5 + 1?<br /><br />", "What is 8 + 8?<br /><br />", "What is 9 + 9?<br /><br />"];
        var a1 = ["<button class=buttons002 onclick=q1c()>2</button>",
                  "<button class=buttons002 onclick=q2c()>4</button>",
                  "<button class=buttons002 onclick=q3c()>6</button>",
                  "<button class=buttons002 onclick=q4i()>13</button>",
                  "<button class=buttons002 onclick=q5i()>6</button>",
                  "<button class=buttons002 onclick=q6i()>4</button>",
                  "<button class=buttons002 onclick=q7i()>8</button>",
                  "<button class=buttons002 onclick=q8i()>13</button>",
                  "<button class=buttons002 onclick=q9i()>8</button>",
                  "<button class=buttons002 onclick=q10i()>14</button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()>5</button>",
                  "<button class=buttons002 onclick=q2i()>7</button>",
                  "<button class=buttons002 onclick=q3i()>2</button>",
                  "<button class=buttons002 onclick=q4c()>8</button>",
                  "<button class=buttons002 onclick=q5c()>10</button>",
                  "<button class=buttons002 onclick=q6c()>12</button>",
                  "<button class=buttons002 onclick=q7i()>17</button>",
                  "<button class=buttons002 onclick=q8i()>5</button>",
                  "<button class=buttons002 onclick=q9i()>17</button>",
                  "<button class=buttons002 onclick=q10i()>12</button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()>7</button>",
                  "<button class=buttons002 onclick=q2i()>6</button>",
                  "<button class=buttons002 onclick=q3i()>9</button>",
                  "<button class=buttons002 onclick=q4i()>9</button>",
                  "<button class=buttons002 onclick=q5i()>7</button>",
                  "<button class=buttons002 onclick=q6i()>9</button>",
                  "<button class=buttons002 onclick=q7c()>14</button>",
                  "<button class=buttons002 onclick=q8c()>6</button>",
                  "<button class=buttons002 onclick=q9i()>2</button>",
                  "<button class=buttons002 onclick=q10i()>9</button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()>8</button>",
                  "<button class=buttons002 onclick=q2i()>2</button>",
                  "<button class=buttons002 onclick=q3i()>14</button>",
                  "<button class=buttons002 onclick=q4i()>1</button>",
                  "<button class=buttons002 onclick=q5i()>2</button>",
                  "<button class=buttons002 onclick=q6i()>8</button>",
                  "<button class=buttons002 onclick=q7i()>2</button>",
                  "<button class=buttons002 onclick=q8i()>9</button>",
                  "<button class=buttons002 onclick=q9c()>16</button>",
                  "<button class=buttons002 onclick=q10c()>18</button>"];

        var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
        var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

        var n = 0;
        n++;
        var s = 0;
        s++;
        

        function begin001() {
             c = 40;
            disappear001.innerHTML = "";
            message001.innerHTML = "";
            question001.innerHTML = q[0];
            option001.innerHTML = a1[0];
            option002.innerHTML = a2[0];
            option003.innerHTML = a3[0];
            option004.innerHTML = a4[0];
            number001.innerHTML = n++;
        }

        function q1c() {
            answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
            score001.innerHTML = s++;
        }

        function q1i() {
            answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
        }

        function new002() {
            question001.innerHTML = q[1];
            option001.innerHTML = a1[1];
            option002.innerHTML = a2[1];
            option003.innerHTML = a3[1];
            option004.innerHTML = a4[1];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q2c() {
            answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
            score001.innerHTML = s++;
        }

        function q2i() {
            answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
        }

        function new003() {
            question001.innerHTML = q[2];
            option001.innerHTML = a1[2];
            option002.innerHTML = a2[2];
            option003.innerHTML = a3[2];
            option004.innerHTML = a4[2];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q3c() {
            answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
            score001.innerHTML = s++;
        }

        function q3i() {
            answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
        }

        function new004() {
            question001.innerHTML = q[3];
            option001.innerHTML = a1[3];
            option002.innerHTML = a2[3];
            option003.innerHTML = a3[3];
            option004.innerHTML = a4[3];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q4c() {
            answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
            score001.innerHTML = s++;
        }

        function q4i() {
            answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
        }

        function new005() {
            question001.innerHTML = q[4];
            option001.innerHTML = a1[4];
            option002.innerHTML = a2[4];
            option003.innerHTML = a3[4];
            option004.innerHTML = a4[4];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q5c() {
            answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
            score001.innerHTML = s++;
        }

        function q5i() {
            answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
        }

        function new006() {
            question001.innerHTML = q[5];
            option001.innerHTML = a1[5];
            option002.innerHTML = a2[5];
            option003.innerHTML = a3[5];
            option004.innerHTML = a4[5];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q6c() {
            answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
            score001.innerHTML = s++;
        }

        function q6i() {
            answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
        }

        function new007() {
            question001.innerHTML = q[6];
            option001.innerHTML = a1[6];
            option002.innerHTML = a2[6];
            option003.innerHTML = a3[6];
            option004.innerHTML = a4[6];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q7c() {
            answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
            score001.innerHTML = s++;
        }

        function q7i() {
            answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
        }

        function new008() {
            question001.innerHTML = q[7];
            option001.innerHTML = a1[7];
            option002.innerHTML = a2[7];
            option003.innerHTML = a3[7];
            option004.innerHTML = a4[7];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q8c() {
            answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
            score001.innerHTML = s++;
        }

        function q8i() {
            answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
        }

        function new009() {
            question001.innerHTML = q[8];
            option001.innerHTML = a1[8];
            option002.innerHTML = a2[8];
            option003.innerHTML = a3[8];
            option004.innerHTML = a4[8];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q9c() {
            answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
            score001.innerHTML = s++;
        }

        function q9i() {
            answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
        }

        function new010() {
            question001.innerHTML = q[9];
            option001.innerHTML = a1[9];
            option002.innerHTML = a2[9];
            option003.innerHTML = a3[9];
            option004.innerHTML = a4[9];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q10c() {
            answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
            score001.innerHTML = s++;
        }

        function q10i() {
            answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
        }

        function end001() {
            message001.innerHTML = "End of Quiz.";
            question001.innerHTML = "";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
            answer001.innerHTML = "";
        }
        function timer001() {
            c = c - 1;
            if (c < 40)
            time001.innerHTML = c;
        }
        if (c < 1){
            window.clearInterval(update);
        }
        update = setInterval("timer001()", 1000);

        function repeat001() {
            location.reload();
        }
        