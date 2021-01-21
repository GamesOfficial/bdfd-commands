$noMention
$kickMention
$onlyIf[$mentioned[1]==$authorID;❎ | you can't kick yourself]
$color[$random[0;999999]]
$supressErrors[There was an error trying to kick the member]
$onlyPerm[kick;❎ | you don't have kick members permission]
$onlyBotPerms[kick;❎ | I am missing kick members permission]
$argsCheck[>1;❎ | please mention somebody to kick]
$title[Kick successful]
$description[
kick ID: $messageID

kicked: <@$mentioned[1]>

reason: $noMentionMessage]
$footer[kicked by $username]
