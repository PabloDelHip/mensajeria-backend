
module.exports = {
  recoverPassword: (link) => `<p>This is a messaging email to
    recover password enter the following <a href="${link}" target="_blank">${link}</a> to to recover it.</p>`,
};
