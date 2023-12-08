const db = require("../../../DB/DB");

module.exports = function() {
    let operations = {
        POST,
        PATCH,
        DELETE,
    }

    function POST(req,res,next){

    }
    
    function PATCH(req,res,next){
        
    }

    function DELETE(req,res,next){
        db.deleteOffer(req.params.offerID);
        res.status(200);
        res.send("Deleted");
    }

    POST.apiDoc = {
        summary: "Creates a new offer",
        description: "Creates a new offer based on parameters",
        operationId: "post-offer",
        responses: {
            201: {
                description: "Created",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/offer"
                        }
                    }
                }
            }
        }
    }

    PATCH.apiDoc = {
        summary: "Updates an offer",
        description: "updates an offer based on parameters",
        operationId: "patch-offer",
        responses: {
            204: {
                description: "Updated",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/offer"
                        }
                    }
                }
            }
        }
    }

    DELETE.apiDoc = {
        summary: "Deletes an offer",
        description: "Deletes an offer based on parameters",
        operationId: "delete-offer",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json":{
                        "schema": {
                            $ref: "#/components/schemas/offer"
                        }
                    }
                }
            }
        }
    }

    return operations;
}