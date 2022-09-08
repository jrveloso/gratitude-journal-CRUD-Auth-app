const Entries = require('../models/Entries')

module.exports = {
    getEntries: async (req,res)=>{
        try{
            const entryItems = await Entries.find({userId:req.user.id})
            res.render('entries.ejs', {entries: entryItems})
        }catch(err){
            console.log(err)
        }
    },
    viewEntry: async (req,res)=>{
        try{
            const id = req.params.id
            const entryItems = await Entries.find({userId:req.user.id})
            res.render('edit.ejs', {entries: entryItems, idEntry: id})
        }catch(err){
            console.log(err)
        }
    },
    createEntry: async (req, res)=>{
        try{
            await Entries.create({
                first: req.body.first, 
                second: req.body.second, 
                third: req.body.third, 
                userId: req.user.id,
                date: new Date()
            })
            console.log('Entry has been added!')
            res.redirect('/entries')
        }catch(err){
            console.log(err)
        }
    },
    editEntry: async (req, res)=>{
        try{
            const entryId = await req.body.entryIdFromJSFile
            await Entries.findOneAndUpdate({_id: entryId},{
                    first: req.body.first, 
                    second: req.body.second, 
                    third: req.body.third
                },
            {
                upsert: false
             })
            console.log('Updated Entry')
            res.json('Updated It')
            res.redirect('/entries')
        }catch(err){
            console.log(err)
        }
    },
    deleteEntry: async (req, res)=>{
        console.log(req.body.entryIdFromJSFile)
        try{
            await Entries.findOneAndDelete({
                _id:req.body.entryIdFromJSFile
            })
            console.log('Deleted Entry')
            res.json('Deleted It')
            res.redirect('/entries')
        }catch(err){
            console.log(err)
        }
    }
}    