exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pilots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pilots").insert([
        {
          id: 101,
          username: "	adabrowski2s	",
          password: "	fRGem2kKWYj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 102,
          username: "	eswanson2t	",
          password: "	F4K9fHs	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 103,
          username: "	vloudwell2u	",
          password: "	1hDAHNv1aj9	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 104,
          username: "	smorphet2v	",
          password: "	NlPaR3j	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 105,
          username: "	ibaccup2w	",
          password: "	8F5vHcu	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 106,
          username: "	ohuntington2x	",
          password: "	gjNHUmY	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 107,
          username: "	adigman2y	",
          password: "	RliVgea	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 108,
          username: "	hferry2z	",
          password: "	kYy5xiq8qL	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 109,
          username: "	cbuckenham30	",
          password: "	A2ycuLM	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 110,
          username: "	xraubheim31	",
          password: "	vGIFQu	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 111,
          username: "	akunisch32	",
          password: "	BDyLX0hF	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 112,
          username: "	rcaren33	",
          password: "	7wn87F	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 113,
          username: "	dshelton34	",
          password: "	iBuAxowX1jN	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 114,
          username: "	ebroadnicke35	",
          password: "	J4uHtXKR7JUV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 115,
          username: "	kagastina36	",
          password: "	d121BlkMe	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 116,
          username: "	lagius37	",
          password: "	rLBOCyP	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 117,
          username: "	khowie38	",
          password: "	BsURjukEU	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 118,
          username: "	cgabler39	",
          password: "	kt7FaQ6	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 119,
          username: "	pline3a	",
          password: "	u04oNVNA4M	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 120,
          username: "	eharfoot3b	",
          password: "	OUm1rKs	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 121,
          username: "	rpollak3c	",
          password: "	RyxeigCXKi	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 122,
          username: "	lprimarolo3d	",
          password: "	3CS2phLmI5L	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 123,
          username: "	jobispo3e	",
          password: "	mVoExQxPz	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 124,
          username: "	gwhisby3f	",
          password: "	y8a1wnK14	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 125,
          username: "	fstolworthy3g	",
          password: "	EpMJMGWAlObu	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 126,
          username: "	iclemes3h	",
          password: "	wufYzM	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 127,
          username: "	dbarthelme3i	",
          password: "	DDs8PEwUjD	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 128,
          username: "	bkrinks3j	",
          password: "	WK8GswUSNR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 129,
          username: "	kfourman3k	",
          password: "	5xPzwzH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 130,
          username: "	bhammerstone3l	",
          password: "	oCoAxpEONx	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 131,
          username: "	ndilleston3m	",
          password: "	x80imZ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 132,
          username: "	lblowes3n	",
          password: "	ikidSQ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 133,
          username: "	sdovidian3o	",
          password: "	yqsIdY6H	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 134,
          username: "	jcamillo3p	",
          password: "	aXfNbnu82Gs	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 135,
          username: "	wmcravey3q	",
          password: "	2E5TGGGhXR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 136,
          username: "	frains3r	",
          password: "	ha0V2I	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 137,
          username: "	glefwich3s	",
          password: "	mKjm4b9nOPm	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 138,
          username: "	mallden3t	",
          password: "	AynAfckSL	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 139,
          username: "	lmcinteer3u	",
          password: "	hOM3AYEA	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 140,
          username: "	ntaylot3v	",
          password: "	xz7AoRh	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 141,
          username: "	ucharity3w	",
          password: "	N2KrRGC0C0	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 142,
          username: "	mbenito3x	",
          password: "	zlqBuPBqxAA	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 143,
          username: "	gdanilin3y	",
          password: "	lFZRV4DKStQ	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 144,
          username: "	tlatta3z	",
          password: "	BTEVgXC	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 145,
          username: "	cpreble40	",
          password: "	XeINfz2	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 146,
          username: "	ncumberledge41	",
          password: "	OvMqLlk	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 147,
          username: "	mgloyens42	",
          password: "	beMVtn3NA	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 148,
          username: "	pvallerine43	",
          password: "	peOBHvLKzhw	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 149,
          username: "	jbenedito44	",
          password: "	KKn5AyEPl	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 150,
          username: "	tcoard45	",
          password: "	Up6L4BSev	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 151,
          username: "	gpach46	",
          password: "	OBDIHE3O	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 152,
          username: "	mpayton47	",
          password: "	fCBAqE6	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 153,
          username: "	gville48	",
          password: "	ER5N1WYC	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 154,
          username: "	thooban49	",
          password: "	6Jv4kQx0GhH	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 155,
          username: "	hshutt4a	",
          password: "	jPEGhTsuws	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 156,
          username: "	cchastney4b	",
          password: "	Sq1A6OJ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 157,
          username: "	tmeredyth4c	",
          password: "	xD0VhOzKjw5	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 158,
          username: "	rmcgettrick4d	",
          password: "	pJ7clY9gfFR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 159,
          username: "	kstilling4e	",
          password: "	0f2FJE0	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 160,
          username: "	taleevy4f	",
          password: "	90corTD6jfgi	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 161,
          username: "	smarden4g	",
          password: "	tRy6jl	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 162,
          username: "	pmalinson4h	",
          password: "	r6s0Q4bB	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 163,
          username: "	lblackshaw4i	",
          password: "	baVxYxukNB2l	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 164,
          username: "	kbutchart4j	",
          password: "	MZTTP7cQi	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 165,
          username: "	bcormode4k	",
          password: "	iG9IUGbI	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 166,
          username: "	tgaymer4l	",
          password: "	l6xLYlPI	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 167,
          username: "	mbase4m	",
          password: "	yxQzPZVQcoN1	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 168,
          username: "	ctrusdale4n	",
          password: "	zUpXQCC	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 169,
          username: "	lorum4o	",
          password: "	kX3uvyYuO	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 170,
          username: "	evedyaev4p	",
          password: "	Q140D8Gv0v	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 171,
          username: "	groscow4q	",
          password: "	brAMhp8v2DmU	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 172,
          username: "	sdaugherty4r	",
          password: "	MCBpHyB7	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 173,
          username: "	elidgard4s	",
          password: "	0029DNMoK	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 174,
          username: "	mfasler4t	",
          password: "	QQskNMnCfNz	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 175,
          username: "	bhawley4u	",
          password: "	qeiMmK	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 176,
          username: "	bgrombridge4v	",
          password: "	Yf5KbsF	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 177,
          username: "	clund4w	",
          password: "	cqXGBg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 178,
          username: "	odenkel4x	",
          password: "	3UH7vc	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 179,
          username: "	mgillet4y	",
          password: "	9FY0VZ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 180,
          username: "	emosson4z	",
          password: "	8johEF7s1kxU	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 181,
          username: "	bbellay50	",
          password: "	ApZkjZgxd	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 182,
          username: "	mivie51	",
          password: "	a9SlOs	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 183,
          username: "	lmccooke52	",
          password: "	T8LfRUmg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 184,
          username: "	aspary53	",
          password: "	Jhbj1C	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 185,
          username: "	kperacco54	",
          password: "	qsZbnEqB6NQX	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 186,
          username: "	vgreest55	",
          password: "	6gxSw7s2seSb	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 187,
          username: "	tallot56	",
          password: "	oCMFRn3Xo3NW	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 188,
          username: "	bmcgoogan57	",
          password: "	DmgSyq31	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 189,
          username: "	pkondratenya58	",
          password: "	2KkE1XMZAFUA	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 190,
          username: "	jcawsby59	",
          password: "	oUXkyDCmar	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 191,
          username: "	rphysic5a	",
          password: "	eXAcWVgqwMIe	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 192,
          username: "	dcroce5b	",
          password: "	LF05UeA9phF	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 193,
          username: "	lcahalin5c	",
          password: "	i4AL3m	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 194,
          username: "	tbythell5d	",
          password: "	4wuJAcFDSCQ9	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 195,
          username: "	jparkman5e	",
          password: "	r5OIQHrj	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 196,
          username: "	bnormant5f	",
          password: "	as3rfYg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 197,
          username: "	kpitcaithley5g	",
          password: "	JBywyD3aSe	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 198,
          username: "	tblaszczynski5h	",
          password: "	KsIYzF	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 199,
          username: "	kpitceathly5i	",
          password: "	9WVSrTGq	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 200,
          username: "	uhayhow5j	",
          password: "	Wj558GMO6	",
          isLoggedIn: false,
          isPaid: false
        }
      ]);
    });
};
