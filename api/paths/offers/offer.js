const db = require("../../../DB/DB");

module.exports = function() {
    let operations = {
        GET,
        POST,
        PATCH,
        DELETE,
    }

    function GET(req,res,next){
        const offerData = db.readOffers();
        res.status(200).json(offerData);
    }

    function POST(req,res,next){
        let offerID = req("offerID");

        console.log("request body:", req.body)

    }
    
    function PATCH(req,res,next){
        
    }

    function DELETE(req,res,next){
        
    }

    GET.apiDoc = {
        summary: "Gets all offer information",
        description: "Retrieve all offer information that exist and return offers array",
        operationId: "get-offers",
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: '#/components/schemas/offers'
                            }
                        }
                    }
                }
            }
        }
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