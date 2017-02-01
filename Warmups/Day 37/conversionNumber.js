function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(parts.join("."));
}

numberWithCommas("8924233.233");
numberWithCommas("8924233233");


