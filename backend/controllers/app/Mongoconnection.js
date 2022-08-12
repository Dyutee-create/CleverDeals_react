
var pool = [],poolStatus = [];
var CONNECTION_OPEN = 0, CONNECTION_BUSY = 1;
var minimumPoolSize = 25, maximumPoolSize = 100;
var MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/HomeAway';
var db;
var connected = false;


function Pool()
{
    for(var i=0; i < minimumPoolSize; ++i)
    {

        MongoClient.connect(mongoURL, function(err, _db){
            if (err) { throw new Error('Could not connect: '+err); }
            db = _db;
            connected = true;
            pool.push(db);
            poolStatus.push(CONNECTION_OPEN);
        });
    }
}

function addConnectionToPool(){
    MongoClient.connect(mongoURL, function(err, _db){
        if (err) { throw new Error('Could not connect: '+err); }
        db = _db;
        connected = true;
        pool.push(db);
        poolStatus.push(CONNECTION_OPEN);
    });
}

Pool.prototype.getConnection = function(){
    var poolExausted = true;
    var poolJSON;
    for(var j = 0 ; j < pool.length ; j++)
    {
        if(poolStatus[j] === CONNECTION_OPEN)
        {
            poolStatus[j] = CONNECTION_BUSY;
            poolExausted = false;
            poolJSON = [{poolObject: pool[j],poolObjectLocation: j}];
            return poolJSON;
        }
    }

    if(poolExausted && pool.length < maximumPoolSize)
    {
        addConnectionToPool();
        poolStatus[pool.length-1] = CONNECTION_BUSY;
        poolExausted = false;
        poolJSON = [{poolObject: pool[pool.length-1],poolObjectLocation: jCount}];
        return poolJSON;
    }
}


Pool.prototype.releaseConnection = function(connectionObjectLocation)
{
    if(poolStatus[connectionObjectLocation] === CONNECTION_BUSY)
    {
        poolStatus[connectionObjectLocation] = CONNECTION_OPEN;
    }
};

var p = new Pool();

function collection(name){
    if (!connected) {
        throw new Error('Must connect to Mongo before calling "collection"');
    }
    return db.collection(name);

}

exports.insertOne = function(collectionName,insertJSON, callback){
    var connectionFromPool = p.getConnection();
    var db = connectionFromPool[0].poolObject;
    var connectionLocation = connectionFromPool[0].poolObjectLocation;

    var collectionObject = db.collection(collectionName);
    collectionObject.insertOne(insertJSON,callback);
    p.releaseConnection(connectionLocation);
};


exports.findOne = function(collectionName,queryJSON,callback){
    var connectionFromPool = p.getConnection();
    console.log(connectionFromPool);
    var db = connectionFromPool[0].poolObject;
    var connectionLocation = connectionFromPool[0].poolObjectLocation;
    console.log(db);
    var collectionObject = db.collection(collectionName);
    collectionObject.findOne(queryJSON,callback);
    p.releaseConnection(connectionLocation);
};


exports.updateOne = function(collectionName, queryJSON, updateJSON, callback){
    var connectionFromPool = p.getConnection();
    var db = connectionFromPool[0].poolObject;
    var connectionLocation = connectionFromPool[0].poolObjectLocation;

    var collectionObject = db.collection(collectionName);
    collectionObject.updateOne(queryJSON, updateJSON, callback);
    p.releaseConnection(connectionLocation);
};

exports.find = function(collectionName,queryJSON,callback){
    var connectionFromPool = p.getConnection();
    var db = connectionFromPool[0].poolObject;
    var connectionLocation = connectionFromPool[0].poolObjectLocation;
    var collectionObject = db.collection(collectionName);
    collectionObject.find(queryJSON).toArray(callback);
    p.releaseConnection(connectionLocation);
};

