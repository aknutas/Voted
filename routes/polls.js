var Poll = require('../model/poll');

/*
 * GET polls index
 */

exports.index = function (req, res) {
    Poll.find(function (err, polls) {
        if (!err && polls) {
            res.send(JSON.stringify(polls));
        }
        else {
            res.send("FAIL! " + err);
        }
    });
};

/*
 * POST a new poll
 */

exports.create = function (req, res) {
    new Poll({
        name : req.body.pname,
        description : req.body.pquestion,
        polloptions: [{ name: req.body.poption1, votes: 0 }, { name: req.body.poption2, votes: 0 }],
        created_at : Date.now()
    }).save( function( err, poll, count ){
            res.redirect( '/polls/' + poll._id);
        });
};

/*
 * GET a poll by id
 */

// :format can be json or html
exports.show = function (req, res) {
    Poll.findOne({ '_id': req.params.poll }, function (err, poll) {
        console.log(poll);
        if (!err && poll) {
            switch (req.params.format) {
                // When json, generate suitable data
                case 'json':
                    res.send(JSON.stringify(poll));
                    break;
                default:
                    res.render('show', { poll: poll });
            }
        }
        else {
            res.render('index', { error: 'Failed search!'});
        }
    });
};