describe('In helper', function () {
  const stringHandler = require('../lib/helper/stringHandler');
  const SlackBot = require('../lib/helper/slackBot');
  const { atob } = require('../lib/helper/common');

  it('First letter should be capitalized', () => {
    const first = stringHandler.capitalizeFirstLetter('letter').charCodeAt(0);
    let check = false;

    if (first < 91 && first > 64) check = true;

    expect(check).toBe(true);
  });

  it('Any functions should not be `undefined` in slackBot', () => {
    // base64 encoded token
    let token = process.env.BOT_API_KEY;
    if (token.length > 42) token = atob(token);

    const slackBot = new SlackBot({ token, name: process.env.BOT_NAME });

    expect(slackBot.awardPointsCallback).toBeDefined();
    expect(slackBot.deductPointsCallback).toBeDefined();
    expect(slackBot.getAllHousePointsCallback).toBeDefined();
    expect(slackBot.announcePlainString).toBeDefined();
    expect(slackBot.getUserList).toBeDefined();
    expect(slackBot.getName).toBeDefined();
  });
});