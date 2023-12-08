const db = require("../../../DB/DB");

module.exports = function() {
    let operations = {
        GET,
        POST,
        PUT
    }

    function GET(req,res,next){
        const userData = db.readUsers();
        res.status(200).json(userData);
    }

    function POST(req,res,next){
        
    }

    function PUT(req,res,next){
        
    }
    
    GET.apiDoc = {
        summary: "Gets all user information",
        description: "Retrieve all user information that exist and return users array",
        operationId: "get-users",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: '#/components/schemas/users'
                            }
                        }
                    }
                }
            }
        }
    }

    POST.apiDoc = {
        summary: "Creates a user",
        description: "Create a user with appropiate resources",
        operationId: "post-users",
        responses: {
            201: {
                description: "Create",
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

    PUT.apiDoc = {
        summary: "updates a user",
        description: "updates a user with appropiate resources",
        operationId: "put-users",
        responses: {
            204: {
                description: "Updated",
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