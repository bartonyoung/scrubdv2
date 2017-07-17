const db = require('../lib/knex-driver');

const mockUsers = [
  {"user_name":"Annaliese","password":"vUTtrDiLNOj","user_email":"ajent0@eepurl.com"},
  {"user_name":"Any","password":"aoXYUDhR","user_email":"amonni1@umich.edu"},
  {"user_name":"Annecorinne","password":"UmiB3qI09G0","user_email":"acastellan2@blogtalkradio.com"},
  {"user_name":"Miller","password":"JCqQ5MpT","user_email":"mantoniewski3@google.ru"},
  {"user_name":"Kalvin","password":"SkWPZJXkZq","user_email":"kantecki4@bravesites.com"},
  {"user_name":"Jocelyne","password":"bJ74fHw6mx","user_email":"jdooland5@pen.io"},
  {"user_name":"Tobe","password":"uzuER8n","user_email":"tbafford6@shutterfly.com"},
  {"user_name":"Ariana","password":"IrQdJEOeteqg","user_email":"apantling7@nps.gov"},
  {"user_name":"Andi","password":"nluZiRhPnAl","user_email":"aborrell8@canalblog.com"},
  {"user_name":"Leonidas","password":"Af8oNmobKG","user_email":"limorts9@npr.org"},
  {"user_name":"Trudi","password":"58P11EQ","user_email":"tackrilla@paginegialle.it"},
  {"user_name":"Patty","password":"OVdpCFYHC8VO","user_email":"pjossumb@hhs.gov"},
  {"user_name":"Bert","password":"Ik8Ih1m5ffas","user_email":"bgouckc@exblog.jp"},
  {"user_name":"Hamlen","password":"rQvDtYxN","user_email":"hprestaged@amazon.co.uk"},
  {"user_name":"Lesli","password":"9PcuSm74yH","user_email":"ldethloffe@cornell.edu"},
  {"user_name":"Kristoffer","password":"jtaHOSa","user_email":"ktuerenaf@hubpages.com"},
  {"user_name":"Lark","password":"l007G2o","user_email":"lseabridgeg@sphinn.com"},
  {"user_name":"Ethelyn","password":"pHNLRIrFEHh","user_email":"ehurringh@nih.gov"},
  {"user_name":"Darcie","password":"LxerGi","user_email":"dmaharryi@spiegel.de"},
  {"user_name":"Saba","password":"QZ8lXa","user_email":"sbeilbyj@hibu.com"},
  {"user_name":"Antone","password":"wHFkEkvoB","user_email":"acottisk@discuz.net"},
  {"user_name":"Freemon","password":"UYVSXqchDypu","user_email":"fdackel@geocities.jp"},
  {"user_name":"Jolyn","password":"Wmb9bB6R4c","user_email":"jellerbeckm@devhub.com"},
  {"user_name":"Corbie","password":"F62H1Dyc17pQ","user_email":"czavatteron@bizjournals.com"},
  {"user_name":"Lazar","password":"TuIE8UHvBClF","user_email":"lmendozao@economist.com"},
  {"user_name":"Deny","password":"vf59KjUBnz","user_email":"dmattiap@shinystat.com"},
  {"user_name":"Regen","password":"Fmgql1S","user_email":"rcoultarq@ow.ly"},
  {"user_name":"Rollins","password":"jI03gD","user_email":"rshivlinr@ihg.com"},
  {"user_name":"Colin","password":"dBq7R4jGr","user_email":"cgiovannaccis@sbwire.com"},
  {"user_name":"Jennine","password":"wVYtib4giuq","user_email":"jsmyliet@taobao.com"},
  {"user_name":"Chariot","password":"ECTw9yiTW","user_email":"cwhittucku@amazon.com"},
  {"user_name":"Boyd","password":"Jitia2CD","user_email":"baringtonv@tamu.edu"},
  {"user_name":"Kittie","password":"twlROrmR26","user_email":"kpettsw@pagesperso-orange.fr"},
  {"user_name":"Wolfgang","password":"8hNtgV","user_email":"wshaperox@prnewswire.com"},
  {"user_name":"Rozella","password":"ZSzhy7DMo","user_email":"rgowthropy@hud.gov"},
  {"user_name":"Maddy","password":"GJhrlU","user_email":"mgearyz@weibo.com"},
  {"user_name":"Mill","password":"q1RF2aR","user_email":"mkerkham10@opera.com"},
  {"user_name":"Cullie","password":"rTLbVSey","user_email":"ccorby11@sphinn.com"},
  {"user_name":"Corilla","password":"Ji6WjYb9","user_email":"ccrowdace12@dedecms.com"},
  {"user_name":"Brent","password":"7W7p5C","user_email":"bsemaine13@cdbaby.com"},
  {"user_name":"Carole","password":"wP69bgKI2m","user_email":"cfoord14@google.ca"},
  {"user_name":"Rachel","password":"gcSvgdu2D5","user_email":"rlethabridge15@about.com"},
  {"user_name":"Idette","password":"JwiqOsQ2ybt","user_email":"iscarffe16@prlog.org"},
  {"user_name":"Fritz","password":"JA32GTR","user_email":"ffossett17@wix.com"},
  {"user_name":"Jennifer","password":"6SEcxSMogxI","user_email":"jcongreve18@adobe.com"},
  {"user_name":"Salli","password":"wEz3gcWpc","user_email":"sclougher19@ucoz.com"},
  {"user_name":"Gary","password":"T4SQEX","user_email":"gpoultney1a@rakuten.co.jp"},
  {"user_name":"Mirilla","password":"gXuwmZxkN","user_email":"msheehan1b@wufoo.com"},
  {"user_name":"Silvester","password":"K2CDIgUgx","user_email":"smcdougall1c@netlog.com"},
  {"user_name":"Kellen","password":"lzCgME","user_email":"kcausby1d@about.me"},
  {"user_name":"Franzen","password":"Dnlpk17j","user_email":"fbenyon1e@skyrock.com"},
  {"user_name":"Jabez","password":"ZQojqqBrCK","user_email":"jcoopland1f@bloglines.com"},
  {"user_name":"Rhiamon","password":"DrN8tu","user_email":"ratley1g@tuttocitta.it"},
  {"user_name":"Rouvin","password":"LM7wwnq7","user_email":"rauten1h@illinois.edu"},
  {"user_name":"Kelwin","password":"0fj6OcsQcqA","user_email":"kgurton1i@de.vu"},
  {"user_name":"Killian","password":"b3TLLXz6","user_email":"kblint1j@abc.net.au"},
  {"user_name":"Udell","password":"oUH4NhiL4fS","user_email":"uhatter1k@issuu.com"},
  {"user_name":"Aguistin","password":"2idtLaMYj6","user_email":"awinterflood1l@microsoft.com"},
  {"user_name":"Vinny","password":"1IYtkcG9","user_email":"vhardacre1m@nih.gov"},
  {"user_name":"Philippe","password":"TCdQixeFG","user_email":"pmacelharge1n@gnu.org"},
  {"user_name":"Ginnie","password":"zsXlmF3y","user_email":"gharvatt1o@samsung.com"},
  {"user_name":"Armstrong","password":"a4h4Y9fA","user_email":"arivilis1p@answers.com"},
  {"user_name":"Cicily","password":"4f1sir","user_email":"cjauncey1q@about.com"},
  {"user_name":"Veriee","password":"cSsNJoGSa4","user_email":"vberkley1r@cam.ac.uk"},
  {"user_name":"Liza","password":"QxK2ktpOq","user_email":"lstaton1s@multiply.com"},
  {"user_name":"Libbie","password":"Y7QAJFW","user_email":"lwilcocke1t@blogtalkradio.com"},
  {"user_name":"Fidela","password":"10Kt8l6B6OI","user_email":"fjordison1u@mediafire.com"},
  {"user_name":"Alyse","password":"TD7g6JVA","user_email":"afitton1v@tamu.edu"},
  {"user_name":"Kimberlyn","password":"Cyjdjs93th3","user_email":"krotte1w@parallels.com"},
  {"user_name":"Darb","password":"JeGvSDUv","user_email":"ddyshart1x@princeton.edu"},
  {"user_name":"Hailey","password":"w2LzhhP","user_email":"hdenmead1y@virginia.edu"},
  {"user_name":"Willis","password":"2y7WgD","user_email":"wkaminski1z@deliciousdays.com"},
  {"user_name":"Janene","password":"YFkGH7e5Y","user_email":"jfishbie20@imdb.com"},
  {"user_name":"Torin","password":"eSsaLDl","user_email":"tdepero21@narod.ru"},
  {"user_name":"Raff","password":"4aRup2DRQWbw","user_email":"rkynder22@alibaba.com"},
  {"user_name":"Minda","password":"z3Xx32m6mJO","user_email":"msmallpeice23@com.com"},
  {"user_name":"Randell","password":"Zj01aNseH","user_email":"rferrea24@timesonline.co.uk"},
  {"user_name":"Beau","password":"jRfLp39V","user_email":"bstygall25@cnbc.com"},
  {"user_name":"Damaris","password":"ERieZ9sdhu","user_email":"dcrutchley26@loc.gov"},
  {"user_name":"Barris","password":"TFkhyyHG5","user_email":"blambard27@google.ru"},
  {"user_name":"Chickie","password":"GmUhBf","user_email":"cvercruysse28@netlog.com"},
  {"user_name":"Abagail","password":"5ezp7kmdl6v7","user_email":"abelshaw29@i2i.jp"},
  {"user_name":"Camile","password":"SU3hoM2","user_email":"csulter2a@discuz.net"},
  {"user_name":"Debra","password":"p9p0MFQbd1","user_email":"dtawton2b@cloudflare.com"},
  {"user_name":"Garner","password":"MyL3c0V","user_email":"gstidworthy2c@washington.edu"},
  {"user_name":"Vince","password":"l4NU6Jas","user_email":"vkenningley2d@google.co.uk"},
  {"user_name":"Caryl","password":"zP8hdQY","user_email":"ccagan2e@unicef.org"},
  {"user_name":"Antonina","password":"hcwKeXQ1Htu","user_email":"alecornu2f@washingtonpost.com"},
  {"user_name":"Wit","password":"X6LQISTq","user_email":"wcattanach2g@archive.org"},
  {"user_name":"Daune","password":"eGVaBoZLv","user_email":"dpaler2h@storify.com"},
  {"user_name":"Sergio","password":"hhIihAj530","user_email":"sniccolls2i@mac.com"},
  {"user_name":"Clint","password":"aXBHvL64H9V","user_email":"cromanin2j@indiegogo.com"},
  {"user_name":"Ashley","password":"qs2WlTGB9Ft","user_email":"aomannion2k@usatoday.com"},
  {"user_name":"Krista","password":"b5g1YNGO","user_email":"kgoundsy2l@mail.ru"},
  {"user_name":"Samuele","password":"EUaG7U","user_email":"slavrick2m@163.com"},
  {"user_name":"Maryanne","password":"X0fcjoUuZKc","user_email":"mjirsa2n@miibeian.gov.cn"},
  {"user_name":"Edithe","password":"skztop5om","user_email":"emollen2o@hhs.gov"},
  {"user_name":"Mitchel","password":"x1s1Uq","user_email":"mbeevors2p@nationalgeographic.com"},
  {"user_name":"Saree","password":"tiTM4ZHbn","user_email":"siddenden2q@edublogs.org"},
  {"user_name":"Joeann","password":"Og9nF6z","user_email":"jjorger2r@omniture.com"}
];

db.batchInsert('users', mockUsers)
  .returning( ['user_id', 'user_name', 'user_email'] )
  .then( users => {
    console.log('Insert sucess!')
    console.log(users)
  })
  