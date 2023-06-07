function checkCreds()
{
    var UserName = document.getElementById("UserName").value;
    var DLnumber = document.getElementById("DLnumber").value;
    var Zipcode = document.getElementById("Zipnum").value;

    var AppInfo = Username + DLnumber;
        alert (Appinfo.length);

    if (AppInfo.length <20)
    {
        document.getElementById("appUpdate").innerHTML = "Application Info is invalid";
    }
    else if (Zipcode ==5)
    {
        alert ("invalid code");
    document.getElementById("appUpdate").innerHTML = "Zipcode not approved";
    }
}