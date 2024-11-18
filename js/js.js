function reservation(){
    let reservationParagraph = document.getElementById("reservation");

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let num = document.getElementById("num").value;
    let date = document.getElementById("date").value;
    let ppl = document.getElementById("ppl").value;
    let time = document.getElementById("time").value;
    let info = document.getElementById("info").value;

    reservationParagraph.innerHTML = "Greetings " + fname + " " + lname +
        ", thank you for your reservation. You have reserved a table for " + ppl + 
        " person(s) on " + date + " at " + time + ". Contact: " + num + ". Additional info: " + info;
}