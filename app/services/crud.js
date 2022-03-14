// a crud services that do all the crud operation and it will be used as the base for all the services

// create operation
const create = (Model, data) => {
    const newObject = new Model({...data})

    return newObject
            .save()
            .then(res => res)
            .catch(error => {
                console.log('error in create op ', error)
                return null
            })
}

// find One operation
const findOne = (Model, query) => {

    return Model.findOne(query)
            .then(res => res)
            .catch(error => {
                // console.log('error in find One op ', error)
                return null
            })
}

// find all operation
const findAll = (Model) => {
    return Model.find()
            .then(res => res)
            .catch(error => {
                console.log('error in find All op ', error)
                return null
            })
}

// update operation
const update = (Model, query, data) => {
    return Model.update(query, data)
        .then(res => res)
        .catch(error => {
            console.log('error in update op ', error)
            return null
        })
}

// remove operation
const remove = (Model, query) => {
    return Model.remove(query)
            .then(res => res)
            .catch(error => {
                console.log('error in remove op ', error)
                return null
            })
}


module.exports = {
    create,
    findOne,
    findAll,
    update,
    remove
}
