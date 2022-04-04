var student_array=[];

function Submit(){

    var student_array_html=[];

    for (var i=1; i<= 4; i++ ){
        var name = document.getElementById("inputname_" + i).value;
        student_array.push(name);
    }
    console.log(student_array);

    var length= student_array.length;
    console.log(length);

    for (var i=0; i<length; i++){
        student_array_html.push("<h4> Name: "+ student_array[i]+"</h4>");
        console.log(student_array_html);
    
    }

    document.getElementById("display_name_with_commas").innerHTML= student_array_html;

    var remove_commas = student_array_html.join(" ");

    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;


    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";

}

function Sort(){
    name_of_the_student_array.sort() ;
    console. Log (name_of_the_student_array);
    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = name_of_the_student_array. length;
    console. log( lenght_of_name_of_students_array);
    for (var k = 0; k < lenght_of_name_of_students_array; k++)
    display_student_array_sorting. push("<h4>NAME - " + name_of_the_student_array [k] + "</h4>")
    console. log(display_student_array_sorting);

    var remove_commas = display_student_array_sorting. join(" ");
    console. log (remove_commas) ;
    document. getElementById("display_name_without_commas") . innerHTML = remove_commas;

}