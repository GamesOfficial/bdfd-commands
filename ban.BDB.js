$ban
$color[$random[0;999999]]
$argsCheck[>1;❎ | Please mention somebody to ban]
$onlyIf[$mentioned[<]==$authorID;❎ | you can't ban yourself]
$onlyPerms[ban;❎ | your missing ban members permission]
$onlyBotPerms[ban;❎ | I am missing ban members perm]
$title[Ban successfull]
$description[
ban ID: $messageID

banned: <@$mentioned[1]>

reason: $noMentionMessage]
$footer[banned by $username]
