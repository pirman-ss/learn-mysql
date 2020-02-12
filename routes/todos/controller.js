const { connection } = require("../../config");

module.exports = {
    getAll: (req, res) => {
        try {
            connection.query(
                `SELECT * from todos`,
                (error, results, fields) => {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${erroe.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: "Show all data todos",
                            data: results
                        });
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    },

    addData: (req, res) => {
        try {
            connection.query("INSERT INTO todos SET ?", req.body, function(
                error,
                results,
                fields
            ) {
                if (error) {
                    res.status(500).send({
                        message: `there is something problem: ${error.sqlMessage}`,
                    });
                } else {
                    res.status(200).send({
                        message: "Add new todo is succesfully",
                        data: results
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    },

    updateOne: (req, res) => {
        try {
            const { id } = req.params;

            connection.query(
                "UPDATE todos SET ? WHERE id=?",
                [req.body.id],
                function(error, results, fields) {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: `Update todo with id ${id} is successfully`,
                            data: results
                        });
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
};