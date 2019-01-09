exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pilots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pilots").insert([
        {
          id: 301,
          username: "	acoysh8c	",
          password: "	ukvSPjLU	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 302,
          username: "	cvanyarkin8d	",
          password: "	Wp3wyGV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 303,
          username: "	jbamb8e	",
          password: "	FXTIzR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 304,
          username: "	xstickins8f	",
          password: "	UiCQqnSSAY3	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 305,
          username: "	bdiloway8g	",
          password: "	FR17sfK	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 306,
          username: "	llumsdall8h	",
          password: "	eVa3KVj3J	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 307,
          username: "	psweedy8i	",
          password: "	22ZjKEHL	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 308,
          username: "	bgalle8j	",
          password: "	CPBCxam	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 309,
          username: "	pmcowen8k	",
          password: "	m7AeCI7	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 310,
          username: "	nchevins8l	",
          password: "	R9YZ8VO	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 311,
          username: "	fbandy8m	",
          password: "	oSqxtlhv1hzF	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 312,
          username: "	chaddy8n	",
          password: "	n5eNi4AN4	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 313,
          username: "	sohara8o	",
          password: "	3Lf3H5Bq9V	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 314,
          username: "	smalinowski8p	",
          password: "	swbp13f	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 315,
          username: "	slanghorne8q	",
          password: "	HDXuck	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 316,
          username: "	dgrinishin8r	",
          password: "	NSzRcafs	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 317,
          username: "	nhaywood8s	",
          password: "	IMuhuSPit	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 318,
          username: "	lyegoshin8t	",
          password: "	F63P9aLEI	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 319,
          username: "	bmeletti8u	",
          password: "	ooIKtaUi2IL	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 320,
          username: "	stambling8v	",
          password: "	psTaowb3fH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 321,
          username: "	mlearned8w	",
          password: "	2uh8gcPjVp	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 322,
          username: "	kdictus8x	",
          password: "	PP8A2gdnwUN4	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 323,
          username: "	chackworthy8y	",
          password: "	JpYz04prVXEY	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 324,
          username: "	mdani8z	",
          password: "	K8IcCwhWbmo	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 325,
          username: "	hsymon90	",
          password: "	ZIM5R0X2qa9k	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 326,
          username: "	nboullen91	",
          password: "	19EPDG7TaYz6	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 327,
          username: "	corum92	",
          password: "	lrMtwn	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 328,
          username: "	tgerardet93	",
          password: "	hJX5VL	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 329,
          username: "	abrookbank94	",
          password: "	EZD8n4IHE	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 330,
          username: "	dfowlds95	",
          password: "	Qqq02h5k	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 331,
          username: "	ssoftley96	",
          password: "	QuaFocbPtr22	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 332,
          username: "	wprovost97	",
          password: "	i9zsffFNztPf	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 333,
          username: "	cbabidge98	",
          password: "	8j9cEzV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 334,
          username: "	atimmermann99	",
          password: "	vosIEdx	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 335,
          username: "	alitel9a	",
          password: "	exMmyHnwCfOJ	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 336,
          username: "	jmirrlees9b	",
          password: "	6mhuO6n	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 337,
          username: "	gfrisch9c	",
          password: "	lwddJMHK8	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 338,
          username: "	cmcgeorge9d	",
          password: "	dP6lJzTH7	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 339,
          username: "	vmettricke9e	",
          password: "	dGqOuZrX8	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 340,
          username: "	lnials9f	",
          password: "	iJjj5EIiaP	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 341,
          username: "	vwicklen9g	",
          password: "	hWP76IM7HMW	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 342,
          username: "	cben9h	",
          password: "	EzUPox	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 343,
          username: "	fprendergrast9i	",
          password: "	q0UKuLKA	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 344,
          username: "	cmcelwee9j	",
          password: "	bavE5YM84u	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 345,
          username: "	swhorall9k	",
          password: "	VKmyoHWLTUQH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 346,
          username: "	wgouldthorp9l	",
          password: "	CIp7jw866u	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 347,
          username: "	klegg9m	",
          password: "	TzZ9b7Alb	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 348,
          username: "	bsayward9n	",
          password: "	dE2VBw5	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 349,
          username: "	ucrosetti9o	",
          password: "	dBTC72MCbi	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 350,
          username: "	ltether9p	",
          password: "	FSD38Rz0MUx	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 351,
          username: "	apeperell9q	",
          password: "	Hj1OEgclUY	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 352,
          username: "	etoal9r	",
          password: "	jkv96nD	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 353,
          username: "	plockett9s	",
          password: "	SxB90a4x	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 354,
          username: "	dregan9t	",
          password: "	Rxmt2wt6Xp9s	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 355,
          username: "	woolahan9u	",
          password: "	sb7f4SU7	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 356,
          username: "	aiannetti9v	",
          password: "	edNDr2	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 357,
          username: "	ljenkinson9w	",
          password: "	3q0ZQhWYf	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 358,
          username: "	bphippen9x	",
          password: "	ZdSbahKDMp	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 359,
          username: "	tbayford9y	",
          password: "	Pg20AO	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 360,
          username: "	honeal9z	",
          password: "	W9IY8SFF8A0n	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 361,
          username: "	daddlestonea0	",
          password: "	wBjk5ueqyyFd	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 362,
          username: "	awickmanna1	",
          password: "	JrmQEiUr	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 363,
          username: "	skerranea2	",
          password: "	Yy0pFXKGju7U	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 364,
          username: "	mjusta3	",
          password: "	D5zrrZGwF	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 365,
          username: "	bwadwella4	",
          password: "	3yL4woto	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 366,
          username: "	gliepinaa5	",
          password: "	XwgbTa	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 367,
          username: "	laxlebya6	",
          password: "	MEbnIzqlq	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 368,
          username: "	rzupoa7	",
          password: "	k7dSyv	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 369,
          username: "	alobella8	",
          password: "	urVIhnAoFl6	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 370,
          username: "	oheatha9	",
          password: "	M39pLpKfiPpn	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 371,
          username: "	ekeyseraa	",
          password: "	VxkdwTPRC	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 372,
          username: "	hmaruskaab	",
          password: "	AuyX4gJTG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 373,
          username: "	ugrizardac	",
          password: "	k7mQprvH	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 374,
          username: "	pbaderad	",
          password: "	2ixROjmZpqH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 375,
          username: "	rbowskillae	",
          password: "	rhSfAw	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 376,
          username: "	bivensaf	",
          password: "	vSv0TGmZlO3	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 377,
          username: "	gthomersonag	",
          password: "	l88yOS	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 378,
          username: "	tvennyah	",
          password: "	c92VIcSBHwk	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 379,
          username: "	hturbanai	",
          password: "	zDcxn9CXF8Hq	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 380,
          username: "	lwegneraj	",
          password: "	Oua4Fn	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 381,
          username: "	gcolliholeak	",
          password: "	Az31npFfyZdC	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 382,
          username: "	fmatuszinskial	",
          password: "	qbw38WNRKLiW	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 383,
          username: "	gpredohlam	",
          password: "	ZcR18HRbft	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 384,
          username: "	tpookean	",
          password: "	TEIYa7bIXorH	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 385,
          username: "	rbramhillao	",
          password: "	6OraqdDXXrP	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 386,
          username: "	aoglethorpeap	",
          password: "	HyqpyX1	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 387,
          username: "	borteltaq	",
          password: "	A7UV54	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 388,
          username: "	gkellettar	",
          password: "	vluK4usnCyKp	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 389,
          username: "	zaizikovas	",
          password: "	qDRX1b1GxW4v	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 390,
          username: "	ndollingat	",
          password: "	1JaP3gfYZ3fv	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 391,
          username: "	earchdeckneau	",
          password: "	Ew6UjTpA35P	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 392,
          username: "	lsmizav	",
          password: "	uDwWim	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 393,
          username: "	jcasottiaw	",
          password: "	r66P98l	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 394,
          username: "	achasmerax	",
          password: "	iHrjZHJtNIeC	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 395,
          username: "	bsummerhayesay	",
          password: "	FZAo60DpiG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 396,
          username: "	brodenborchaz	",
          password: "	Wl1bd2	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 397,
          username: "	fcasajuanab0	",
          password: "	Fn59Hf86F	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 398,
          username: "	zsodab1	",
          password: "	ZF0y5q5oSlwR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 399,
          username: "	tbrickseyb2	",
          password: "	QfHn92OAI	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 400,
          username: "	dwaadenburgb3	",
          password: "	I7GU1B7	",
          isLoggedIn: false,
          isPaid: false
        }
      ]);
    });
};
