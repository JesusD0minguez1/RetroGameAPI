const db = require("../../../DB/DB");

module.exports = function() {
    let operations = {
        POST,
        PUT,
        DELETE,
    }

    function POST(req,res,next){
        
    }
    
    function PUT(req,res,next){
        
    }

    function DELETE(req,res,next){
        db.deleteGame(req.params.gameID);
        res.status(200);
        res.send("Deleted")
    }


    POST.apiDoc = {
        summary: "Creates a new game",
        description: "Creates a new game based on parameters",
        operationId: "post-game",
        responses: {
            201: {
                description: "Create",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/game"
                        }
                    }
                }
            }
        }
    }

    PUT.apiDoc = {
        summary: "Updates a game",
        description: "Updates a game based on parameters",
        operationId: "put-game",
        responses: {
            204: {
                description: "Updated",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/game"
                        }
                    }
                }
            }
        }
    }

    DELETE.apiDoc = {
        summary: "Deletes a game",
        description: "Deletes a game based on parameters",
        operationId: "delete-game",
        responses: {
            202: {
                description: "Accepted",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/game"
                        }
                    }
                }
            }
        }
    }

    return operations;
}