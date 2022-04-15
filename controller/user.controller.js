import db from "../db.js"

const users = db.data.users

export function index(req, res) {
    res.render('users/userView',{
        userList: db.data.users
    })
}
export function search(req,res){
    let user = db.data.users.filter((p) => (p.name.toLowerCase()).indexOf(req.query.q.toLowerCase())>-1 )
    res.render('users/userView',{
        userList: user
    })
}

export function create(req,res){
    res.render('users/userCreate',{
        userList: users
    })
}

export function postCreate(req,res){
    db.data.users.push({id:"USER"+Date.now(),name:req.body.name})
    db.write()
    res.redirect('/users/userCreate')
}

export function viewUser(req,res){
    let id = req.params.id
    const user = db.data.users.find((user) =>{
        return user.id === id
    })
    res.render('users/viewUser',{
        user: user
    })
}