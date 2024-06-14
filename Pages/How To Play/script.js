// WASD anym
const a1 = document.getElementById("a1").children;
var p = a1[0];
var time = 2000;
var curr = 0;
function focusBtn(Btn) {
    curr += 1;
    resetFocusBtn(curr);
    if (Btn.innerHTML == "W") {
        p.innerHTML = `<span style="color:var(--C4)">W - Move Forward</span><br>A - Move left<br>S - Move Backward<br>D - Move Right`
    }
    else if (Btn.innerHTML == "A") {
        p.innerHTML = `W - Move Forward<br><span style="color:var(--C4)">A - Move left</span><br>S - Move Backward<br>D - Move Right`
    }
    else if (Btn.innerHTML == "S") {
        p.innerHTML = `W - Move Forward<br>A - Move left<br><span style="color:var(--C4)">S - Move Backward</span><br>D - Move Right`
    }
    else if (Btn.innerHTML == "D") {
        p.innerHTML = `W - Move Forward<br>A - Move left<br>S - Move Backward<br><span style="color:var(--C4)">D - Move Right</span>`
    }
}
function resetFocusBtn(n) {
    setTimeout(function res() {
        if (n == curr) {
            p.innerHTML = `W - Move Forward<br>A - Move left<br>S - Move Backward<br>D - Move Right`
        }
    }, time);
}