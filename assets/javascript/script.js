$(document).ready(function() {
    // body...



    function toastTipsGenerator() {
        var cleverTips = ["Money is the root of all evil. Cleanse yourself here!", "If you fear change, leave it in the tip jar", "Tipping makes you incredibly sexually attractive", "Feeling Tipsy?", "Tips, they are like hugs without the awkward body contact", "Drop it like it's hot!", "Tipping... Not just for cows...", "Tipping is not a city in China!", "Sexy people tip!", "Boats can tip, So can you!", "Every time you tip, Chuck Norris roundhouse kicks a Justin Bieber fan!!"];

        var index = cleverTips[Math.floor(Math.random() * cleverTips.length)];
        M.toast({ html: index });
    }
    toastTipsGenerator();

    $('.modal').modal();
    $("#submitBtn").on("click", function(e) {
        e.preventDefault();
        // set up variables
        const totalBill = parseFloat($("#total-bill").val());
        const totalTipInput = parseFloat($("#total-tip").val() * 0.01);
        const totalGuestInput = parseFloat($("#total-guest").val());
        console.log(totalTipInput);
        // setting up calculations
        const totalBillOfSale = totalBill * totalTipInput;
        const totalBillPlusTip = totalBillOfSale + totalBill;
        const totalGuestOutput = totalBillPlusTip / totalGuestInput;

        if (isNaN(totalBill) || totalBill === "" || isNaN(totalTipInput) || totalTipInput === "") {
            $("#total-amount-div").html("<h5>" + "Error, Enter Numbers!!" + "</h5>");

        }
        else {

            $("#total-amount-div").html("<h5>" + "Total bill is: $" + parseFloat(totalBillPlusTip).toFixed(2) + "</h5>" + "<hr>");
            $("#total-tip-amount").html("<h5>" + "Total tip is: $" + parseFloat(totalBillOfSale).toFixed(2) + "</h5>" + "<hr>");
        }

        // if statement for guest here
        if (totalTipInput === 0.0) {
            $("#total-guest-comment-div").text("Seriously! then why even use this!");
        }
        else if (totalTipInput <= 0.1) {

            $("#total-guest-comment-div").text("WOW, don't be so cheap!");

        }

        else if (totalTipInput > 0.1 && totalTipInput <= 0.15) {
            $("#total-guest-comment-div").text("Come on, you can do better!");
        }
        else if (totalTipInput >= 0.16 && totalTipInput <= 0.20) {
            $("#total-guest-comment-div").text("");
        }
        else if (totalTipInput > 0.20) {
            $("#total-guest-comment-div").text("Generous tip!");
        }

        if (isNaN(totalTipInput) || totalTipInput === "") {
            $("#total-guest-comment-div").text("");

        }

        //if customer decides to add a guest to the bill

        if (totalGuestInput >= 1) {
            $("#total-guest-div").html("<h5>" + "Each of you owe: $" + parseFloat(totalGuestOutput).toFixed(2) + "</h5>");
        }
        else if (isNaN(totalGuestInput) || totalGuestInput === "") {
            $("#total-guest-div").text("");
        }
    });

    let clearFields = () => {
        $("#amount-headline").html("Amount Due");
        $("#total-amount-div").text("");
        $("#total-tip-amount").text("");
        $("#total-guest-div").text("");
    };

    $("#clearBtn").on("click", function() {
        clearFields();

    });

});