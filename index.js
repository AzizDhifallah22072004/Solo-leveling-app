function push_ups()
{
    nbpush = document.getElementById("push-ups").value;
    if(nbpush < 100)
    {
        nbpush ++;
    }
    document.getElementById("push-ups").value = nbpush;
    if (nbpush == 100)
    {
        alert("100 PUSH-UPS done !!");
    }
}

function sit_ups()
{
    nbsit = document.getElementById("sit-ups").value;
    if(nbsit < 100)
    {
        nbsit ++;
    }
    document.getElementById("sit-ups").value = nbsit;
    if (nbsit == 100)
    {
        alert("100 SIT-UPS done !!");
    }
}

function squats()
{
    nbsquat = document.getElementById("squats").value;
    if(nbsquat < 100)
    {
        nbsquat ++;
    }
    document.getElementById("squats").value = nbsquat;
    if (nbsquat == 100)
    {
        alert("100 SQUATS done !!");
    }
}

function finish_workout()
{
    if( document.getElementById("push-ups").value == 100 && 
    document.getElementById("sit-ups").value == 100 && 
    document.getElementById("squats").value == 100)
    {
        alert("Congratulations!! You finished the daily workout");
    }
    else{
        alert("You need to complete all exercises before finishing!");
    }
}
