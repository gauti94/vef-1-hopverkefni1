Vefforritun Hópur 39:

Jón Gauti Samúelsson - jgs23@hi.is - gauti94
Steinþór Bjarni Gíslasson - sbg67@hi.is - sbg67
Emil Þeyr Arndal Kristinsson - eta3@hi.is - emiltveir

Hvernig skal keyra verkefni:

Eftir að verkefni er sótt og npm install hefur verið keyrt er hægt að keyra npm run start.
Þá fer af stað browser sync og síðan ræsist.

npm run lint er til staðar en féllum á tíma áður en við náðum að útfæra það fyrir allt verkefnið.

Uppsetning verkefnis:

Síðurnar eru geymdar í rót möppunnar og hver síða er með sína .css skrá til þess að halda utan um útlit. Við pældum aðeins í hvernig við gætum unnið áhættulaust í verkefninu án þess að vera að skemma fyrir hvor öðrum og fannst það mest safe leið til þess að gera það.

Við náðum að færa css-ið fyrir forsíðuna í scss og þær skrár eru geymdar í indexStyles og síðan importaðar yfir í styles.scss. Síðan var notuð npm run sass skipun til þess að þýða það yfir í styles.css.

Myndir fyrir síðurnar eru geymdar í img og myndir möppunum og .gitignore mappa til staðar til þess að koma í veg fyrir að við séum að senda node_modules möppuna með inná github.

.stylelintrc.json skráin í rótinni segir til um hvernig stylelint hagar sér.

scripts.js er takmarkað notuð en þar er function fyrir hamburger valmyndina og nokkur einföld functions sem breyta texta eftir skjástærð.