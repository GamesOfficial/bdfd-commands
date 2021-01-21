$noMention
$argsCheck[>1;❎ | please mention somebody to dm]
$argsCheck[>1;❎ | please specify your message]
$onlyIf[$isUserDMEnabled[$mentioned[<]==true;❎ | that user does not have their dms open]
$dm[$mentioned[<]]
$noMentionMessage
