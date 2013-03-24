describe('emailValidator', function() {

  it('should be a function', function() {
    expect(emailValidator).to.be.a('function');
  });

  it('should return true when a valid email is run through it', function() {
    expect(validEmails.every(function(address) {
      return emailValidator(address);
    })).to.be(true);
  });

  it('should return false when an invalid email is run through it', function() {
    var flag = true;

    invalidEmails.forEach(function(address) {
      flag = flag && emailValidator(address);
    });

    expect(flag).to.be(false);
  });

  xit('should return true even when a really weird, invalid-looking email is run through it', function() {
    expect(hellMode.every(function(address) {
      return emailValidator(address);
    })).to.be(true);
  });

});


niceandsimple@example.com
very.common@example.com
a.little.lengthy.but.fine@dept.example.com
disposable.style.email.with+symbol@example.com
user@[IPv6:2001:db8:1ff::a0b:dbd0]
"much.more unusual"@example.com
"very.unusual.@.unusual.com"@example.com
"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com
postbox@com
admin@mailserver1
!#$%&'*+-/=?^_`{}|~@example.org
"()<>[]:,;@\\\"!#$%&'*+-/=?^_`{}| ~.a"@example.org
" "@example.org


Abc.example.com
A@b@c@example.com
a"b(c)d,e:f;g<h>i[j\k]l@example.com
just"not"right@example.com
this is"not\allowed@example.com
this\ still\"not\\allowed@example.com
