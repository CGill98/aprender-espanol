let lp_id = 1; //a counter for lesson parts
//catergory is either: examples or keypoints
const changedCatergoryDivs = (catergory) => {
    const cat_inputs = catergory.children('div').children('input')

    let cat_input_id_counter = 1;
    const lp_id = catergory.parent().attr('id')
    function addInput(event) {
        //const examples = event.data.div
        if (event.key === 'Enter') {
            let div = $(`<div id='ex-input-${cat_input_id_counter}'>
                            <input id='${cat_input_id_counter++}' type="text"/>
                        </div>`)
            div.on('keydown', addInput)
            catergory.append(div)

            
            formData.lessonParts.addExample(lp_id, '')

        }
        else if (event.key === 'Backspace' && event.target.value === "") {
            catergory.children(`#ex-input-${event.target.id}`).remove()
            formData.lessonParts.removeExample(lp_id, parseInt(event.target.id))
        } else {
          //add text to form data
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


$('#form-btn').on('click', () => { 
    const form_textarea = $('#form-textarea').val()

    const examples = $('#examples-div').children('div').children('input')
    const examples_string = getValsFromInputs(examples);
    const key_points = $('#key-points-div').children('div').children('input')
    const key_points_string = getValsFromInputs(key_points);

    const sql_string = form_textarea + examples_string + key_points_string;
    $('#output-text-div').text(sql_string)
})


$('#new-lp-btn').on('click', () => {
    ++lp_id;
    $('#new-lp-btn').before(`      
      <div id='lp-${lp_id}'>
      <div>
        <label>Lesson Part ${lp_id} Title </label>
        <input type="button" value="Delete" id="delete-${lp_id}"/>
        <div>
          <input type="text"></input>
        </div>
      </div>
      
      <div>
        <label>Description</label>
        <div>
          <textarea id="form-textarea"></textarea>
        </div>
      </div>
      <div id="examples-div-${lp_id}">
        <label>Examples</label>
        <div>
          <input type="text"/>
        </div>
      </div>
      <div id="key-points-div-${lp_id}">
        <label>Key Points</label>
        <div>
          <input type="text"/>
        </div>
      </div>
    </div>`)

  changedCatergoryDivs($(`#examples-div-${lp_id}`));
  changedCatergoryDivs($(`#key-points-div-${lp_id}`));
  formData.lessonParts.addLessonPart(lp_id)

  const str = `#lp-${lp_id}`
  $(`#delete-${lp_id}`).on('click', () => {
    $(str).remove()
    lp_id--;
  })
})





 

