# bluebubbles-contacts-exporter
 
please clone the repo and run npm install then run npm run start

this will auto open your default browser to http://localhost:6066/contacts?url= 

the end of this url add http://SERVER_IP:SERVER_PORT/api/v1/contact?guid=SERVER_PASSWORD

the url should look like this http://localhost:6066/contacts?url=http://SERVER_IP:SERVER_PORT/api/v1/contact?guid=SERVER_PASSWORD

Once you see data on the page copy all of it to a document and save as contacts.vsf

on your mac navaigate to the directy /Users/YOURUSERNAME/Library/Application Support/bluebubbles-server/Contacts 

move contacts.vsf to this directory

restart the bluebubbles server and client

that's it!

