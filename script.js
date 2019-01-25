$("#replyYes").click(function() {
    //Add a reply from Homer. Look for the div with #homers-reply.
  $("#homers-reply").text("Wait really? You would give me a donut? Do you even care about my health! How disgusting!");
  $("body").css("background-color","pink");
  $("img").css("background-color","blue");
  $("img").css("width","500px");
  $("#homers-reply").css("color","black");
  $("#homers-reply").css("background-color","white");
  $("h1").text("I want to die");
    $("h1").css("background-color","crimson");
  $("h1").css("color","grey");
});

    //Use this click handler to add changes to the CSS
$("#replyNo").click(function() {
    $("#homers-reply").text("Oh, why thank you. I am glad that you care so much about my well being. But I highly doubt you actually care. I am going to assume the real reason as to why you said no, was because you are an extremely rude person who dislikes sharing.");
    $("body").css("background-color","red");
    $("img").css("background-color","yellow");
    $("img").css("width","300px");
    $("#homers-reply").css("color","white");
    $("#homers-reply").css("background-color","black");
    $("h1").text("I want to live");
    $("h1").css("background-color","green");
    $("h1").css("color","purple");
});
