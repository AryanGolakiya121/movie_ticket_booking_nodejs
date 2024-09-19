class ApiResponse {
    constructor(res, statusCode, data, message = "Success message"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.status = statusCode < 400 

        // res.status(200).json({
        //     success: true,
        //     message,
        //     data,
        // });
    }
}