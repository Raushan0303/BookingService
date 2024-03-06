## if i want to add column i can do it by either models and then do db.sequelize.sync({alter:true})
- or just add new migration for addcolumn to add column in existing database tables
- we use migration because we can see the incremental change in our db,