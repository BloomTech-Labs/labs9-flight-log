exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pilots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pilots").insert([
        {
          id: 1,
          username: "	lconrath0	",
          password: "	1QnvQG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 2,
          username: "	jstopps1	",
          password: "	owG4cFQpQR0	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 3,
          username: "	dmaddra2	",
          password: "	G4NVyW	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 4,
          username: "	rjosham3	",
          password: "	PRR6BdDC8q1	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 5,
          username: "	dleetham4	",
          password: "	7nI6OUCih	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 6,
          username: "	lclerke5	",
          password: "	T4pHuHUF	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 7,
          username: "	tchildes6	",
          password: "	tvO5I1K7	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 8,
          username: "	apote7	",
          password: "	IMY32bH8ajc	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 9,
          username: "	aveck8	",
          password: "	4uuCiw	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 10,
          username: "	esample9	",
          password: "	t7v45omWoi	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 11,
          username: "	ddinsella	",
          password: "	7Kjihnb	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 12,
          username: "	lbillettb	",
          password: "	fun4MsPWZ60N	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 13,
          username: "	sjachtymc	",
          password: "	82Lgu2	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 14,
          username: "	lclellandd	",
          password: "	y1JpcpbzR1aj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 15,
          username: "	cbutnere	",
          password: "	9Mm190MNn5rP	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 16,
          username: "	vmulberyf	",
          password: "	Z2Jm5ih1PM	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 17,
          username: "	npignyg	",
          password: "	uUDb9tXFUj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 18,
          username: "	kphonixh	",
          password: "	VFzU91FAPGmQ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 19,
          username: "	jfrawleyi	",
          password: "	VzQyLi	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 20,
          username: "	hbercerosj	",
          password: "	lmonmWKBuE	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 21,
          username: "	sasgodbyk	",
          password: "	6KLOKHxwI0	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 22,
          username: "	zstobbel	",
          password: "	lPOMo79F	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 23,
          username: "	lfaltinm	",
          password: "	aOzyYdcBxF	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 24,
          username: "	augolinin	",
          password: "	gbEPrjV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 25,
          username: "	ahurlo	",
          password: "	y4TNrVde	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 26,
          username: "	cmarchamp	",
          password: "	4IBL0T	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 27,
          username: "	ydoumencq	",
          password: "	FbcLwDNvQQh	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 28,
          username: "	cmcgeachyr	",
          password: "	YFqlVuuLxJOb	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 29,
          username: "	kschwants	",
          password: "	suDPq7L	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 30,
          username: "	jmctrustyt	",
          password: "	DnoGVY4UoN	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 31,
          username: "	dbertinu	",
          password: "	qEnYwTYSml8	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 32,
          username: "	hhaywoodv	",
          password: "	wXtR3x	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 33,
          username: "	bgladdisw	",
          password: "	6XkPtxWqAWOm	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 34,
          username: "	aeddiesx	",
          password: "	TntT8nzDGG	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 35,
          username: "	edomicoy	",
          password: "	T0usxT	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 36,
          username: "	eglanzz	",
          password: "	cfr6SbDa	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 37,
          username: "	gfrancombe10	",
          password: "	jUqHUhV2ODcc	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 38,
          username: "	kedmonson11	",
          password: "	CiAPn1QFrd	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 39,
          username: "	cbanker12	",
          password: "	d0fm98Til	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 40,
          username: "	ieagleton13	",
          password: "	59HBnQ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 41,
          username: "	grobbel14	",
          password: "	jI4NXBU8	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 42,
          username: "	ooduilleain15	",
          password: "	EMaylaQCKe5e	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 43,
          username: "	ebondar16	",
          password: "	vDwbQlrVrh	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 44,
          username: "	gbletsor17	",
          password: "	djSPXxdZ9	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 45,
          username: "	atorricina18	",
          password: "	iJ3YjlpLBD8	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 46,
          username: "	divanisov19	",
          password: "	BUTiT2qL4HV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 47,
          username: "	deffemy1a	",
          password: "	WUwXQe9hg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 48,
          username: "	npheby1b	",
          password: "	t4ZZOCQwaKB	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 49,
          username: "	esmewin1c	",
          password: "	jDYD4EeVy	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 50,
          username: "	aglenwright1d	",
          password: "	pwaIg5O	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 51,
          username: "	fayers1e	",
          password: "	cA8spU	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 52,
          username: "	skeggins1f	",
          password: "	9HhUgiET2	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 53,
          username: "	dperigoe1g	",
          password: "	oPJsZLIWw	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 54,
          username: "	gczadla1h	",
          password: "	WcrOZS9grdt	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 55,
          username: "	agrice1i	",
          password: "	JzFwwnU3C	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 56,
          username: "	dbleackly1j	",
          password: "	gn0CfQuHlv6	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 57,
          username: "	ewands1k	",
          password: "	YVMoFZoB8nH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 58,
          username: "	obeavers1l	",
          password: "	0ODksy	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 59,
          username: "	hmcclements1m	",
          password: "	Og9pr3zz	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 60,
          username: "	gkempton1n	",
          password: "	ptlgDbR4N	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 61,
          username: "	dduester1o	",
          password: "	QIsPAW	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 62,
          username: "	lracine1p	",
          password: "	9JLPWi	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 63,
          username: "	cord1q	",
          password: "	7dByKe	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 64,
          username: "	adust1r	",
          password: "	7hZi9Ytu1Ov	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 65,
          username: "	sephgrave1s	",
          password: "	yluFDppL	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 66,
          username: "	lhodinton1t	",
          password: "	dpty7O7	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 67,
          username: "	swankling1u	",
          password: "	FFd0qRys	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 68,
          username: "	bpinkie1v	",
          password: "	4MmzSt	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 69,
          username: "	ldraisey1w	",
          password: "	QMrUckytEDfq	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 70,
          username: "	wmongain1x	",
          password: "	7g14XO4	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 71,
          username: "	atowey1y	",
          password: "	n8rgLrVMMEE5	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 72,
          username: "	bberceros1z	",
          password: "	UZkL3VJngZo	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 73,
          username: "	nmulford20	",
          password: "	9eW8vOJK4W	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 74,
          username: "	ccresar21	",
          password: "	KMTxqTjqUJ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 75,
          username: "	kcastaignet22	",
          password: "	hGAF2FMwtj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 76,
          username: "	wbeamand23	",
          password: "	B5D5oqKJEL9	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 77,
          username: "	mharmstone24	",
          password: "	UvlDv5ijlO	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 78,
          username: "	nlodford25	",
          password: "	q4uyyZYd	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 79,
          username: "	epolsin26	",
          password: "	7MY7bF	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 80,
          username: "	btabourel27	",
          password: "	owJQ0Mwz	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 81,
          username: "	cmoline28	",
          password: "	1QAy2M3ow03T	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 82,
          username: "	btuvey29	",
          password: "	6yR9d7NBEW	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 83,
          username: "	krobison2a	",
          password: "	cb1ZaPgP	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 84,
          username: "	chordle2b	",
          password: "	w0G2rCOkmk	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 85,
          username: "	zplanque2c	",
          password: "	H3goGj	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 86,
          username: "	fbengoechea2d	",
          password: "	Vz09sqNx	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 87,
          username: "	mwonfor2e	",
          password: "	JwwBJBL	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 88,
          username: "	gfrith2f	",
          password: "	fQFwZm	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 89,
          username: "	sgiacubo2g	",
          password: "	FrPAjC	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 90,
          username: "	pdrake2h	",
          password: "	J7nhZ7tsVc	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 91,
          username: "	rroseburgh2i	",
          password: "	iaWFdv3xzGH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 92,
          username: "	cmcquorkel2j	",
          password: "	JoFMb5Pnj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 93,
          username: "	tgresswell2k	",
          password: "	Yp40oMH71yE	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 94,
          username: "	mmcclelland2l	",
          password: "	BSAnfKuL	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 95,
          username: "	aravilious2m	",
          password: "	k9MxNq1P	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 96,
          username: "	coventon2n	",
          password: "	vH0E7G	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 97,
          username: "	mtuke2o	",
          password: "	zNlk8oNLkT	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 98,
          username: "	rcardozo2p	",
          password: "	lbCNUstv	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 99,
          username: "	dtobias2q	",
          password: "	UfPduesQglo	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 100,
          username: "	rgavaghan2r	",
          password: "	xWG1qOjy	",
          isLoggedIn: false,
          isPaid: false
        }
      ]);
    });
};
