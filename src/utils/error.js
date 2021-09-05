class ThrowErrorCustom extends Error {
    constructor(options) {
        super();
        this.type = "ThrowErrorCustom";
        this.message = options.message || "Unknown Error";
        this.status = options.status || 404;
    }

    static getErrors(res, errors) {
        if (errors.type == 'ThrowErrorCustom') {
            console.log(`ERROR:`)
            console.log(`Message: ${errors.message}`)
            console.log(`Status: ${errors.status}`)
            return res.status(errors.status).send({ message: errors.message });
        } else {
            if(!errors.errors) {
                console.log(errors);
                return res.status(500).send({ message: 'Internal Server Error' });
            }
            console.log(`ERROR:`)
            console.log(`Message: ${errors.errors[0].message}`)
            console.log(`Status: 404`)
            return res.status(404).send({ message: errors.errors[0].message });
        }
    }
}

module.exports = { ThrowErrorCustom };