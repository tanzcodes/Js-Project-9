function calculateBill() {
    
    var name = document.getElementById("userName").value;
    var units = document.getElementById("units").value;
    var rate = 22;

    
    var charges = units * rate;
    var tax = charges * 0.15; // 15% Tax
    var total = charges + tax;

    
    document.getElementById("resName").innerText = name;
    document.getElementById("resUnits").innerText = units;
    document.getElementById("resCharges").innerText = charges.toFixed(2);
    document.getElementById("resTax").innerText = tax.toFixed(2);
    document.getElementById("resTotal").innerText = total.toFixed(2);

   
    document.getElementById("invoice").style.display = "block";
}