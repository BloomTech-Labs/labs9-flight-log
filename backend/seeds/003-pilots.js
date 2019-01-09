exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pilots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pilots").insert([
        {
          id: 201,
          username: "	phesse5k	",
          password: "	goBJvJH500m	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 202,
          username: "	ciorns5l	",
          password: "	R6qb7G	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 203,
          username: "	mtuddall5m	",
          password: "	kcBoQw	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 204,
          username: "	cpaffot5n	",
          password: "	pv9tLg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 205,
          username: "	cmeco5o	",
          password: "	piRgK2PYv2	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 206,
          username: "	cpraundlin5p	",
          password: "	uusSKr	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 207,
          username: "	rethersey5q	",
          password: "	fDWWm8qxWcSf	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 208,
          username: "	lgobourn5r	",
          password: "	kJrZPBg9	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 209,
          username: "	accomini5s	",
          password: "	dqbC6hR	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 210,
          username: "	skurth5t	",
          password: "	f6MarZBTtRv	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 211,
          username: "	oweben5u	",
          password: "	VH7aks1LWxc	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 212,
          username: "	kelgee5v	",
          password: "	bS5lvBkJka6	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 213,
          username: "	wbound5w	",
          password: "	23Z0Az1UwW	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 214,
          username: "	brye5x	",
          password: "	6ek9oWwZu	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 215,
          username: "	msearston5y	",
          password: "	O2ZZYV	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 216,
          username: "	cmackereth5z	",
          password: "	LlvNdG5AegR	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 217,
          username: "	karch60	",
          password: "	KZO8S3ie	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 218,
          username: "	nbrake61	",
          password: "	LTve7dT	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 219,
          username: "	welnor62	",
          password: "	IM8Pmd	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 220,
          username: "	colenchenko63	",
          password: "	D5gQOv	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 221,
          username: "	dfley64	",
          password: "	JKHJfXrU	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 222,
          username: "	lcrossfield65	",
          password: "	zgQwJte	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 223,
          username: "	apetracci66	",
          password: "	sqe9v1h	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 224,
          username: "	jrayment67	",
          password: "	0O1Uzf7xZ9J	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 225,
          username: "	bcheevers68	",
          password: "	Bf6EIG82Y	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 226,
          username: "	pbenyon69	",
          password: "	VcsQ2JQRg	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 227,
          username: "	rbramhall6a	",
          password: "	xahpz9JutFRo	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 228,
          username: "	valyonov6b	",
          password: "	I1QPW9aR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 229,
          username: "	fhalladay6c	",
          password: "	2IoOyfYvhA	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 230,
          username: "	acruft6d	",
          password: "	7MD7v72iiI	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 231,
          username: "	dgarlic6e	",
          password: "	EWZF51Hq8SKG	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 232,
          username: "	eoertzen6f	",
          password: "	5mzPEgaD8syl	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 233,
          username: "	cgotts6g	",
          password: "	FSIwkwj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 234,
          username: "	wtschirschky6h	",
          password: "	1V9neLXiXls9	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 235,
          username: "	vlempenny6i	",
          password: "	PCuGNzTZk3	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 236,
          username: "	gbengal6j	",
          password: "	SBafEYEmD	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 237,
          username: "	bboyington6k	",
          password: "	cFKlUEWAdRZ9	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 238,
          username: "	dbewsy6l	",
          password: "	fJDw9SR	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 239,
          username: "	dstilly6m	",
          password: "	7BuSrWK6T	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 240,
          username: "	cstaig6n	",
          password: "	LWazGVG7uo3d	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 241,
          username: "	dtynnan6o	",
          password: "	2WCc2vg8X6R2	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 242,
          username: "	hdumbleton6p	",
          password: "	2lTCtAN	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 243,
          username: "	cvanderkruys6q	",
          password: "	sD3z5Laj	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 244,
          username: "	rabramovicz6r	",
          password: "	Eky38sGHml	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 245,
          username: "	mglencros6s	",
          password: "	ZGucTn5el	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 246,
          username: "	eduquesnay6t	",
          password: "	6ydSU0iIJ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 247,
          username: "	gcolloby6u	",
          password: "	zm6Rgqb	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 248,
          username: "	mgeal6v	",
          password: "	n8dApyh	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 249,
          username: "	bmallinson6w	",
          password: "	iQ2P8L2SMCPA	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 250,
          username: "	asyncke6x	",
          password: "	E59MJNacr	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 251,
          username: "	akundt6y	",
          password: "	6hxT5cjgLT0	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 252,
          username: "	fhibbart6z	",
          password: "	bTYH4Ymm2jyy	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 253,
          username: "	ilooby70	",
          password: "	JA0nP8A	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 254,
          username: "	tdougill71	",
          password: "	bR9tXGPLh0	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 255,
          username: "	gfuggle72	",
          password: "	79x6ggY0	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 256,
          username: "	hwardrop73	",
          password: "	jJgc5VezZ	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 257,
          username: "	ebootland74	",
          password: "	Grk2GBRSmb	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 258,
          username: "	ttune75	",
          password: "	srLTAnHLZ9QP	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 259,
          username: "	msnelson76	",
          password: "	50FnPuoph	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 260,
          username: "	maven77	",
          password: "	QfRAMWTwXjT4	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 261,
          username: "	rquiney78	",
          password: "	HP0DpNeoV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 262,
          username: "	cmacias79	",
          password: "	9f5cLO6xvt	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 263,
          username: "	botter7a	",
          password: "	W0K2ny	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 264,
          username: "	brabb7b	",
          password: "	wT9kUNKv	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 265,
          username: "	bhynard7c	",
          password: "	kOHp69BMeKr	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 266,
          username: "	dveld7d	",
          password: "	VF3U3ycq	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 267,
          username: "	bteodorski7e	",
          password: "	BSip12EJoi	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 268,
          username: "	mbhatia7f	",
          password: "	fA7DDmM7T1	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 269,
          username: "	bvallantine7g	",
          password: "	VaSMTr6atpL	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 270,
          username: "	mepiscopio7h	",
          password: "	JnJtEV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 271,
          username: "	nbrown7i	",
          password: "	wNFG7K3JA	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 272,
          username: "	aebbings7j	",
          password: "	xNsFqvl0kPdZ	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 273,
          username: "	ctreby7k	",
          password: "	ugz6BHfSdHH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 274,
          username: "	wcousans7l	",
          password: "	yXJTAtIpV	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 275,
          username: "	jwyburn7m	",
          password: "	fpoSIvY	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 276,
          username: "	iswainston7n	",
          password: "	BrfQBKCPV	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 277,
          username: "	rcopnar7o	",
          password: "	UGGkcME1H	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 278,
          username: "	jparken7p	",
          password: "	Rcu29NwHa	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 279,
          username: "	klebbon7q	",
          password: "	xIQgjFCGm	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 280,
          username: "	hallflatt7r	",
          password: "	ttplkZB	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 281,
          username: "	gdrillingcourt7s	",
          password: "	5vaD9mt	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 282,
          username: "	dbertie7t	",
          password: "	TL1DD3iCHeA	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 283,
          username: "	ahinz7u	",
          password: "	EVqjSAkvD	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 284,
          username: "	pforsaith7v	",
          password: "	oEQYAj	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 285,
          username: "	jsturges7w	",
          password: "	l6AgTdkDcUl	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 286,
          username: "	jaldwich7x	",
          password: "	iQNEIcUaB	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 287,
          username: "	rgrangier7y	",
          password: "	jMCmCBi	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 288,
          username: "	bdocket7z	",
          password: "	8U1ALt84H	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 289,
          username: "	wcushelly80	",
          password: "	zjNud8B1ey	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 290,
          username: "	vgalfour81	",
          password: "	i9nGtSu6E	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 291,
          username: "	mdionisetti82	",
          password: "	anGcU3LJK	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 292,
          username: "	lkenvin83	",
          password: "	WsN6XuyzF2	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 293,
          username: "	omashro84	",
          password: "	3xLvUM3	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 294,
          username: "	gtucsell85	",
          password: "	VakWKWN9	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 295,
          username: "	zdiment86	",
          password: "	udD3JvUH	",
          isLoggedIn: false,
          isPaid: false
        },
        {
          id: 296,
          username: "	mfreeland87	",
          password: "	h98f8bBWI3wg	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 297,
          username: "	mmcdonnell88	",
          password: "	ZTNcrmZt	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 298,
          username: "	ftinsey89	",
          password: "	NRiPLKNK27J	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 299,
          username: "	tpoley8a	",
          password: "	xKaEx891sI	",
          isLoggedIn: false,
          isPaid: true
        },
        {
          id: 300,
          username: "	nplomer8b	",
          password: "	fnEmVqyl0yuq	",
          isLoggedIn: false,
          isPaid: false
        }
      ]);
    });
};
