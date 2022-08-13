function count(){
    var text = document.getElementById('input-area').value;
    var counted_number = 0;
    var l = text.length;

    for(var i=0;i<=l;i++){
        var current_char = text[i];

        if(current_char == ' '){
            counted_number += 1;
        }
    }

    counted_number += 1;


    document.getElementById('show').innerHTML = counted_number;
}