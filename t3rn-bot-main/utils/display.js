require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=       T3rn Auto Bridge                ='.cyan);
  console.log('=     Created by feature earning        ='.cyan);
  console.log('=    https://t.me/feature_earning       ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { displayHeader };
