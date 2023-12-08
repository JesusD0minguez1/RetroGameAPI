const db = require("../../../DB/DB");


module.exports = function() {
    let operations = {
        POST,
        //PUT,
        //PATCH,
    }

    function POST(req,res,next){
        
    }
    
    POST.apiDoc = {
        summary: "Creates a new user",
        description: "Creates a new user based on parameters",
        operationId: "post-user",
        responses: {
            201: {
                description: "Created",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/user"
                        }
                    }
                }
            }
        }
    }





    return operations;
}

