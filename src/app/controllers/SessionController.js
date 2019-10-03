const { User } = require('../models');

const Mail = require('../services/mail');

class SessionController {
  async store(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});

    if(!user) {
      return res.status(401).json({ message: 'User not found'});
    }

    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect Password'});
    }

    await Mail.send({
      from: 'Chrysthian Moizes',
      to: `${user.name}`,
      subject: 'Novo acesso em sua conta',
      text: 'Registramos um novo acesso em sua conta'
    });

    return res.json({
      user,
      token: await user.generateToken()
    });
  }
}

module.exports = new SessionController();