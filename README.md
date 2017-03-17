# KeepNotes
An Todo Application to organise all your notes

Run Application from terminal with following commands
node app.js

--helpCommands:
 add     Add a new note
 remove  Remove a  note
 read    Read a particular a  note
 list    List all  note

Options:
 --help  Show help  

Add Note:
  node app.js add --title=fith  --body="third"

  Help:
      node app.js read --helpapp.js read

    Options:
    --help       Show help                                               [boolean]
    --title, -t  Title of the note                                      [required]


Remove Note:
  node app.js remove --title=secret

  Help:
      node app.js remove --helpapp.js remove

    Options:
    --help       Show help                                               [boolean]
    --title, -t  Title of the note                                      [required]

Read a particular Note:
  node app.js read --title=secret

  Help:
    node app.js read --helpapp.js read

      Options:
      --help       Show help                                               [boolean]
      --title, -t  Title of the note                                      [required]

List all Notes:
  node app.js list
