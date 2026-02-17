exports.handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: "Function running OK",
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
};
