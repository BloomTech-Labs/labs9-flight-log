const adminsDb= require('../dbConfig');
const table= 'admins';
module.exports={
    get:()=>adminsDb(table),
    insert: (admins)=>adminsDb(table).insert(admins),
    update: (id, admins)=>{
        adminsDb(table).where("id",id).update(admins)
    },
    remove: id =>{
        adminsDb("table")
        .where("id",id)
        .del()
    }
}