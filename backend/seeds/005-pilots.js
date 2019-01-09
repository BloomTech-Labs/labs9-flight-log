exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pilots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pilots").insert([
        {
          id: 401,
          username: "	tstivensb4	",
          password: "	TCHgyp	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 402,
          username: "	rsukbhansb5	",
          password: "	HuH5NwJKlr	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 403,
          username: "	govellb6	",
          password: "	VgEexohO3	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 404,
          username: "	nsebrensb7	",
          password: "	8lJI5taVam9R	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 405,
          username: "	cwillmettb8	",
          password: "	ha5PmcG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 406,
          username: "	gfordyceb9	",
          password: "	RprzWG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 407,
          username: "	tvasileba	",
          password: "	rKhUNui1FF9V	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 408,
          username: "	mjallinbb	",
          password: "	FeBRuFUMr5	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 409,
          username: "	sbirchallbc	",
          password: "	qAIXp53YO	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 410,
          username: "	sschoenleiterbd	",
          password: "	Df7PaOGYChwb	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 411,
          username: "	gvuittetbe	",
          password: "	EGI1aM	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 412,
          username: "	nloganbf	",
          password: "	fRiilz	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 413,
          username: "	eridettbg	",
          password: "	wBeVYt47WBFD	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 414,
          username: "	nphilippoubh	",
          password: "	Sdj7qL8gc18	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 415,
          username: "	arawlisonbi	",
          password: "	28gqFilOY	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 416,
          username: "	fbuchettbj	",
          password: "	xABzYl9WHRS8	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 417,
          username: "	sizzettbk	",
          password: "	JWf5DY62nUg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 418,
          username: "	mhearndenbl	",
          password: "	Zqa4kbgB	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 419,
          username: "	gwornumbm	",
          password: "	vPo9lk1kIi6p	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 420,
          username: "	mbrockwaybn	",
          password: "	lDARccB	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 421,
          username: "	rbedrosianbo	",
          password: "	eVdFRa00	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 422,
          username: "	anardonibp	",
          password: "	ZKv5ovu9cn	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 423,
          username: "	lbotlerbq	",
          password: "	adWTt6	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 424,
          username: "	bspitarobr	",
          password: "	qXhYiVRc	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 425,
          username: "	mcroncheybs	",
          password: "	EjlRwg582bMk	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 426,
          username: "	oeselbt	",
          password: "	OC35s6ifm	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 427,
          username: "	cgreenhambu	",
          password: "	h8FRtyOmvUz	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 428,
          username: "	qgoulstonbv	",
          password: "	WnxvwbL	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 429,
          username: "	ebillingslybw	",
          password: "	1TwAmCGg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 430,
          username: "	rgirardbx	",
          password: "	Y5Qa7aY	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 431,
          username: "	asummersonby	",
          password: "	oFB7RyBgyUcF	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 432,
          username: "	idulanybz	",
          password: "	q6TAJyCoYgkm	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 433,
          username: "	mstruysc0	",
          password: "	cJl9A5	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 434,
          username: "	gbrammallc1	",
          password: "	aWuIQErY5	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 435,
          username: "	ebuggyc2	",
          password: "	nFJkK0	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 436,
          username: "	gmaffeoc3	",
          password: "	bMyFDZZWp74f	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 437,
          username: "	jmitchleyc4	",
          password: "	5CdqJheti8	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 438,
          username: "	mtetfordc5	",
          password: "	eW9gyit7	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 439,
          username: "	molenchikovc6	",
          password: "	oZOvzDU7a	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 440,
          username: "	jkubasiewiczc7	",
          password: "	hS66uw9kq1	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 441,
          username: "	kfreezerc8	",
          password: "	FJVMd6Pt	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 442,
          username: "	srosinc9	",
          password: "	1qCqJzUgIvL	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 443,
          username: "	sgeindreca	",
          password: "	TGgf5bQ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 444,
          username: "	sbeckinghamcb	",
          password: "	5VlKMQ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 445,
          username: "	itaggcc	",
          password: "	ppCQ3TPNmsl	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 446,
          username: "	rglassardcd	",
          password: "	6Fp3cwuYnEe	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 447,
          username: "	cgrinterce	",
          password: "	O98Hi0f2NzR	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 448,
          username: "	adelaeglisecf	",
          password: "	yEHElkT9RkKb	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 449,
          username: "	ycoulthardcg	",
          password: "	Li7G2NyIf	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 450,
          username: "	gmartignonch	",
          password: "	t9gEWiot5thG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 451,
          username: "	ddymottci	",
          password: "	iaZGl1	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 452,
          username: "	mchippingcj	",
          password: "	MJyswC	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 453,
          username: "	ltullisck	",
          password: "	PK22CNrqQ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 454,
          username: "	saleksandrevcl	",
          password: "	3Ktz6FnOz7O	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 455,
          username: "	ebrinkworthcm	",
          password: "	fqZgkzpIwfZd	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 456,
          username: "	knitticn	",
          password: "	oshTnAq	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 457,
          username: "	hbrouneco	",
          password: "	LI3ab53rGvB	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 458,
          username: "	rscotsbrookcp	",
          password: "	Qhg7Wsylu	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 459,
          username: "	covertoncq	",
          password: "	AArCXZp9yQ1N	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 460,
          username: "	mladsoncr	",
          password: "	ecRkaKnla4	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 461,
          username: "	ahorbartcs	",
          password: "	pxNtgoP	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 462,
          username: "	agerltsct	",
          password: "	xQkTOZi	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 463,
          username: "	mdufaurcu	",
          password: "	MQsu7X	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 464,
          username: "	mmilvertoncv	",
          password: "	KFLptekf0IzS	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 465,
          username: "	nbunchercw	",
          password: "	5Q78Cd	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 466,
          username: "	cbolancx	",
          password: "	tLGEBbP3Y	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 467,
          username: "	rringercy	",
          password: "	BZQgWt	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 468,
          username: "	hgebhardcz	",
          password: "	uQJZ1fKF0gQt	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 469,
          username: "	ndurhamd0	",
          password: "	78eG9lwgbsb	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 470,
          username: "	jdadged1	",
          password: "	zFHxjkg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 471,
          username: "	rsimonardd2	",
          password: "	6NLo1DEhbrv	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 472,
          username: "	mfarnand3	",
          password: "	qsxZ6WJlI	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 473,
          username: "	fjoplind4	",
          password: "	SCYGRWTe	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 474,
          username: "	kspinaged5	",
          password: "	0NYmM49bAf9L	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 475,
          username: "	tsclandersd6	",
          password: "	dpZGVHbRXuz	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 476,
          username: "	dnootd7	",
          password: "	vxoBRTC61	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 477,
          username: "	ppinkstoned8	",
          password: "	yxGDimQ	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 478,
          username: "	cbranchettd9	",
          password: "	1Ym1ZcqPlyTW	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 479,
          username: "	bbottleda	",
          password: "	SOH0T2XCyLtk	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 480,
          username: "	kphilottdb	",
          password: "	LpCSPXJU1XZ9	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 481,
          username: "	wsearlesdc	",
          password: "	j2cla4	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 482,
          username: "	mtedridgedd	",
          password: "	sDkPxB	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 483,
          username: "	sbrenardde	",
          password: "	2wqM5hM4cIC2	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 484,
          username: "	cbarnesdf	",
          password: "	a1xou3	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 485,
          username: "	nmehargdg	",
          password: "	ouFj7wZ4090	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 486,
          username: "	mhubbackdh	",
          password: "	MtVDAaAzF	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 487,
          username: "	rlebberndi	",
          password: "	6bRV74	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 488,
          username: "	wtolemandj	",
          password: "	yjkrau	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 489,
          username: "	ggiannidk	",
          password: "	K2zkcRHyWx4	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 490,
          username: "	csruttondl	",
          password: "	vpG4sW	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 491,
          username: "	skeerldm	",
          password: "	BT5eY48jNBrj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 492,
          username: "	egoodhaydn	",
          password: "	8FFKI6sOEh0y	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 493,
          username: "	jlindgrendo	",
          password: "	IY624B	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 494,
          username: "	ciorizzidp	",
          password: "	k3SKBz7	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 495,
          username: "	akilkennydq	",
          password: "	jvyRCyVrWdCe	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 496,
          username: "	mhalcrodr	",
          password: "	iudxNOKsfvR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 497,
          username: "	rozanneds	",
          password: "	Xt45G6LEa	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 498,
          username: "	rhaycoxdt	",
          password: "	bIdxnW2I2Gc7	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 499,
          username: "	rdelmontidu	",
          password: "	BA6jeJOm17	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 500,
          username: "	toclearydv	",
          password: "	dVv1Hr9	",
          isLoggedIn: false,
          isPaid: true
        }
      ]);
    });
};
