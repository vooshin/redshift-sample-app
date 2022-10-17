const Redshift = require("node-redshift");

const client = {
  user: "roopansh-voosh",
  database: "dev",
  password: "voosh@123",
  port: "5439",
  host: "redshift-cluster-1.chnm114j7oyh.ap-south-1.redshift.amazonaws.com:5439/dev",
};

// The values passed in to the options object will be the difference between a connection pool and raw connection
const redshiftClient = new Redshift(client, {rawConnection: true});

redshiftClient.connect(function (err) {
  if (err) {
    console.log("err:", err);
  }
  else {
    console.log('sup');
    redshiftClient.query(
      'select * from `kitchen_mapping` where true', {raw: true},
      function (err, data) {
        if (err) throw err;
        else {
          console.log("data:", data);
          // redshiftClient.close();
        }
      }
    );
    console.log('connection done');
  }
});
