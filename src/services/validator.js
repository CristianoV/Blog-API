function validator(schema, body) {
    const { error } = schema.validate(body);
  
    if (error) {
      const [teste, data] = error.details[0].message.split('|');
      const code = Number(teste);
      return { code, data };
    }
  }
  
  module.exports = { validator };