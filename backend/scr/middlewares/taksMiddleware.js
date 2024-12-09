const validatedTitle = (request, response, next) => {
    const {body} = request;

    if (body.title === undefined){
        return response.status(400).json({ massage: 'O campo "title" é obrigatorio'})
    }
    if (body.title === ''){
        return response.status(400).json({ massage: 'O campo "title" é obrigatorio'})
    }

    next();
};

const validateFieldStatus = (request, response, next) => {
    const {body} = request;

    if (body.status === undefined){
        return response.status(400).json({ massage: 'O campo "status" é obrigatorio'})
    }
    if (body.status === ''){
        return response.status(400).json({ massage: 'O campo "status" é obrigatorio'})
    }

    next();
};


module.exports = {
    validatedTitle,
    validateFieldStatus,
}