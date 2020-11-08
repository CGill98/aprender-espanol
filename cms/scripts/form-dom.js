let examples = $('#examples-div');

const ex_inputs = examples.children('div').children('input')

let ex_input_id_counter = 1;

function addInput(event) {
    const examples = event.data.div
    if (event.key === 'Enter') {
        let div = $(`<div id='ex-input-${ex_input_id_counter}'>
                        <input id='${ex_input_id_counter++}' type="text"/>
                    </div>`)
        div.on('keydown', addInput)
        examples.append(div)
    }
    else if (event.key === 'Backspace' && event.target.value === "") {
        examples.children(`#ex-input-${event.target.id}`).remove()
    }
}

ex_inputs.on('keydown', {div: examples} , addInput)

window.onload = () => console.log("loaded")





 

