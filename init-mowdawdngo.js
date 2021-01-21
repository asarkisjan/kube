const user = cat('/etc/mongo-db-secret/MONGO_USERNAME');
const pwd = cat('/etc/mongo-db-secret/MONGO_PASSWORD');
const db = cat('/etc/mongo-db-secret/MONGO_DATABASE');

db.createUser(
    {
        user: user,
        pwd: pwd,
        roles:[
            {
                role: "readWrite",
                db:   db
            }
        ]
    }
);