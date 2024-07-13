# snapapi for Nightbot

!addcom !card -a=_cardclean $(eval '$(query)'.toLowerCase().replace(' ','').replace('-',''))

!addcom _cardclean $(eval data=$(urlfetch json http://snapapi.takingbytes.com/json/$(query).json); `Cost: ${data.cost} - Power: ${data.power} - Description: ${data.description}  ${data.source === "" ? "" : "- " + data.source}`)