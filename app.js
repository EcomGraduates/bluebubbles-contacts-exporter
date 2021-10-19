
const express = require("express")
const app = express()
const request = require('request')
const open = require('open');
const port = 6066

const Output = []

app.get("/contacts", (req, res) => {
    url = req.query.url;
    if (url) {

        var options = {
            'method': 'GET',
            'url': url,
            'headers': {
            }
        }
        request(options, function (error, response) {

            if (error) throw new Error(error)

            //check if server responds with code 200 
            if (response.statusCode == 200) {
                //get json response body
                const data = JSON.parse(response.body)
                //set count
                count = 0
                //loop over data
                for (let i = 0; i < data.data.length; i++) {

                    var phone = data.data[i].phoneNumbers

                    contactName = data.data[i].firstName + ' ' + data.data[i].lastName

                    //add to count for each contact found
                    count++

                    //check if a phone number exists
                    if (phone) {

                        //loop through each contact with a phone number
                        phone.forEach((phone) => {

                            //if the phone number is primary set contactNumber variable
                            if (phone.isPrimary == true) {

                                contactNumber = phone.address;
                            }
                        });
                    }
                    // data to be pushed
                    dataPush = {
                        "identifier": count,
                        "displayName": contactName,
                        "phones": [
                            {
                                "label": "mobile",
                                "value": contactNumber
                            }
                        ],
                        "emails": []
                    }
                    // once completed push all data to array
                    Output.push(dataPush)
                }
                res.send(Output)
            } else {
                res.send('ERROR 404 - Server not found please check the url provided, make sure the guid/server password is set!')
            }
        });
    } else {
        res.send('You must provide the url for bluebubbles server')
    }

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    open('http://localhost:' + port + '/contacts?url=');
});