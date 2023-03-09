export default {
  Customer: {
    dbConfig: {
      host: "Production",
      port: 5984,
      dbName: "customers"
    },
    credit: {
      initialLimit: 100,
      initialDays: 1
    }
  }
};