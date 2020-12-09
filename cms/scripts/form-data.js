let formData = {
    courseTitle: '',
    lessonTitle: '',
    lessonParts: {
        removeCatergory: () => {console.log('undefined')},
        addCatergory: () => {console.log('undefined')},
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

formData.lessonParts.addCatergory = (lp_id,  type) => {
    if (type === 'example') {
        for (let i = 0; i < formData.lessonParts.data.length; i++) {
            if (formData.lessonParts.data[i].lp_id === lp_id) {
                formData.lessonParts.data[i].examples.push('')
                break;
            } 
        }
    } else if (type === 'keypoint') {
        for (let i = 0; i < formData.lessonParts.data.length; i++) {
            if (formData.lessonParts.data[i].lp_id === lp_id) {
                formData.lessonParts.data[i].keyPoints.push('')
                break;
            } 
        }
    }
}

//remove item from examples or keypoints
formData.lessonParts.removeCatergory = (lp_id, index, type) => {
    if (type === 'example') {
        for (let i = 0; i < formData.lessonParts.data.length; i++) {
            if (formData.lessonParts.data[i].lp_id === lp_id) {
                formData.lessonParts.data[i].examples.splice(index, 1) 
                break;
            } 
        }
    } else if (type === 'keypoint') {
        for (let i = 0; i < formData.lessonParts.data.length; i++) {
            if (formData.lessonParts.data[i].lp_id === lp_id) {
                formData.lessonParts.data[i].keyPoints.splice(index, 1) 
                break;
            } 
        }
    }
}


//edit a catergory entry 
formData.lessonParts.updateCatergoryEntry = (lp_id, index, data, type) => {
    console.log(index)
    console.log(data)

    if (type === 'example') {
        for (let i = 0; i < formData.lessonParts.data.length; i++) {
            if (formData.lessonParts.data[i].lp_id === lp_id) {
                formData.lessonParts.data[i].examples[index] = data 
                break;
            } 
        }
    } else if (type === 'keypoint') {
        for (let i = 0; i < formData.lessonParts.data.length; i++) {
            if (formData.lessonParts.data[i].lp_id === lp_id) {
                formData.lessonParts.data[i].keyPoints[index] = data
                break;
            } 
        }
    }
}


formData.lessonParts.addLessonPart('1')

/*
lesson part schema
{
        title: '',
        description: '',
        examples: [],
        keyPoints: []
    }
*/