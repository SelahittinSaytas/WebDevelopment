    else function evenNumbers(num1, num2, num3){    
        var output1 = [];    
        for (var i = num1; i < num2; i += num3){    
            if (i % 2 == 0){       
                output1.push(i);
            }
        }
        document.getElementById("output1").innerText = output1;  
    }
    document.getElementById("even").style.display = "block";
    document.getElementById("start").innerText = Number(num1);
    document.getElementById("end").innerText = Number(num2);
    document.getElementById("step").innerText = Number(num3);
    document.getElementById("output1").style.display = "block";
    return output1
}