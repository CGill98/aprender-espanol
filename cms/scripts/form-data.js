let formData = {
    courseTitle: '',
    lessonTitle: '',
    lessonParts: {
        addLessonPart: () => {console.log('undefined')},
        addExample: () => {console.log('undefined')},
        removeExample: () => {console.log('undefined')},
        data: []
    }
}

formData.lessonParts.addLessonPart = (lp_id) => {
    formData.lessonParts.data.push({
        title: '',
        description: '',
        lp_id: lp_id,
        examples: [''],
        keyPoints: ['']
    })
}

formData.lessonParts.addExample = (lp_id, ex) => {
    for (let i = 0; i < formData.lessonParts.data.length; i++) {
        if (formData.lessonParts.data[i].lp_id === lp_id) {
            formData.lessonParts.data[i].examples.push(ex)
            break;
        } 
    }
}

formData.lessonParts.removeExample = (lp_id, index) => {
    for (let i = 0; i < formData.lessonParts.data.length; i++) {
        if (formData.lessonParts.data[i].lp_id === lp_id) {
            formData.lessonParts.data[i].examples.splice(index, 1) 
            break;
        } 
    }
}

formData.lessonParts.addLessonPart('lp-1')

/*
lesson part schema
{
        title: '',
        description: '',
        examples: [],
        keyPoints: []
    }
*/