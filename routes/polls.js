var Poll = require('../model/polls');

/*
 * GET polls listing.
 */

exports.index = function (req, res) {
    res.send("respond with a resource");
};

/*
 * POST a new poll
 */

exports.create = function (req, res) {
    reg_form.handle(req, {
        success: function (form) {
            res.render('page', {
                locals: {
                    title: 'Success!'
                }
            });
        },
        other: function (form) {
            res.render('page', {
                locals: {
                    title: 'Failed!',
                    form: form.toHTML()
                }
            });
        }
    });
};

// :format can be json or html
exports.show = function (req, res) {
    console.log("HERE0");
    Poll.find(function (err, polls) {
        if (!err && polls) {
            console.log("HERE1");
            switch (req.params.format) {
                // When json, generate suitable data
                case 'json':
                    console.log("HERE2");
                    res.send(JSON.stringify(polls));
                    break;

                // Else render a database template (this isn't ready yet)
                default:
                    console.log("HERE3");
                    res.render('index.jade');
            }
        }
        else {
            res.send("FAIL! " + err);
        }
    });
};