$("#generate").click(function(){
    var lorem=$("#lorem");
    lorem.html("");  //will clean the div
    var quantity=$("#quantity")[0].valueAsNumber;  //
    var data= ["Lorem ipsum", "quia dolor sit", "amet", "consectetur", "mia", "Non", "eram nescius", "Brute", "cum", "quae summis ingeniis", "exquisitaque doctrina philosophi", "Graeco sermone tractavissent"];
    
    //looping to generate data
    for (var i=0; i<quantity; i++){
        lorem.append("<p>"+ data[i]+"</p>");
    }
});

$("#copy").click(function(){
    var range=document.createRange();
    range.selectNode($("#lorem")[0]);
    window.getSelection().removeAllRanges();  //clear added ranges
    window.getSelection().addRange(range);
    document.execCommand("copy");
    //window.getSelection().removeAllRanges();
});

