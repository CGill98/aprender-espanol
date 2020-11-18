//catergory is either: examples or keypoints
const changedCatergoryDivs = (catergory) => {
    const cat_inputs = catergory.children('div').children('input')

    let cat_input_id_counter = 1;

    function addInput(event) {
        //const examples = event.data.div
        if (event.key === 'Enter') {
            let div = $(`<div id='ex-input-${cat_input_id_counter}'>
                            <input id='${cat_input_id_counter++}' type="text"/>
                        </div>`)
            div.on('keydown', addInput)
            catergory.append(div)
        }
        else if (event.key === 'Backspace' && event.target.value === "") {
            catergory.children(`#ex-input-${event.target.id}`).remove()
        }
    }

    cat_inputs.on('keydown', addInput)
}

changedCatergoryDivs($('#examples-div'));
changedCatergoryDivs($('#key-points-div'));

const getValsFromInputs = (examples) => { 
    let ex_strings = []
    for (let i = 0; i < examples.length; i++) {
        console.log($(examples[i]).val())
        ex_strings.push($(examples[i]).val())
    }
    return ex_strings; 
}


$('#form-btn').on('click', ()=>{ 
    const form_textarea = $('#form-textarea').val()

    const examples = $('#examples-div').children('div').children('input')
    const examples_string = getValsFromInputs(examples);
    const key_points = $('#key-points-div').children('div').children('input')
    const key_points_string = getValsFromInputs(key_points);

    const sql_string = form_textarea + examples_string + key_points_string;
    $('#output-text-div').text(sql_string)
})


window.onload = () => console.log("loaded")





 

