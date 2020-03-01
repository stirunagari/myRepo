module.exports = {

    //Add 
    addRecord : (model, request, response, next) => {
        model.create(request.body, (error, data) => {
            if(error){
                return next(error)
            }else {
                response.json(data)
            }
        })
    },

    //Get all
    getAll : (model, response , next) => {
        model.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              response.json(data)
            }
          })
    },

    //Get by id
    getById : (model, id, response, next) => {
        model.findById(id, (error, data) => {
            if (error) {
              return next(error)
            } else {
              response.json(data)
            }
          })
    },
    
    //Update
    update : (model, request, response, next) => {
        model.findOneAndUpdate({_id : request.params.id }, request.body, {new: true}, (error, data) => {
            if (error) {
                return next(error);
            } else {
                response.json(data)
            }
          })
    },
    
    //Delete
    delete : (model, request, response, next) => {
        model.deleteOne({ _id: request.params.id}, (error, data) => {
            if (error) {
              return next(error);
            } else {
              response.status(200).json({
                msg: data
              })
            }
        })
    }
}