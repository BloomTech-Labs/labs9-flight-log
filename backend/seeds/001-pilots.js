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
        }
      ]);
    });
};
